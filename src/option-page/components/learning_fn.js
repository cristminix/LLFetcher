import jQuery from "jquery"
import _ from "underscore"
function isEqual (obj1, obj2) {
	return _.isEqual(obj1, obj2)
}
function findItems(searchTerm, source){
    let __searchTerm__ = searchTerm;
    let __results__ = [];
  
    function resultExist(resultItem){
      for(let index in __results__){
          if(isEqual(resultItem, __results__[index])){
              return true;
          }
      }
      return false;
    }
    function searchItem(item) { 
      if('undefined' == typeof item || item == null){
          return;
      }
      Object.keys(item).forEach(key => {
        if (typeof item[key] === "object") {
          searchItem(item[key])
        }
        if (typeof item[key] === "string") {
          let searchAsRegEx = new RegExp(__searchTerm__, "gi");
          if (item[key].match(searchAsRegEx)) {
            if(!resultExist(item)){
                __results__.push(item);
            }
          }
        }
      });   
    }
    searchItem(source);
  
    return __results__;
  }
  
  // findBpr('$type','com.linkedin.learning.api.deco.content.ExerciseFile',bprStore,['sizeInBytes','name','url'],false)
   function findDS(k,v,src,props,list){
    list = 'undefined' === typeof list ? false : list;
    let lists = [];
    for(let i in src){
        const obj = src[i];
        if('undefined' !== typeof obj[k]){
            if(obj[k] === v){
                let rets = {};
                for(let j in props){
                    const prop = props[j];
                    if('undefined' !== typeof obj[prop]){
                        rets[prop] = obj[prop];
                    }else{
                        rets[prop] = null;
                    }
                }
                if(!list){
                    return rets;
                }else{
                    lists.push(rets);
                }  
            }
        }
    }
    return lists;
  }
  
  function getCommonFmt(url, prefix){
  
  }
  
  function getFmt(url){
      console.log(url)
      let str = ""
  
      try{
          if(url.match(/learning-original-video-iphone/)){
              str = url.split('?')[0].split('/').filter(item => item !== '')[4].replace(/^learning-original-video-iphone-/,'');
          }else{
              str = url.split('?')[0].split('/').filter(item => item !== '')[4].replace(/^learning-original-video-/,'');
      
          }  
        
        let matches = ['audio','360','720','480','1080','540','hls'];
      
        for( let m in matches){
            if(str.match(matches[m])){
                return matches[m];
            }
        }
      }catch(e){
          console.log(e)
      }
      try{
          if(url.match(/360/)){
              return '360'
          }
          else if(url.match(/720/)){
              return '720'
          }
          else if(url.match(/480/)){
              return '480'
          }
          else if(url.match(/1080/)){
              return '1080'
          }
          else if(url.match(/540/)){
              return '540'
          }
          else if(url.match(/hls/)){
              return 'hls'
          }
          else if(url.match(/audio/)){
              return 'audio'
          }
      }catch(e){
          console.log(e)
      }
      
    return str;
  }
  function parseToc(responseText){
    jQuery.expr[':'].containsRegex = jQuery.expr.createPseudo(function (pattern) {
        var regex = new RegExp(pattern, 'i')
        return function (elem) {
            return regex.test($(elem).text())
        }
    })
      let errorMessage = null

      let validResource = false;
      const elDiv  = jQuery(`<div>${responseText}</div>`)
      
      
      const signInBtns = elDiv.find('a:containsRegex("sign in")')

      if(signInBtns.length > 0){
        errorMessage = "ERR_NO_LOGIN"
      }
      const elCodes = elDiv.find('code');
      let dataCodes = [];
      
      let toc = {captionUrl:'',captionFmt:''}
      let streamLocations = [];
      let exerciseFile = null
      for(let codeIndex in elCodes){
          let elCode = elCodes[codeIndex];
          try{
              if(elCode.id.match(/^bpr-guid/)){
                  dataCodes.push(JSON.parse(elCode.textContent));
              }
          }catch(e){}
      }
      if(dataCodes.length > 0){
        // console.log(dataCodes);
        const searchTerms = [
            "com.linkedin.learning.api.deco.content.ExerciseFile",
            "com.linkedin.videocontent.Transcript",
            "com.linkedin.videocontent.StreamingLocation"
        ];
        for(let searchTermIdx = 0; searchTermIdx < searchTerms.length; searchTermIdx++){
            const query = searchTerms[searchTermIdx];
            const results = findItems(query, dataCodes);
            if(searchTermIdx == 0){
              // exerciseFile
              try{
                const exerciseFileObj = findDS('$type','com.linkedin.learning.api.deco.content.ExerciseFile',results,['sizeInBytes','name','url']);
                // this.exerciseFile = exerciseFileObj as ExerciseFile;
                exerciseFile = exerciseFileObj
              }catch(e){}
            }
            else if(searchTermIdx == 1){
              // transcript
              const transcriptObj = findDS('$type',"com.linkedin.videocontent.Transcript",results,['captionFile','captionFormat']);
              if('object' === typeof transcriptObj){
                toc.captionUrl = transcriptObj.captionFile  || ''
                toc.captionFmt = transcriptObj.captionFormat || ''
              }
            }
            if(searchTermIdx == 2){
              // streamLocations
              const streamLocationObjs = findDS('$type',"com.linkedin.videocontent.StreamingLocation",results,['expiresAt','url'],true);
              if(streamLocationObjs.length > 0 ){
                  for(let stlIdx in streamLocationObjs){
                    const url = streamLocationObjs[stlIdx].url;
                    const fmt = getFmt(url);
                    streamLocations.push({url,fmt})
                }
              }
            }
        }
      }
      if( streamLocations.length > 0){
          validResource = true
      }
      return [validResource, toc, exerciseFile, streamLocations, errorMessage]
  }
 
