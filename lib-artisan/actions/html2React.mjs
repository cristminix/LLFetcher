import path from "path"
import fs from "fs"
import {convertToXHTML, dashToCamelCase,writeFile, ucfirst,jsonParseFile,styleToObj} from "./lib.js"
import {getFlagArgs} from "../fn.mjs"

import cheerio from 'cheerio'




const html2React = async (input, output) => {
    const original = path.basename(input)
    const [draftFlagPresent,draftFlagValue] = getFlagArgs('draft', 1)
    let componentClass 
    let componentListJsonPath = null
    if(output){
      componentListJsonPath = path.dirname(output) + '/components.json'
    }else{
      // const draftDir = path.dirname(input) + '/..'
      // const reactDir = `${cwd}/${draftDir}/react`
      // output = `${reactDir}/${componentClass}.jsx`
      // componentListJsonPath = `${reactDir}/components.json`
    }
    if(draftFlagPresent){
      componentClass = ucfirst(original.replace(/\..*$/,''))
      componentClass = dashToCamelCase(componentClass)

      const cwd = process.cwd()
      const draftDir = `src/cms/themes/preline/templates/draft`
      const htmlDir = `${cwd}/${draftDir}/html`
      const reactDir = `${cwd}/${draftDir}/react`
      input = `${htmlDir}/${input}`
      output = `${reactDir}/${componentClass}.jsx`
      componentListJsonPath = `${reactDir}/components.json`



      if(! await fs.existsSync(input)){
        console.error(`Could not open input file :${input} `)
        process.exit(1)
      }
      // console.log(input, output)
      // return
    }else{
      componentClass = ucfirst(path.basename(output).replace(/\..*$/,''))
      componentClass = dashToCamelCase(componentClass)

    }
    let inputBuffer = await fs.readFileSync(input)
    

    inputBuffer = inputBuffer.toString()
   
    inputBuffer =   await convertToXHTML(inputBuffer)
    let $ = cheerio.load(inputBuffer, {xml: {xmlMode: true}}, false)

    // fix className
    let els = $("*[class]")
    let clsList = []
    let styleList = []
    let styleListBuffer = ""
    let clsListBuffer = ""
    let clsIdx = 0
    els.map(elIdx=>{
        // console.log(els[el])
        let element = $(els[elIdx])
        let oldValue = element.attr('class')
        if(!clsList.includes(oldValue)){
            clsList.push(oldValue)
            clsListBuffer += `${elIdx==0?"":"\t\t"}const cls${clsIdx} = "cls-${clsIdx} ${oldValue}"\n`
            clsIdx += 1
        }
        const clsIndex = clsList.indexOf(oldValue)
        element.removeAttr('class')
        element.attr('className', `CLS_INDEX_${clsIndex}`)
    })
    // fix style
    els = $("*[style]")
    let styleObjs ={}
    let stlIdx = 0

    els.map(elIdx=>{
      let element = $(els[elIdx])
      let oldValue = element.attr('style')
      if(!styleList.includes(oldValue)){
          const stlKey = `stl${stlIdx}`
          styleList.push(oldValue)
          styleObjs[stlKey] = styleToObj(oldValue, false)
          stlIdx += 1
      }
      const styleIdx = styleList.indexOf(oldValue)
      element.removeAttr('style')
        element.attr('style', `STL_INDEX_${styleIdx}`)
    })

    styleList.map((stl,styleIdx)=>{
      const stlKey = `stl${styleIdx}`
      let stlContent = []
      for(let p in styleObjs[stlKey]){
        stlContent.push(`${p} : "${styleObjs[stlKey][p]}"`)
      }
      styleListBuffer += ` ${stlKey} : { ${stlContent.join(',')} },`
    })

   
    inputBuffer = $.html()
    // const svgProps = ["stroke-linecap","clip-rule","fill-rule","viewbox"]
    const rgxRplcs = [
        [/classname/g,'className'],
        [/(<!--.*-->)/g,"{/*$1*/}"],
        [/(\"CLS_INDEX_)(\d+)(\")/g,"{cls$2}"],
        [/(\"STL_INDEX_)(\d+)(\")/g,"{styles.stl$2}"],
        [/clip-rule=/g,"clipRule="],
        [/fill-rule=/g,"fillRule="],
        [/viewbox=/g,"viewBox="],
        [/value=/g,"defaultValue="],
        [/for=/g,"htmlFor="],
        [/autocomplete=/g,"autoComplete="],
        [/stroke-width=/g,"strokeWidth="],
        [/stroke-linecap=/g,"strokeLinecap="],
        [/\>\s*\<\/input\>/g,"\/>"],
        [/\>\s*\<\/textarea\>/g,"\/>"],
        [/\>\s*\<\/img\>/g,"\/>"],
        [/\>\s*\<\/br\>/g,"\/>"]

    ]
    rgxRplcs.map((rgxRplc, index)=>{
        // console.log(rgxRplc)
        const [rgx,rplc] = rgxRplc
        inputBuffer = inputBuffer.replace(rgx,rplc)
    })
    inputBuffer = `
 const ${componentClass} = ({})=>{
    const styles = { ${styleListBuffer} }
    ${clsListBuffer}
    return <>
    ${inputBuffer}
    </>
 }   

 export default  ${componentClass}
    `
    await writeFile(output, inputBuffer,`writing ${output}`)
    const config = await jsonParseFile(componentListJsonPath,null,'',null,true)
    // console.log(config)

    if(config){
      
      if(config.availables){
        config.availables[componentClass] = { original }
        await writeFile(componentListJsonPath, JSON.stringify(config,null,2), `updating ${componentListJsonPath}`)
      }
    }else{
      console.error(`Invalid json definition ${componentListJsonPath}`)
    }
}

export default html2React
    