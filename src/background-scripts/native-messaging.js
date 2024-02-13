const listeningTabIds = {}
const exactMatchTabIds = {}
let port = null // This is the port used to communicate to the native host
const hostName = "com.cristminix.llfetcher"
function changeToActiveIcon(tabId) {
    if (typeof tabId === "undefined") {
        // If programmer forgot to pass the tabId, return early.
        console.warn('Must pass a tabId to changeToActiveIcon')
        return
    }

    chrome.action.setIcon({
        path: {
            19: '/extension/images/v-pink-19.png',
            38: '/extension/images/v-pink-38.png'
        },
        tabId: tabId
    })
}

function changeToInactiveIcon(tabId) {
    if (typeof tabId === "undefined") {
        // If programmer forgot to pass the tabId, return early.
        console.warn('Must pass a tabId to changeToInactiveIcon')
        return
    }

    chrome.action.setIcon({
        path: {
            19: '/logo/disabled/icon-19.png',
            38: '/logo/disabled/icon-38.png'
        },
        tabId: tabId
    })
}

function stopListening(tabId) {
    if (typeof tabId === "undefined") {
        // If programmer forgot to pass the tabId, return early.
        console.warn('Must pass a tabId to stopListening')
        return
    }
    delete listeningTabIds[tabId]
    changeToInactiveIcon(tabId)
    console.log('Will stop automatically reloading tab', tabId)
}

function startListening(tabId) {
    if (typeof tabId === "undefined") {
        // If programmer forgot to pass the tabId, return early.
        console.warn('Must pass a tabId to startListening')
        return
    }
    listeningTabIds[tabId] = tabId
    changeToActiveIcon(tabId)
    console.log('Will start reloading tab', tabId, 'on relevant Vim events.')
}

try{
    chrome.action.onClicked.addListener(function(tab) {
        const tabId = tab.id
        if (listeningTabIds[tabId]) {
            stopListening(tabId)
        } else {
            startListening(tabId)
        }
    })
}catch(e){
    console.log(e)
}


chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    // This gets fired twice, first where changeInfo.status is "loading" and
    // the second when changeInfo.status is "complete". We only need to
    // react to the first.
    if (changeInfo.status === 'loading' && listeningTabIds[tabId]) {
        startListening(tabId)
    }
})

// Native Messaging
function sendNativeMessage(message) {
    // port.postMessage(message)
}
function string2Bin(str) {
  var result = [];
  for (var i = 0; i < str.length; i++) {
    result.push(str.charCodeAt(i).toString(2));
  }
  return result;
}
async function sendNativeMessageAsync(message, callback) {
    // console.log(message)
    // let encoder = new TextEncoder()
    // const msgBa = encoder.encode(message).toString()
    // console.log(msgBa)
    
    return new Promise((resolve, reject) => {
        const onMessageCallback = (response) => {
            resolve(response)
            callback(response)
            port.onMessage.removeListener(onMessageCallback)
        }
        try{
            port.onMessage.addListener(onMessageCallback)
            port.postMessage(message)

        }catch(e){
            reject(e)
        }
        
    })
}

function onNativeMessage(eventName) {
    console.log('Event page got native message from host:', eventName)
    switch (eventName) {
        case 'reload':
            Object.keys(listeningTabIds).forEach(function(tabId) {
                tabId = parseInt(tabId)
                console.log('Found listening tab id', tabId)
                chrome.tabs.reload(tabId, null, function() {
                    console.log('Reloading tab id', tabId)
                    // Check if we're listening to this tab, and change the
                    // icon if so. We probably are still listening, but
                    // currently manual user refreshes aren't handled.
                    if (listeningTabIds[tabId]) {
                        startListening(tabId)
                    }
                })
            })
            break
        default:
            // sendNativeMessage('Event name', eventName, 'is unknown. Doing nothing.')
            break
    }
}

function onDisconnected() {
    console.error('Failed to connect. ' + chrome.runtime.lastError.message)

}

function connect() {
    
    port = chrome.runtime.connectNative(hostName)
    port.onMessage.addListener(onNativeMessage)
    port.onDisconnect.addListener(onDisconnected)
    console.log("Event page connecting to native messaging host ", hostName)
}

export {
    connect,
    sendNativeMessage,
    sendNativeMessageAsync
}