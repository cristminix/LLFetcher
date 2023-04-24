import { C as Course, D as Download, a as DownloadState, S as StreamLocation, b as DB } from './StreamLocation.8ca84ae5.js';

const MsgEvt = (name, data = null) => {
    return {name, data}
};
const sendMessage = (eventName, data, target='popup', callback = f => f) => {
    const evt = MsgEvt(eventName, data);
    chrome.runtime.sendMessage(evt, callback);
};
const onMessage = (callback) => {
    chrome.runtime.onMessage.addListener((evt, source)=>{
        callback(evt, source);
    });
};

class MsgStore {
    mCourse = null
    mDownload = null
    mDownloadState = null
    mStreamloc = null
    constructor(){

    }
    async init(reInit=false){
        if(!reInit){
            this.mCourse = await Course.getInstance();
            this.mDownload = await Download.getInstance();
            this.mDownloadState = await DownloadState.getInstance();
            this.mStreamloc = await StreamLocation.getInstance();
        }else {
            await DB.connection.reload();
        }
    }
        
    async getDownloadState(courseId){
        const dlstate = await this.mDownloadState.get(courseId);
        return dlstate
    }

  
    getStreamLocations(tocId){
        return this.mStreamloc.getListByTocId(tocId)
    }
    getDownload(tocId, filename){
        return this.mDownload.getByTocFname(tocId, filename)
    }
    async updateDownload(id, row){
        const dl = await this.mDownload.update(id,row);
        return dl
    }
    async createDownload(url, filename, tocId, courseId){
        const dl = await this.mDownload.create(url,filename,tocId,courseId);
        return dl    
    }
    async getCourseSecsTocs(courseId){
        const result = await this.mCourse.getCourseSecsTocs(courseId);
        return result
    }
}

class DownloadQueue{
    
    queues = []//Downloads_tableField[]
    counts = 0
    successQueues = []// Downloads_tableField[]
    currentDownload = null // Downloads_tableField = null
    downloadHandlerSet = false
    queueStarted = false

    course = null //: Course_tableField
    downloadState  = null //: DownloadState_tableField
    fmt = null //: DownloadConfig_tableField
    sections = [] //: Section_tableField

    // fmt = null
    downloadOptions = [] //: DownloadOption[] = []
    resetQueueAfterFinish = true //boolean
    resetQueueOnError = false //: boolean

    store = null
    percentage = 0
    constructor(){
        this.store = new MsgStore();
    }

