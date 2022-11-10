Vue.config.devtools = false;
Vue.config.productionTip = false;
const exec = (fn, args) => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  
        const tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, {event: 'exec',fn: fn, args : args}, (r) => {});
   
    });
}
const fetchCIBtn = document.getElementById('fetchCIBtn');
const fetchCICode = document.getElementById('fetchCICode');


// chrome.runtime.onMessage.addListener(function (response, sendResponse) {
//     console.log(response);
// });
Vue.filter('videoUrl',(url)=>{
    let str = url.split('?')[0].split('/').filter(item => item !== '')[4].replace(/^learning-original-video-/,'');
    str = str.replace(/learning-original-/,'');
    str = str.replace(/_110_200_310_524_800_1200/,'');
    return str;
});
app = new Vue({
    el : '#app',
    data :{
        sections :[],
        slug : 'none',
        search:{
            term : '',
            results : []
        },
        bprs:{},
        exerciseFile: null,
        ciFetched : false,
        progress:{
            now : 20,
            min : 0,
            max : 100,
            percentage : 20,
            info : 'Hello'
        },
        btnStates :{
            fetchCourse : true,
            fetchList : true,
            tocs : {}
        }
    },
    watch:{
        // bprs :{
        //     deep : true
        // },
        // sections:{
        //     deep:true
        // }
    },
    ready:()=>{
        setTimeout(()=>{
            const ci = JSON.parse(localStorage['EXT_COURSE_INFO']);
            console.log(ci)
            app.slug = ci.slug;
            app.sections = ci.sections;
            app.bprs = ci.bprs;
            app.ciFetched = true;
            app.exerciseFile = ci.exerciseFile;
            app.btnStates = ci.btnStates;
            app.progress = ci.progress;

        },200);

    },
    methods:{
        // findBpr('$type','com.linkedin.learning.api.deco.content.ExerciseFile',bprStore,['sizeInBytes','name','url'],false)
        findBpr : (k,v,src,props,list)=>{
            list = 'undefined' === typeof list ? false : list;
            let lists = [];
            for(i in src){
                const obj = src[i];
                

                if('undefined' !== typeof obj[k]){
                    if(obj[k] === v){
                        let rets = {};
                        for(j in props){
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
        },
        searchItem : (item) => { 
            if('undefined' == typeof item || item == null){
                return;
            }
          Object.keys(item).forEach(key => {
            if (typeof item[key] === "object") {
              app.searchItem(item[key])
            }
            if (typeof item[key] === "string") {
              let searchAsRegEx = new RegExp(app.search.term, "gi");
              if (item[key].match(searchAsRegEx)) {
                app.search.results.push(item)
              }
            }
          });   
        },
        fetchToc : (i,j) => {
            let toc = app.sections[i].items[j];
            let progress = Object.assign({},app.progress);
            progress.info = `Processing : ${toc.title} `;
            app.progress = progress;
            let iv = setInterval(()=>{
                progress = Object.assign({},app.progress);
                progress.info = progress.info + '.';
                app.progress = progress;

            },250);

            const tocSlug = `${toc.slug}`;
            let btnStates = Object.assign({},app.btnStates);
            toc.btnState = 1;
            const url = toc.url;
            // btnStates[tocSlug] = 1;

            app.btnStates = btnStates;
            app.sections = Object.assign({},app.sections);

            Prx.get(url,(r)=>{
                clearInterval(iv);
                progress = Object.assign({},app.progress);
                progress.info = '';
                app.progress = progress;
                toc.btnState = 2;
                let sections = Object.assign({},app.sections);
                sections[i].items[j] = toc;
                app.sections = sections;

                

                const nd  = $(`<div>${r}</div>`);
                const codes = nd.find('code');
                let bpr_guid = [];
                
                for(idx in codes){
                    let el = codes[idx];
                    try{
                        if(el.id.match(/^bpr-guid/)){
                            bpr_guid.push(JSON.parse(el.textContent));
                        }
                    }catch(e){
                        // console.log(el);
                    }
                }
                // console.log(bpr_guid);

                app.search.term = '';
                const searchTerms = [
                    "com.linkedin.learning.api.deco.content.ExerciseFile",
                    "com.linkedin.videocontent.Transcript",
                    "com.linkedin.videocontent.StreamingLocation"
                ];

                app.search.results = [];
                for(is in searchTerms){
                    app.search.term = searchTerms[is];
                    app.searchItem(bpr_guid);
                }
                // console.log(bpr_guid);
                const bprStore = app.search.results;
                const exerciseFileObj = app.findBpr('$type','com.linkedin.learning.api.deco.content.ExerciseFile',bprStore,['sizeInBytes','name','url']);
                const transcriptObj = app.findBpr('$type',"com.linkedin.videocontent.Transcript",bprStore,['captionFile','captionFormat']);
                const strimingLocationObjs = app.findBpr('$type',"com.linkedin.videocontent.StreamingLocation",bprStore,['expiresAt','url'],true);
                
                let bprs = Object.assign({},app.bprs);
                if(app.exerciseFile === null){
                    app.exerciseFile = exerciseFileObj;
                }
                
                bprs[tocSlug]={
                    // exerciseFile : exerciseFileObj,
                    transcript : transcriptObj,
                    strimingLocations : strimingLocationObjs
                };
                
                sections = Object.assign({},app.sections);
                sections[i].items[j] = toc;
                app.sections = sections;
                app.bprs = bprs;

                const ci = {
                    slug : app.slug,
                    sections : app.sections,
                    bprs : app.bprs,
                    exerciseFile : exerciseFileObj,
                    btnStates : btnStates,
                    progress : app.progress
                };
                const dataStr =JSON.stringify(ci);
                localStorage['EXT_COURSE_INFO'] = dataStr;
                chrome.storage.sync.set({EXT_COURSE_INFO:dataStr} , (r) => {console.log(r)});

                console.log(ci);
                // console.log(exerciseFileObj, transcriptObj, strimingLocationObjs);

                // console.log(r);
            },(r)=>{});
        },
        fetchCourseInfo : () =>{
            exec('EXT_COURSE_INFO');
            let btnStates = {
                fetchCourse : true,
                fetchList : false,
                // tocs : {}
            };
            let progress = {
                now : 0,
                min : 0,
                max : 100,
                percentage : 0,
                info : 'Hello'
            }
            app.btnStates = btnStates;
            setTimeout(()=>{
                chrome.storage.sync.get(['EXT_COURSE_INFO'] , (r) => {
                    const ci = JSON.parse(r.EXT_COURSE_INFO);
                    

                    // build toc url slug
                    const base = `https://www.linkedin.com/learning/${ci.slug}`;
                    
                    btnStates = Object.assign({},app.btnStates);
                    btnStates.fetchCourse = false;
                    for (i in ci.sections) {
                    
                        for (j in ci.sections[i].items) {
                            if('undefined' === typeof ci.sections[i].items[j].url){
                                const tocSlug = ci.sections[i].items[j].slug;
                                ci.sections[i].items[j].btnState = 0;
                                ci.sections[i].items[j].url = `${base}/${tocSlug}`;
                            }
                                
                        }
                        
                    }
                    ci.btnStates = btnStates;
                    ci.progress = progress;
                    ci.exerciseFile = null;

                    const dataStr =JSON.stringify(ci);
                    localStorage['EXT_COURSE_INFO'] = dataStr;
                    chrome.storage.sync.set({EXT_COURSE_INFO:dataStr} , (r) => {console.log(r)});
                    app.slug = ci.slug;
                    app.sections = ci.sections;
                    app.bprs = ci.bprs;
                    app.exerciseFile = null;
                    app.btnStates = btnStates;
                    app.progress = progress;
                });
            },2000);
        }
    }
});