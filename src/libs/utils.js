import _ from 'underscore';


export function formatBytes(bytes) {
  if (bytes > 1024) return (bytes / 1024).toFixed(1) + 'K'
  return String(bytes)
}



export function findItems(searchTerm, source){
  let __searchTerm__ = searchTerm;
  let __results__ = [];

  function resultExist(resultItem){
    for(let index in __results__){
        if(_.isEqual(resultItem, __results__[index])){
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
export function findDS(k,v,src,props,list){
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

export function getFmt(url){
  let str = url.split('?')[0].split('/').filter(item => item !== '')[4].replace(/^learning-original-video-/,'');
  
  let matches = ['audio','360','720','480','1080','540','hls'];

  for( let m in matches){
      if(str.match(matches[m])){
          return matches[m];
      }
  }
  return str;
}

export function makeTitle(slug) {
  const words = slug.split('-');
  
  for (let i = 0; i < words.length; i++) {
      var word = words[i];
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  
  return words.join(' ');
}