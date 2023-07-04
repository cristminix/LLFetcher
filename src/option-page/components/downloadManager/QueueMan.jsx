import { useEffect, useState, Component, createRef } from "react"
import QueueInfo from "./QueueInfo"
import QueueTable from "./QueueTable"
import {timeout} from "../../../components/fn"
import {fetchCourseTocMeta, formatBytes, calculateSpeed} from "../../components/learning_fn"

const ERROR_NOT_SETUP_QUEUE = "You must run setup queue first"
const FETCH_TEST_MODE = false
const FETCH_FAILED_MAX_COUNT = 3
let SAVED_RAND_ARRAY = {}
function rand(vIndex) {
    const [sIndex,tIndex] = vIndex
    const inputArray = [-1,2]
    const randomIndex = Math.floor(Math.random() * inputArray.length)

    const randKey =`${sIndex}${tIndex}`
    if(SAVED_RAND_ARRAY[randKey]){
        return 2
    }

    SAVED_RAND_ARRAY[randKey]= 1
    return inputArray[randomIndex]
}
async function fetchDownloadReal(url, outputFilename, mime, progressCallback, vIndex, t) {
    return new Promise((resolve, reject)=>{
        let contentType
        fetch(url)
        .then(response => {

            const contentEncoding = response.headers.get('content-encoding')
            let contentLength = response.headers.get(contentEncoding ? 'x-file-size' : 'content-length')
            contentType = response.headers.get('content-type') || mime
            if (contentLength === null) {
                contentLength = 0
                // throw Error('Response size header unavailable');
            }

            const total = parseInt(contentLength, 10);
            let loaded = 0;
            return new Response(
                new ReadableStream({
                    start(controller) {
                        let lastReadDate = new Date

                        const reader = response.body.getReader();

                        read();
                        
                        function read() {
                            reader.read().then(({done, value}) => {
                                if (done) {
                                    controller.close();
                                    return;
                                }
                                loaded += value.byteLength;
                                const lastLoaded = value.byteLength
                                //loaded, total, vIndex, lastReadDate, lastLoaded,t
                                progressCallback(loaded, total, vIndex, lastReadDate, lastLoaded,t)

                                //progressCallback({loaded, total, vIndex, lastReadDate, lastLoaded, t})
                                lastReadDate = new Date
                                controller.enqueue(value);
                                read();
                            }).catch(error => {
                                console.error(error);
                                controller.error(error)
                            })
                        }
                    }
                })
            );
        })
        .then(response => response.blob())
        .then(blob => {
            // let blobUrl = URL.createObjectURL(blob)
            resolve(blob)
            // player.style.display = 'block';
            // player.type = contentType;
            // player.src = vid;
            // elProgress.innerHTML += "<br /> Press play!";
        })
        .catch(error => {
            reject(error)
            console.error(error)
        })
    })
    
}
async function fetchDownload(url, outputFilename, mime, progressCallback, vIndex, t){
    if(FETCH_TEST_MODE){
        if(!vIndex){
            console.log(vIndex)
            return
        }
        console.log(`
            Dummy download
            url=${url}
            outputFilename=${outputFilename}
            mime=${mime}
            vIndex=${vIndex}
        `)

        let bufferCount = 0
        let loaded = 0
        let lastReadDate = new Date
        let total =0

        while(bufferCount <= 5){

            bufferCount += 1
            await timeout(50)
            let lastLoaded = bufferCount * 100
            loaded += lastLoaded 
            progressCallback(loaded, total, vIndex, lastReadDate, lastLoaded,t)
            lastReadDate = new Date
        }

    }else{
        const blob = await fetchDownloadReal(url, outputFilename, mime, progressCallback, vIndex, t)
        return blob
    }
    return null

} 

