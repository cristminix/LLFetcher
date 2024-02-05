import {getFlagArgs} from "../fn.mjs"
import {jsonParseFile, writeFile, confirm, renameFile} from "./lib.js"
import fs from "fs"
import path from "path"

const sideMenu = async (cmd, menuKey, title, path, iconCls) => {
    // console.log(`sideMenu`)
    let jsonPath = "side_menu.json"
    const [jsonPathArgPresent, jsonPathArg] = getFlagArgs('json_path')
    
    if(jsonPathArgPresent && jsonPathArg){
        jsonPath = jsonPathArg 
    }
    //json_path, setDefaultChildKey = null, defaultChildKeyInfo = 'table', defaultKey = 'schema', checkFileExist=false) => {
  
    const config = await jsonParseFile(jsonPath,null,'','links',true)
    // console.log(config)

    if(!config){
        console.error(`Unable to load ${jsonPath}`)
        process.exit(1)
    }
    const menuKeys = Object.keys(config.links)
    if(['ls','list'].includes(cmd)){
        menuKeys.map(mkey=>{
            const item = config.links[mkey]
           
        })
        console.table(config.links)
    }

    if(['add','create', 'append'].includes(cmd)){

        if(menuKey && title && path && iconCls){
            if(!menuKeys.includes(menuKey)){
                // console.log(`Removing ${menuKey}`)

                console.log(`Adding ${menuKey}`)
                config.links[menuKey] = {
                    title,
                    path,
                    iconCls,
                    order: 6
                  }
                const jsonBuffer = JSON.stringify(config, null, 2)
                await writeFile(jsonPath, jsonBuffer, 'updating ' + jsonPath)

            }else{
                console.error('menu_key found'+ ` in available keys :[${menuKeys.join(',')}]`)
                console.error('please specify another one other than ' + menuKey)
            }

        }else{
            console.error('sideMenu add|create|append <menu_key> <title> <path> <iconCls>')
        }

    }

    if(['rm','remove','del','delete','destroy'].includes(cmd)){
        if(menuKeys.includes(menuKey)){
            console.log(`Removing ${menuKey}`)

            delete config.links[menuKey]
            const jsonBuffer = JSON.stringify(config, null, 2)
            await writeFile(jsonPath, jsonBuffer, 'updating ' + jsonPath)
        }else{
            console.error('menu_key not found'+ ` in available keys :[${menuKeys.join(',')}]`)
            console.error('sideMenu rm|remove|del|delete|destroy <menu_key>')
        }
    }
    

    // console.log(jsonPathArgPresent, jsonPathArg)
}

export default sideMenu
    