import { useEffect, useState, Component, createRef } from "react"
import QueueInfo from "./QueueInfo"
import QueueTable from "./QueueTable"
import {timeout} from "../../../components/fn"
import {fetchCourseTocMeta, formatBytes, calculateSpeed} from "../../components/learning_fn"

const ERROR_NOT_SETUP_QUEUE = "You must run setup queue first"

function rand(array) {
  if (array.length === 0) {
    throw new Error("Array must not be empty.");
  }

  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
async function fetchDownload(url, outputFilename, mime, progressCallback, vIndex, t){
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

    while(bufferCount <= 10){

        bufferCount += 1
        await timeout(50)
        let lastLoaded = bufferCount * 100
        loaded += lastLoaded 
        progressCallback(loaded, total, vIndex, lastReadDate, lastLoaded,t)
        lastReadDate = new Date
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
    async fetchDlMeta(){
        console.log(`Fetching dlMeta`)

    }
    async fetchDlItem(t, queueItem){
        const {currentIndex} = this.state
        const videoUrl = 'https://video.url'
        const captionUrl = 'https://caption.url'
        const videoFilename = 'video.mp4'
        const captionFilename = 'caption.vtt'


        let url

        if(t == 'caption'){
            url = captionUrl


        }else{
            url = videoUrl
        }
        let infoMessage = `Downloading ${url}`
        this.setState({infoMessage})
        let dlStatus = 1
        const {course} = this.props
        const courseId = course.id
        queueItem.setDlStatus(t, currentIndex, dlStatus)
        await this.mDMStatus.setDlStatus(courseId, t, currentIndex, dlStatus)
        
        const dl = await fetchDownload(url, captionFilename, null, (loaded, total, vIndex, lastReadDate, lastLoaded, type)=>{
            this.onDlProgress(loaded, total, vIndex, lastReadDate, lastLoaded, t)
        },currentIndex,t)
        
        dlStatus = 2//rand([-1,2])

        queueItem.setDlStatus(t, currentIndex, dlStatus)
        await this.mDMStatus.setDlStatus(courseId, t, currentIndex, dlStatus)

        this.setState({infoMessage : "OK"})


    }
    async fetchDl() {
        const {queueItemRef} = this

        const {currentIndex} = this.state
        const {course} = this.props
        const queueItem = queueItemRef.current
        
        const dmstatus = this.mDMStatus.getByCourseId(course.id, currentIndex)

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
                    captionRef.current.value = `${formatBytes(loaded)}/${speed}ps`

                }
                else if(t=="video"){
                    videoRef.current.value = `${formatBytes(loaded)}/${speed}ps`

                }

                await this.mDMStatus.setDlSize(course.id, t, vIndex, loaded)

            }
            
        }

        
        // refs[index].current.value = `${formatBytes(loaded)}/${speed}ps`
    }
    async fetchDlDummy(){

    }
   
    async onQueueComplete(){
        const queueItem = this.queueItemRef.current
        const {stopDownloadQueue, setQueueFinished} = this.props
        const finished = queueItem.checkDmStatusFinished()

        if(finished){
            setQueueFinished(true)
            stopDownloadQueue()
        }else{
            console.log(`queue stil have unfinished item`)
        }
        
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
        const {queueStarted, sections, course, tocs, store, alreadySetup, queueFinished} = this.props
        return (<><div className="queueman mb-12 mt-2">
        
        <div className="queue-man-container">
            {/*<h4 className="font-bold">Queue Manager UI</h4>*/}
            {
                
                alreadySetup ? <>
                    <QueueInfo queueFinished={queueFinished} message={infoMessage} queueStarted={queueStarted} currentIndex={currentIndex}/>
                    <QueueTable queueItemRef={this.queueItemRef} course={course} sections={sections} tocs={tocs} store={store}/>
                </> : ERROR_NOT_SETUP_QUEUE
            }
            
        </div>
    </div></>)
    }
}


export default QueueMan
    