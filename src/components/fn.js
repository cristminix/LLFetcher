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
		        chrome.tabs.sendMessage(tab.id, evt, callback)
		    })
	    }else{
	    	chrome.runtime.sendMessage(evt,callback);
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
		sendMessage('console.log', args)
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
const downloadFile = async(kind, data)=>{
      const config = {
        slug : `${data.course.slug}`,
        downloadConfig : data.downloadConfig,
        exerciseFile : data.exerciseFile,
        sections : data.sections,
        tocs : data.tocs
      }
      if(kind === 'shell_script' || kind === 'batch_script' || kind === 'playlist'){
        // config.sections.forEach((section)=>{
        //   const sectionTmp = section as unknown as Section_tableField;
        //   section.items = Store.getTocsBySectionId(sectionTmp.ID) as unknown as Toc[];
        // });
        // config.sections = sections;
      }
      createDownloadFile(kind,config)
      console.log(kind)
}
/* generateShellScript({
**      slug : string, // ${course.slug}-${downloadConfig.selectedFmtList}
**      sections : Section[],
**      downladConfig : DownloadConfig_tableField,
**      exerciseFile : ExerciseFile_tableField,
** })
**/
function generateShellScript(config){

    const scriptFile = `${config.slug}-${config.downloadConfig.selectedFmtList}-helper.sh`
    const courseDir = config.slug
    const playlistFile = `${config.slug}-${config.downloadConfig.selectedFmtList}.m3u`
    const rootDir = 'LinkedIn_Learning'
    const targetDir = `${rootDir}/${courseDir}`

    let buffer = "#!/usr/bin/sh\n"
    
    buffer += `mkdir -p ${rootDir}\n`
    buffer += `mkdir -p ${targetDir}\n`

    for(let sectionIndex in config.sections){
        for(let itemIndex in config.sections[sectionIndex].items){
            const item = config.sections[sectionIndex].items[itemIndex]
            const slug = item.slug
            let fmt = config.downloadConfig.selectedFmtList
           
            const filename = `${slug}-${fmt}.mp4`
            const filenameVtt = `${slug}-${fmt}.vtt`

            buffer += `mv -v ${filename} ${targetDir}\n`
            buffer += `mv -v ${filenameVtt} ${targetDir}\n`
        }
    }

    buffer += `mv -v ${playlistFile} ${targetDir}\n`

    if('string' === typeof config.exerciseFile.name){
        buffer += `mv -v ${config.exerciseFile.name} ${targetDir}\n`
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
    const playlistFile = `${config.slug}-${config.downloadConfig.selectedFmtList}.m3u`

    let buffer = "#EXTM3U\n";
    
    for(let sectionIndex in config.sections){
        for(let itemIndex in config.sections[sectionIndex].items){
            const item = config.sections[sectionIndex].items[itemIndex]
            const slug = item.slug
            const fmt = config.downloadConfig.selectedFmtList
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
        fileObject = generateShellScript(config)
        objectURL = window.URL.createObjectURL(new Blob([fileObject.buffer]))
        anchor.download = fileObject.filename
    }
    else if(kind == 'exercise_file'){
        objectURL = config.exerciseFile.url   
        anchor.download = config.exerciseFile.name
    }
    
    
    anchor.href = objectURL
    anchor.click()
}
export {
	onMessage,
	MsgEvt,
	sendMessage,
	konsole,
	titleCase,
	slugify,
	timeout,
	makeDelay,
	isEqual,
	isRefsHasCurrent,
	createDownloadFile,
	downloadFile,
	generateM3u,
	generateShellScript
}

