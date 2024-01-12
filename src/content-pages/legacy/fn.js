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

            for(let j in sec_['*items']){
                let si_urn = sec_['*items'][j]
                try{
                    let si_ = m3Rec[m3Rec[si_urn].__data.content.video].__data
                    let si = {
                        duration : si_.duration.duration,
                        slug : m3Rec[si_.entityUrn].__data.slug,
                        title : si_.title
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
export {
    getM3Rec,
    getM3RecByType,
    getCourseInfo,
    getCourseSections
}