import { useEffect, useState, Component } from "react"
import QueueInfo from "./QueueInfo"
import QueueTable from "./QueueTable"
import {timeout} from "../../../components/fn"
import {fetchCourseTocMeta} from "../../components/learning_fn"

const ERROR_NOT_SETUP_QUEUE = "You must run setup queue first"

class QueueMan extends Component{
    constructor(props){
        super(props)
        this.state = {
            infoMessage : '',
            dlRunning : false,
            dlMeta : null,
            currentIndex : null,
            queueRunning : false
        }
    }
    async fetchDlMeta(){
        console.log(`Fetching dlMeta`)

    }
    async fetchDl(type) {

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

        if(sIndex == -1 && tIndex == -1){
            console.log(`${sIndex}, ${tIndex}`)
            this.setState({dlRunning:false})

            return
        }

        if(sIndex >= 0 && tIndex >= 0){
            
            console.log(`Processing ${sIndex}, ${tIndex}`)
            await timeout(1000)
            
            this.setState({dlRunning:true, currentIndex : qIndex},()=>{
                if(queueRunning){
                    this.triggerFetchDl()
                }
            })
        }

        // console.log(currentIndex)
        // let dlTypeSaved = !dlType ? "caption" : dlType == "caption" ? "video" : "finish"

        // if(!dlType){
        //     setDlType(dlTypeSaved)
        // }
        // else if(dlType == "caption"){
        //     const dlTypeSaved = "caption"
        //     setDlType(dlTypeSaved)
        // }
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
                        this.setState({dlMeta:dlMetaSaved})
                        this.triggerFetchDl()
                    }
                }
            }
        })
        
    }

    getNextIndex(){
        const {currentIndex} = this.state
        const {sections, tocs} = this.props
        console.log(currentIndex)

        let nextIndex = null
        if(!currentIndex){
            nextIndex = [0,0]
            return nextIndex
        }

        if(currentIndex.length ==2){
            console.log(`Here`)
            let [sIndex,tIndex] = currentIndex
            // if(!sIndex){
            //     sIndex = 0
            // }
            // if(!tIndex){
            //     tIndex = -1
            // }
            const sectionSlug = sections[sIndex].slug
            const sIndexMax = sections.length - 1
            const tIndexMax = tocs[sectionSlug].length - 1
            console.log(sIndexMax,tIndexMax)
            if(tIndex < tIndexMax){
                console.log('A')
                tIndex = tIndex + 1

                return [sIndex,tIndex]
            }

            else if(tIndex >= tIndexMax){
                if(sIndex < sIndexMax){
                console.log('B')

                    sIndex = sIndex + 1
                    tIndex = 0

                    return [sIndex,tIndex]
                }
            }
        }
        console.log('C')

        return [-1,-1]
    }
    // componentDidMount(){
    //     console.log(this.props)
    // }
    render(){
        const {infoMessage, currentIndex} = this.state
        const {queueStarted, sections, course, tocs, store, alreadySetup} = this.props
        return (<><div className="queueman mb-12 mt-2">
        
        <div className="queue-man-container">
            <h4 className="font-bold">Queue Manager UI</h4>
            {
                
                alreadySetup ? <>
                    <QueueInfo message={infoMessage} queueStarted={queueStarted} currentIndex={currentIndex}/>
                    <QueueTable course={course} sections={sections} tocs={tocs} store={store}/>
                </> : ERROR_NOT_SETUP_QUEUE
            }
            
        </div>
    </div></>)
    }
}


export default QueueMan
    