import ContentScript from "./class/ContentScript"
import { injectScriptAsync, injectLinkAsync } from "./fn"

const main = async () => {
  window.contentScript = new ContentScript()
  /*INJECT_START*/
  await injectScriptAsync("BLA")
  await injectLinkAsync("BLA")
  /*INJECT_END*/
}

main()
