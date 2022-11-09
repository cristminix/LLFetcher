chrome.runtime.onMessage.addListener(function (response, sendResponse) {
	console.log(response);
	if(typeof response.event != 'undefined'){
		if(response.event == 'onHistoryStateUpdated' || response.event == 'onTabUpdated'){
            if(isCoursePage()){
                localStorage["activeUrl"] = response.url;
                // localStorage["courseInfo"] = JSON.stringify(getCourseInfo());
                chrome.storage.sync.set({activeUrl: response.url}, () => {});
                   
                redirectNoAutoPlay();
            }
		}
        else if(response.event == 'sendCoookie'){
            const cookieStr = JSON.stringify(response.cookie);
            localStorage['activeCookie'] = cookieStr;
                // localStorage["courseInfo"] = JSON.stringify(getCourseInfo());

            chrome.storage.sync.set({activeCookie: cookieStr}, () => {});
			
		}
		else if(response.event == 'exec'){
            switch(response.fn){
            	case 'EXT_COURSE_INFO':
            		let dataStr = document.getElementById('EXT_COURSE_INFO').getAttribute('data');
        			localStorage["EXT_COURSE_INFO"] = dataStr;
	                // localStorage["courseInfo"] = JSON.stringify(getCourseInfo());
	                chrome.storage.sync.set({EXT_COURSE_INFO: dataStr}, (r) => {
	                	
	                });
        			// console.log(dataStr)

     //        		__searchLevel__= 0;
					// __searchKey__  = '';

					// searchTerms = [
					//     "com.linkedin.learning.api.deco.content.ExerciseFile",
					//     "com.linkedin.videocontent.Transcript",
					//     "com.linkedin.videocontent.StreamingLocation"
					// ];

					// src = parseCodes();
					// __result__ = [];
					// for(i in searchTerms){
					//     __searchTerm__ = searchTerms[i];
					//     searchItem(src);
					// }
					// console.log(src);
					// console.log(__result__);
            	break;
            }
			
		}
	}
});