const extractUrl = () => {
    const lPathArray = window.location.pathname.split("/").filter(item => item);
    const lSearch = location.search.substring(1);
    const lQueryStringObject = JSON.parse('{"' + lSearch.replace(/&/g, '","').replace(/=/g,'":"') + '"}', function(key, value) { return key===""?value:decodeURIComponent(value) })
    
    // console.log(lPathArray,lSearch,lQueryStringObject);

    return {
        pathArray : lPathArray,
        queryStringObject : lQueryStringObject
    }
};

const isCoursePage = () => {
    const urlExtract = extractUrl();
    const pathArray = urlExtract.pathArray;
    let validCoursePage = false;
    if(pathArray.length >= 2){
        if(pathArray[0] === 'learning'){
            validCoursePage = true;
        }
    }

    return validCoursePage;
};

const getCourseSlug = () => {
    const urlExtract = extractUrl();
    const pathArray = urlExtract.pathArray;
    return pathArray[1];
};

const redirectNoAutoPlay = () => {
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
    for(k in queryStringObject){
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
const isLogedIn = () => {
    return document.querySelector('li[data-live-test-me-menu]') !== null;
};
const makeDelay = (ms) => {
    var timer = 0;
    return function(callback){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
};