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
const timeout =(ms)=> {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const konsole = {
	log(...args){
		// sendMessage('console.log', args)
	}
}

const titleCase = str => {
	let words = str.replace(/\W+/g,' ').split(' ').map(word=>word.charAt(0).toUpperCase() + word.slice(1))
	return words.join(' ')
}

const slugify = str => {
	const words = str.replace(/\W+/g,' ').split(' ')
    return words.join('-').toLowerCase()
}
const makeDelay = ms => {
    let timer = 0
    return function(callback){
        clearTimeout (timer)
        timer = setTimeout(callback, ms)
        return timer
    };

}
function isEqual (obj1, obj2) {

	/**
	 * More accurately check the type of a JavaScript object
	 * @param  {Object} obj The object
	 * @return {String}     The object type
	 */
	function getType (obj) {
		return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
	}

	function areArraysEqual () {

		// Check length
		if (obj1.length !== obj2.length) return false;

		// Check each item in the array
		for (let i = 0; i < obj1.length; i++) {
			if (!isEqual(obj1[i], obj2[i])) return false;
		}

		// If no errors, return true
		return true;

	}

	function areObjectsEqual () {

		if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;

		// Check each item in the object
		for (let key in obj1) {
			if (Object.prototype.hasOwnProperty.call(obj1, key)) {
				if (!isEqual(obj1[key], obj2[key])) return false;
			}
		}

		// If no errors, return true
		return true;

	}

	function areFunctionsEqual () {
		return obj1.toString() === obj2.toString();
	}

	function arePrimativesEqual () {
		return obj1 === obj2;
	}

	// Get the object type
	let type = getType(obj1);

	// If the two items are not the same type, return false
	if (type !== getType(obj2)) return false;

	// Compare based on type
	if (type === 'array') return areArraysEqual();
	if (type === 'object') return areObjectsEqual();
	if (type === 'function') return areFunctionsEqual();
	return arePrimativesEqual();

}
const isRefsHasCurrent = refs =>{
	return refs.filter(ref => isEmpty(ref))
}
const isEmpty = mixedVar => {
  let undef
  let key
  let i
  let len
  const emptyValues = [undef, null, false, 0, '', '0']
  for (i = 0, len = emptyValues.length; i < len; i++) {
    if (mixedVar === emptyValues[i]) {
      return true
    }
  }
  if (typeof mixedVar === 'object') {
    for (key in mixedVar) {
      if (mixedVar.hasOwnProperty(key)) {
        return false
      }
    }
    return true
  }
  return false
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

const queryDownloadProgress = async(filenames)=>{
    let dlist = await chrome.downloads.search({limit: 1000})
    if(dlist.length > 0){
        dlist = dlist.filter(d=>d.byExtensionName === "LLFetcher")
        dlist = dlist.filter(d=>{
            const dfname = d.filename.split(/[\\/]/).pop()
            const cmpresult = filenames.filter(fname=>{
                const [base,ext] = fname.split('.')
                const baserx = new RegExp(base) 
                const extrx = new RegExp(`\.${ext}$`)
                return dfname.match(base) && dfname.match(extrx)
            })
            return cmpresult.length > 0
        })
        console.log(dlist)
        const elist = dlist.filter(d=>d.state === 'interrupted')
        const slist = dlist.filter(d=>d.state === 'complete')
        const ilist = dlist.filter(d=>d.state === 'in_progress')
        

        return [ elist, slist, ilist]
    }
    return [[], [],[]]
}

const getDownloadFilenames = (downloads) => {
    return downloads.map(d=>d.filename)
}
const validateUrl = (value) => {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(value);
}

export {
	onMessage,
	MsgEvt,
	sendMessage,
	titleCase,
	slugify,
	timeout,
	makeDelay,
	isEqual,
	isRefsHasCurrent,
	createDownloadFile,
	generateM3u,
	generateShellScript,
    queryDownloadProgress,
    getDownloadFilenames,
    validateUrl,
    konsole
}

