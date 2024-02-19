
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
import path from 'path'

const exec = util.promisify(child_process.exec)
const slugify = (str) => str.toLowerCase()
                            .replace(/[^a-z0-9]+/g, '-')
                            .replace(/(^-|-$)+/g, '')
function dirOpen(dirPath, logger) {
    let command = ''
    return
    dirPath = path.resolve(dirPath)
    switch (process.platform) {
        case 'darwin':
            command = 'open'
        break
        case 'win32':
            command = 'explorer'
        break
        default:
            command = 'xdg-open'
        break
    }
    logger.info('open explorer dir', `${command} "${dirPath}"`)
    return runCommand(`${command} "${dirPath}"`)
}
const runCommand = async(command, logger, oMsg=null)=>{
    return new Promise(async(resolve, reject)=>{
        let output = {stderr:'', stdout:''}
        try {
            output = await exec(command)
            logger.info(output)
            if(oMsg){
                delete(oMsg.data)

                oMsg.output = output
                sendMessageToChrome(oMsg, logger)
            }
            
            resolve(output)
        }catch(e){
            logger.error(e)
            if(oMsg){
                delete(oMsg.data)

                oMsg.output = e.toString()
                sendMessageToChrome(oMsg, logger)
            }
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
const spawnCommand = async(command, args,logger, callback=f=>f)=>{
    return new Promise((resolve, reject)=>{
        const spawn = child_process.spawn
        let child = spawn(command, args)

        child.stdout.on('data', (data)=> {
            callback(data, 'progress')
        })
        child.on('exit', function (code) {
            console.log('child process exited with code ' + code.toString())
            callback(code, 'complete')

            resolve(true)
        })
    })
}
const spawnAria2c = async(url, filename, cookies, course, logger)=>{
    const {slug} = course
    const downloadDir = `storage/downloads/${slug}`
    const outFilename=  `${downloadDir}/${filename}`
    let cookieStr =cookiesToString(cookies)
    const cookieHeader = `cookie: ${cookieStr}`
    let lastLogLine = null
    let response = await spawnCommand('aria2c', [
        // argTestScriptPath,
        url,
        '--disable-ipv6',
        '--user-agent', "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0",
        '--out', outFilename,
        '--header', cookieHeader,
        // '--auto-file-renaming','false'
    ],logger,(data)=>{
        if(data == 'complete'){
            if(oMsg){
                delete(oMsg.data)

                oMsg.output = lastLogLine
                sendMessageToChrome(oMsg, logger)
            }
            return
        }
        
        let line = data.toString().replace('[','').replace(']','').trim()
        if(line == '')
            return
        if(line.includes('%')){
            let lines = line.split(' ')
            lines.shift()
            // console.log(lines)
            let [progress,conn,loaded,eta]=lines
            if(conn)
                conn = conn.replace('CN:','')
            if(loaded)
                loaded = loaded.replace('DL:','')
            if(eta)
                eta = eta.replace('ETA:','')
            else
                eta = 0
            console.log({
                type: 'delta',
                data :{
                    progress,
                    conn,
                    loaded,
                    eta
                }
            })
            // callback(line)
        }else if(line.includes('NOTICE')){
            let lines = line.split(' ')
            lines.shift()
            lines.shift()
            lines.shift()
            line = lines.join(' ')
            console.log({
                type: 'notice',
                data: line
            })
        }else{
            lastLogLine = line
            console.log({
                type: 'log',
                data: line
            })
        }
    })

   return response
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
            runCommand(`${command}`,logger,oMsg).then(response=>{
                dirOpen(downloadDir,logger)
                resolve(response)
            }).catch(e=>reject(e))

        } else if (platform === 'darwin' || platform === 'linux') {
            runCommand(`${command}`,logger,oMsg).then(response=>{
                dirOpen(downloadDir,logger)
                resolve(response)
            }).catch(e=>reject(e))
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