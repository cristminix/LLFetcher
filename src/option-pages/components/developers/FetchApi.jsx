import { createRef, useEffect, useRef, useState } from "react"
import { useLocation } from "react-router-dom"
import { courseUrlFromSlug, isTimeExpired } from "../../../global/course-api/course_fn"
import Toast from "../../../components/shared/ux/Toast"
import CourseApi from "../../../global/course-api/CourseApi"
import { niceScrollbarCls } from "../ux/cls"
import Button from "../../../components/shared/ux/Button"
import DownloadWizard from "./DownloadWizard"
import {formatLeadingZeros} from "../../../global/fn"
const FetchApi = ({store, config}) => {

    const location = useLocation()
    const qs= location.search
    const qp= new URLSearchParams(qs)
    const [path,setPath] = useState(qp.get('tocPath'))
    const [slocUrl,setSlocUrl] = useState(null)
    const [slocExpired,setSlocExpired] = useState(null)
    const [transUrl,setTransUrl] = useState(null)
    
    const [mediaOutFilename,setMediaOutFilename] = useState('')
    const [transcriptOutFilename,setTranscriptOutFilename] = useState('')
    const [course,setCourse] = useState(null)
    const [toc,setToc] = useState(null)

    const [foundMatchingFmt,setFoundMatchingFmt] = useState(0)
    const [foundMatchingTrans,setFoundMatchingTrans] = useState(0)
    const [overrideMatchingFmt,setOverrideMatchingFmt] = useState('none')
    const [overrideMatchingTrans,setOverrideMatchingTrans] = useState('none')

    const [dmsetup,setDmsetup] = useState({selectedFmt:null,selectedTrans:null,enableFilenameIndex:null})
    let lastPath = ""
    const toastRef = useRef(null)
    const dlWizardRef = useRef(null)

    const toast= (message,t)=>{
        if(toastRef.current){
            toastRef.current.add(message,t)
        }
    }
    const getFileNumbering = async (_toc_) => {
        const {sections,tocs} = await store.get('Course').getCourseSecsTocs(course.id)
        console.log(sections,tocs)
        let number = 0
        for(const section of sections){
            const sslug = section.slug
            const tocList = tocs[sslug]
            for(const toc__ of tocList){
                 ++number
                if(toc__.id == _toc_.id){
                   
                    return formatLeadingZeros(number)
                }
            }
        }
        return formatLeadingZeros(1000)
    }
    const getOutFilename = async(ext) => {
        let filename = `${toc.slug}-${dmsetup.selectedFmt}`
        if(dmsetup.enableFilenameIndex){
            const fileNumber = await getFileNumbering(toc)
            filename = `${fileNumber}-${filename}`
        }
        return `${filename}.${ext}`
    }
    const doTestFetch = async(path) => {
        // console.log()
        const courseApi = new CourseApi(store)
        const courseId = qp.get('courseId')
        const tocId = qp.get('tocId')
        const tocUrl = courseUrlFromSlug(path) 
        const course = store.get('Course').getById(courseId)
        setCourse(course)
        const dmsetup = store.get('DMSetup').getByCourseId(courseId)
        if(dmsetup){
            setDmsetup(dmsetup )
            const {selectedFmt,selectedTrans,enableFilenameIndex} = dmsetup
            const toc = store.get('Toc').get(tocId)
            setToc(toc)
            let expired = false
            let firstTime = false
            let tryDoFetch = true
            let tryCount = 0
            while(tryDoFetch){
                let selectedSloc = null

                const streamLocs = await courseApi.getStreamLocs(toc,expired)
                tryCount += 1
                if(streamLocs.length>0){
                    try{
                        const filteredStreamLocs = streamLocs.filter(sloc=> sloc.fmt == selectedFmt)
                        if(filteredStreamLocs.length > 0){
                            selectedSloc = filteredStreamLocs[0]
                            setFoundMatchingFmt(1)
                        }else{
                            toast(`No matching fmt found default to ${streamLocs[0].fmt}`,"warning")
                            selectedSloc = streamLocs[0]
                            setFoundMatchingFmt(0)
                            setOverrideMatchingFmt(selectedSloc.fmt)
                        }
                    }catch(e){

                    }
                    

                    const transcripts = await courseApi.getTranscripts(toc,expired)
                    const transcriptKeys = Object.keys(transcripts)
                    let selectedTranscript = null
                    console.log(selectedTrans,transcriptKeys)
                    if(transcriptKeys.length>0){
                        if(transcriptKeys.includes(selectedTrans)){
                            selectedTranscript = transcripts[selectedTrans]
                            setFoundMatchingTrans(1)
                        }else{
                            if(transcriptKeys.includes('us')){
                                selectedTranscript = transcripts.us
                                toast("No matching Transcript found default to us","warning")
                                setFoundMatchingTrans(0)
                                setOverrideMatchingTrans('us')
                            }
                            else{
                                try{
                                    selectedTranscript = transcripts[transcriptKeys[0]]
                                    setFoundMatchingTrans(0)
                                    setOverrideMatchingTrans(transcriptKeys[0])
                                    toast(`No matching Transcript found default to ${transcriptKeys[0]}` ,"warning")

                                }catch(e){
                                }
                            }
                        }
                    }
                    if(selectedTranscript){
                        setTransUrl(selectedTranscript.url)
                    }else{
                        toast("No Transcript found","error")
                    }
                    if(selectedSloc){
                        // console.log(selectedSloc)
                        setSlocUrl(selectedSloc.url)
                        expired = isTimeExpired(selectedSloc.expiresAt)
                        if(!expired){
                            tryDoFetch = false
                        }else{

                        }
                        setSlocExpired(expired?'Yes':'No')
                    }else{
                        toast("No StreamLoc found","error")
                    }

                }
                firstTime = false

                if(tryCount > 3){
                    break
                }
            }
             
            
        }else{
            toast("No DMSetup found for this course","error")
            return
        }
        console.log(courseId,tocId,tocUrl,dmsetup)
    }

    const openUrl = (url) => {
        window.open(url,'_blank')
    }
    const doFetchSloc = async() => {
        if(dlWizardRef.current){
            dlWizardRef.current.loadUrl(slocUrl,'m')
        }
    }
    const doFetchTrans = async() => {
        if(dlWizardRef.current){
            dlWizardRef.current.loadUrl(transUrl,'t')
        }
    }
    useEffect(()=>{
        if(path){
            if(path!= lastPath){
                lastPath = path
                doTestFetch(path)
            }
        }
    },[path])


    const thCls = "px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase align-top"

    return <>
    <Toast ref={toastRef}/>
    <DownloadWizard getOutFilename={async(a,b,c)=>await getOutFilename(a,b,c)} toast={(a,b)=>toast(a,b)} className="mb-2" ref={dlWizardRef} store={store} config={config} dmsetup={dmsetup} course={course} toc={toc} setMediaOutFilename={a=>setMediaOutFilename(a)} setTranscriptOutFilename={a=>setTranscriptOutFilename(a)} />
    <div className="queue-table border rounded-xl shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700">
        {/* <div className="state-tbl flex flex-col mx-auto w-full"> */}
        <div className="flex flex-col">
  <div className={`overflow-x-auto sm:-mx-6 lg:-mx-8 ${niceScrollbarCls}`}>
    <div className={`inline-block min-w-full py-2 sm:px-6 lg:px-8`}>
      <div className="overflow-hidden"> 
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
                <tr>
                <th className={`${thCls} w-[150px]`}>Prop</th>
                <th className={`${thCls} `}>Value</th>
                <th className={`${thCls} w-[80px]`}>Expired</th>
                <th className={`${thCls} w-[180px]`}>Action</th>
                </tr>
            </thead> 
            <tbody>
                <tr>
                    <th className={`${thCls}`}>Slug</th><td colSpan={3}>{path}</td>
                </tr>
                <tr>
                    <th className={`${thCls}`}>Enable FIdx</th><td colSpan={3}>{dmsetup.enableFilenameIndex?'Yes':'No'}</td>
                </tr>
                <tr>
                    <th className={`${thCls}`}>Selected Fmt</th><td colSpan={3}>{dmsetup.selectedFmt}</td>
                </tr>
                <tr>
                    <th className={`${thCls}`}>Selected Trans</th><td colSpan={3}>{dmsetup.selectedTrans}</td>
                </tr>
                <tr>
                    <th className={`${thCls}`}>Found Matching Trans</th><td colSpan={3}>{foundMatchingTrans}</td>
                </tr>
                <tr>
                    <th className={`${thCls}`}>Found Matching Fmt</th><td colSpan={3}>{foundMatchingFmt}</td>
                </tr>
                {
                    foundMatchingFmt==0? <tr>
                    <th className={`${thCls}`}>Override Matching Fmt</th><td colSpan={3}>{overrideMatchingFmt}</td>
                </tr> : null
                
                }
                {
                    foundMatchingTrans==0? <tr>
                    <th className={`${thCls}`}>Override Matching Trans</th><td colSpan={3}>{overrideMatchingTrans}</td>
                </tr> : null
                
                }
                <tr>
                    <th className={`${thCls} `}>Media Url</th><td><p title={slocUrl} className="w-[600px] mb-1 font-mono text-clip overflow-hidden ...">{slocUrl}</p></td><td>{slocExpired}</td>
                    <td>
                        <div className="flex gap-2 items-center">
                            <Button caption="Fetch" icon="bi bi-download" onClick={e=>doFetchSloc()}/>
                            <Button caption="Open Link" icon="bi bi-globe" onClick={e=>openUrl(slocUrl)}/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th className={`${thCls}`}>Media Output Filename</th><td colSpan={3}>{mediaOutFilename}</td>
                </tr>
                <tr>
                    <th className={`${thCls} `}>Trans Url</th><td><p title={transUrl} className="mb-1 w-[600px] font-mono text-clip overflow-hidden ...">{transUrl}</p></td><td></td>
                    <td>
                        <div className="flex gap-2 items-center">
                            <Button caption="Fetch" icon="bi bi-download" onClick={e=>doFetchTrans()}/>
                            <Button caption="Open Link" icon="bi bi-globe" onClick={e=>openUrl(transUrl)}/>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th className={`${thCls}`}>Transcript Output Filename</th><td colSpan={3}>{transcriptOutFilename}</td>
                </tr>
            {/* <QueueItem course={course} dmsetup={dmsetup} clearStatusBar={clearStatusBar} logStatusBar={logStatusBar} resetQueueItem={resetQueueItem} startQueueItem={startQueueItem} store={store} ref={queueItemRef} course={course} sections={tmpSections} tocs={tocs} /> */}
            </tbody>
        </table>
        </div>
        </div>
        </div>
        {/* </div> */}
        </div>
    </div>
    <div>
    </div>
    </>
}

export default FetchApi