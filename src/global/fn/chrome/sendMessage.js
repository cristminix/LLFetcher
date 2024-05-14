import { MsgEvt } from "./MsgEvt"

export const sendMessage = async (
  eventName,
  data = null,
  target = "content",
  callback = (f) => f
) => {
  // return new Promise((resolve, reject)=>{
  const evt = MsgEvt(eventName, data)
  try {
    if (target === "content") {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const tab = tabs[0]
        chrome.tabs.sendMessage(tab.id, evt, (response) => {
          if (!chrome.runtime.lastError) {
            // if you have any response

            callback && callback(response)
          } else {
            callback && callback(response)

            // if you don't have any response it's ok but you should actually handle
            // it and we are doing this when we are examining chrome.runtime.lastError
          }
          // resolve(response)
        })
      })
    } else {
      chrome.runtime.sendMessage(evt, (response) => {
        if (!chrome.runtime.lastError) {
          // if you have any response
          callback && callback(response)
        } else {
          callback && callback(response)

          // if you don't have any response it's ok but you should actually handle
          // it and we are doing this when we are examining chrome.runtime.lastError
        }
        // resolve(response)
      })
    }
  } catch (e) {
    console.log(e)
    // reject(e)
  }
  // })
}
