// Please run this scripts after vite build
import path from "path"
import fs from "fs"
// import manifest from "../../dist/manifest.json" //assert { type: 'json' }
let manifest = {}
import {
  updateContentScript,
  updateWebAccessibleResources,
  writeManifestFile,
} from "./fn/index.js"
import { filepathToUrl } from "./fn/filepathToUrl.js"
const cwd = process.cwd()
const distPath = path.join(cwd, "dist")
const manifestPath = path.join(cwd, "dist/manifest.json")
const loadManifest = async () => {
  // console.log(manifestPath)
  if( fs.existsSync(manifestPath)){
    const fileBuffer =  fs.readFileSync(manifestPath,"utf-8")
    
    try{
      manifest = JSON.parse(fileBuffer)
    }catch(e){
      console.error(e)
    }
    // console.log(manifest)
  }
  // const data = await import(filepathToUrl(manifestPath),{ assert: { type: 'json' } });
  // console.log(data.default); // `default` if using CommonJS output



};

const main = async () => {
await loadManifest();
// process.exit(0)

  // console.log(process.cwd())
  console.log("Please run this scripts after build")
  console.log(`Entering dist folder`)
  console.log(`Reading manifest.json`)

  updateWebAccessibleResources(manifest)

  await updateContentScript(distPath)

  process.exit(0)
}

main()
