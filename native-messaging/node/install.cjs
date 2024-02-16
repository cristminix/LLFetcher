const fs = require("fs")
const path = require("path")
const { dirname } = path 
// import { fileURLToPath } from 'url'
// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename)
const manifest = {
    name : "com.cristminix.llfetcher",
    description: "LLFetcher is stand for LinkedIn Learning Fetcher",
    path: "FULL_PATH\\BIN.exe",
    type: "stdio",
    allowed_origins: []

}

const main = async()=>{
    const [nodeFullPath,currentFileFullPath,browserName,extId] = process.argv
    const binFullPath = path.resolve(`${__dirname}/dist/llfetcher-native.exe`)
    if(browserName.length <=4 || extId.length <= 4){
        console.error(`Usage install.bat <browser> <extension_id>
        \nExample:
    install.bat msedge ncfdbofhgnoammldlfcfdkcldpbepjhc
    install.bat chrome ncfdbofhgnoammldlfcfdkcldpbepjhc`)
        process.exit(1)
    }
    const manifestFilePath = `${__dirname}/dist/manifest.json`
    manifest.path = binFullPath
    manifest.allowed_origins.push(`chrome-extension://${extId}/`)
    console.log(manifest)

    console.log("Generating manifest.json")
    try{
        await fs.writeFileSync(manifestFilePath, JSON.stringify(manifest,null,2))
        console.log("OK")
    }catch(e){
        console.error(e)
    }
    console.log("Generating registry-entries.reg")
    console.log("Please double-click or run registry-entries.reg")
    /*
    Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\Microsoft\Edge\NativeMessagingHosts\com.cristminix.llfetcher]
@="E:\\projects\\LLFetcher\\native-messaging\\node\\dist\\manifest.json"


    */
    let manifestFullPath = JSON.stringify(path.resolve(manifestFilePath))
    console.log(manifestFullPath)
    const regFilePath = `${__dirname}/dist/registry-entries.reg`
    let registryKey = `HKEY_CURRENT_USER\\Software\\Google\\Chrome\\NativeMessagingHosts\\`
    if(browserName === 'msedge'){
        registryKey = `HKEY_CURRENT_USER\\Software\\Microsoft\\Edge\\NativeMessagingHosts\\`
    }
    let registryEntriesBuff = `Windows Registry Editor Version 5.00
    [${registryKey}${manifest.name}]
    @=${manifestFullPath}`

    console.log(registryEntriesBuff)
    try{
        await fs.writeFileSync(regFilePath, registryEntriesBuff)
        console.log("OK")
    }catch(e){

    }
    process.exit(0)
} 

main()