import {Component,createRef} from "react"
import QueueItemToolbar from "./QueueItemToolbar"

const InputDisplay = ({givenRef, value}) => {
    return <>
        <input type="text" ref={givenRef} defaultValue={value}/>
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

        const {sections, tocs} = props
        this.state = {
            loadings : {},
            dlcaptionStatus : {},
            dlvideoStatus : {}
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

    setLoading(vIndex, status){
        const [sIndex,tIndex] = vIndex
        const {loadings} = this.state
        const newLoadings = Object.assign({},loadings)
        const refKey = this.createRefKey(sIndex,tIndex)
        newLoadings[refKey] = status
        this.setState({loadings: newLoadings})
    }
    setDlStatus(t, vIndex,status){
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
    render(){
        const {sections, tocs} = this.props
        const {captionStatusRefs, videoStatusRefs} = this
        const {loadings,dlvideoStatus,dlcaptionStatus} = this.state
    	const tdCls = "px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"

        let number = 0
        return sections.map((s, sIndex)=>{
            return tocs[s.slug].map((toc,tIndex)=>{
                number+=1
                const refKey = this.createRefKey(sIndex,tIndex)
                return <tr key={`${refKey}`}>
                    <td className={tdCls}> {number}</td>
                    <td className={tdCls}> {toc.title}</td>
                    <td className={tdCls}> <i className="fa fa-file-text-o"/> <InputDisplay value="n.a" givenRef={captionStatusRefs[refKey]}/> <DLStatus status={dlcaptionStatus[refKey]}/></td>
                    <td className={tdCls}> <i className="fa fa-file-video-o"/> <InputDisplay value="n.a" givenRef={videoStatusRefs[refKey]}/> <DLStatus status={dlvideoStatus[refKey]}/></td>
                    <td className={tdCls}> <QueueItemToolbar loading={loadings[refKey]} dlStatus={[dlcaptionStatus[refKey],dlvideoStatus[refKey]]}/></td>
                </tr>
            })
        })
    }
    
}

export default QueueItem
    