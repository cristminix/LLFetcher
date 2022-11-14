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
        if(pathArray[0] === 'learning' && pathArray[1] !== 'topics' && pathArray[1] !== 'search'){
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

const findProp = (key, src) => {
    const regexObj = new RegExp('^'+key, "g");
    for(k in src){
        if(k.match(regexObj)){
            return src[k];
        }
    }
    return null;
};
const getM3RecByType = (type,m3Rec)=>{
    let results = [];
    for(m in m3Rec){
        
        if('undefined' !== typeof m3Rec[m]._data.$type){
            if(m3Rec[m]._data.$type == type){
                results.push( [m, m3Rec[m]._data]);
            }
        }
    }
    return results;
};
const getM3Rec = ()=>{
    let app = Ember.Namespace.NAMESPACES.find(namespace => namespace instanceof Ember.Application)
    let routeCourseVideo = app.__container__.lookup('route:course/video');
    let m3Rec = routeCourseVideo.store._globalM3RecordDataCache;

    const selectUrns = [
        'com.linkedin.learning.api.deco.content.Author',
        'com.linkedin.learning.api.deco.content.Course',
        'com.linkedin.learning.api.deco.content.Video',
        'com.linkedin.learning.api.deco.content.toc.Item',
        'com.linkedin.learning.api.deco.content.toc.Section',
        'com.linkedin.learning.api.deco.content.Transcript'
    ];

    for(let surnIndex in selectUrns){
        const [m,data] = getM3RecByType(selectUrns[surnIndex],m3Rec);
        console.log(m,data);
    }
};
const getCourseInfo=()=>{
    let app = Ember.Namespace.NAMESPACES.find(namespace => namespace instanceof Ember.Application)
    const routeCourseVideo = app.__container__.lookup('route:course/video');
    const m3Rec = routeCourseVideo.store._globalM3RecordDataCache;

    let results = getM3RecByType('com.linkedin.learning.api.deco.content.Course',m3Rec);
    const courseSlug = getCourseSlug();
    let course = {
        title : courseSlug,
        slug : courseSlug,
        duration : 0,
        sourceCodeRepository : '',
        subtitle : '',
        description : '',
        urn : '',
        authors:[]
    };

    if(results.length>0){
        const [urn, courseTmp] = results[0];
        course.title = courseTmp.title;
        course.duration = courseTmp.duration.duration;
        course.sourceCodeRepository = courseTmp.sourceCodeRepository;
        course.subtitle = courseTmp.subtitle; 
        course.slug = courseTmp.slug;
        course.urn = urn;
        try{
            course.description = courseTmp.descriptionV2.text;
        }catch(e){}
    }

    results = getM3RecByType('com.linkedin.learning.api.deco.content.Author',m3Rec);

    for(let authorIndex in results){
        const [urn,authorTmp] = results[authorIndex];
        const author = {
            biography : authorTmp.biographyV2.text,
            shortBiography : authorTmp.shortBiographyV2.text,
            slug : authorTmp.slug,
            urn : urn
        };

        course.authors.push(author);
    }

    return course;
};
const getCourseSections = () => {
    let app = Ember.Namespace.NAMESPACES.find(namespace => namespace instanceof Ember.Application)
    let routeCourseVideo = app.__container__.lookup('route:course/video');
    let m3Rec = routeCourseVideo.store._globalM3RecordDataCache;
    let lac_key = 'urn:li:learningApiCourse:';
    console.log(m3Rec);
    let lac = findProp(lac_key,m3Rec);
    let secs_ = lac.__data.contents;
    let secs = []
    for(i in secs_){
        let sec_urn = secs_[i]['*section'];
        let sec = {items:[]};
        let sec_ = m3Rec[sec_urn].__data;
        sec.title = sec_.title;

        for(j in sec_['*items']){
            let si_urn = sec_['*items'][j];
            try{
                let si_ = m3Rec[m3Rec[si_urn].__data.content.video].__data;
                let si = {
                    duration : si_.duration.duration,
                    slug : m3Rec[si_.entityUrn].__data.slug,
                    title : si_.title
                };
                sec.items.push(si);
            }catch(e){
                console.log(e);
            }
            
        }
        secs.push(sec);
        
    }
    return secs;
    // console.log(lac);
}


// localStorage['courseInfo'] = JSON.stringify(courseInfo);
function resultExist(resultItem){
    for(let index in __result__){
        if(_.isEqual(resultItem, __result__[index])){
            return true;
        }
    }
    return false;
}
function getEachItem(object) {
  object.forEach(item => {
    searchItem(item)
  })
  let uniqueResults = [...new Set(result)]
  return uniqueResults.length
};
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
            __result__.push(item);
        }
      }
    }
  });   
}




const parseCodes = () => {
    const codes = document.querySelectorAll('code');
    let bpr_guid = [];
    for(i in codes){
        let el = codes[i];
        try{
            if(el.id.match(/^bpr-guid/)){
                bpr_guid.push(JSON.parse(el.textContent));
            }
        }catch(e){
            // console.log(el);
        }
    }
    return bpr_guid;
};

