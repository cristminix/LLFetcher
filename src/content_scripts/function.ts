function extractUrl() {
    const lPathArray = window.location.pathname.split("/").filter(item => item);
    const lSearch = location.search.substring(1);
    const lQueryStringObject = JSON.parse('{"' + lSearch.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) })
    
    return {
        pathArray : lPathArray,
        queryStringObject : lQueryStringObject
    }
}

function isCoursePage() : boolean {
    const urlExtract = extractUrl();
    const pathArray = urlExtract.pathArray;
    let validCoursePage = false;
    if(pathArray.length >= 2){
        if(pathArray[0] === 'learning' && pathArray[1] !== 'topics' && pathArray[1] !== 'search'){
            validCoursePage = true;
        }
    }

    return validCoursePage;
};

function getCourseSlug(){
    const urlExtract = extractUrl();
    const pathArray = urlExtract.pathArray;
    return pathArray[1];
};

function redirectNoAutoPlay(){
    const urlExtract = extractUrl();
    const pathArray = urlExtract.pathArray;
    const queryStringObject = urlExtract.queryStringObject;
    let redirect = false;
    if(typeof queryStringObject.autoplay != 'undefined'){
        if(queryStringObject.autoplay == 'true'){
            queryStringObject.autoplay = 'false';
            redirect = true;
        }
    }
    if(typeof queryStringObject.resume != 'undefined'){
        if(queryStringObject.resume == 'true'){
            queryStringObject.resume = 'false';
            redirect = true;
        }
        
    }else{
        queryStringObject.resume = 'false';
        redirect = true;
    }

    let newUrl = `/${pathArray[0]}/${pathArray[1]}`;
    let qsIdx = 0;
    for(let k in queryStringObject){
        if(qsIdx == 0){
            newUrl += '?';
        }else{
            newUrl += '&'; 
        }
        newUrl += `${k}=${queryStringObject[k]}`;
        qsIdx +=1;
    }
    if(redirect){
        window.location.href = newUrl;
    }
};

function isLogedIn(){
    return document.querySelector('li[data-live-test-me-menu]') !== null;
};

function makeDelay(ms : number) : any {
    let timer:any;
    return function(callback : any){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
};

let __result__ : any[] = [];
let __searchTerm__ = '';

function resultExist(resultItem : any){
    for(let index in __result__){
        if(_.isEqual(resultItem, __result__[index])){
            return true;
        }
    }
    return false;
}

function searchItem(item : any) { 
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
            __result__.push(item);
        }
      }
    }
  });   
}

console.log(`is course page : ${isCoursePage()}`);

export {isCoursePage,redirectNoAutoPlay};