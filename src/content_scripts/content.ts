import {isCoursePage,redirectNoAutoPlay} from './function';

// const logServer = new LogServer('content');

chrome.runtime.onMessage.addListener(function (response, sendResponse) {
	// console.log(response);
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
		else if(response.event == 'SaveDataCodesToLS'){
            let node : HTMLElement | null = document.getElementById('dataCodes');
            if(node !== null) {
                let dataStr = node.getAttribute('data');
                // localStorage["dataCodes"] = dataStr;
                chrome.storage.sync.set({dataCodes: dataStr});
                chrome.runtime.sendMessage({cmd:'retrieve_data_codes', dataCodes: dataStr});

            }
		}
        else if(response.event == 'ContentConsoleLog'){
            console.log('Popup.log:',response.param);
        }
        else if(response.event == 'LogServer'){
            // logServer.log(response.data);
            console.log(response.data);
        }
	}
});