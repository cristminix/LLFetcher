var listeningTabIds = {};
var exactMatchTabIds = {};
var port = null; // This is the port used to communicate to the native host
var enableRefreshActivePage = true;
var extensionIdToReload = 'kdldpcehifnkcickgdahagcbjipaekca';

function changeToActiveIcon(tabId) {
    if (typeof tabId === "undefined") {
        // If programmer forgot to pass the tabId, return early.
        console.warn('Must pass a tabId to changeToActiveIcon');
        return;
    }

    chrome.browserAction.setIcon({
        path: {
            19: '/extension/images/v-pink-19.png',
            38: '/extension/images/v-pink-38.png'
        },
        tabId: tabId
    });
}

function changeToInactiveIcon(tabId) {
    if (typeof tabId === "undefined") {
        // If programmer forgot to pass the tabId, return early.
        console.warn('Must pass a tabId to changeToInactiveIcon');
        return;
    }

    chrome.browserAction.setIcon({
        path: {
            19: '/extension/images/v-white-19.png',
            38: '/extension/images/v-white-38.png'
        },
        tabId: tabId
    });
}

function stopListening(tabId) {
    if (typeof tabId === "undefined") {
        // If programmer forgot to pass the tabId, return early.
        console.warn('Must pass a tabId to stopListening');
        return;
    }
    delete listeningTabIds[tabId];
    changeToInactiveIcon(tabId);
    console.log('Will stop automatically reloading tab', tabId);
}

function startListening(tabId) {
    if (typeof tabId === "undefined") {
        // If programmer forgot to pass the tabId, return early.
        console.warn('Must pass a tabId to startListening');
        return;
    }
    listeningTabIds[tabId] = tabId;
    changeToActiveIcon(tabId);
    console.log('Will start reloading tab', tabId, 'on relevant Vim events.');
}

chrome.browserAction.onClicked.addListener(function(tab) {
    var tabId = tab.id;
    if (listeningTabIds[tabId]) {
        stopListening(tabId);
    } else {
        startListening(tabId);
    }
});

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // This gets fired twice, first where changeInfo.status is "loading" and
    // the second when changeInfo.status is "complete". We only need to
    // react to the first.
    if (changeInfo.status === 'loading' && listeningTabIds[tabId]) {
        startListening(tabId);
    }
});

// Native Messaging
function sendNativeMessage(message) {
    port.postMessage(message);
}
function reloadExtension(id) {
    setTimeout(()=>{
        chrome.management.setEnabled(id, false, function() {
            chrome.management.setEnabled(id, true);
        });
    },2000)
    
}
function onNativeMessage(eventName) {
    console.log('Event page got native message from host:', eventName);
    switch (eventName) {
        case 'reload':
            Object.keys(listeningTabIds).forEach(function(tabId) {
                tabId = parseInt(tabId);
                
                console.log('Found listening tab id', tabId);
                reloadExtension(extensionIdToReload);
                if(enableRefreshActivePage){
                    chrome.tabs.reload(tabId, null, function() {
                        console.log('Reloading tab id', tabId);
                        // Check if we're listening to this tab, and change the
                        // icon if so. We probably are still listening, but
                        // currently manual user refreshes aren't handled.
                        if (listeningTabIds[tabId]) {
                            startListening(tabId);
                        }
                    });
                }
                
            });
            break;
        default:
            sendNativeMessage('Event name', eventName, 'is unknown. Doing nothing.');
            break;
    }
}

function onDisconnected() {
    console.error('Failed to connect. ' + chrome.runtime.lastError.message);
}

function connect() {
    var hostName = "org.vim.stayfresh";
    port = chrome.runtime.connectNative(hostName);
    port.onMessage.addListener(onNativeMessage);
    port.onDisconnect.addListener(onDisconnected);
    console.log("Event page connecting to native messaging host ", hostName);
}

connect();
