chrome.runtime.onMessage.addListener(function(e,i,r){if(e.action==="activateTab"){const{url:a,optionPageBaseUrl:n}=e;chrome.tabs.query({url:`${chrome.runtime.getURL(`${n}options.html`)}*`},function(o){var t=o[0];chrome.tabs.update(t.id,{active:!0}),chrome.tabs.update(t.id,{url:a})})}});