const fetchCourseTocMeta = async(courseSlug,tocSlug)=> {
	const {hasError, responseText} = await fetchCourseTocPage(courseSlug, tocSlug)
    if(!hasError){
        return parseToc(responseText)
    }
    
    return [false, null, null, null, "n00b"]
}
const fetchCourseTocPage = async(courseSlug, tocSlug)=>{
    const url =  `https://www.linkedin.com/learning/${courseSlug}/${tocSlug}`
    let hasError = false
    let responseText = ""
    let error
    try{
        const res = await fetch(`${url}?rand=${(new Date).getTime()}`)
        responseText = await res.text()
    }catch(e){
        hasError = true
        error = e
        console.log(e)
    }
    return {hasError, responseText, error}
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
function formatBytes(bytes) {
    if (bytes === 0) {
      return '0 Bytes';
    }
  
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const formattedValue = parseFloat((bytes / Math.pow(1024, i)).toFixed(2));
  
    return `${formattedValue} ${sizes[i]}`;
  }
async function fetchDownload(url, outputFilename, mime, progressCallback, index) {
    return new Promise((resolve, reject)=>{
        let contentType
        fetch(url)
        .then(response => {

            const contentEncoding = response.headers.get('content-encoding')
            let contentLength = response.headers.get(contentEncoding ? 'x-file-size' : 'content-length')
            contentType = response.headers.get('content-type') || mime
            if (contentLength === null) {
                contentLength = 0
                // throw Error('Response size header unavailable');
            }

            const total = parseInt(contentLength, 10);
            let loaded = 0;
            return new Response(
                new ReadableStream({
                    start(controller) {
                        let lastReadDate = new Date

                        const reader = response.body.getReader();

                        read();
                        
                        function read() {
                            reader.read().then(({done, value}) => {
                                if (done) {
                                    controller.close();
                                    return;
                                }
                                loaded += value.byteLength;
                                const lastLoaded = value.byteLength
                                progressCallback({loaded, total, index, lastReadDate, lastLoaded})
                                lastReadDate = new Date
                                controller.enqueue(value);
                                read();
                            }).catch(error => {
                                console.error(error);
                                controller.error(error)
                            })
                        }
                    }
                })
            );
        })
        .then(response => response.blob())
        .then(blob => {
            // let blobUrl = URL.createObjectURL(blob)
            resolve(blob)
            // player.style.display = 'block';
            // player.type = contentType;
            // player.src = vid;
            // elProgress.innerHTML += "<br /> Press play!";
        })
        .catch(error => {
            reject(error)
            console.error(error)
        })
    })
    
}

export {findDS, findItems, parseToc, fetchCourseTocMeta, calculateSpeed, formatBytes,fetchDownload}