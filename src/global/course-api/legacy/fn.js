import { isEqual, result } from "underscore"

function findItems(searchTerm, source){
    let __searchTerm__ = searchTerm
    let __results__ = []
  
    function resultExist(resultItem){
      for(let index in __results__){
          if(isEqual(resultItem, __results__[index])){
              return true
          }
      }
      return false
    }
    function searchItem(item) { 
      if('undefined' == typeof item || item == null){
          return
      }
      Object.keys(item).forEach(key => {
        if (typeof item[key] === "object") {
          searchItem(item[key])
        }
        if (typeof item[key] === "string") {
          let searchAsRegEx = new RegExp(__searchTerm__, "gi")
          if (item[key].match(searchAsRegEx)) {
            if(!resultExist(item)){
                __results__.push(item)
            }
          }
        }
      })   
    }
    searchItem(source)
  
    return __results__
  }
  
  // findBpr('$type','com.linkedin.learning.api.deco.content.ExerciseFile',bprStore,['sizeInBytes','name','url'],false)
   function findDS(k,v,src,props,list){
    list = 'undefined' === typeof list ? false : list
    let lists = []
    for(let i in src){
        const obj = src[i]
        if('undefined' !== typeof obj[k]){
            if(obj[k] === v){
                let rets = {}
                for(let j in props){
                    const prop = props[j]
                    if('undefined' !== typeof obj[prop]){
                        rets[prop] = obj[prop]
                    }else{
                        rets[prop] = null
                    }
                }
                if(!list){
                    return rets
                }else{
                    lists.push(rets)
                }  
            }
        }
    }
    return lists
  }
  function getM3Rec(){
    let Ember
    try {
      Ember = requireModule('ember')['default']
    } catch {
      Ember = window.Ember
    }
    try{

        let app = Ember.Namespace.NAMESPACES.find(namespace => namespace instanceof Ember.Application)
        let store = app.__container__.lookup('service:store')
        return store._globalM3RecordDataCache
    }catch(e){
    }
    return null
}
const getDsRecordsByType = (type,ds)=>{
    let results = []
    const keys = Object.keys(ds)
    for(const key of keys){
        const item = ds[key]
        if(item.__data){
            if(item.__data.$type){
                
                if(item.__data.$type == type){
                    console.log(item.__data.$type == type)
                    results.push(item.__data)
                }
            }
        }
    }
    console.log(results)
    return results
}
const findProp = (key, src, recursive = false) => {
    if(!key || !src){
        return null
    }
    // if(!src){
    //     return null
    // }
    const regexObj = new RegExp('^'+key, "g")
    const keys = Object.keys(src)
    for(const k of keys){
        // console.log(`${k} == ${key}`)
        const row = src[k]
        if(k.match(regexObj)){
            return row
        }else{
            if(recursive){
                if(typeof row === 'object' && row !== null){
                    const result = findProp(key, row, recursive)
                    if(result){
                        return result
                    }
                }
            }
        }
    }
    return null
}

export {
    getDsRecordsByType,
    findProp
}