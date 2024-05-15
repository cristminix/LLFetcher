import fs from "fs"
import path from "path"
export const lookupContentScriptFile = async (distPath) => {
  const files = fs.readdirSync(path.join(distPath, "assets"))
  for (const file of files) {
    if (file.includes("main.js-loader")) {
      return path.join(distPath, `assets/${file}`)
    }
  }
  return null
}
