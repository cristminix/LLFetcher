import fs from 'fs'
import readline from 'readline'
import {Parser} from "htmlparser2"
import htmlEntities from 'html-entities'

function confirm(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.toLowerCase());
      rl.close();
    });
  });
}

function camelToDashCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}
const writeFile = async(outputPath, outputContentBuffer, info) =>{
    try {
        const fileDescriptor = fs.openSync(outputPath, 'w'); // Open the file in write mode
        fs.writeSync(fileDescriptor, outputContentBuffer); // Write the data to the file
        fs.closeSync(fileDescriptor); // Close the file
        console.log(`${info} success.`)
    } catch (error) {
        console.error(`${info} failed.`)
    }
}
const excludeFields = (excludeFields, fields) =>{
    return fields.filter(f => !excludeFields.includes(f))
}

const jsonParseFile = async(json_path, setDefaultChildKey = null, defaultChildKeyInfo = 'table', defaultKey = 'schema', checkFileExist=false) => {
    let jsonContent = `{${defaultKey}:{}}`
    let obj = {}
    obj[defaultKey] = {}
    try{
        jsonContent = await fs.readFileSync(json_path)
        jsonContent = jsonContent.toString()
        obj = JSON.parse(jsonContent)
    }catch(e){
        console.error(`Could not open input file ${json_path} error = ${e.errno}`)
        if(checkFileExist){
            return null
        }
    }

    if(setDefaultChildKey){
        console.log(obj)
        if(!obj[defaultKey][setDefaultChildKey]){
            console.error(`No definition for ${defaultChildKeyInfo} "${setDefaultChildKey}" specified in ${json_path}`)
            return null
        }
        return obj[defaultKey][setDefaultChildKey]
    }
    return obj
    
}
async function renameFile(oldPath, newPath) {
    return new Promise((resolve, reject)=>{
        fs.rename(oldPath, newPath, (error) => {
            if (error) {
              console.error('An error occurred while renaming the file:', error)
              reject(error)
            } else {
                resolve(true)
              console.log(`Rename ${oldPath} --> ${newPath}.`)
            }
          });
    })
    
  }
function strToArray(str){
  str = str.replace(/([\w=]+)/g,"\"$1\"")
  // console.log(str)
  let outStrArr = JSON.parse(str)
  // return outStrArr
  //str.replace(/^\[/,'').replace(/\]$/,'').split(',')

  for(let i in outStrArr){
    const s = outStrArr[i]
    if(Array.isArray(s)){
      outStrArr[i] = s.join(',')
    }
  }
  return outStrArr
}  
function ucfirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function dashToCamelCase(str) {
  return str.replace(/-([a-z])/g, function (match, letter) {
    return letter.toUpperCase();
  });
}
function styleToObj(str, toStr=true){
  const style = '{' + str.replace(/;/,',').replace(/([\w\.\%]+)/g,"\"$1\"") + '}'
  if(toStr)
    return style
  let obj = {}
  try {
    obj = JSON.parse(style)
  } catch (error) {
    
  }
  return obj
 
}
async function convertToXHTML(html) {
  const entities = htmlEntities
  const tidy = []
  return new Promise((resolve, reject) => {
    const parser = new Parser({
      onend: f =>{
        resolve(tidy.join(" "))
      },
      onerror: reject,
      oncomment: (data) => {
          // Handle comments as needed
          // console.log('Comment:', data);
          tidy.push(`<!--${data}-->`);
      },
      onopentag: (name, attributes) => {
        let xhtml = `<${name}`;
        for (const attr in attributes) {
          xhtml += ` ${attr}="${entities.encode(attributes[attr])}"`;
        }
        xhtml += '>';
        tidy.push(xhtml);
      },
      ontext: (text) => {
        tidy.push(entities.encode(text));
      },
      onclosetag: (tagname) => {
        tidy.push(`</${tagname}>`);
      }
    });
    parser.write(html);
    parser.end();
  });
}

export {convertToXHTML,styleToObj,dashToCamelCase,ucfirst, writeFile,camelToDashCase,excludeFields, jsonParseFile , confirm, renameFile, strToArray}