import {isCoursePage,redirectNoAutoPlay} from './function';

chrome.runtime.onMessage.addListener(function (response, sendResponse) {
	console.log(response);
	if(typeof response.event != 'undefined'){
		if(response.event == 'onHistoryStateUpdated' || response.event == 'onTabUpdated'){
            if(isCoursePage()){
                localStorage["activeUrl"] = response.url;
                chrome.storage.sync.set({activeUrl: response.url});
                redirectNoAutoPlay();
            }
		}
        else if(response.event == 'sendCoookie'){
            const cookieStr = JSON.stringify(response.cookie);
            localStorage['activeCookie'] = cookieStr;

            chrome.storage.sync.set({activeCookie: cookieStr});
			
		}
		else if(response.event == 'exec'){
            switch(response.fn){
            	case 'EXT_COURSE_INFO':
            		let node : HTMLElement | null = document.getElementById('course_info');
                    if(node !== null){
                        let dataStr = node.getAttribute('data');
                        localStorage["EXT_COURSE_INFO"] = dataStr;
                        chrome.storage.sync.set({EXT_COURSE_INFO: dataStr});
                    }
            	break;
            }
			
		}
	}
});