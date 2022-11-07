chrome.runtime.onMessage.addListener(function (response, sendResponse) {
	console.log(response);
	if(typeof response.event != 'undefined'){
		if(response.event == 'onHistoryStateUpdated' || response.event == 'onUpdated'){
            if(isCoursePage()){
                redirectNoAutoPlay();
            }
		}
    //     else if(response.event == 'onCoookieUpdated'){
    //         Ext.state.lastCookie = response.cookie;
	// 		// Ext.main(true, response.url);
    //         // console.log(JSON.stringify(Ext.state.lastCookie));
    //         Ext.task.updateCourseCookie(JSON.stringify(Ext.state.lastCookie));
	// 	}
	}
});