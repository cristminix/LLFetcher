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
            let newSection = app.sections[i].items[j];
            const url = newSection.url;

            Prx.get(url,(r)=>{
                const nd  = $(`<div>${r}</div>`);
                const codes = nd.find('code');
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
                console.log(bpr_guid);

                app.search.term = '';
                const searchTerms = [
                    "com.linkedin.learning.api.deco.content.ExerciseFile",
                    "com.linkedin.videocontent.Transcript",
                    "com.linkedin.videocontent.StreamingLocation"
                ];

                app.search.results = [];
                for(i in searchTerms){
                    app.search.term = searchTerms[i];
                    app.searchItem(bpr_guid);
                }
                // console.log(bpr_guid);
                const bprStore = app.search.results;
                const exerciseFileObj = app.findBpr('$type','com.linkedin.learning.api.deco.content.ExerciseFile',bprStore,['sizeInBytes','name','url']);
                const transcriptObj = app.findBpr('$type',"com.linkedin.videocontent.Transcript",bprStore,['captionFile','captionFormat']);
                const strimingLocationObjs = app.findBpr('$type',"com.linkedin.videocontent.StreamingLocation",bprStore,['expiresAt','url'],true);
                
                app.bprs[`${newSection.slug}`]={
                    exerciseFile : exerciseFileObj,
                    transcript : transcriptObj,
                    strimingLocations : strimingLocationObjs
                };

                newSection.fetched = true;
                app.sections[i].items[j] = newSection;
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
                            ci.sections[i].items[j].url = `${base}/${ci.sections[i].items[j].slug}`;
                        }
                        
                    }

                    app.slug = ci.slug;
                    app.sections = ci.sections;
                });
            },1000);
        }
    }
});