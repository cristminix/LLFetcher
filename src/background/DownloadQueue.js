import Store from "../models/Store"
import {timeout,getDownloadFilenames,queryDownloadProgress,validateUrl} from "../components/fn"
const MsgEvt = (name, data = null) => {
    return {name, data}
}
const sendMessage = (eventName, data, target='popup', callback = f => f) => {
    const evt = MsgEvt(eventName, data)
    try{
        chrome.runtime.sendMessage(evt, callback)
    }catch(e){
        console.error(e)
    }
    
}
const onMessage = (callback) => {
    try{
        chrome.runtime.onMessage.addListener((evt, source)=>{
            callback(evt, source)
        })
    }catch(e){
        console.error(e)
    }
    
}
class Action_queue {
	resetOnError = true
	async chromeDownloadAsync(opt, createcb1, createcb2){
        return new Promise((resolve, reject)=>{
            const onCreated = item => {
                createcb1(item)
            }
            const onErased = downloadId =>{
                reject(downloadId)

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

            try{
                chrome.downloads.download(opt, downloadId => {
                    createcb2(downloadId)
                })
            }catch(e){
                reject(e)
            }
            

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
    async onDownloadError(edelta){
        let {error,id,state,filename} = edelta
        console.log(edelta,{error,id,state,filename} )
        filename = filename.current.split(/[\\/]/).pop()
        error = error.current
        state = state.current

        const cmd = 'sw.downloadState'
        const success = false
        const download = this.items[this.current]
        const delta = {filename, error, state, id}

        sendMessage(cmd,{delta, success, download})
        if(!this.qfails.includes(this.current)){
            this.qfails.push(this.current)
        }
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
                const {downloadId} = item
                // console.log(item)
                if(downloadId){
                    const cmd = 'sw.downloadState'
                    download.downloadId = downloadId
                    // const currentDownload =  await this.mDownload.update(download.id,download)

                    sendMessage(cmd,{download})
                    console.log(downloadId)
                }
            }, async(downloadId) =>{
                if(downloadId){
                    const cmd = 'sw.downloadState'
                    download.downloadId = downloadId
                    // const currentDownload =  await this.mDownload.update(download.id,download)

                    sendMessage(cmd,{download})
                    console.log(downloadId)
                }
                
            })

            console.log(result)
            if(result){
                await this.onDownloadComplete(result)
            }else{
                console.error(`result is not valid`, result)
            }
            
        }catch(e){
            
            await this.onDownloadError(e)
            console.error(`onDownloadError reacehed`,e)
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

    filenames = []
    csuccess = []
    cfails = []
    cinprogress = []
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
				const result = await this.populate()

                if(!result){
                    console.error('DownloadQueue.populate() return false')
                    return
                }
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
		await this.init(true)
		const courseId = this.course.id
        //const { sections, tocs} = await this.mCourse.getCourseSecsTocs(this.course.id)
		this.items = this.mDownload.getListByCourseId(courseId,this.fmt)
        if(this.items.length === 0){
            return false
        }
        this.filenames = getDownloadFilenames(this.items)
       
		this.queues = Object.keys(this.items)
        return true
	}
	/**
	 * reset queue
	 * */
	reset(){
        this.filenames = []
		this.queues = []
        this.qsuccess = []
        this.qfails = []
		this.items = []
		this.started = false
		this.current = null
	}
	/**
	 * calculate progress queue, return percentage
	 * */
	calculateProgress(){
		const peak = Math.floor(this.qsuccess.length / this.items.length  * 100)
        const percentage = Math.ceil(peak)
        if(percentage >= 100){
            this.started = false
        }
        return percentage
	}
    async getState(filename){
        const [ elist, slist, ilist] = await queryDownloadProgress([filename]) 
        
        // this.csuccess = slist

        
        // this.cinprogress = ilist
        // this.cfails = elist

        const interupted = elist.length > 0
        const success = slist.length > 0
        const inprogress = ilist.length > 0


        return inprogress ? 'in_progress' : success ? 'success' : interupted ? 'interupted' : 'new' 
        // this.cPercentage = Math.ceil(Math.floor(slist.length/filenames.length * 100))
     
    }
	/**
	 * main queue entry point
	 * */


	async process(){
		let qindex = 0
		while(qindex = this.queues.shift()){
			this.current = qindex
			// const download = this.items[qindex]
            /* check download status from db */
            const download = this.items[this.current]
            console.log(download)
            if(download.status){
                console.log(`download complete skipped`)
                await timeout(500)
                continue
            }
            const state = await this.getState(download.filename)
			// 
			// 
            if(state === 'new'){
                try{
                    console.log('Do Download')
                    if(!validateUrl(download.url)){
                        console.error(`Invalid download url`, download.url)
                    }else{
                        await this.dl()
                    }
                    // 

                }catch(e){

                    console.error(`process loop failed`, e)
                }
            }else{
                console.error(`process loop skipped state=${state}`)
                if(state === 'success'){
                    await timeout(500)
                    continue
                }
                break
            }
            
		}
	}
}

export default DownloadQueue
export {sendMessage, onMessage}