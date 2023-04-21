const MsgEvt = (name, data = null) => {
    return {name, data}
}
const sendMessage = (eventName, data, target='popup', callback = f => f) => {
    const evt = MsgEvt(eventName, data)
    chrome.runtime.sendMessage(evt, callback)
}
const onMessage = (callback) => {
    chrome.runtime.onMessage.addListener((evt, source)=>{
        callback(evt, source)
    })
}

import {konsole,  makeDelay} from "./src/components/fn"
import Course from "./src/models/Course"
import Download from "./src/models/Download"
import DownloadState from "./src/models/DownloadState"
import StreamLocation from "./src/models/StreamLocation"

class MsgStore {
    mCourse = null
    mDownload = null
    mDownloadState = null
    mStreamloc = null
    constructor(){

    }
    async init(){
        this.mCourse = await Course.getInstance()
        this.mDownload = await Download.getInstance()
        this.mDownloadState = await DownloadState.getInstance()
        this.mStreamloc = await StreamLocation.getInstance()
    }
    async getDownloadState(courseId){
        const dlstate = await this.mDownloadState.get(courseId)
        return dlstate
    }

  
    getStreamLocations(tocId){
        return this.mStreamloc.getListByTocId(tocId)
    }
    getDownload(tocId, filename){
        return this.mDownload.getByTocFname(tocId, filename)
    }
    async updateDownload(id, row){
        const dl = await this.mDownload.update(id,row)
        return dl
    }
    async createDownload(url, filename, tocId, courseId){
        const dl = await this.mDownload.create(url,filename,tocId,courseId)
        return dl    
    }
    async getCoursePageData(slug){
        const result = await this.mCourse.getCoursePageData(slug)
        return result
    }
}

const logServer = {
    logWeb:(a)=>{
        console.log(a)
    }
}
class DownloadQueue{
    
    queues = []//Downloads_tableField[]
    counts = 0
    successQueues = []// Downloads_tableField[]
    currentDownload = null // Downloads_tableField = null
    downloadHandlerSet = false
    queueStarted = false

    app = null //: App_tableField 
    course = null //: Course_tableField
    downloadState  = null //: DownloadState_tableField
    downloadConfig = null //: DownloadConfig_tableField
    sections = [] //: Section_tableField

    fmt = null
    downloadOptions = [] //: DownloadOption[] = []
    resetQueueAfterFinish = true //boolean
    resetQueueOnError = false //: boolean

    store = null
    percentage = 0
    constructor(){
        // this.init()
        this.store = new MsgStore()
    }

