import {getFlagArgs} from "../fn.mjs"
import {jsonParseFile, writeFile, confirm, renameFile,strToArray} from "./lib.js"
import fs from "fs"
import path from "path"
const createSchemaDef = async (table_name, pk, columns, types, nullables, lengths, validations) => {
    // console.log(`createSchemaDef`)
    let [jsonPathArgPresent,jsonPath] = getFlagArgs('schema')
    //
    // console.log(jsonPath)
    if(!jsonPath){
        // console.error(`could not open schema`)
        // process.exit(1)
        jsonPath = 'model_entity.json'
    }
    const config = await jsonParseFile(jsonPath,null,'',null,true)

    const dt = new Date
    const outputFileBackup = `${jsonPath}_${dt.getTime()}`
    const outputFile = jsonPath

    

    if(config){
        // console.log(config)
        if(config.schema){
            columns=strToArray(columns)
            types=strToArray(types)
            config.schema[table_name] = {pk,fields:columns,types}
            if(nullables){
                nullables = strToArray(nullables)
                config.schema[table_name].nullable = nullables
            }
            if(lengths){
                lengths = strToArray(lengths).map(v=>v=='null'? null:v)
                config.schema[table_name].lengths = lengths
            }
            if(validations){
                validations = strToArray(validations).map(v=>v=='null'? null:v)
                config.schema[table_name].validations = validations
            }
            // console.log(config.schema[table_name])
            // process.exit(1)
            console.log(`creating backup`)
            await renameFile(outputFile, outputFileBackup)
            const jsonBuffer = JSON.stringify(config, null, 2)
            await writeFile(outputFile, jsonBuffer, `creating schema definition on ${outputFile}`)

        }else{
            console.error(`${jsonPath} invalid json schema definition`)
            process.exit(1)
        }
    }

    

}

export default createSchemaDef
    