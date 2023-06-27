import { useEffect, useState, Component, createRef } from "react"
import QueueInfo from "./QueueInfo"
import QueueTable from "./QueueTable"
import {timeout} from "../../../components/fn"
import {fetchCourseTocMeta, formatBytes, calculateSpeed} from "../../components/learning_fn"

const ERROR_NOT_SETUP_QUEUE = "You must run setup queue first"
async function fetchDownload(url, outputFilename, mime, progressCallback, vIndex){
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
        progressCallback(loaded, total, vIndex, lastReadDate, lastLoaded)
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
        this.queueItemRef = createRef(null)
    }
    async fetchDlMeta(){
        console.log(`Fetching dlMeta`)

    }
    async fetchDl() {
        const {currentIndex} = this.state
        const videoUrl = 'https://video.url'
        const captionUrl = 'https://caption.url'
        const videoFilename = 'video.mp4'
        const captionFilename = 'caption.vtt'

        const dl = await fetchDownload(captionUrl, captionFilename, null, (loaded, total, vIndex, lastReadDate, lastLoaded)=>{
            this.onDlProgress(loaded, total, vIndex, lastReadDate, lastLoaded)
        },currentIndex)

    }
    async onDlProgress(loaded, total, vIndex, lastReadDate, lastLoaded){

        const {queueItemRef} = this
        
        if(queueItemRef.current){
            console.log(vIndex)
            if(vIndex){
                const percentageView = Math.round(loaded / total * 100) + '%'
                //console.log(formatBytes(loaded),percentageView)
                // console.log(`lastLoaded:${lastLoaded}`)
                // console.log(`lastReadDate:${lastReadDate}`)
                const speed = formatBytes(calculateSpeed(lastLoaded,lastReadDate,new Date))
                // console.log(`speed:${speed}`)
                const {captionRef,videoRef} = queueItemRef.current.getStatusRef(vIndex)
                // console.log(videoRef,captionRef)

                captionRef.current.value = `${formatBytes(loaded)}/${speed}ps`
            }
            
        }

        
        // refs[index].current.value = `${formatBytes(loaded)}/${speed}ps`
    }
    async fetchDlDummy(){

    }
    async triggerFetchDl(){
        const {stopDownloadQueue, setQueueFinished} = this.props
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
            setQueueFinished(true)
            stopDownloadQueue()
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
    triggerResetQueue(){
        const {setQueueFinished} = this.props
        this.setState({currentIndex:null},()=>{
            setQueueFinished(false)
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
    