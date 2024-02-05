import path from "path"
import fs from "fs"
import {convertToXHTML, dashToCamelCase,writeFile, ucfirst,jsonParseFile,styleToObj} from "./lib.js"
import {getFlagArgs} from "../fn.mjs"

import cheerio from 'cheerio'


const extractPrelineExample = async (input, target_dir) => {
    const original = path.basename(input).replace(/\..*$/,'')
    const [draftFlagPresent,draftFlagValue] = getFlagArgs('draft', 1)
    
    if(draftFlagPresent){

      const cwd = process.cwd()
      const draftDir = `src/cms/themes/preline/templates/draft`
      const htmlDir = `${cwd}/${draftDir}/html`
      target_dir = `${htmlDir}/${target_dir}` 
    }
    if (! await fs.existsSync(target_dir)) {
        await fs.mkdirSync(target_dir, { recursive: true })
        console.log(`mkdir ${target_dir}`)
    }
    
    if(! await fs.existsSync(input)){
        console.error(`Could not open input file :${input} `)
        process.exit(1)
    }
    // console.log(input,target_dir)
    let inputBuffer = await fs.readFileSync(input)
    inputBuffer = inputBuffer.toString()
    
    let $ = cheerio.load(inputBuffer, {xml: {xmlMode: true}}, false)
    let els = $("code.language-markup")

    // console.log(els)    
    els.map(async(elIdx)=>{
        let element = $(els[elIdx])
        let elementContent = element.text()
        const rgxRplcs = [
            [/\<html/g,"<div"],
            [/\<body/g,"<div"],
    
        ]
        rgxRplcs.map((rgxRplc, index)=>{
            // console.log(rgxRplc)
            const [rgx,rplc] = rgxRplc
            elementContent = elementContent.replace(rgx,rplc)
        })
        const outputFile = `${target_dir}/${original}-${elIdx}.html`
        // elementContent =  await convertToXHTML(elementContent)

        await writeFile(outputFile, elementContent, `Writing ${outputFile}`)

        // console.log(elementContent)
    })

}

export default extractPrelineExample
    