export const onMessage = (callback) => {
  try {
    chrome.runtime.onMessage.addListener((evt, source) => {
      callback(evt, source)
    })
  } catch (e) {
    console.log(e)
  }
}
