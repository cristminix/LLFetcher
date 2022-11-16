function getM3Rec(){
    try{
        let app = Ember.Namespace.NAMESPACES.find(namespace => namespace instanceof Ember.Application)
        let routeCourseVideo = app.__container__.lookup('route:course/video');
        return routeCourseVideo.store._globalM3RecordDataCache;
    }catch(e){
    }
    return null;
}
const getM3RecByType = (type,m3Rec)=>{
    let results = [];
    for(let m in m3Rec){
        
        if('undefined' !== typeof m3Rec[m]._data.$type){
            if(m3Rec[m]._data.$type == type){
                results.push( [m, m3Rec[m]._data]);
            }
        }
    }
    return results;
};
const findProp = (key, src) => {
    const regexObj = new RegExp('^'+key, "g");
    for(let k in src){
        if(k.match(regexObj)){
            return src[k];
        }
    }
    return null;
};
function getCourseInfo(){
    const m3Rec = getM3Rec();

    if(m3Rec === null){
        return null;
    }

    let results = getM3RecByType('com.linkedin.learning.api.deco.content.Course',m3Rec);
  
    let course = {
        title : '',
        slug : '',
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
}
function getCourseSections(){
    const m3Rec = getM3Rec();
    let lac_key = 'urn:li:learningApiCourse:';
    let lac = findProp(lac_key,m3Rec);
    let secs_ = lac.__data.contents;
    let secs = []
    for(let i in secs_){
        let sec_urn = secs_[i]['*section'];
        let sec = {items:[]};
        let sec_ = m3Rec[sec_urn].__data;
        sec.title = sec_.title;

        for(let j in sec_['*items']){
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
}
function createDataCodes(){


    const courseInfo = {
		course : getCourseInfo(),
		sections : getCourseSections(),
	};
	console.log(courseInfo);
	
	let code = document.createElement('code');
    code.id = 'course_info';
    code.setAttribute('data', JSON.stringify(courseInfo));	
	let node = document.getElementsByTagName('body')[0];
    node.appendChild(code);
}


window.onload = ()=>{createDataCodes()};