    async init(reInit=false){
        await this.store.init(reInit);
        
    }
    async setCourse(course) {
        let reInit = false;
        if(this.course === null){
            this.course = course;
            reInit = true;
        }
        else if(this.course.id != course.id){
            this.course = course;
            reInit = true;
        }

        if(reInit){
            this.resetQueue();
            const { sections, tocs} = await this.store.getCourseSecsTocs(course.id);
            this.sections = sections;
            this.tocs = tocs;
            // this.init()
        }

    }
    setFmt(fmt){
        this.fmt = fmt;
    }
    truncateTables(){
        // await this.store.db().getStoreDB().truncate('downloads')
        // await this.store.db().commit()
    }
    resetQueue(){
        this.queues = [];
        this.counts = 0;
        this.successQueues = [];
        this.currentDownload = null;
        this.downloadOptions = [];
        this.queueStarted = false;
        this.percentage = 0;

    }
    async populate(){
        this.downloadState = this.store.getDownloadState(this.course.id);

        for(let sidx in this.sections){
            const section = this.sections[sidx];
            const items = this.tocs[section.slug];

            for(let tidx in items){
                const toc = items[tidx];
                const streamLocations = this.store.getStreamLocations(toc.id).filter(r=>r.fmt == this.fmt);
                
                let streamLoc;
                
                if(streamLocations.length>0){
                    streamLoc = streamLocations[0];
                    const videoUrl = streamLoc.url;
                    const transcriptUrl = toc.captionUrl;
                    const optVideo = {
                        url : videoUrl,
                        filename : `${toc.slug}-${this.fmt}.mp4`,
                        tocId : toc.id,
                        courseId : this.course.id
                    };
                    const optTranscript = {
                        url : transcriptUrl,
                        filename : `${toc.slug}-${this.fmt}.vtt`,
                        tocId : toc.id,
                        courseId : this.course.id
                    };
                    this.downloadOptions.push(optVideo);
                    this.downloadOptions.push(optTranscript);
                }
            }
        }
        for(let idx in this.downloadOptions){
            const dl = this.downloadOptions[idx];
            let download = this.store.getDownload(dl.tocId,dl.filename);
            this.queues.push(download);
        }
        this.counts = this.queues.length;   
        
    }
    async startQueue(){
        await this.processQueue();
    }
    async processQueue(){
        if(this.queues.length > 0){
            this.currentDownload = this.queues.shift();
            if(this.currentDownload.status !== true){
                this.chromeDownload();
            }else {
                const success = true;
                
                this.afterProcessQueue(success);
                return
            }
            
        }else {
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
        console.log(peak,maxPeak,percentage);
        this.percentage =percentage;
        return percentage
    }
    async afterProcessQueue(success,delta){
        // console.log(currentDownload)

        if(success){
            this.successQueues.push(this.currentDownload);

            const percentage = this.setProgress();

            try{
                await this.store.updateDownload(this.currentDownload.id,{status:success});
                
                const cmd = 'sw.downloadState';
                
                const currentDownload = this.currentDownload;
                sendMessage(cmd,{success,delta,currentDownload,percentage});
                this.startQueue();
            }catch(e){
                console.log(e);
            }
            if(percentage >= 100){
                this.resetQueue();
            }
        }else {
            this.queues.push(this.currentDownload); 
        }
    }
    
    async chromeDownload(){
        // return
        if(!this.downloadHandlerSet){
            chrome.downloads.onCreated.addListener((item)=>{
                console.log(item);
            });
            chrome.downloads.onErased.addListener((downloadId)=>{
                console.log(downloadId);
            });
            chrome.downloads.onChanged.addListener((delta)=>{
                console.log(delta);
                if(typeof delta.state == 'object'){
                    if(delta.state.current == 'complete'){
                        this.afterProcessQueue(true,delta);
                    }
                }
                if(typeof delta.error == 'object'){
                    this.onDownloadError(delta);
                }
            });
    
            this.downloadHandlerSet = true;
        }
        const opt ={
            filename : this.currentDownload.filename,
            url : this.currentDownload.url
        };
        chrome.downloads.download(opt,async(downloadId)=>{
            const cmd = 'sw.downloadState';
            let download = this.currentDownload;
            download.downloadId = downloadId;
            const currentDownload =  await this.store.updateDownload(download.id,download);

            sendMessage(cmd,{currentDownload});
            console.log(downloadId);
        });
        
    }
    async onDownloadError(delta){
        const cmd = 'sw.downloadState';
        const success = false;
        const currentDownload = this.currentDownload;
        
        sendMessage(cmd,{delta, success, currentDownload});
        
        if(this.resetQueueOnError){
            this.resetQueue();
        }
    }

    async main(data){
        if(this.queueStarted){
            console.error('queue is running:skipped');
            return
        }
        ///
        const {course, fmt} = data;
        
        await this.setCourse(course);
        this.setFmt(fmt);

        if(this.queues.length === 0){
            await this.populate();
            this.queueStarted = true;
            this.startQueue();
        }
        ///
    }
}
let downloadQueue;
const main = async() =>{
    downloadQueue = new DownloadQueue();
    await downloadQueue.init();

	onMessage(async(evt,source)=>{
        if(evt.name.match(/^sw\./)){
            switch(evt.name){
                case 'sw.queue.process':
                    downloadQueue.main(evt.data);
                    console.log(evt.data);
                break
                case 'sw.queue.started':
                    sendMessage('sw.queue.started', downloadQueue.queueStarted);
                    console.log(evt.data);
                break
                case 'sw.queue.reset':
                    // downloadQueue.main(evt.data)
                    downloadQueue.resetQueue();
                    downloadQueue.setFmt(evt.data);
                    await downloadQueue.init(true);
                    console.log(evt.data);
                break
                case 'sw.queue.course':
                    // downloadQueue.main(evt.data)
                    sendMessage('sw.queue.course', downloadQueue.course);
                    console.log(evt.data);
                break  
                case 'sw.queue.fmt':
                    // downloadQueue.main(evt.data)
                    sendMessage('sw.queue.course', downloadQueue.fmt);

                    console.log(evt.data);
                break  

            }

        }
	});
};
 main();
