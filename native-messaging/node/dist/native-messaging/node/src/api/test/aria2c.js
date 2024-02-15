import util from 'util'
import child_process from 'child_process'
import fs from 'fs'

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
    const response = await runAria2c(url,filename,cookies,logger)
    console.log(response)
    process.exit(0)
}

main()