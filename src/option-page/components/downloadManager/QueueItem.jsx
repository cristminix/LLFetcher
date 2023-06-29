import {Component,createRef, useEffect,useState} from "react"
import { formatBytes} from "../../components/learning_fn"
import QueueItemToolbar from "./QueueItemToolbar"
import { render } from "react-dom"

// const InputDisplay = ({givenRef, value}) => {
//     const [defaultValue] = useState(value)
//     useEffect(()=>{
//         console.log(defaultValue)
//         givenRef.current.value = defaultValue
//     },[])
//     return <>
//         <input className="bg-transparent focus:outline-none" readOnly type="text" ref={givenRef} />
//     </>
// }
class InputDisplay extends Component{
    constructor(props){
        super(props)
        const {value} = props
        this.state = {
            value
        }
    }
    // const [defaultValue] = useState(value)
    // useEffect(()=>{
    //     console.log(defaultValue)
    //     givenRef.current.value = defaultValue
    // },[])
    setValue(value){
        this.setState({value})
    }
    render(){
        // const {givenRef} = this.props
        const {value} = this.state
        return <>
            <div className="w-30 mx-2" >{value}</div>
        </>
    }
    
}
const DLStatus = ({type, status}) => {
    return <div className="">
    {
        status == 2 ? <>
            <i className="fa fa-check text-green-500"/>
        </> : <>
            {
                status == 1 ? <>
                    <i className="fa fa-spin fa-spinner"/>
                    
                </>:<>
                    {
                        status == -1 ? <>
                            <i className="fa fa-exclamation-circle text-red-500"/>
                            
                        </>:<>{''}</>
                    }
                </>
            }
        </>    
    } 
   </div>
}
class QueueItem extends Component{
    constructor(props){
        super(props)
        this.captionStatusRefs = {}
        this.videoStatusRefs = {}

        const {sections, tocs, store, course} = props
        this.mDMStatus = store.get("DMStatus")
        this.state = {
            loadings : {},
            dlcaptionStatus : {},
            dlvideoStatus : {},
            dmstatusList : {}
        }
        
        // for(let sIndex = 0;sIndex < sections.length; sIndex++){
        //     const sSlug = sections[sIndex].slug
        //     const tocItems = tocs[sSlug]
        //     for(let tIndex = 0;tIndex < tocItems.length;tIndex++){
        //         const refKey = createRefKey(sIndex,tIndex)
        //         this.captionStatusRefs[refKey] = createRef(null)
        //         this.videoStatusRefs[refKey] = createRef(null)
        //     }
        // }

        // const sectionKeys = Object.keys(tocs)
        // sectionKeys.map((sKey, sIndex)=>{
        //     tocs[sKey].map((toc,tIndex)=>{
        //         const refKey = createRefKey(sIndex,tIndex)
        //         this.captionStatusRefs[refKey] = createRef(null)
        //         this.videoStatusRefs[refKey] = createRef(null)
        //     })
        // })

        sections.map((s,sIndex)=>{
            const tocItems = tocs[s.slug]
            tocItems.map((toc,tIndex)=>{
                const refKey = this.createRefKey(sIndex,tIndex)
                this.captionStatusRefs[refKey] = createRef(null)
                this.videoStatusRefs[refKey] = createRef(null)
                this.state.loadings[refKey] = false

                this.state.dlvideoStatus[refKey] = 0
                this.state.dlcaptionStatus[refKey] = 0

                const vIndex = [sIndex,tIndex]
                let dmstatus = this.getDMStatus(sIndex,tIndex)
                // console.log(dmstatus,vIndex)
                if(!dmstatus){
                    console.log(`creating default dmstatus`)
                    dmstatus = this.mDMStatus.createDefaultRow(course.id, vIndex)
                }
                this.state.dmstatusList[refKey] = dmstatus
            })
        })
    }

    getStatusRef(vIndex){
        const [sIndex,tIndex] = vIndex
        const refKey = this.createRefKey(sIndex,tIndex)
        const captionRef = this.captionStatusRefs[refKey]
        const videoRef = this.videoStatusRefs[refKey]
     
        return {
            captionRef,
            videoRef
        }
    }
    createRefKey(sIndex,tIndex) {
        return `ref_${sIndex}${tIndex}`
    }

    setDmStatus(vIndex, dmstatus){

    }

    setLoading(vIndex, status){
        const [sIndex,tIndex] = vIndex
        const {loadings} = this.state
        const newLoadings = Object.assign({},loadings)
        const refKey = this.createRefKey(sIndex,tIndex)
        newLoadings[refKey] = status
        this.setState({loadings: newLoadings})
    }
    setDlStatus_old(t, vIndex,status){
        const [sIndex,tIndex] = vIndex
        console.log(`setDlStatus([${sIndex},${tIndex},'${t}',${status}])`)

        const refKey = this.createRefKey(sIndex,tIndex)
        const stateKey = t == "caption" ? "dlcaptionStatus" : "dlvideoStatus"
        
        const dlStatus = Object.assign({},this.state[stateKey])
        
        dlStatus[refKey] = status
        
        const stateObj = {}
        
        stateObj[stateKey] = dlStatus

        this.setState(stateObj)
    }
    setDlStatus(t, vIndex,status){
        const [sIndex,tIndex] = vIndex
        console.log(`setDlStatus([${sIndex},${tIndex},'${t}',${status}])`)

        const refKey = this.createRefKey(sIndex,tIndex)
        const dmstatusKey = t == "caption" ? "captionStatus" : "videoStatus"
        
        const {dmstatusList}= this.state//Object.assign({},this.state.dmstatusList)

        
        const dmstatus = dmstatusList[refKey]
        dmstatus[dmstatusKey] = status



        let dlStatusResult = 0
        if(t == "caption"){
            dlStatusResult = parseInt(dmstatus.videoStatus) + parseInt(dmstatus[dmstatusKey])
        }else{
            dlStatusResult = parseInt(dmstatus.captionStatus) + parseInt(dmstatus[dmstatusKey])

        }

        if(dlStatusResult == 4){
            dmstatus.finished = true
            dmstatus.interupted = false
        }else{
            dmstatus.interupted = true            
        }

        this.setState({dmstatusList})
    }
    
