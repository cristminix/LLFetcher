/**
 * Adds a custom :containsRegex pseudo selector to jQuery 
 * that matches elements whose text content matches the 
 * given regular expression.
*/
const applyJQueryContainsRegex = jq => {
    jq.expr[':'].containsRegex = jq.expr.createPseudo(function (pattern) {
        var regex = new RegExp(pattern, 'i')
        return function (elem) {
            return regex.test(jq(elem).text())
        }
    })
}
const slugify = str => {
	const words = str.replace(/\W+/g,' ').split(' ')
    return words.join('-').toLowerCase()
}
const onMessage = (callback) => {
	try{
		chrome.runtime.onMessage.addListener((evt, source) =>{
			callback(evt, source);  
		});
	}catch(e){
		console.log(e)
	}	

}
const MsgEvt = (name, data = null) => {
	return {name, data}
}
const sendMessage = (eventName, data = null, target='content', callback = f => f) => {
	const evt = MsgEvt(eventName, data)
    try{
		if(target === 'content'){
	    	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		        const tab = tabs[0];
		        chrome.tabs.sendMessage(tab.id, evt,  (response) => {
                    if (!chrome.runtime.lastError) {
                        // if you have any response
                        callback()
                    } else {
                        // if you don't have any response it's ok but you should actually handle
                        // it and we are doing this when we are examining chrome.runtime.lastError
                    }
                })
		    })
	    }else{
	    	chrome.runtime.sendMessage(evt, (response) => {
                if (!chrome.runtime.lastError) {
                    // if you have any response
                    callback()
                } else {
                    // if you don't have any response it's ok but you should actually handle
                    // it and we are doing this when we are examining chrome.runtime.lastError
                }
            })
	    }
    }catch(e){
    	console.log(e)
    }
    
    
}
const titleCase = str => {
	let words = str.replace(/\W+/g,' ').split(' ').map(word=>word.charAt(0).toUpperCase() + word.slice(1))
	return words.join(' ')
}
const formatBytes=(bytes) =>{
    if (bytes === 0) {
      return '0 Bytes';
    }
  
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const formattedValue = parseFloat((bytes / Math.pow(1024, i)).toFixed(2));
  
    return `${formattedValue} ${sizes[i]}`;
  }
  const makeDelay = ms => {
    let timer = 0
    return function(callback){
        clearTimeout (timer)
        timer = setTimeout(callback, ms)
        return timer
    };

}
function generateBatchScript(config){

    const scriptFile = `${config.slug}-${config.fmt}-helper.cmd`
    const courseDir = config.slug
    const playlistFile = `${config.slug}-${config.fmt}.m3u`
    const rootDir = 'LinkedIn_Learning'
    const targetDir = `${rootDir}\\${courseDir}`

    let buffer = `@echo off\nrem ${scriptFile}\n` 
    const dp0 = "%~dp0"
    buffer += `mkdir  "${dp0}${rootDir}"\n`
    buffer += `mkdir  "${dp0}${targetDir}"\n`
    for(let sidx in config.sections){
        const section = config.sections[sidx]
        for(let tidx in config.tocs[section.slug]){
            const item = config.tocs[section.slug][tidx]
            const slug = item.slug
            const fmt = config.fmt
            const filename = `${slug}-${fmt}.mp4`
            const filenameVtt = `${slug}-${fmt}.vtt`

            buffer += `move "${dp0}${filename}" "${dp0}${targetDir}"\n`
            buffer += `move "${dp0}${filenameVtt}" "${dp0}${targetDir}"\n`
        }
    }

    buffer += `move  "${dp0}${playlistFile}" "${dp0}${targetDir}"\n`
    try{
        if('string' === typeof config.exerciseFile.name){
            buffer += `move  "${dp0}${config.exerciseFile.name}" "${dp0}${targetDir}"\n`
        }
    }catch(e){
        console.log(e)
    }
    buffer += `del "${dp0}${scriptFile}"\n`

    return {filename:scriptFile, buffer:buffer}

}
function generateShellScript(config){

    const scriptFile = `${config.slug}-${config.fmt}-helper.sh`
    const courseDir = config.slug
    const playlistFile = `${config.slug}-${config.fmt}.m3u`
    const rootDir = 'LinkedIn_Learning'
    const targetDir = `${rootDir}/${courseDir}`

    let buffer = "#!/usr/bin/sh\n"
    
    buffer += `mkdir -p ${rootDir}\n`
    buffer += `mkdir -p ${targetDir}\n`
    for(let sidx in config.sections){
        const section = config.sections[sidx]
        for(let tidx in config.tocs[section.slug]){
            const item = config.tocs[section.slug][tidx]
            const slug = item.slug
            const fmt = config.fmt
            const filename = `${slug}-${fmt}.mp4`
            const filenameVtt = `${slug}-${fmt}.vtt`

            buffer += `mv -v ${filename} ${targetDir}\n`
            buffer += `mv -v ${filenameVtt} ${targetDir}\n`
        }
    }

    buffer += `mv -v ${playlistFile} ${targetDir}\n`
    try{
        if('string' === typeof config.exerciseFile.name){
            buffer += `mv -v ${config.exerciseFile.name} ${targetDir}\n`
        }
    }catch(e){
        console.log(e)
    }
    
    buffer += `rm -f ${scriptFile}\n`

    return {filename:scriptFile, buffer:buffer}

}
/* generateM3u({
**      slug : string, // ${course.slug}-${downloadConfig.selectedFmtList}
**      sections : Section[],
**      downladConfig : DownloadConfig_tableField,
** })
**/
function generateM3u(config){
    const playlistFile = `${config.slug}-${config.fmt}.m3u`

    let buffer = "#EXTM3U\n";
    
    for(let sidx in config.sections){
        const section = config.sections[sidx]
        for(let tidx in config.tocs[section.slug]){
            const item = config.tocs[section.slug][tidx]
            const slug = item.slug
            const fmt = config.fmt
            const filename = `${slug}-${fmt}.mp4`
            const duration = item.duration
            const filenameEncoded = encodeURI(filename)
            buffer += `#EXTINF:${duration},${filename}\n`
            buffer += `${filenameEncoded}\n`
        }
    }

    return {filename: playlistFile,buffer:buffer}
    
}

