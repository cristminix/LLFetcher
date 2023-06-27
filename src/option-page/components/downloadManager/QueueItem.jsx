import {Component,createRef} from "react"
import QueueItemToolbar from "./QueueItemToolbar"

const InputDisplay = ({givenRef, value}) => {
    return <>
        <input type="text" ref={givenRef} defaultValue={value}/>
    </>
}
const createRefKey = (sIndex,tIndex) => {
    return `ref_${sIndex}${tIndex}`
}
class QueueItem extends Component{
    constructor(props){
        super(props)
        this.captionStatusRefs = {}
        this.videoStatusRefs = {}

        const {sections, tocs} = props

        
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
                const refKey = createRefKey(sIndex,tIndex)
                this.captionStatusRefs[refKey] = createRef(null)
                this.videoStatusRefs[refKey] = createRef(null)
            })
        })
    }

    getStatusRef(vIndex){
        const [sIndex,tIndex] = vIndex
        const refKey = `ref_${sIndex}${tIndex}`
        const captionRef = this.captionStatusRefs[refKey]
        const videoRef = this.videoStatusRefs[refKey]
        return {
            captionRef,
            videoRef
        }
    }
    render(){
        const {sections, tocs} = this.props
        const {captionStatusRefs, videoStatusRefs} = this
    	const tdCls = "px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"

        let number = 0
        return sections.map((s, sIndex)=>{
            return tocs[s.slug].map((toc,tIndex)=>{
                number+=1
                const refKey = createRefKey(sIndex,tIndex)
                return <tr key={`${refKey}`}>
                    <td className={tdCls}> {number}</td>
                    <td className={tdCls}> {toc.title}</td>
                    <td className={tdCls}> <i className="fa fa-file-text-o"/> <InputDisplay value={refKey} givenRef={captionStatusRefs[refKey]}/></td>
                    <td className={tdCls}> <i className="fa fa-file-video-o"/> <InputDisplay value={refKey} givenRef={videoStatusRefs[refKey]}/></td>
                    <td className={tdCls}> <QueueItemToolbar/></td>
                </tr>
            })
        })
    }
    
}

export default QueueItem
    