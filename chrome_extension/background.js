chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) =>{
	if(changeInfo.status == "complete"){
		// console.log(tab.url);
        // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        //     try{
        //         chrome.tabs.sendMessage(tabs[0].id, {event: 'onUpdated',url: tab.url}, function(response) {});
        //     }catch(e){}
        // });
        chrome.cookies.getAll({domain: "linkedin.com"}, function(_cookie) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                try{
                    chrome.tabs.sendMessage(tabs[0].id, {event: 'sendCoookie',cookie: _cookie}, function(response) {});

                }catch(e){}
            });
        });
    }
});

chrome.webNavigation.onHistoryStateUpdated.addListener(function(details) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  chrome.tabs.sendMessage(tabs[0].id, {event: 'onHistoryStateUpdated',url: details.url}, function(response) {
	  });
	});
});