    getDMStatus(sIndex,tIndex){
        const {course} = this.props
        const vIndex = `${sIndex}${tIndex}`
        const dmstatus = this.mDMStatus.getByCourseId(course.id, vIndex)

        return dmstatus
    }
    checkDmStatusFinished(){
        const {dmstatusList} = this.state
        let finished = true

        for(let refKey in dmstatusList){
            const dmstatus = dmstatusList[refKey]
            if(!dmstatus.finished){
                console.log(dmstatus)
                finished = false
                break
            }
        }
        return finished
    }
    async updateDmStatusRow(courseId,vIndex){ 
        const row = {
            videoStatus:0,
            captionStatus:0, 
            dlCaptionRetryCount : 0,
            dlVideoRetryCount: 0,
            finished :false,
            videoSz : 0,
            captionSz : 0,
            interupted : false
        }
        const dmstatus = await this.mDMStatus.updateByCourseId(courseId, vIndex,row)
        return dmstatus
    }
    async clearDMStatus(){
        const {captionStatusRefs, videoStatusRefs} = this

        const {sections, tocs, course} = this.props
        const {dmstatusList, loadings} = this.state 
        for(let sIndex = 0; sIndex < sections.length; sIndex++){
            const s = sections[sIndex] 
            const tocItems = tocs[s.slug]
            for(let tIndex = 0; tIndex < tocItems.length; tIndex++){
                const toc = tocItems[tIndex] 
                const refKey = this.createRefKey(sIndex,tIndex)
                const vIndex = [sIndex,tIndex]
    
                captionStatusRefs[refKey].current.setValue('n.a')
                videoStatusRefs[refKey].current.setValue('n.a')
                dmstatusList[refKey] = await this.updateDmStatusRow(course.id, vIndex)
                loadings[refKey] = false
                
            }
        }
        this.setState({dmstatusList, loadings}) 
    }
    render(){
        const {sections, tocs} = this.props
        const {captionStatusRefs, videoStatusRefs} = this
        const {loadings,dlvideoStatus,dlcaptionStatus, dmstatusList} = this.state
    	const defaultTdCls = "px-1 py-1 whitespace-nowrap text-sm font-medium"
        let tdCls = "",tdClsVideoStatus = "",tdClsCaptionStatus = ""
        let number = 0
        let tdClsSuccess = defaultTdCls + " text-green-900  dark:text-green-200 "
        let tdClsFailed = defaultTdCls + " text-red-800  dark:text-red-200 "
        if(!dmstatusList)
            return <tr><td colSpan={5}><i className="fa fa-spin fa-spinner"/></td></tr>
        return sections.map((s, sIndex)=>{
            return tocs[s.slug].map((toc,tIndex)=>{
                number += 1
                const refKey = this.createRefKey(sIndex,tIndex)
                const dmstatus = dmstatusList[refKey]
                let trCls = ""
                let videoSz="n.a",captionSz="n.a"
                let vIndexStatus = [dmstatus.captionStatus,dmstatus.videoStatus]
             

                if(dmstatus.videoSz >0){
                    videoSz = formatBytes(dmstatus.videoSz)
                }
                if(dmstatus.captionSz > 0){
                    captionSz = formatBytes(dmstatus.captionSz)
                }
                if(dmstatus.finished){
                    tdCls = defaultTdCls + tdClsSuccess
                    tdClsVideoStatus = tdCls
                    tdClsCaptionStatus = tdCls
                }else{
                    if(dmstatus.interupted){
                        tdCls = defaultTdCls + tdClsFailed
                        if(dmstatus.videoStatus == 2){
                            tdClsVideoStatus = tdClsSuccess
                        }else{
                            tdClsVideoStatus = tdClsFailed

                        }
                        if(dmstatus.captionStatus == 2){
                            tdClsCaptionStatus = tdClsSuccess
                        }else{
                            tdClsCaptionStatus= tdClsFailed
                            
                        }
                    }else{
                        tdCls = defaultTdCls + " text-gray-800  dark:text-gray-200 "
                        tdClsCaptionStatus = tdCls
                        tdClsVideoStatus = tdCls
                    }
                }
                //trCls = dmstatus.finished ? 'text-green-300' : dmstatus.interupted ? 'text-red-300' : ''
   


                return <tr key={`${refKey}`} className={trCls}>
                    <td className={tdCls}> {number}</td>
                    <td className={tdCls}> {toc.title}</td>
                    <td className={tdClsCaptionStatus}> <div className="flex"><i className="mt-1 fa fa-file-text-o"/> <InputDisplay value={captionSz} ref={captionStatusRefs[refKey]}/> <DLStatus status={dmstatus.captionStatus}/></div></td>
                    <td className={tdClsVideoStatus}> <div className="flex"><i className="mt-1 fa fa-file-video-o"/> <InputDisplay value={videoSz} ref={videoStatusRefs[refKey]}/> <DLStatus status={dmstatus.videoStatus}/></div></td>
                    <td className={tdCls}> <QueueItemToolbar loading={loadings[refKey]} dlStatus={vIndexStatus} finished={dmstatus.finished} interupted={dmstatus.interupted}/></td>
                </tr>
            })
        })
    }
    
}

export default QueueItem
    