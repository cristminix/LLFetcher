// Please run this scripts after vite build
import path from "path"
import manifest from "../../dist/manifest.json" assert { type: "json" }
import {
  updateContentScript,
  updateWebAccessibleResources,
  writeManifestFile,
} from "./fn/index.js"
const cwd = process.cwd()
const distPath = path.join(cwd, "dist")
const manifestPath = path.join(cwd, "dist/manifest.json")

const main = async () => {
  // console.log(process.cwd())
  console.log("Please run this scripts after build")
  console.log(`Entering dist folder`)
  console.log(`Reading manifest.json`)

  updateWebAccessibleResources(manifest)

  await updateContentScript(distPath)

  process.exit(0)
}

main()
