import util from 'util'
import child_process from 'child_process'
import fs from 'fs'
import path from 'path'
const exec = util.promisify(child_process.exec)
const slugify = (str) => str.toLowerCase()
                            .replace(/[^a-z0-9]+/g, '-')
                            .replace(/(^-|-$)+/g, '')
// detectShell.js
import os from 'os';



const runCommand = async(command, logger)=>{
    let response = null
  try {
    const { stdout, stderr } = await exec(command)
    logger.info('Command output:', stdout)
    logger.error('Command errors:', stderr)
    response = {stdout,stderr}
  } catch (error) {
    response = error
    logger.error('Error executing command:', error)
  }

  return response
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
            callback(data)
        })
        child.on('exit', function (code) {
            callback('complete')
            console.log('child process exited with code ' + code.toString())
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

            console.log({
                type: 'log',
                data: line
            })
        }
    })

   return response
}
const runAria2c = async(url,filename,cookies,logger)=>{
    let cookieStr =cookiesToString(cookies)
    const cookieStrUnix = cookieStr.replace(/\"/g,'\\"')//.replace(/\&/g,'\\&')
    let headers = `--header "cookie: ${cookieStrUnix}" `
    let command = `aria2c "${url}" --disable-ipv6 --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0"  --out="${filename}"  ${headers}`

    // `
    let response = null
    const platform = process.platform;

    console.log('Operating System:', platform);

    if (platform === 'win32') {
        console.log('You are running on Windows.')
        cookieStr = cookieStr.replace(/\"/g,'\\\"\"')
        command = ""
        const cookieHeader = `cookie: ${cookieStr}"`
        const cmdTest = 'node arg_test.cjs'
        command = `aria2c "${url}" --disable-ipv6 --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0"  --out="${filename}"  --header "${cookieHeader}"`
        const scriptPath = 'command-test.bat'
        await fs.writeFileSync(scriptPath,command)
        response = await runCommand(`${command}`,logger)

    } else if (platform === 'darwin' || platform === 'linux') {
        console.log('You are running on unix');

        const scriptPath = 'command-test.sh'
        await fs.writeFileSync(scriptPath,command)
        response = await runCommand(`${command}`,logger)

    } else {
        console.log('Unsupported operating system.');
    }
    
    return response
}
const runAria2c_shell = async(url,filename,cookies,logger)=>{
    let cookieStr =cookiesToString(cookies)
    const cookieStrUnix = cookieStr.replace(/\"/g,'\\"')//.replace(/\&/g,'\\&')
    let headers = `--header "cookie: ${cookieStrUnix}" `
    let command = `aria2c "${url}" --disable-ipv6 --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0"  --out="${filename}"  ${headers}`

    // `
    let response = null
    const platform = process.platform;

    console.log('Operating System:', platform);

    if (platform === 'win32') {
        console.log('You are running on Windows.')
        cookieStr = cookieStr.replace(/\"/g,'\\\"\"')
        command = ""
        command += `@echo off
setlocal enableDelayedExpansion
set "ESC=^"
set "cookie=cookie: ${cookieStr}"\n\n`
        command += `aria2c "${url}" --disable-ipv6 --user-agent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36 Edg/121.0.0.0"  --out="${filename}"  --header "%cookie%"`
        const scriptPath = 'command-test.bat'
        await fs.writeFileSync(scriptPath,command)
        response = await runCommand(`${scriptPath}`,logger)

    } else if (platform === 'darwin' || platform === 'linux') {
        console.log('You are running on unix');

        const scriptPath = 'command-test.sh'
        await fs.writeFileSync(scriptPath,command)
        response = await runCommand(`bash ${scriptPath}`,logger)

    } else {
        console.log('Unsupported operating system.');
    }
    
    return response
}
const logger = {
    info(a){
        console.log(a)
    },
    error(a){
        console.error(a)
    }
}
const main = async()=>{
    const url = 'https://www.linkedin.com/dms/prv/vid/C4E0DAQH3hgtgN8Q-ZQ/learning-original-video-vbr-720/0/1616097987316?ea=73722380&ua=226898049&e=1707988769&v=beta&t=eHyKqNlhY0NXaXrApwgUhj4deo33JKZoV8HiMh0igWk'
    const cookies = JSON.parse(await fs.readFileSync('./cookies.json'))
    const filename = 'video.mp4'
    const course = {
        slug : 'learning-go-8399317'
    }
    const response = await spawnAria2c(url,filename,cookies,course,logger)

    console.log(response)
    process.exit(0)
}

main()