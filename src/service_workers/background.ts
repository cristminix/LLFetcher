// import { LogServer } from "../libs/utils";
import Store from "../libs/store";
const logServer = {
    logContent:(data)=>{
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs ) {
            try{
                const tab = tabs[0];
                chrome.tabs.sendMessage(tab.id as number, {event: 'LogServer',data}, (r) => {});
            }catch(e){}
        });
    },
    logWeb:(data)=>{
        // if(typeof data !== 'object'){
        //     data = {data};
        // }
        logServer.logContent(data);
        // chrome.runtime.sendMessage({cmd: "logServer",data});
    }
};

 
Store.prepareAppStorage();

let ENV = 'dev';

if(ENV === 'prod'){
    chrome.action.disable();
}

logServer.logWeb('LogServer initialize');


function _isValidCoursePage  (url : string) : boolean {
    const urlPathArray = url.split('?')[0].split("/").filter(item => item);
    let validCoursePage = false;
    if(urlPathArray.length >= 4){
        if(urlPathArray[2] === 'learning'){
            validCoursePage = true;
        }
    }
    return validCoursePage;
}
function _sendCoookieMessage() : void {
    chrome.cookies.getAll({domain: "linkedin.com"}, function(_cookie) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs ) {
            try{
                const tab = tabs[0];
                chrome.tabs.sendMessage(tab.id as number, {event: 'sendCoookie',cookie: _cookie}, (r) => {});
            }catch(e){}
        });
    });
};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) =>{
	if(changeInfo.status == "complete"){
		if(_isValidCoursePage(tab.url as string)){
            if(ENV === 'production'){
                chrome.action.enable(tabId);
            }
            chrome.tabs.sendMessage(tab.id as number, {event: 'onTabUpdated',url: tab.url}, (r) => { });
            
            _sendCoookieMessage();
		}
		else{
            if(ENV === 'production'){
			    chrome.action.disable(tabId);
            }    
        }
    }
});

chrome.webNavigation.onHistoryStateUpdated.addListener(function(tab) {

        if(_isValidCoursePage(tab.url)){
            if(ENV === 'production'){
                chrome.action.enable(tab.tabId);
            }
            chrome.tabs.sendMessage(tab.tabId, {event: 'onHistoryStateUpdated',url: tab.url}, (r) => { });
            _sendCoookieMessage();
        }
        else{
            if(ENV === 'production'){
			    chrome.action.disable(tab.tabId);
		    }
        }
});
let downloadQueues = [];
let downloadCounts = 0;
let downloadSuccessQueues = [];
let currentDownload = null;
let downloadHandlerSet = false;
let queueStarted = false;

function populateDownloadQueues(fn){
    Store.db().getStoreDB().sync(()=>{
        downloadQueues = [];
        downloadCounts = 0;
        downloadSuccessQueues = [];
        currentDownload = null;
        // Store.db().getStoreDB().truncate('downloads');
        // Store.db().commit();
        // return [];
        const app = Store.getAppState();
        const course = Store.getCourse(app.lastCourseSlug);
        const downloadState = Store.getDownloadState(course.ID);
        const downloadConfig = Store.getDownloadConfig(course.ID);
        // const download = Store.getDownloads();
        const sections = Store.getSectionsByCourseId(course.ID);
        // const items = [];
        const fmt = downloadConfig.selectedFmtList;

        const downloadConfigs = [];
        sections.forEach((section)=>{
            const items = Store.getTocsBySectionId(section.ID);
            items.forEach((toc)=>{
                const streamLocations = Store.getStreamLocations(toc.ID).filter((r)=>{return r.fmt==fmt});
                let streamLoc;
                if(streamLocations.length>0){
                    streamLoc = streamLocations[0];
                    const videoUrl = streamLoc.url;
                    const transcriptUrl = toc.captionUrl;
                    const optVideo = {
                        url : videoUrl,
                        filename : `${toc.slug}-${fmt}.mp4`,
                        tocId : toc.ID,
                        courseId : course.ID
                    };
                    const optTranscript = {
                        url : transcriptUrl,
                        filename : `${toc.slug}-${fmt}.vtt`,
                        tocId : toc.ID,
                        courseId : course.ID
                    };
                    downloadConfigs.push(optVideo);
                    downloadConfigs.push(optTranscript);
                }
            })
        })
        for(let idx in downloadConfigs){
            const dl = downloadConfigs[idx];
            let download = Store.getDownload(dl.tocId,dl.filename);
            if(download){
                logServer.logWeb('updateDownload');
                download.url = dl.url;
                download.filename = dl.filename;
                download = Store.updateDownload(download.ID,download);
            }else{
                logServer.logWeb('createDownload');
                download = Store.createDownload(dl.url,dl.filename,dl.tocId,dl.courseId);
            } 
            downloadQueues.push(download);
        }
        Store.db().commit();

        if(typeof fn == 'function'){
            fn(downloadQueues);
        }
    })
    
    
    
}
function wakeUpDownloadPage(){
    // const app = Store.getAppState();
    // const course = Store.getCourse(app.lastCourseSlug);
    // const downloadState = Store.getDownloadState(course.ID);
    chrome.runtime.sendMessage({cmd: "wake_up"});
}


