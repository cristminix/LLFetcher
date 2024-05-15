import fs from "fs"
export const writeManifestFile = async (manifestPath, newManifestObj) => {
  console.log(`Write : ${manifestPath}`)
  fs.writeFileSync(manifestPath, JSON.stringify(newManifestObj, null, 2))
}
