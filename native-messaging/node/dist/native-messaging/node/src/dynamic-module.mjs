
import {
    // requireModule,
    sendMessageToChrome,
    controllerPrefixMatch   
} from "./fn.js"

import ytuploadCtl from "./api/nm-routes/ytupload.js"
import userCtl from "./api/nm-routes/user.js"
import util from 'util'
import child_process from 'child_process'
import fs from 'fs'

const exec = util.promisify(child_process.exec)
const slugify = (str) => str.toLowerCase()
                            .replace(/[^a-z0-9]+/g, '-')
                            .replace(/(^-|-$)+/g, '')

const runCommand = async(command, logger, oMsg)=>{
    return new Promise(async(resolve, reject)=>{
        let output = {stderr:'', stdout:''}
        try {
            output = await exec(command)
            logger.info(output)
            delete(oMsg.data)

            oMsg.output = output
            sendMessageToChrome(oMsg, logger)
            resolve(output)
        }catch(e){
            logger.info(e)
            reject(e)
        }
    })
}

const cookiesToString = (cookiesArr) => {
    let cookies = ''
    cookiesArr.map(item=>{
        const {name,value} = item
        cookies += `${name}=${value}; `
    })

    return cookies
}

const runAria2c = async(url,filename,cookies,course,logger,oMsg)=>{
    return new Promise(async(resolve, reject)=>{

        const {slug} = course
        // prepare download dir
        const downloadDir = `storage/downloads/${slug}`
        await fs.mkdirSync(downloadDir, { recursive: true })

        const outFilename = `${downloadDir}/${filename}`
        let cookieStr =cookiesToString(cookies)
        const cookieStrUnix = cookieStr.replace(/\"/g,'\\"')//.replace(/\&/g,'\\&')
        let headers = `--header "cookie: ${cookieStrUnix}" `
        let command = `aria2c "${url}" --disable-ipv6 --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0"  --out="${outFilename}"  ${headers}`

        let response = null
        const platform = process.platform;

        if (platform === 'win32') {
            cookieStr = cookieStr.replace(/\"/g,'\\\"\"')
            command = ""
            const cookieHeader = `cookie: ${cookieStr}"`
            const cmdTest = 'node arg_test.cjs'
            command = `aria2c "${url}" --disable-ipv6 --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0"  --out="${outFilename}"  --header "${cookieHeader}"`
            runCommand(`${command}`,logger,oMsg).then(response=>resolve(response)).catch(e=>reject(e))

        } else if (platform === 'darwin' || platform === 'linux') {
            runCommand(`${command}`,logger,oMsg).then(response=>resolve(response)).catch(e=>reject(e))
        } else {
            response = 'Unsupported operating system.'
            resolve(response)
        }

    })
}

const parseMessage = async(message,logger, ds)=>{
   
    let oMsg = null
    let output = 'n.a'
    let skipSendMessage = false
    try{
        oMsg = JSON.parse(message)


    }catch(e){
        logger.info(e)
    }
    if(oMsg){
        logger.info(oMsg)
        const {cmd,data} = oMsg
        if(controllerPrefixMatch(cmd,ytuploadCtl)){
            output = await ytuploadCtl.controller(cmd,data,ds,logger)
        }
        else if(controllerPrefixMatch(cmd,userCtl)){
            output = await userCtl.controller(cmd,data,ds,logger)
        }else if(cmd === 'ping'){
            output = 'pong'
        }else if(cmd === 'send_cookies'){
            output = 'cookies_sent'
        }else if(cmd==='download.aria2c'){
            const {url,filename,cookies,course} = data
            runAria2c(url,filename,cookies,course,logger,oMsg)
            // output = 'download_started'
            skipSendMessage = true
        }else{
            output=`unknown command: ${cmd}`
        }
    }
    if(!skipSendMessage){
        oMsg.output = output
        delete(oMsg.data)
        sendMessageToChrome(oMsg, logger)
    }
    
}

export {
    parseMessage
}