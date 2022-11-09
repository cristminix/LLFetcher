chrome.action.disable();
const isValidCoursePage = (url) => {
    const urlPathArray = url.split('?')[0].split("/").filter(item => item);
    let validCoursePage = false;
    if(urlPathArray.length >= 4){
        if(urlPathArray[2] === 'learning'){
            validCoursePage = true;
        }
    }
    return validCoursePage;
};
const sendCoookieMessage=() => {
    chrome.cookies.getAll({domain: "linkedin.com"}, function(_cookie) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            try{
                const tab = tabs[0];
                
                chrome.tabs.sendMessage(tab.id, {event: 'sendCoookie',cookie: _cookie}, (r) => {});
            }catch(e){}
        });
    });
};
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) =>{
	if(changeInfo.status == "complete"){
		if(isValidCoursePage(tab.url)){
			chrome.action.enable(tabId);
            chrome.tabs.sendMessage(tab.id, {event: 'onTabUpdated',url: tab.url}, (r) => { });
            
            sendCoookieMessage();
		}
		else{
			chrome.action.disable(tabId);
		}
    }
});

chrome.webNavigation.onHistoryStateUpdated.addListener(function(tab) {
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // const tab = tabs[0];
        if(isValidCoursePage(tab.url)){
            chrome.action.enable(tab.tabId);
            chrome.tabs.sendMessage(tab.tabId, {event: 'onHistoryStateUpdated',url: tab.url}, (r) => { });
            sendCoookieMessage();
        }
        else{
			chrome.action.disable(tab.tabId);
		}
	// });
});

