/**
 * Injects a link tag into the DOM at the specified location.
 *
 * @param {string} href - The URL of the link to be injected.
 * @param {string} tag - The HTML tag name to use for the link element for eample head or body.
 * @param {function} [callback] - An optional callback function to be executed when the link has finished loading.
 * @param {function} [error] - An optional callback function to be executed if there is an error loading the link.
 */
export const injectLink = (
  rel,
  href,
  preload=false,
  tag='head',
  callback = (f) => f,
  error = (f) => f
) => {
  let node = document.getElementsByTagName(tag)[0]
  let link = document.createElement("link")
  link.addEventListener("load", () => {
    console.log(`${link.href} loaded`)
    callback(link)
  })
  link.addEventListener("error", (ev) => {
    console.log("Error on loading file", ev)
    error(ev)
  })
  if(preload){
    link.setAttribute("preload", true)
  }
  link.setAttribute("rel", rel)
  link.setAttribute("crossorigin",true)
  link.setAttribute("href", href)
  node.appendChild(link)
}
