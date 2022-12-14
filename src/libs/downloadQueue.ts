import { App_tableField, Course_tableField, DownloadConfig_tableField, Downloads_tableField, Section_tableField,DownloadState_tableField } from "src/types/tableFields";
import Store from "../libs/store";
import { myLogServer,getLineInfo } from "../libs/utils";

const logServer = myLogServer();

interface DownloadOption {
    url : string,
    filename : string,
    tocId : number,
    courseId : number
}


export default class DownloadQueue{
    
    queues : Downloads_tableField[];
    counts = 0;
    successQueues : Downloads_tableField[];
    currentDownload : Downloads_tableField = null;
    downloadHandlerSet = false;
    queueStarted = false;

    app : App_tableField = null;
    course : Course_tableField = null;
    downloadState : DownloadState_tableField = null;
    downloadConfig : DownloadConfig_tableField = null;
    sections : Section_tableField [];

    fmt : string = null;
    downloadOptions : DownloadOption[] = [];
    resetQueueAfterFinish: boolean = true;
    resetQueueOnError: boolean = true;

    constructor(){
        // this.init();
    }

    init(){
        // this.app = Store.getAppState();
        // this.course = Store.getCourse(this.app.lastCourseSlug);
        // Store.onReady(()=>{
            // this.downloadState = Store.getDownloadState(this.course.ID);
            // this.downloadConfig = Store.getDownloadConfig(this.course.ID);
            // this.sections = Store.getSectionsByCourseId(this.course.ID);

            // this.fmt = this.downloadConfig.selectedFmtList;
        // });
        
    }
    setCourse(course: Course_tableField) {
        let reInit = false;
        if(this.course === null){
            this.course = course;
            reInit = true;
        }
        else if(this.course.ID != course.ID){
            this.course = course;
            reInit = true;
        }

        if(reInit){
            this.resetQueue();
            // this.init();
        }

    }
    truncateTables(){
        // Store.db().getStoreDB().truncate('downloads');
        // Store.db().commit();
    }
    resetQueue(){
        this.queues = [];
        this.counts = 0;
        this.successQueues = [];
        this.currentDownload = null;
        this.downloadOptions = [];
        this.queueStarted = false;
        /*
        downloadCounts = 0;
            downloadQueues = [];
            downloadSuccessQueues = [];
            currentDownload = null;
            queueStarted = false;
            Store.db().getStoreDB().truncate('downloads');
            Store.db().commit();
        */
    }
    populate(fn){
        Store.onReady(()=>{
            this.downloadState = Store.getDownloadState(this.course.ID);
            this.downloadConfig = Store.getDownloadConfig(this.course.ID);
            this.sections = Store.getSectionsByCourseId(this.course.ID);

            this.fmt = this.downloadConfig.selectedFmtList;
            this.sections.forEach((section)=>{
                const items = Store.getTocsBySectionId(section.ID);
                items.forEach((toc)=>{
                    const streamLocations = Store.getStreamLocations(toc.ID).filter((r)=>{return r.fmt == this.fmt});
                    let streamLoc;
                    if(streamLocations.length>0){
                        streamLoc = streamLocations[0];
                        const videoUrl = streamLoc.url;
                        const transcriptUrl = toc.captionUrl;
                        const optVideo = {
                            url : videoUrl,
                            filename : `${toc.slug}-${this.fmt}.mp4`,
                            tocId : toc.ID,
                            courseId : this.course.ID
                        };
                        const optTranscript = {
                            url : transcriptUrl,
                            filename : `${toc.slug}-${this.fmt}.vtt`,
                            tocId : toc.ID,
                            courseId : this.course.ID
                        };
                        this.downloadOptions.push(optVideo);
                        this.downloadOptions.push(optTranscript);
                    }
                })
            })
            for(let idx in this.downloadOptions){
                const dl = this.downloadOptions[idx];
                let download = Store.getDownload(dl.tocId,dl.filename);
                if(download){
                    // logServer.logWeb('updateDownload',getLineInfo());
                    download.url = dl.url;
                    download.filename = dl.filename;
                    // download = Store.updateDownload(download.ID,download);
                }else{
                    // logServer.logWeb('createDownload',getLineInfo());
                    download = Store.createDownload(dl.url,dl.filename,dl.tocId,dl.courseId);
                } 
                this.queues.push(download);
            }
            this.counts = this.queues.length;
            Store.db().commit();
    
            if(typeof fn == 'function'){
                fn(this.queues);
            }
            
        }) 
        
    }
    startQueue(){
        this.processQueue();
    }
    processQueue(){
        if(this.queues.length > 0){
            this.currentDownload = this.queues.shift();
            if(this.currentDownload.status !== true){
                this.chromeDownload();
            }else{
                const success = true;
                
                this.afterProcessQueue(success);
                return;
            }
            
        }else{
            // finished
            if(this.resetQueueAfterFinish){
                this.resetQueue();
            }
        }
    }
    setProgress(){
        const peak = this.successQueues.length;
        const maxPeak = this.counts;
        const percentage = Math.ceil(peak / maxPeak * 100);
        // logServer.logWeb({peak,maxPeak,percentage},getLineInfo());
        return percentage;
    }
    afterProcessQueue(success?:boolean,delta?:object){
        // logServer.logWeb(this.currentDownload,getLineInfo());
        if(success){
            this.successQueues.push(this.currentDownload);
            Store.updateDownload(this.currentDownload.ID,{status:success});
            Store.db().commit();
            
            const cmd = 'download_state';
            const percentage = this.setProgress();
            const currentDownload = this.currentDownload;
            chrome.runtime.sendMessage({cmd,success,delta,currentDownload,percentage},(response)=>{});
            this.startQueue();
        }else{
            this.queues.push(this.currentDownload); 
        }
    }
    onDownloadStarted(item){
        const evt = 'created';
        logServer.logWeb({evt,item},getLineInfo())
    }
    onDownloadErased(item){
        const evt = 'erased';
        logServer.logWeb({evt,item},getLineInfo())
    }
    