function startDownloadQueues(){
    processDownloadQueues();
}
function processDownloadQueues(){
    if(downloadQueues.length > 0){
        currentDownload = downloadQueues.shift();
        if(currentDownload.status !== true){
            chromeDownload();
        }else{
            const success = true;
            
            afterProcessDownloadQueues(success);
            return;
        }
        
    }else{
        // finished
        downloadCounts = 0;
        downloadQueues = [];
        downloadSuccessQueues = [];
        currentDownload = null;
        queueStarted = false;
        Store.db().getStoreDB().truncate('downloads');
        Store.db().commit();
    }
}
function setProgress(){
    const peak = downloadSuccessQueues.length;
    const maxPeak = downloadCounts;
    const percentage = Math.ceil(peak / maxPeak * 100);
    // logServer.logWeb({percentage});
    return percentage;
}
function afterProcessDownloadQueues(success?:boolean,delta?:object){
    // logServer.logWeb(currentDownload);
    if(success){
        downloadSuccessQueues.push(currentDownload);
        Store.updateDownload(currentDownload.ID,{status:success});
        Store.db().commit();
        
        const cmd = 'download_state';
        const percentage = setProgress();
        chrome.runtime.sendMessage({cmd,success,delta,currentDownload,percentage},(response)=>{});
        startDownloadQueues();
    }else{
        downloadQueues.push(currentDownload); 
    }
}

function chromeDownload(){
    // return;
    if(!downloadHandlerSet){
        chrome.downloads.onCreated.addListener((item)=>{
            logServer.logWeb(item)
        });
        chrome.downloads.onErased.addListener((downloadId)=>{
            logServer.logWeb(downloadId)
        });
        chrome.downloads.onChanged.addListener((delta)=>{
            logServer.logWeb(delta)
            if(typeof delta.state == 'object'){
                if(delta.state.current == 'complete'){
                    
                    afterProcessDownloadQueues(true,delta);
                }
            }
            if(typeof delta.error == 'object'){
                onDownloadError(delta);
            }
        });

        downloadHandlerSet = true;
    }
    // setTimeout(()=>{
        const opt ={
            filename : currentDownload.filename,
            url : currentDownload.url
        };
        chrome.downloads.download(opt,(downloadId)=>{
            const cmd = 'download_state';
            chrome.runtime.sendMessage({cmd,currentDownload},(response)=>{});
            logServer.logWeb(downloadId);
        });
        // afterProcessDownloadQueues(true);
    // },1000);
    
}
function onDownloadError(delta){
    
    
    
    const cmd = 'download_state';
    const success = false;
    chrome.runtime.sendMessage({cmd,delta,success,currentDownload},(response)=>{});
    queueStarted = false;
    downloadCounts = 0;
    downloadQueues = [];
    downloadSuccessQueues = [];
    currentDownload = null;
    queueStarted = false;
}
chrome.runtime.onMessage.addListener((msg,sender,sendResponse)=>{
    if(msg.cmd == 'start_download'){
        
        logServer.logWeb(msg);
        if(queueStarted){
            logServer.logWeb('queue is running:skipped');
            return;
        }
        logServer.logWeb(msg)
        if(downloadQueues.length == 0){
            populateDownloadQueues((queues)=>{
                downloadCounts = queues.length;
                queueStarted = true;
                startDownloadQueues();
            });
            
        }
        
        
    }
});

setInterval(()=>{logServer.logWeb('WAKE_UP');},5000)