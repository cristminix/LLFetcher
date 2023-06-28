import {Component,createRef} from "react"
import { formatBytes} from "../../components/learning_fn"
import QueueItemToolbar from "./QueueItemToolbar"

const InputDisplay = ({givenRef, value}) => {
    return <>
        <input className="bg-transparent focus:outline-none" readOnly type="text" ref={givenRef} defaultValue={value}/>
    </>
}
const DLStatus = ({type, status}) => {
    return <>
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
   </>
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
        
        const dmstatusList= Object.assign({},this.state.dmstatusList)
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
    async syncDMStatus(){
        
    }
    getDMStatus(sIndex,tIndex){
        const {course} = this.props
        const vIndex = `${sIndex}${tIndex}`
        const dmstatus = this.mDMStatus.getByCourseId(course.id, vIndex)

        return dmstatus
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
                    <td className={tdClsCaptionStatus}> <i className="fa fa-file-text-o"/> <InputDisplay value={captionSz} givenRef={captionStatusRefs[refKey]}/> <DLStatus status={dmstatus.captionStatus}/></td>
                    <td className={tdClsVideoStatus}> <i className="fa fa-file-video-o"/> <InputDisplay value={videoSz} givenRef={videoStatusRefs[refKey]}/> <DLStatus status={dmstatus.videoStatus}/></td>
                    <td className={tdCls}> <QueueItemToolbar loading={loadings[refKey]} dlStatus={vIndexStatus} finished={dmstatus.finished} interupted={dmstatus.interupted}/></td>
                </tr>
            })
        })
    }
    
}

export default QueueItem
    