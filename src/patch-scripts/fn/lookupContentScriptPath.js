import fs from "node:fs"
import path from "node:path"
export const lookupContentScriptFile = async (distPath) => {
  console.log(distPath)
  const files = await fs.readdirSync(path.join(distPath, "assets"))
  console.log(files)
  for (const file of files) {
    if (file.includes("main.js-loader")) {
      return path.join(distPath, `assets/${file}`)
    }
  }
  return null
}
