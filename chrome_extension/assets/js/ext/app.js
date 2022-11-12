Vue.config.devtools = false;
Vue.config.productionTip = false;
const exec = (fn, args) => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  
        const tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, {event: 'exec',fn: fn, args : args}, (r) => {});
   
    });
}


const getFmt=(url)=>{
    let str = url.split('?')[0].split('/').filter(item => item !== '')[4].replace(/^learning-original-video-/,'');
    
    let matches = ['audio','360','720','480','1080','540','hls'];

    for( m in matches){
        if(str.match(matches[m])){
            return matches[m];
        }
    }
    return str;
};

Vue.filter('getFmt',(url)=>{
    return getFmt(url);
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
            now : 0,
            min : 0,
            max : 100,
            percentage : 0,
            info : '',
            enabled : false
        },
        btnStates :{
            fetchCourse : false,
            fetchList : false,
            tocs : {},
            batchDl : false
        },
        dlConfig : {
            slug : {url:'',fmt:'',vtt:true}
        },
        fetchListQueue:[],
        batchDlQueue:[],

        //download options
        dlOptTrans : true,
        dlOptFmt : '',
        dlOptFmtList : [],
        dlOptEnabled : false,
        dlOptMsg : '',
        dlOptCls : '',

        
    },
    computed :{
        
    },
    ready:()=>{
        setTimeout(()=>{
            if('undefined' != localStorage['EXT_COURSE_INFO']){
               const ci = JSON.parse(localStorage['EXT_COURSE_INFO']);
                console.log('autoload LS',ci);
                app.slug = ci.slug;
                app.sections = ci.sections;
                app.bprs = ci.bprs;
                app.ciFetched = true;
                app.exerciseFile = ci.exerciseFile;
                app.btnStates = ci.btnStates;
                app.progress = ci.progress;
                app.dlConfig = ci.dlConfig;
                app.dlOptFmtList = ci.dlOptFmtList; 
            }
            

        },200);

    },
    methods:{
        setBtnState : (i,j,stateCode) => {
            let sections = Object.assign({},app.sections);
                sections[i].items[j].btnState = stateCode;
                 app.sections = sections;
        },
        processBatchDlQueue : ()=>{
            const q = app.batchDlQueue.shift();

            app.dlToc(q.slug,q.sectionIndex,q.itemIndex,true,(item)=>{
                console.log('BATCH_CREATE',item);
                
                app.setBtnState(q.sectionIndex,q.itemIndex,3);
            },(delta)=>{
                console.log('BATCH_CHANGE',delta);
                if('object' === typeof delta.state){
                    if(delta.state.current == 'complete'){
                        q.fileCompletes += 1;
                        let maxFile = 1;
                       
                        if(app.dlConfig[q.slug].vtt){
                            maxFile = 2;
                        }
                        if(q.fileCompletes ==maxFile){
                           
                            app.setBtnState(q.sectionIndex,q.itemIndex,4);

                            setTimeout(()=>{
                                if(app.batchDlQueue.length > 0){
                                    app.processBatchDlQueue();
                                }else{
                                    app.updatePropObj('btnStates',{batchDl:false});
                                }
                                
                            },1000);
                        }
                    }

                }
            });

            // setTimeout(()=>{

            //     console.log(q);

            // },1000);
        },
        batchDownload : () =>{
            let batchDlQueue = [];
            app.updatePropObj('btnStates',{batchDl:true});
            for(sectionIndex in app.sections){
                const tocItems = app.sections[sectionIndex].items;
                for(itemIndex in tocItems){
                    const toc = tocItems[itemIndex];
                    const tocSlug = toc.slug;
                    batchDlQueue.push({sectionIndex:sectionIndex,itemIndex:itemIndex,slug:tocSlug,fileCompletes:0});                        
                }
            }
            app.batchDlQueue = batchDlQueue;
            app.processBatchDlQueue();
        },
        validBprs : ()=>{
            return Object.keys(app.bprs).length > 0;
        },
        generateShellScript : ()=>{
            const ci = JSON.parse(localStorage.EXT_COURSE_INFO);

            const scriptFile = `${ci.slug}-util.sh`;
            const courseDir = ci.slug;
            const playlistFile = `${ci.slug}.m3u`;
            const rootDir = 'LinkedIn_Learning';
            const targetDir = `${rootDir}/${courseDir}`;

            let buffer = "#!/usr/bin/sh\n";
            
            buffer += `mkdir -p ${rootDir}\n`;
            buffer += `mkdir -p ${targetDir}\n`;

            for(sectionIndex in app.sections){
                for(itemIndex in app.sections[sectionIndex].items){
                    const item = app.sections[sectionIndex].items[itemIndex];
                    const slug = item.slug;
                    let fmt = app.dlConfig[slug].fmt;
                    if('undefined' === typeof fmt){
                        fmt = app.dlOptFmt;
                    }
                    const filename = `${slug}-${fmt}.mp4`;
                    const filenameVtt = `${slug}-${fmt}.vtt`;

                    buffer += `mv -v ${filename} ${targetDir}\n`;
                    buffer += `mv -v ${filenameVtt} ${targetDir}\n`;
                }
            }

            buffer += `mv -v ${playlistFile} ${targetDir}\n`;

            if('string' === typeof app.exerciseFile.name){
                buffer += `mv -v ${app.exerciseFile.name} ${targetDir}\n`;
            }
            buffer += `rm -f ${scriptFile}\n`;

            return {filename:scriptFile, buffer:buffer};

        },
        generateM3u : ()=>{
            const ci = JSON.parse(localStorage.EXT_COURSE_INFO);
            const playlistFile = `${ci.slug}.m3u`;

            let buffer = "#EXTM3U\n";
            
            for(sectionIndex in app.sections){
                for(itemIndex in app.sections[sectionIndex].items){
                    const item = app.sections[sectionIndex].items[itemIndex];
                    const slug = item.slug;
                    const fmt = app.dlConfig[slug].fmt;
                    const filename = `${slug}-${fmt}.mp4`;
                    const duration = item.duration;
                    const filenameEncoded = encodeURI(filename);
                    buffer += `#EXTINF:${duration},${filename}\n`;
                    buffer += `${filenameEncoded}\n`
                }
            }

            return {filename: playlistFile,buffer:buffer};
            
        },
        dlPlayList:()=>{
            const ss = app.generateM3u();
            let objectURL = window.URL.createObjectURL(new Blob([ss.buffer]));
            let a = document.createElement('a');
            a.download = ss.filename;
            a.href = objectURL;
            a.click();
        },
        dlScriptUtil:()=>{
            const ss = app.generateShellScript();
            let objectURL = window.URL.createObjectURL(new Blob([ss.buffer]));
            let a = document.createElement('a');
            a.download = ss.filename;
            a.href = objectURL;
            a.click();
        },
        dlToc:(slug,i,j,batch,cbCreated,cbChanged) => {
            const videoUrl = app.dlConfig[slug].url;
            const transcriptUrl = app.bprs[slug].transcript.captionFile;
            let fmt = app.dlConfig[slug].fmt;
            if('undefined' === typeof fmt){
                fmt = app.dlOptFmt;
            }
            const optVideo = {
                url : videoUrl,
                filename : `${slug}-${fmt}.mp4`
            };

            const optTranscript = {
                url : transcriptUrl,
                filename : `${slug}-${fmt}.vtt`
            };
            if('undefined' === typeof batch){
                batch = false;
            }
            const dlCallback = {
                onCreated : (item) => {
                    console.log('onCreated:', item);
                    if(batch){
                        if('function' === typeof cbChanged){
                            cbCreated(item);
                        }
                    }
                },
                onErased : (id) => {
                    console.log('onErased:', id);
                     
                },
                onChanged : (delta) => {
                    console.log('onChanged:', delta);
                    if(batch){
                        if('function' === typeof cbChanged){
                            cbChanged(delta);
                        }
                    }
                }
            };
            if(app.dlConfig[slug].fmt){
                chrome.downloads.download(optVideo,(id)=>{

                });
            }
            if(app.dlConfig[slug].vtt){
                chrome.downloads.download(optTranscript,(id)=>{

                });
            }
            

            chrome.downloads.onCreated.addListener(dlCallback.onCreated);
            chrome.downloads.onErased.addListener(dlCallback.onErased);
            chrome.downloads.onChanged.addListener(dlCallback.onChanged);
        },
        applyOpt:()=>{
            if(app.dlOptFmtList.indexOf(app.dlOptFmt) != -1){
                for(slug in app.bprs){
                    app.dlConfig[slug].fmt = app.dlOptFmt;
                    app.dlConfig[slug].vtt = app.dlOptTrans;

                  
                    for(sl in app.bprs[slug].strimingLocations){
                        const sloc = app.bprs[slug].strimingLocations[sl];
                        
                        if(app.dlOptFmt === sloc.fmt){
                            app.dlConfig[slug].url = sloc.url; 
                            console.log(sloc)
                        }
                    }
                }
            }

            app.dlConfig = Object.assign({},app.dlConfig); 
            app.sections = Object.assign({},app.sections); 
            ci = JSON.parse(localStorage.EXT_COURSE_INFO);
            ci.dlConfig = app.dlConfig;
            ci.sections = app.sections;
            localStorage['EXT_COURSE_INFO'] = JSON.stringify(ci);
        },
        tgDlOpt:()=>{
            app.dlOptEnabled = !app.dlOptEnabled;
        },
        processFetchListQueue:()=>{
            const q = app.fetchListQueue.shift();

            app.fetchToc(q.sectionIndex, q.itemIndex,true,()=>{

                if(app.fetchListQueue.length == 0) {
                    app.updatePropObj('btnStates',{fetchList:false});
                    app.updatePropObj('progress',{enabled:false});

                    ci = JSON.parse(localStorage.EXT_COURSE_INFO);
                    ci.btnStates.fetchList = false;
                    ci.progress.enabled = false;
                    localStorage['EXT_COURSE_INFO'] = JSON.stringify(ci);
                }else{
                    setTimeout(()=>{
                        app.processFetchListQueue();
                    },1000)
                    
                }
                
            },()=>{

            });
        },
        fetchVideoList : ()=>{
            app.updatePropObj('btnStates',{fetchList:true});
            app.updatePropObj('progress',{enabled:true});
            let fetchListQueue = [];
            for(sectionIndex in app.sections){
                const tocItems = app.sections[sectionIndex].items;
                for(itemIndex in tocItems){
                    const toc = tocItems[itemIndex];
                    const tocSlug = toc.slug;
                    // check if fetched
                    if(!app.dlConfig[tocSlug].fetched){
                        fetchListQueue.push({sectionIndex:sectionIndex,itemIndex:itemIndex,slug:tocSlug});                        
                    }
                }
            }
            app.fetchListQueue = fetchListQueue;
            app.processFetchListQueue();
        },
        calculateProgress:(sectionIndex,itemIndex)=>{
            const tocSlugs = Object.keys(app.dlConfig);
            const totalVideoCount = tocSlugs.length;
            const fetchedVideoCount = Object.keys(app.bprs).length;
            // let progress = Object.assign({},app.progress);
            const percentage =  Math.round(fetchedVideoCount / totalVideoCount * 100);
            // progress.now = progress.percentage;
            app.updatePropObj('progress',{
                now : percentage,
                percentage : percentage
            });
        },
        // updateProp('dlConfig',{tocSlug:{url:url,fmt:fmt}})
        updatePropObj:(key,newObj)=>{
            let tmpObj = Object.assign({},app[key]);
            for(k in newObj){
                tmpObj[k] = newObj[k];
            }
            app[key]=tmpObj;
        },
        setDlConfig:(tocSlug, url, fmt)=>{

            let dlConfig_toc = Object.assign({},app.dlConfig[tocSlug]);
            dlConfig_toc.url = url;
            dlConfig_toc.fmt = fmt;

            let dlConfig_tocs = {};
            dlConfig_tocs[tocSlug]=dlConfig_toc;

            app.updatePropObj('dlConfig',dlConfig_tocs);
            app.updatePropObj('sections',{});

            ci = JSON.parse(localStorage.EXT_COURSE_INFO);
            ci.dlConfig = app.dlConfig;
            localStorage['EXT_COURSE_INFO'] = JSON.stringify(ci);
        },
        tglDlConfigVtt:(tocSlug)=>{
            let dlConfig_toc = Object.assign({},app.dlConfig[tocSlug]);
            dlConfig_toc.vtt = !dlConfig_toc.vtt;
            let dlConfig_tocs = {};
            dlConfig_tocs[tocSlug]=dlConfig_toc;
            
            app.updatePropObj('dlConfig',dlConfig_tocs);
            app.updatePropObj('sections',{});

            ci = JSON.parse(localStorage.EXT_COURSE_INFO);
            ci.dlConfig = app.dlConfig;
            localStorage['EXT_COURSE_INFO'] = JSON.stringify(ci);
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
        fetchToc :  (i,j,processQueue, cbSuccess, cbError) => {
            let toc = app.sections[i].items[j];
            let dlConfig_tocs = Object.assign({},app.dlConfig);

            let progress = Object.assign({},app.progress);
            let dots = ['.'];
            progress.info = `Processing : ${toc.title} `;
            app.progress = progress;
            let iv = setInterval(()=>{
                
                progress = Object.assign({},app.progress);
                
                progress.info = progress.info + ' ' +dots.join(' ');
                app.progress = progress;

                dots.push('.');

                if(dots.length > 5){
                    dots = ['.'];
                }

            },250);

            const tocSlug = `${toc.slug}`;
            let btnStates = Object.assign({},app.btnStates);
            toc.btnState = 1;
            const url = toc.url;

            app.btnStates = btnStates;
            app.sections = Object.assign({},app.sections);

            Prx.get(url,(r)=>{
                clearInterval(iv);
                progress = Object.assign({},app.progress);
                progress.info = '';
                app.progress = progress;

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
                let strimingLocationObjs = app.findBpr('$type',"com.linkedin.videocontent.StreamingLocation",bprStore,['expiresAt','url'],true);
                
                let bprs = Object.assign({},app.bprs);
                if(app.exerciseFile === null){
                    app.exerciseFile = exerciseFileObj;
                }
                if(strimingLocationObjs.length>0){
                    app.dlOptFmtList = [];
                }
                

                for(stlIdx in strimingLocationObjs){
                    const fmt = getFmt(strimingLocationObjs[stlIdx].url);
                    strimingLocationObjs[stlIdx].fmt = fmt;
                    app.dlOptFmtList.push(fmt);
                }

                if(strimingLocationObjs.length>0){
                    app.dlOptFmtList = Object.assign([],app.dlOptFmtList);
                }
                
                bprs[tocSlug]={
                    // exerciseFile : exerciseFileObj,
                    transcript : transcriptObj,
                    strimingLocations : strimingLocationObjs
                };
                if(strimingLocationObjs.length>0){
                    dlConfig_tocs[toc.slug].fetched = true;
                    toc.btnState = 2;
                }else{
                    toc.btnState = 0;
                    progress = Object.assign({},app.progress);
                    progress.percentage = progress.percentage - 1;
                    progress.now=progress.percentage;

                    app.progress = progress;
                    delete bprs[toc.slug];

                    if(processQueue){
                        app.fetchListQueue.push({sectionIndex:i,itemIndex:j,slug:toc.slug});
                    }
                }
                sections = Object.assign({},app.sections);
                sections[i].items[j] = toc;
                app.sections = sections;
                app.bprs = bprs;
                app.dlConfig = dlConfig_tocs;
                app.calculateProgress();
                const ci = {
                    slug : app.slug,
                    sections : app.sections,
                    bprs : app.bprs,
                    exerciseFile : exerciseFileObj,
                    btnStates : btnStates,
                    progress : app.progress,
                    dlConfig : dlConfig_tocs,
                    dlOptFmtList : app.dlOptFmtList
                };
                const dataStr =JSON.stringify(ci);
                console.log('save LS',ci);
                localStorage['EXT_COURSE_INFO'] = dataStr;

                if(processQueue){
                    if(typeof cbSuccess === 'function'){
                        cbSuccess();
                    }
                }
                
            },(r)=>{

            });

            

            
            
        },
        fetchCourseInfo : () =>{
            exec('EXT_COURSE_INFO');
            let btnStates = {
                fetchCourse : true,
                fetchList : false,
                batchDl : false
                // tocs : {}
            };
            let progress = {
                now : 0,
                min : 0,
                max : 100,
                percentage : 0,
                info : '',
                enabled : false
            };
            let dlConfig ={

            };
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
                                dlConfig[tocSlug] = {fetched:false,vtt:true,sectionIndex:i,itemIndex:j};
                                ci.sections[i].items[j].url = `${base}/${tocSlug}`;
                            }
                                
                        }
                        
                    }
                    ci.btnStates = btnStates;
                    ci.progress = progress;
                    ci.exerciseFile = null;
                    ci.dlConfig = dlConfig;

                    console.log('save LS', ci);
                    const dataStr =JSON.stringify(ci);
                    localStorage['EXT_COURSE_INFO'] = dataStr;
                    // chrome.storage.sync.set({EXT_COURSE_INFO:dataStr} , (r) => {console.log(r)});
                    app.slug = ci.slug;
                    app.sections = ci.sections;
                    app.bprs = ci.bprs;
                    app.exerciseFile = null;
                    app.btnStates = btnStates;
                    app.progress = progress;
                    app.dlConfig = dlConfig;
                });
            },2000);
        }
    }
});