function createDownloadFile(kind,config){
    let fileObject = null
    let objectURL = null
    let anchor = document.createElement('a')

    if(kind == 'playlist'){
        fileObject = generateM3u(config)
        objectURL = window.URL.createObjectURL(new Blob([fileObject.buffer]))
        anchor.download = fileObject.filename
    }
    else if(kind == 'shell_script'){
        fileObject = generateShellScript(config)
        objectURL = window.URL.createObjectURL(new Blob([fileObject.buffer]))
        anchor.download = fileObject.filename
    }
    else if(kind == 'batch_script'){
        fileObject = generateBatchScript(config)
        objectURL = window.URL.createObjectURL(new Blob([fileObject.buffer]))
        anchor.download = fileObject.filename
    }
    // else if(kind == 'exercise_file'){
    //     objectURL = config.exerciseFile.url   
    //     anchor.download = config.exerciseFile.name
    //     anchor.target="_blank"

    // }
    // else if(kind == 'sourse_repo'){
    //     objectURL = config.sourceRepo   
    //     anchor.download = config.sourceRepo 
    // }
    
    
    anchor.href = objectURL
    anchor.click()
}
const timeout =(ms)=> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
function calculateSpeed(loaded,startTime,endTime) {
    //Time taken in seconds
    let timeDuration = (endTime - startTime) / 1000;
    //total bots
    let loadedBits = loaded;
    let speedInBps = (loadedBits / timeDuration).toFixed(2);
    // let speedInKbps = (speedInBps / 1024).toFixed(2);
    // let speedInMbps = (speedInKbps / 1024).toFixed(2);
  
    // bitOutput.innerHTML += `${speedInBps}`;
    // kboutput.innerHTML += `${speedInKbps}`;
    // mboutput.innerHTML += `${speedInMbps}`;

    return speedInBps
}
const formatLeadingZeros = (number, size=2) => {
    // Ensure the input is a number
    if (typeof number !== 'number') {
        throw new Error('Input must be a number')
    }
    
    // Use toLocaleString to format the number with leading zeros
    return number.toLocaleString('en-US', {
        minimumIntegerDigits: size,
        useGrouping: false
    })
}

export {
    applyJQueryContainsRegex,
    slugify,
    sendMessage,
    onMessage,
    titleCase,
    formatBytes,
    makeDelay,
    createDownloadFile,
    timeout,
    calculateSpeed,formatLeadingZeros   
}