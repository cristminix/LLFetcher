import ContentScript from "./class/ContentScript"
import { injectScriptAsync } from "./fn"

const main = async () => {
  window.contentScript = new ContentScript()
  await injectScriptAsync("src/content-scripts/inject/dist/content-inject.js")
}

main()
