import Store from "../libs/store";

let ENV = 'development';

if(ENV === 'production'){
    chrome.action.disable();
}

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

function populateDownloadQueues(){
    /*
    */
    const app = Store.getAppState();
    const course = Store.getCourse(app.lastCourseSlug);
    const downloadState = Store.getDownloadState(course.ID);
    const downloadConfig = Store.getDownloadConfig(course.ID);
    // const download = Store.getDownloads();
    const sections = Store.getSectionsByCourseId(course.ID);
    // const items = [];
    const fmt = downloadConfig.selectedFmtList;
    const downloadQueues = [];
    sections.forEach((section)=>{
        const items = Store.getTocsBySectionId(section.ID);
        items.forEach((toc)=>{
            const streamLocations = Store.getStreamLocations(toc.ID);
            streamLocations.forEach((streamLocation)=>{
                if(streamLocation.fmt == fmt){
                    const videoUrl = streamLocation.url;
                    const transcriptUrl = toc.captionUrl;
                    const optVideo = {
                        url : videoUrl,
                        filename : `${toc.slug}-${fmt}.mp4`
                    };
                    const optTranscript = {
                        url : transcriptUrl,
                        filename : `${toc.slug}-${fmt}.vtt`
                    };
                    downloadQueues.push(optVideo);
                    downloadQueues.push(optTranscript);
                }
            })
        })
    })
    return downloadQueues;
}
function wakeUpDownloadPage(){
    // const app = Store.getAppState();
    // const course = Store.getCourse(app.lastCourseSlug);
    // const downloadState = Store.getDownloadState(course.ID);
    chrome.runtime.sendMessage({cmd: "wake_up"});
}
let downloadQueues = [];
let downloadCounts = 0;
let downloadSuccessQueues = [];
let currentDownload = null;

function startDownloadQueues(){
    processDownloadQueues();
}
function processDownloadQueues(){
    if(downloadQueues.length > 0){
        currentDownload = downloadQueues.shift();
        chromeDownload();
    }else{
        // finished
        downloadCounts = 0;
        downloadQueues = [];
        downloadSuccessQueues = [];
        currentDownload = null;
        downloadHandlerSet = false;
    }
}
function setProgress(){
    const peak = downloadSuccessQueues.length;
    const maxPeak = downloadCounts;
    const percentage = Math.ceil(peak / maxPeak * 100);
    console.log(percentage);
}
function afterProcessDownloadQueues(success?:boolean){
    if(success){
        downloadSuccessQueues.push(currentDownload);
        setProgress();
        startDownloadQueues();
    }else{
        downloadQueues.push(currentDownload); 
    }
}
let downloadHandlerSet = false;
function chromeDownload(){
    
    if(!downloadHandlerSet){
        chrome.downloads.onCreated.addListener((item)=>{
            console.log(item)
        });
        chrome.downloads.onErased.addListener((downloadId)=>{
            console.log(downloadId)
        });
        chrome.downloads.onChanged.addListener((delta)=>{
            console.log(delta)
            if(typeof delta.state == 'object'){
                if(delta.state.current == 'complete'){
                    afterProcessDownloadQueues(true);
                }
            }
        });

        downloadHandlerSet = true;
    }
    setTimeout(()=>{
        chrome.downloads.download(currentDownload,(downloadId)=>{
            console.log(downloadId);
        });
    },1000);
    
}
chrome.runtime.onMessage.addListener((msg,sender,sendResponse)=>{
    if(msg.cmd == 'start_download'){
        console.log(msg)
        if(downloadQueues.length == 0){
            downloadQueues = populateDownloadQueues();
            downloadCounts = downloadQueues.length;
        }else{
            if(currentDownload == null){
                startDownloadQueues();
            }
            
        }  
    }
});