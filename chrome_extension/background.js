(()=>{function e(e){var t=e.split("?")[0].split("/").filter((function(e){return e})),n=!1;return t.length>=4&&"learning"===t[2]&&(n=!0),n}function t(){chrome.cookies.getAll({domain:"linkedin.com"},(function(e){chrome.tabs.query({active:!0,currentWindow:!0},(function(t){try{var n=t[0];chrome.tabs.sendMessage(n.id,{event:"sendCoookie",cookie:e},(function(e){}))}catch(e){}}))}))}chrome.tabs.onUpdated.addListener((function(n,o,i){"complete"==o.status&&e(i.url)&&(chrome.tabs.sendMessage(i.id,{event:"onTabUpdated",url:i.url},(function(e){})),t())})),chrome.webNavigation.onHistoryStateUpdated.addListener((function(n){e(n.url)&&(chrome.tabs.sendMessage(n.tabId,{event:"onHistoryStateUpdated",url:n.url},(function(e){})),t())}))})();