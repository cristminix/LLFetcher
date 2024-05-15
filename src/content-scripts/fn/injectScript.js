/**
 * Injects a script tag into the DOM at the specified location.
 *
 * @param {string} src - The URL of the script to be injected.
 * @param {string} tag - The HTML tag name to use for the script element for eample head or body.
 * @param {function} [callback] - An optional callback function to be executed when the script has finished loading.
 * @param {function} [error] - An optional callback function to be executed if there is an error loading the script.
 */
export const injectScript = (
  src,
  tag,
  type = "text/javascript",
  callback = (f) => f,
  error = (f) => f
) => {
  let node = document.getElementsByTagName(tag)[0]
  let script = document.createElement("script")
  script.addEventListener("load", () => {
    console.log(`${script.src} loaded`)
    callback(script)
  })
  script.addEventListener("error", (ev) => {
    console.log("Error on loading file", ev)
    error(ev)
  })
  script.setAttribute("type", type)
  script.setAttribute("src", src)
  node.appendChild(script)
}
