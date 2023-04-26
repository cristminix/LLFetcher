import Store from "../models/Store"
import {timeout} from "../components/fn"
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
class Action_queue {
	resetOnError = true
	async chromeDownloadAsync(opt, createcb1, createcb2){
        return new Promise((resolve, reject)=>{
            const onCreated = item => {
                createcb1(item)
            }
            const onErased = downloadId =>{
                reject(delta)

            }

            const onComplete = delta => {
                resolve(delta)
            }

            const onError = delta =>{
                reject(delta)
            }
            const onChanged = delta => {
                if(typeof delta.state == 'object'){
                    if(delta.state.current == 'complete'){
                        onComplete(delta)
                    }
                }
                if(typeof delta.error == 'object'){
                    onError(delta)
                }
            }

            chrome.downloads.onCreated.removeListener(onCreated)
            chrome.downloads.onErased.removeListener(onErased)
            chrome.downloads.onChanged.removeListener(onChanged)

            chrome.downloads.onCreated.addListener(onCreated)
            chrome.downloads.onErased.addListener(onErased)
            chrome.downloads.onChanged.addListener(onChanged)

            chrome.downloads.download(opt, downloadId => {
                createcb2(downloadId)
            })

        })
    }
    async onDownloadCreated(item){
        console.log(`onDownloadCreated() item=`,item)
    }
    async onDownloadComplete(delta){
        console.log(`onDownloadComplete() delta=`,delta)
        // this.afterProcessQueue(true,delta)
        this.qsuccess.push(this.current)
		const percentage = this.calculateProgress()
		const download = this.items[this.current]
		const success = true

		await this.mDownload.update(download.id,{status:success})

		const cmd = 'sw.downloadState'
		sendMessage(cmd,{success,delta,download,percentage})
    }
    async onDownloadError(delta){
        const cmd = 'sw.downloadState'
        const success = false
        const download = this.current
        
        sendMessage(cmd,{delta, success, download})
        
        if(this.resetOnError){
            this.reset()
        }
    }
    async dl(){
    	const download = this.items[this.current]
    	const {filename, url} = download
        const option ={ filename, url }
        let result

        try{
            result = await this.chromeDownloadAsync(option, item =>{

            }, async(downloadId) =>{
                const cmd = 'sw.downloadState'
                download.downloadId = downloadId
                // const currentDownload =  await this.mDownload.update(download.id,download)

                sendMessage(cmd,{download})
                console.log(downloadId)
            })

            console.log(result)
            await this.onDownloadComplete(result)
        }catch(e){
            console.error(e)
            await this.onDownloadError(e)
        } 
    }
}
class DownloadQueue extends Action_queue{
	/**
	 * storage related
	 * */
	mCourse = null
    mDownload = null
    mDownloadState = null
    mStreamloc = null
    mDb = null

    /**
     * config related
     * */
    course = null
    fmt = null

    /**
     * queue related
     * */
    started = false
    items = []
    queues = []
    current = null

    qsuccess = []
    qfails = []
    constructor(){
    	super()
        this.store = Store.getInstance()
    }
    /**
     * init storage
     * reload = should reload or sync with local storage
     * */
	async init(reload = false){
		if(!reload){
            await this.store.ready(f=>f)
            this.mDb = this.store.get('DB')
            this.mCourse = this.store.get('Course')
            this.mDownload = this.store.get('Download')
            this.mDownloadState = this.store.get('DownloadState')
            this.mStreamloc = this.store.get('StreamLocation')
        }else{
            await this.store.reload()
        }
	}
	/**
	 * setup required config
	 * */
	async setup(course,fmt, run = false){
		this.course = course
		this.fmt = fmt

		if(run){
			if(this.started){
				console.error('queue is running:skipped')
            	return
			}
			if(this.queues.length === 0){
				await this.populate()
			}
			this.started = true
			await this.process()
		}
	}
	setFmt(fmt){
		this.fmt = fmt
	}
	/**
	 * populate queues
	 * */
	async populate(){
		this.init(true)
		const courseId = this.course.id
        //const { sections, tocs} = await this.mCourse.getCourseSecsTocs(this.course.id)
		this.items = this.mDownload.getListByCourseId(courseId)
		this.queues = Object.keys(this.items)
	}
	/**
	 * reset queue
	 * */
	reset(){
		this.queues = []
		this.items = []
		this.started = false
		this.current = null
	}
	/**
	 * calculate progress queue, return percentage
	 * */
	calculateProgress(){
		const peak = Math.floor(this.queues.length / this.items.length)
        const percentage = Math.ceil(peak * 100)
        return percentage
	}
	/**
	 * main queue entry point
	 * */
	async process(){
		let qindex = 0
		while(qindex = this.queues.shift()){
			this.current = qindex
			// const download = this.items[qindex]
			// console.log(download)
			// await timeout(500)
			await this.dl()
		}
	}
}

export default DownloadQueue
export {sendMessage, onMessage}