    async init(){
        await this.store.init()
        // this.app = await this.store.getAppState()
        // this.course = await this.store.getCourse(this.app.lastCourseSlug)
        // await this.store.onReady(()=>{
            // this.downloadState = await this.store.getDownloadState(this.course.id)
            // this.downloadConfig = await this.store.getDownloadConfig(this.course.id)
            // this.sections = await this.store.getSectionsByCourseId(this.course.id)

            // this.fmt = this.downloadConfig.selectedFmtList
        // })
        
    }
    async setCourse(course) {
        let reInit = false
        if(this.course === null){
            this.course = course
            reInit = true
        }
        else if(this.course.id != course.id){
            this.course = course
            reInit = true
        }

        if(reInit){
            this.resetQueue()
            const { sections, tocs} = await this.store.getCoursePageData(course.slug)
            this.sections = sections
            this.tocs = tocs
            // this.init()
        }

    }
    setConfig(config){
        this.downloadConfig = config
    }
    truncateTables(){
        // await this.store.db().getStoreDB().truncate('downloads')
        // await this.store.db().commit()
    }
    resetQueue(){
        this.queues = []
        this.counts = 0
        this.successQueues = []
        this.currentDownload = null
        this.downloadOptions = []
        this.queueStarted = false
        this.percentage = 0
        /*
        downloadCounts = 0
            downloadQueues = []
            downloadSuccessQueues = []
            currentDownload = null
            queueStarted = false
            await this.store.db().getStoreDB().truncate('downloads')
            await this.store.db().commit()
        */
    }
    async populate(){
        this.downloadState = this.store.getDownloadState(this.course.id)
        // this.downloadConfig = await this.store.getDownloadConfig(this.course.id)
        // this.sections = await this.store.getSectionsByCourseId(this.course.id)
        this.fmt = this.downloadConfig.selectedFmtList


        for(let sidx in this.sections){
            const section = this.sections[sidx]
            const items = this.tocs[section.slug]

            for(let tidx in items){
                const toc = items[tidx]
                const streamLocations = this.store.getStreamLocations(toc.id).filter(r=>r.fmt == this.fmt)
                
                let streamLoc
                
                if(streamLocations.length>0){
                    streamLoc = streamLocations[0]
                    const videoUrl = streamLoc.url
                    const transcriptUrl = toc.captionUrl
                    const optVideo = {
                        url : videoUrl,
                        filename : `${toc.slug}-${this.fmt}.mp4`,
                        tocId : toc.id,
                        courseId : this.course.id
                    }
                    const optTranscript = {
                        url : transcriptUrl,
                        filename : `${toc.slug}-${this.fmt}.vtt`,
                        tocId : toc.id,
                        courseId : this.course.id
                    }
                    this.downloadOptions.push(optVideo)
                    this.downloadOptions.push(optTranscript)
                }
            }
        }
        for(let idx in this.downloadOptions){
            const dl = this.downloadOptions[idx]
            let download = this.store.getDownload(dl.tocId,dl.filename)
            if(download){
                console.log('updateDownload')
                download.url = dl.url
                download.filename = dl.filename
                download.status = false
                download = await this.store.updateDownload(download.id,download)
            }else{
                console.log('createDownload')
                download = await this.store.createDownload(dl.url,dl.filename,dl.tocId,dl.courseId)
            } 
            this.queues.push(download)
        }
        this.counts = this.queues.length   
        
    }
    async startQueue(){
        await this.processQueue()
    }
    async processQueue(){
        if(this.queues.length > 0){
            this.currentDownload = this.queues.shift()
            if(this.currentDownload.status !== true){
                this.chromeDownload()
            }else{
                const success = true
                
                this.afterProcessQueue(success)
                return
            }
            
        }else{
            // finished
            if(this.resetQueueAfterFinish){
                this.resetQueue()
            }
        }
    }
    setProgress(){
        const peak = this.successQueues.length
        const maxPeak = this.counts
        const percentage = Math.ceil(peak / maxPeak * 100)
        console.log(peak,maxPeak,percentage)
        this.percentage =percentage
        return percentage
    }
    async afterProcessQueue(success,delta){
        // console.log(currentDownload)

        if(success){
            this.successQueues.push(this.currentDownload)

            const percentage = this.setProgress()

            try{
                await this.store.updateDownload(this.currentDownload.id,{status:success})
                
                const cmd = 'sw.downloadState'
                
                const currentDownload = this.currentDownload
                sendMessage(cmd,{success,delta,currentDownload,percentage})
                this.startQueue()
            }catch(e){
                console.log(e)
            }
            if(percentage >= 100){
                this.resetQueue()
            }
        }else{
            this.queues.push(this.currentDownload) 
        }
    }
    
    async chromeDownload(){
        // return
        if(!this.downloadHandlerSet){
            chrome.downloads.onCreated.addListener((item)=>{
                console.log(item)
            })
            chrome.downloads.onErased.addListener((downloadId)=>{
                console.log(downloadId)
            })
            chrome.downloads.onChanged.addListener((delta)=>{
                console.log(delta)
                if(typeof delta.state == 'object'){
                    if(delta.state.current == 'complete'){
                        this.afterProcessQueue(true,delta)
                    }
                }
                if(typeof delta.error == 'object'){
                    this.onDownloadError(delta)
                }
            })
    
            this.downloadHandlerSet = true
        }
        const opt ={
            filename : this.currentDownload.filename,
            url : this.currentDownload.url
        }
        chrome.downloads.download(opt,(downloadId)=>{
            const cmd = 'sw.downloadState'
            const currentDownload = this.currentDownload
            sendMessage(cmd,{currentDownload})
            console.log(downloadId)
        })
        
    }
    async onDownloadError(delta){
        const cmd = 'sw.downloadState'
        const success = false
        const currentDownload = this.currentDownload
        
        sendMessage(cmd,{delta, success, currentDownload})
        
        if(this.resetQueueOnError){
            this.resetQueue()
        }
    }

    async main(data){
        if(this.queueStarted){
            console.error('queue is running:skipped')
            return
        }
        ///
        const {course, config} = data
        
        await this.setCourse(course)
        this.setConfig(config)

        if(this.queues.length === 0){
            await this.populate()
            this.queueStarted = true
            this.startQueue()
        }
        ///
    }
}
class SignatureCallback {

    instances = {}

    create(callback){
        const signature = (new Date).getTime().toString().replace(/\W+/g,'')
        this.instances[signature] = callback
        return signature
    }

    get(signature){
        return this.instances[signature]
    }

}
let downloadQueue
const main = async() =>{
    downloadQueue = new DownloadQueue()
    await downloadQueue.init()

	onMessage(async(evt,source)=>{
        if(evt.name.match(/^sw\./)){
            switch(evt.name){
                case 'sw.processDownload':
                    downloadQueue.main(evt.data)
                    console.log(evt.data)
                break    
            }

        }
	})
}
 main() 