    onDownloadChanged(delta){
        const evt = 'changed';
        logServer.logWeb({evt,delta},getLineInfo());

        if(typeof delta.state == 'object'){
            if(delta.state.current == 'complete'){
                this.afterProcessQueue(true,delta);
            }
            else{
                
            }
        }
        if(typeof delta.error == 'object'){
            this.onDownloadError(delta);
        }
    }
    chromeDownload(){
        // return;
        if(!this.downloadHandlerSet){
            chrome.downloads.onCreated.addListener((item)=>{
                this.onDownloadStarted(item);
            });
            chrome.downloads.onErased.addListener((downloadId)=>{
                logServer.logWeb(downloadId,getLineInfo())
            });
            chrome.downloads.onChanged.addListener((delta)=>{
                this.onDownloadChanged(delta);
                
            });
    
            this.downloadHandlerSet = true;
        }
        // setTimeout(()=>{
            const opt ={
                filename : this.currentDownload.filename,
                url : this.currentDownload.url
            };
            chrome.downloads.download(opt,(downloadId)=>{
                const cmd = 'download_state';
                const currentDownload = this.currentDownload;
                chrome.runtime.sendMessage({cmd,currentDownload},(response)=>{});
                // logServer.logWeb({evt:'created',downloadId},getLineInfo());
            });
            // afterProcessDownloadQueues(true);
        // },1000);
        
    }
    onDownloadError(delta){
        logServer.logWeb('DOWNLOAD_ERROR',getLineInfo());
        const cmd = 'download_state';
        const success = false;
        const currentDownload = this.currentDownload;
        chrome.runtime.sendMessage({cmd,delta,success,currentDownload},(response)=>{});
        if(this.resetQueueOnError){
            this.resetQueue();
        }
    }
}