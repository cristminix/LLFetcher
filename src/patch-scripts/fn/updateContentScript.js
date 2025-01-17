import fs from "fs"
import path from "path"
import {load} from "cheerio"

// console.log(cheerio)
import { lookupContentScriptFile } from "./lookupContentScriptPath.js"
export const updateContentScript = async (distPath) => {
  const INJECT_LOCATION_SIGNATURE = ">>==INJECT_LOCATION_SIGNATURE==<<"
  const contentScriptPath = await lookupContentScriptFile(distPath)
  if (contentScriptPath)
    console.log(`Found content script at ${contentScriptPath}`)
  else {
    console.error(`Content script not found`)
    return
  }
  let contentScriptBuffer = fs.readFileSync(contentScriptPath).toString()
  let matchMain = contentScriptBuffer.match(/main\.js(\w|-|\.)+/g)
  const [realContentScript] = matchMain
  //   console.log(realContentScript)
  let newScriptBufferLines = []
  if (realContentScript) {
    const realContentScriptPath = path.join(
      distPath,
      `assets/${realContentScript}`
    )
    contentScriptBuffer = fs.readFileSync(realContentScriptPath).toString()
    const contentScriptBufferLines = contentScriptBuffer.split("\n")

    let skipBuffer = false
    for (const line of contentScriptBufferLines) {
      //   console.log(line)
      if (line.match(/\/\*INJECT_START\*\//g)) {
        // console.log(line)
        skipBuffer = true
      }
      if (line.match(/\/\*INJECT_END\*\//g)) {
        skipBuffer = false
        continue
      }
      if (skipBuffer) {
        if (!newScriptBufferLines.includes(INJECT_LOCATION_SIGNATURE))
          newScriptBufferLines.push(INJECT_LOCATION_SIGNATURE)
      }
      if (!skipBuffer) {
        newScriptBufferLines.push(line)
      }
    }
    let INJECT_LOCATION_INDEX = newScriptBufferLines.indexOf(
      INJECT_LOCATION_SIGNATURE
    )
    console.log(INJECT_LOCATION_INDEX)
    // console.log(newScriptBufferLines.join("\n"))

    // console.log(contentScriptBuffer)
  }
  // [0]
  // .replace('")', "")
  //   console.log(matchMain)
  //   console.log(contentScriptBuffer)
  const contentInjectHtmlPath = path.join(
    distPath,
    "src/content-scripts/inject/index.html"
  )
  console.log(`Reading ${contentInjectHtmlPath}`)
  let buffer = fs.readFileSync(contentInjectHtmlPath, "utf-8")
  let $ =  load(buffer, { xml: true })
  console.log("Reading link tags")
  let links = $("link")
  for (const link of links) {
    const { rel, href } = link.attribs
    if (rel === "stylesheet" || rel === "modulepreload") {
      console.log(rel, href)
    }
    // console.log(rel, href)
  }
  //   updateManifestFile(manifest)
}
