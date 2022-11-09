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
        ciFetched : false
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
            app.slug = ci.slug;
            app.sections = ci.sections;
            app.bprs = ci.bprs;
            app.ciFetched = true;

        },200);

    },
    methods:{
        toCnotFetched : (i,j)=>{

        },
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
            const url = toc.url;

            Prx.get(url,(r)=>{
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
                console.log(bpr_guid);

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

                bprs[`${toc.slug}`]={
                    exerciseFile : exerciseFileObj,
                    transcript : transcriptObj,
                    strimingLocations : strimingLocationObjs
                };

                toc.fetched = true;
                let sections = Object.assign({},app.sections);
                sections[i].items[j] = toc;
                app.sections = sections;
                app.bprs = bprs;

                const ci = {
                    slug : app.slug,
                    sections : app.sections,
                    bprs : app.bprs
                };
                const dataStr =JSON.stringify(ci);
                localStorage['EXT_COURSE_INFO'] = dataStr;
                chrome.storage.sync.set({EXT_COURSE_INFO:dataStr} , (r) => {console.log(r)});

                console.log(app.bprs);
                // console.log(exerciseFileObj, transcriptObj, strimingLocationObjs);

                // console.log(r);
            },(r)=>{});
        },
        fetchCourseInfo : () =>{
            exec('EXT_COURSE_INFO');
            setTimeout(()=>{
                chrome.storage.sync.get(['EXT_COURSE_INFO'] , (r) => {
                    const ci = JSON.parse(r.EXT_COURSE_INFO);
                    

                    // build toc url slug
                    const base = `https://www.linkedin.com/learning/${ci.slug}`;
                    for (i in ci.sections) {
                        for (j in ci.sections[i].items) {
                            if('undefined' === typeof ci.sections[i].items[j].url)
                                ci.sections[i].items[j].url = `${base}/${ci.sections[i].items[j].slug}`;
                        }
                        
                    }
                    const dataStr =JSON.stringify(ci);
                    localStorage['EXT_COURSE_INFO'] = dataStr;
                    chrome.storage.sync.set({EXT_COURSE_INFO:dataStr} , (r) => {console.log(r)});
                    app.slug = ci.slug;
                    app.sections = ci.sections;
                    app.bprs = ci.bprs;
                });
            },1000);
        }
    }
});