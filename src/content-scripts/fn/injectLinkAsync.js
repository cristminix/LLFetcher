import { injectLink } from "./injectScript"
/**
 * Injects a script tag asynchronously into the DOM at the body element.
 *
 * @param {string} href - The URL of the script to be injected.
 * @param {function} [callback] - An optional callback function to be executed when the script has finished loading.
 * @returns {Promise<HTMLScriptElement>} A promise that resolves to the injected script element.
 */
export const injectLinkAsync = async (  rel,
  href,
  preload=true,tag="body", callback = (f) => f) => {
  return new Promise((resolve, reject) => {
    injectScript(
      rel,
      chrome.runtime.getURL(href),
  preload,
  tag,
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
