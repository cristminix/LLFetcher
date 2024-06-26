import { injectScript } from "./injectScript"
/**
 * Injects a script tag asynchronously into the DOM at the body element.
 *
 * @param {string} src - The URL of the script to be injected.
 * @param {function} [callback] - An optional callback function to be executed when the script has finished loading.
 * @returns {Promise<HTMLScriptElement>} A promise that resolves to the injected script element.
 */
export const injectScriptAsync = async (src,type="text/javascript",tag="body", callback = (f) => f) => {
  return new Promise((resolve, reject) => {
    injectScript(
      chrome.runtime.getURL(src),
      tag,
      type,
      (el) => {
        if (typeof callback === "function") {
          callback()
        }
        resolve(el)
      },
      (ev) => {
        reject(ev)
      }
    )
  })
}
