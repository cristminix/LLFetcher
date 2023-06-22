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
      let validResource = false;
      const elDiv  = jQuery(`<div>${responseText}</div>`);
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
      
      return [validResource, toc, exerciseFile, streamLocations]
  }
    
  export {findDS, findItems, parseToc}