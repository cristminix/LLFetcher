let ENV = 'development';

if(ENV === 'production'){
    chrome.action.disable();
}

function _isValidCoursePage  (url ) {
    const urlPathArray = url.split('?')[0].split("/").filter(item => item);
    let validCoursePage = false;
    if(urlPathArray.length >= 4){
        if(urlPathArray[2] === 'learning'){
            validCoursePage = true;
        }
    }
    return validCoursePage;
}
function _sendCoookieMessage() {
    chrome.cookies.getAll({domain: "linkedin.com"}, function(_cookie) {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs ) {
            try{
                const tab = tabs[0];
                chrome.tabs.sendMessage(tab.id, {event: 'sendCoookie',cookie: _cookie}, (r) => {});
            }catch(e){}
        });
    });
};

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) =>{
	if(changeInfo.status == "complete"){
		if(_isValidCoursePage(tab.url )){
            if(ENV === 'production'){
                chrome.action.enable(tabId);
            }
            chrome.tabs.sendMessage(tab.id , {event: 'onTabUpdated',url: tab.url}, (r) => { });
            
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
setInterval(()=>{
console.log('hello workers, iam here 123')

},1000)
