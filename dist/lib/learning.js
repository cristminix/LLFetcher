// console.log("hello hacker")
function isEqual (obj1, obj2) {
	return _.isEqual(obj1, obj2)
}
/***************************/
function createReactRootElement() {
    $(document.body).prepend(`<div id="app-container"><div id="content-script-root"></div></div>`)
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}
/**
 * Example route
 * /search
 * URL changed to /search?contentBy=urn%3Ali%3Aorganization%3A1337&difficultyLevel=BEGINNER&durations=BETWEEN_0_TO_10_MIN&entityType=COURSE&keywords=puppeteer&u=95231473
 * */
function getParams(){
    
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
    // let value = params.some_key; // "some_value"
    console.log(params)
}

function attachRouteChangesEvent(callback){
    let previousUrl = '';

    let observer = new MutationObserver(function(mutations) {
    if (location.href !== previousUrl) {
          previousUrl = location.href;
          const path = location.href.replace(/https\:\/\/www\.linkedin\.com\/learning/,'')
          callback(path)
        }
    });

    const config = {subtree: true, childList: true};
    observer.observe(document, config);    
}

function detectVideoJs(callback){
    waitForElm('.video-js').then((elm) => {
        // console.log('.video-js is ready');
        callback(elm)
    });
}
function isCoursePage(){
	return $('div[data-avail-test]').attr('data-avail-test') === 'page:course'
}
// function getCourseSlug(){
// 	const ci = getCourseInfo()
// 	return ci.slug
// }

function getCourseSlugByPath(path){
	let slug = ''
	try{
		path.split('/')
		slug = path.split('/')[1]
	}catch(e){}

	return slug
}
function redirectNoAutoPlay(){

}
function getM3Rec(){
    let Ember;
    try {
      Ember = requireModule('ember')['default'];
    } catch {
      Ember = window.Ember;
    }
    try{

        let app = Ember.Namespace.NAMESPACES.find(namespace => namespace instanceof Ember.Application)
        let store = app.__container__.lookup('service:store')
        return store._globalM3RecordDataCache
    }catch(e){
    }
    return null
}
const getM3RecByType = (type,m3Rec)=>{
    let results = []
    for(let m in m3Rec){
        
        if('undefined' !== typeof m3Rec[m]._data.$type){
            if(m3Rec[m]._data.$type == type){
                results.push( [m, m3Rec[m]._data])
            }
        }
    }
    return results
}
const findProp = (key, src) => {
    const regexObj = new RegExp('^'+key, "g")
    for(let k in src){
        if(k.match(regexObj)){
            return src[k]
        }
    }
    return null
}
function getCourseInfo(slug){
    const m3Rec = getM3Rec()

    if(m3Rec === null){
        return null
    }

    let results = getM3RecByType('com.linkedin.learning.api.deco.content.Course',m3Rec)
  
    let course = {
        title : '',
        slug : '',
        duration : 0,
        sourceCodeRepository : '',
        subtitle : '',
        description : '',
        urn : '',
        authors:[]
    }

    results = results.filter(result => {
    	let valid = false
    	try{
    		if(result.length > 1){
    			result = result.filter(item => typeof item === 'object')
    			result = result[0]
    			valid = result.slug === slug
    		}
    	}catch(e){
    		console.log(e)
    	}
    	return valid
    })

    if(results.length>0){
        const [urn, courseTmp] = results[0]
        course.title = courseTmp.title
        course.duration = courseTmp.duration.duration
        course.sourceCodeRepository = courseTmp.sourceCodeRepository
        course.subtitle = courseTmp.subtitle 
        course.slug = courseTmp.slug
        course.urn = urn
        try{
            course.description = courseTmp.descriptionV2.text
        }catch(e){}
    }

    results = getM3RecByType('com.linkedin.learning.api.deco.content.Author',m3Rec)

    for(let authorIndex in results){
        try{
            const [urn,authorTmp] = results[authorIndex]
            const author = {
                biography : authorTmp.biographyV2.text,
                shortBiography : authorTmp.shortBiographyV2.text,
                slug : authorTmp.slug,
                urn : urn
            }

            course.authors.push(author)
        }catch(e){
            console.log(e)
        }
        
    }

    return course
}
function getCourseSections(urn){
    const m3Rec = getM3Rec()
    let secs = []

    let lac_key = urn
    let lac = findProp(lac_key,m3Rec)
    let secs_ 
    try { secs_ = lac.__data.contents} catch(e){
        return secs
    }
    for(let i in secs_){
        let sec_urn = secs_[i]['*section']
        let sec = {items:[]}
        try{
            let sec_ = m3Rec[sec_urn].__data
            sec.title = sec_.title
            sec.itemStars = sec_['*items']
            for(let j in sec_['*items']){
                let si_urn = sec_['*items'][j]
                try{
                    let si_ = m3Rec[m3Rec[si_urn].__data.content.video].__data
                    let si = {
                        duration : si_.duration.duration,
                        slug : m3Rec[si_.entityUrn].__data.slug,
                        title : si_.title,
                        itemStar: si_urn,
                        vStatusUrn: si_['*lyndaVideoViewingStatus']
                    }
                    sec.items.push(si)
                }catch(e){
                    console.log(e)
                }
                
            }
            secs.push(sec)
        }catch(e){
            console.log(e)
        }
        

        
        
    }
    return secs
}
function createDataCodes(slug){


    const courseInfo = {
        course : getCourseInfo(slug),
        sections : getCourseSections(slug),
    }
    console.log(courseInfo)
    
    let code = document.querySelector('#dataCodes')
    if(!code){

    	code = document.createElement('code')
    	code.id = 'dataCodes'
    	let node = document.getElementsByTagName('body')[0]
    	node.appendChild(code)
    }
    
    code.setAttribute('data', JSON.stringify(courseInfo))  
    
}
function isLogedIn(){
    // return document.querySelector('li[data-live-test-me-menu]') !== null
    return true
}
function pauseVideo(timeout=5000){
	detectVideoJs(()=>{
        setTimeout(()=>{
            document.querySelector('video').pause()
        },timeout)
    })
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

function cookiesToJSON() {
    var cookies = document.cookie.split(';');
    var result = {};
  
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i].trim();
      var delimiterIndex = cookie.indexOf('=');
  
      var name = cookie.substr(0, delimiterIndex);
      var value = cookie.substr(delimiterIndex + 1);
  
      result[name] = decodeURIComponent(value);
    }
  
    return JSON.stringify(result);
  }