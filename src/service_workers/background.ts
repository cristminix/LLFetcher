import { myLogServer,getLineInfo } from "../libs/utils";
import Store from "../libs/store";
import DownloadQueue from "../libs/downloadQueue";
import { Downloads_tableField } from "src/types/tableFields";
const logServer = myLogServer();
let downloadQueue = new DownloadQueue();
 
Store.prepareAppStorage();

let ENV = 'development';

if(ENV === 'production'){
    chrome.action.disable();
}



logServer.logWeb('LogServer initialize',getLineInfo());


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
    // chrome.cookies.getAll({domain: "linkedin.com"}, function(_cookie) {
    //     chrome.tabs.query({active: true, currentWindow: true}, function(tabs ) {
    //         try{
    //             const tab = tabs[0];
    //             chrome.tabs.sendMessage(tab.id as number, {event: 'sendCoookie',cookie: _cookie}, (r) => {});
    //         }catch(e){}
    //     });
    // });
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



chrome.runtime.onMessage.addListener((msg,sender,sendResponse)=>{
    Store.checkFreshInstall((freshInstall:boolean)=>{
        if(freshInstall){
            logServer.logWeb('freshInstall detected',getLineInfo());
            return;
            //Store.prepareAppStorage();
        }

        setTimeout(()=>{
            if(msg.cmd == 'reset_queue'){
                // downloadQueue.setCourse(msg.course);
                downloadQueue.queueStarted = false;
                logServer.logWeb('queue reset',getLineInfo())
            }
            else if(msg.cmd == 'start_download'){
                downloadQueue.setCourse(msg.course);
                logServer.logWeb(msg,getLineInfo());
                if(downloadQueue.queueStarted){
                    logServer.logWeb('queue is running:skipped',getLineInfo());
                    return;
                }
                logServer.logWeb(msg,getLineInfo())
                if(downloadQueue.queues.length == 0){
                    downloadQueue.populate((queues:Downloads_tableField[])=>{
                        downloadQueue.queueStarted = true;
                        downloadQueue.startQueue();
                    });
                }
            }
        },1000);
    })
});

setInterval(()=>{logServer.logWeb('WAKE_UP',getLineInfo());},3000)