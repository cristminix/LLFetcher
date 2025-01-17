import ContentScript from "./class/ContentScript"
import { injectScriptAsync, injectLinkAsync } from "./fn"

const main = async () => {
  window.contentScript = new ContentScript()
  /*INJECT_START*/
  await injectScriptAsync("assets/content-script-inject/content-inject.js")
  await injectLinkAsync("assets/content-script-inject/content-inject.css")
  /*INJECT_END*/
}

main()