class QueueMan extends Component{
    constructor(props){
        super(props)
        this.state = {
            infoMessage : '',
            dlRunning : false,
            dlMeta : null,
            currentIndex : null,
            queueRunning : false,
            queueFinished : false
        }
        const {store} = props
        this.mDMStatus = store.get("DMStatus")
        this.mDMSetup = store.get("DMSetup")
        this.queueItemRef = createRef(null)
    }
    /**
     * this is the main fetch method to download the caption and video file
    */
    async fetchDlItem(vIndex_, t, queueItem, captionUrl="", videoUrl="", captionFilename="", videoFilename=""){
        // const {currentIndex} = this.state

        // let videoUrl
        // let captionUrl
        // let videoFilename
        // let captionFilename 
        let outputFilename = captionFilename
        if(FETCH_TEST_MODE){
            videoUrl = 'https://video.url'
            captionUrl = 'https://caption.url'
            videoFilename = 'video.mp4'
            captionFilename = 'caption.vtt'
        }

        let url

        if(t == 'caption'){
            url = captionUrl


        }else{
            url = videoUrl
            outputFilename = videoFilename
        }
        let infoMessage = `Downloading ${outputFilename}`
        this.setState({infoMessage})
        let dlStatus = 1
        const {course} = this.props
        const courseId = course.id
        queueItem.setDlStatus(t, vIndex_, dlStatus)
        await this.mDMStatus.setDlStatus(courseId, t, vIndex_, dlStatus)
        
        const blob = await fetchDownload(url, outputFilename, null, (loaded, total, vIndex, lastReadDate, lastLoaded, t)=>{
            this.onDlProgress(loaded, total, vIndex, lastReadDate, lastLoaded, t)
        },vIndex_,t)
        if(FETCH_TEST_MODE){
            dlStatus = rand(vIndex_)

        }
        if(blob){
            dlStatus = 2
        }
        queueItem.setDlStatus(t, vIndex_, dlStatus)
        await this.mDMStatus.setDlStatus(courseId, t, vIndex_, dlStatus)

        this.setState({infoMessage : `Download ${outputFilename} ${dlStatus == -1 ? 'Failed' : 'Success'}`})
       
        try{
            
          
            const anchor = document.createElement('a')
            const objectURL = window.URL.createObjectURL(blob)
            anchor.download = outputFilename
            anchor.href = objectURL
            anchor.click()
            
        }catch(e){
            console.error(e)
        }
    }
    /**
     * This is the main runner fetch to download caption and video file
     * mode = single meant this method invoked via button in queue item toolbar
     * mode = queue meant this method invoked via queue loops
     * 
     * @returns void
    */
    async fetchDlQueueItem(vIndex, captionUrl, videoUrl, mode="single"){
        console.log(`fetchDlQueueItem runing in ${mode} mode`,captionUrl, videoUrl)
        // const {}
        const queueIsRunning = this.props.queueStarted
        const [courseSlug, tocSlug] = this.getCourseTocSlug(vIndex)
        const {selectedFmt} = this.props
        const queueItem = this.queueItemRef.current
        const {captionStatus, videoStatus, finished, interupted} = this.getDmStatus(vIndex)

        if(mode){
            let runQueue = false 
            if(mode == "single"){
                if(!queueIsRunning){
                    runQueue = true
                }
            }else{
                if(queueIsRunning){
                    runQueue = true
                }
            }
            if(!runQueue){
                let alertMessage = mode == "single" ? "Cant download this item in single mode because Queue is running" : "Cant download this item in queue mode because Queue is not running"
                alert(alertMessage)
                return null
            }
          
            if(runQueue){
                const filenameBase = `${tocSlug}-${selectedFmt}`
                const videoFilename = `${filenameBase}.mp4`
                const captionFilename = `${filenameBase}.vtt`
                //fetchDlItem(vIndex, t, queueItem, captionUrl="", videoUrl="", captionFilename="", videoFilename="")
                let dlCaptionStatus
                let dlVideoStatus
                //--------------------------------------------------------------------------------------------------------
                if(!finished){
                    if(interupted){
                        if(captionStatus != 2){
                            dlCaptionStatus = await this.fetchDlItem(vIndex, "caption", queueItem, captionUrl, videoUrl, captionFilename, videoFilename)
                        }else{
                            if(confirm(`${outputFilename} already downloaded do you wanna redownload again ${outputFilename}?`)){
                                dlCaptionStatus = await this.fetchDlItem(vIndex, "caption", queueItem, captionUrl, videoUrl, captionFilename, videoFilename)

                            }else{
                                this.setState({infoMessage:`${outputFilename} Skipped`})
                            }    
                        }
                        if(videoStatus != 2){
                            dlVideoStatus = await this.fetchDlItem(vIndex, "video", queueItem, captionUrl, videoUrl, captionFilename, videoFilename)
                            
                        }else{
                            if(confirm(`${outputFilename} already downloaded do you wanna redownload again ${outputFilename}?`)){
                                dlVideoStatus = await this.fetchDlItem(vIndex, "video", queueItem, captionUrl, videoUrl, captionFilename, videoFilename)
                                
                            }    
                            else{
                                this.setState({infoMessage:`${outputFilename}  skipped`})
                            }
                        }
                    }else{
                        dlCaptionStatus = await this.fetchDlItem(vIndex, "caption", queueItem, captionUrl, videoUrl, captionFilename, videoFilename)
                        dlVideoStatus = await this.fetchDlItem(vIndex, "video", queueItem, captionUrl, videoUrl, captionFilename, videoFilename)

                    }
                    
    
                }else{
                    this.setState({infoMessage:`${vIndex} skipped`})
                }

                //--------------------------------------------------------------------------------------------------------

                console.log(dlCaptionStatus, dlVideoStatus)
            }
        } 
        
    }
    /**
     * retrive course.slug and toc.slug by current vector index
     * @returns [courseSlug, tocSlug]
    */
    getCourseTocSlug(vIndex){
        const {course, tocs, sections} = this.props
        const [sIndex, tIndex] = vIndex
        const sSlug = sections[sIndex].slug
        const toc = tocs[sSlug][tIndex]

        return [course.slug, toc.slug]
    }
    /**
     * Retrieve meta data for current toc by vector index
     * @returns [validResource, toc, exerciseFile, streamLocations, errorMessage]
    */
    async fetchDlMeta(vIndex){
        console.log(`Fetching dlMeta`)
        const [courseSlug, tocSlug] = this.getCourseTocSlug(vIndex)
        const result = await fetchCourseTocMeta(courseSlug, tocSlug)
        return result
    }
    /**
     * Starting current queue process by vector index
     * @returns void
    */
    async startQueueItem(vIndex, mode="single"){
        const [sIndex,tIndex] = vIndex
        console.log(`startQueueItem staterted ${vIndex}`)
        const {queueItemRef} = this
        // const {currentIndex} = this.state
        // this.setState({currentIndex:vIndex})
        const {course,selectedFmt} = this.props
        const queueItem = queueItemRef.current
        const courseId = course.id
        // get dmstatus fro db
        let dmstatus = this.mDMStatus.getByCourseId(courseId, vIndex)
        if(!dmstatus){
            dmstatus = await this.mDMStatus.setDlStatusMeta(courseId,vIndex, 0)
        }
        if(!FETCH_TEST_MODE){
            // get meta status from state
            // const dmstatus = queueItem.getDMStatus(sIndex,tIndex)
            let fetchSuccess = false
            if(dmstatus.dlMetaRetryCount <= FETCH_FAILED_MAX_COUNT){
                queueItem.setLoading(vIndex, true)

                for(let retryCount = dmstatus.dlMetaRetryCount; retryCount <= FETCH_FAILED_MAX_COUNT; retryCount++){
                    if(retryCount >0){
                        console.log(`retry fetchMeta ${retryCount}`)
                    }

                    const [validResource, toc, exerciseFile, streamLocations, errorMsg] = await this.fetchDlMeta(vIndex)
                    fetchSuccess = validResource
                    const status = validResource ? 2 : -1
                    let mustBreak = false
                    if(fetchSuccess){
                        // update dmstatus meta
                        const captionUrl = toc.captionUrl
                        const streamLocs = streamLocations.filter(sl=>sl.fmt==selectedFmt)

                        console.log(captionUrl, streamLocs)
                        let videoUrl = null 
                        try{
                            const [streamLoc] = streamLocs

                            videoUrl = streamLoc.url
                        }catch(e){
                            console.error(e)
                        }
                        await this.fetchDlQueueItem(vIndex, captionUrl, videoUrl, mode)
                        // return [captionUrl,streamLocs]

                        mustBreak = true
                    }else{
                        console.log(errorMsg)
                        if(errorMsg == "ERR_NO_LOGIN"){
                            alert("You must login to linkedin learning website")
                            break
                        
                        }
                        mustBreak = true

                        // update dmstatus meta retryCount
                    }
                    queueItem.setDlStatusMeta(vIndex, status, retryCount)
                    await this.mDMStatus.setDlStatusMeta(courseId,vIndex, status, retryCount)
                    if(mustBreak){
                        break
                    }
       
                }
                queueItem.setLoading(vIndex, false)
            }else{
                console.log(`fetchDlMeta reach max  FETCH_FAILED_MAX_COUNT`)

            }
        }else{
            console.log(`FETCH_TEST_MODE currently not do anythings`)
        }
    }
    /**
     * get current dmstatus in database with default value
    */
    getDmStatus(vIndex){
        const {course} = this.props
        const dmstatus = this.mDMStatus.getByCourseId(course.id, vIndex)

        let captionStatus = 0
        let videoStatus = 0
        let finished = false
        let interupted = false

        if(dmstatus){
            captionStatus = dmstatus.captionStatus
            videoStatus = dmstatus.videoStatus
            finished = dmstatus.finished
            interupted = dmstatus.interupted
        }

        return {captionStatus, videoStatus, finished, interupted}
    }
    async fetchDl(){
        const vIndex = this.state.currentIndex
        await this.startQueueItem(vIndex, "queue")
    }
    async fetchDl_deprecated() {
        
        const {queueItemRef} = this

        const {currentIndex} = this.state
        const {course} = this.props
        const queueItem = queueItemRef.current
        
        const dmstatus = this.mDMStatus.getByCourseId(course.id, currentIndex)

        let dlMeta 
        
        if(!FETCH_TEST_MODE){
            dlMeta = await this.fetchDlMeta(dmstatus)

        }
        console.log(dlMeta)
        let captionStatus = 0
        let videoStatus = 0
        let finished = false
        let interupted = false

        if(dmstatus){
            captionStatus = dmstatus.captionStatus
            videoStatus = dmstatus.videoStatus
            finished = dmstatus.finished
            interupted = dmstatus.interupted
        }

        if(queueItem){
            if(!finished){
                queueItem.setLoading(currentIndex, true)
                if(interupted){
                    if(captionStatus != 2){
                        await this.fetchDlItem("caption", queueItem)

                    }else{
                        this.setState({infoMessage:`${currentIndex} caption skipped`})

                    }
                    if(videoStatus != 2){
                        await this.fetchDlItem("video", queueItem)
                        
                    }else{
                        this.setState({infoMessage:`${currentIndex} video skipped`})

                    }
                }else{
                    await this.fetchDlItem("caption", queueItem)
                    await this.fetchDlItem("video", queueItem)
                }
                

                queueItem.setLoading(currentIndex, false)
            }else{
                this.setState({infoMessage:`${currentIndex} skipped`})
            }
            

        }

    }
    async onDlProgress(loaded, total, vIndex, lastReadDate, lastLoaded, t){

        const {queueItemRef} = this
        const {course} = this.props
        if(queueItemRef.current){
            const queueItem = queueItemRef.current
            console.log(vIndex)
            if(vIndex){
                const percentageView = Math.round(loaded / total * 100) + '%'

                const speed = formatBytes(calculateSpeed(lastLoaded,lastReadDate,new Date))

                const {captionRef,videoRef} = queueItem.getStatusRef(vIndex)

                if(t=="caption"){
                    captionRef.current.setValue(`${formatBytes(loaded)}`)

                }
                else if(t=="video"){
                    videoRef.current.setValue(`${formatBytes(loaded)}`)

                }

                await this.mDMStatus.setDlSize(course.id, t, vIndex, loaded)

            }
            
        }

        
        // refs[index].current.value = `${formatBytes(loaded)}/${speed}ps`
    }
  
   
    async onQueueComplete(){
        const queueItem = this.queueItemRef.current
        const {stopDownloadQueue, setQueueFinished, setQueueResume} = this.props
        const finished = queueItem.checkDmStatusFinished()

        if(finished){
            setQueueFinished(true)
        }else{
            console.log(`queue stil have unfinished item`)
            this.setState({currentIndex:[0,0]})
            setQueueResume(true)
        }
        stopDownloadQueue()
        
    }
    async triggerFetchDl(){
        const {queueRunning} = this.state
        console.log(`triggerFetchDl called`)
        if(!queueRunning){
            console.log(`Queue stoped`)
            this.setState({dlRunning:false})
            return
        }

        const qIndex = this.getNextIndex()
        let [sIndex,tIndex] = qIndex
        // setCurrentIndex(null)
        if(sIndex === null && tIndex === null){
            console.log(`${sIndex}, ${tIndex}`)
            console.log(`Queue Complete`)
            this.onQueueComplete()
            return
        }
        if(sIndex == -1 && tIndex == -1){
            console.log(`${sIndex}, ${tIndex}`)
            console.log(`Queue Interupted`)
            this.setState({dlRunning:false})
            stopDownloadQueue()
            return
        }

        if(sIndex >= 0 && tIndex >= 0){
            
            console.log(`Processing ${sIndex}, ${tIndex}`)
            
            
            this.setState({dlRunning:true, currentIndex : qIndex},async()=>{
                await this.fetchDl()
                if(queueRunning){
                    this.triggerFetchDl()
                }
            })
        }

        
    }
    triggerQueue(startQueue){
        const {queueStarted} = this.props
        const {dlMeta} = this.state
        console.log(`QueueMan triggered ${startQueue}`)
        const queueRunning = startQueue
        this.setState({queueRunning},()=>{
            if(startQueue){
                if(!dlMeta){
                    const dlMetaSaved = true//await fetchDlMeta()
                    if(dlMetaSaved){
                      //  this.setState({dlMeta:dlMetaSaved})
                        this.triggerFetchDl()
                    }
                }
            }
        })
        
    }
    async triggerResetQueue(){
        const {resetDownloadQueue} = this.props
        const queueItem = this.queueItemRef.current
        await queueItem.clearDMStatus()
        this.setState({currentIndex:null},()=>{

            resetDownloadQueue(false)
            
        })
    }
    getNextIndex(){
        const {currentIndex} = this.state
        const {sections, tocs} = this.props
        // console.log(currentIndex)

        let nextIndex = null
        if(!currentIndex){
            nextIndex = [0,0]
            return nextIndex
        }
        // try{
            if(currentIndex.length ==2){
                let [sIndex,tIndex] = currentIndex
     
                const sectionSlug = sections[sIndex].slug
                const sIndexMax = sections.length - 1
                const tIndexMax = tocs[sectionSlug].length - 1

                if(tIndex < tIndexMax){
                    tIndex = tIndex + 1

                    return [sIndex,tIndex]
                }

                else if(tIndex >= tIndexMax){
                    if(sIndex < sIndexMax){

                        sIndex = sIndex + 1
                        tIndex = 0

                        return [sIndex,tIndex]
                    }else{

                        return [null,null]
                    }
                }
            }
        // }catch(e){
            // return [null,null]
        // }
        

        return [-1,-1]
    }
    // componentDidMount(){
    //     console.log(this.props)
    // }
    render(){
        const {infoMessage, currentIndex} = this.state
        const {clearStatusBar,logStatusBar,selectedFmt, queueStarted, sections, course, tocs, store, alreadySetup, queueFinished} = this.props
        return (<><div className="queueman mb-12 mt-2">
        
        <div className="queue-man-container">
            {/*<h4 className="font-bold">Queue Manager UI</h4>*/}
            {
                
                alreadySetup ? <>
                    <QueueInfo clearStatusBar={clearStatusBar} logStatusBar={logStatusBar} selectedFmt={selectedFmt} queueFinished={queueFinished} message={infoMessage} queueStarted={queueStarted} currentIndex={currentIndex}/>
                    <QueueTable clearStatusBar={clearStatusBar} logStatusBar={logStatusBar} startQueueItem={vIndex=>this.startQueueItem(vIndex)} queueItemRef={this.queueItemRef} course={course} sections={sections} tocs={tocs} store={store}/>
                </> : ERROR_NOT_SETUP_QUEUE
            }
            
        </div>
    </div></>)
    }
}


export default QueueMan
    