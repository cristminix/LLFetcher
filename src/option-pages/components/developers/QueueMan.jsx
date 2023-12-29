import { useEffect, useRef, useState } from "react"
import Queue,{QueueState,QueueData, QueueResult} from "./queue-man/Queue"
import { useLocation } from "react-router-dom"
import CourseApi from "../../../global/course-api/CourseApi"
import { timeout } from "../../../global/fn"
import { fetchQMeta } from "./queue-man/fn"
import Toast from "../../../components/shared/ux/Toast"
import Button from "../../../components/shared/ux/Button"
import { niceScrollbarCls } from "../ux/cls"

let lastSlug = ''
let onWIndowLeaveSet = false

const TEST_FAILED_TRANS = false
const TEST_FAILED_MEDIA = false

const QueueMan= ({store, config})=>{
    const location = useLocation()
    const qs= location.search
    const qp= new URLSearchParams(qs)
    const [slug,setSlug] = useState(qp.get('slug'))
    const [course,setCourse] = useState(null)
    const [sections,setSections] = useState(null)
    const [tocs,setTocs] = useState(null)
    // const [streamLocations,setStreamLocations] = useState(null)
    // const [transcripts,setTranscripts] = useState(null)
    const [courseApi,setCourseApi] = useState(null)
    // const [tocArr,setTocArr] = useState(null)
    const [activeQueue,setActiveQueue] = useState(0)
    const [logMessage,setLogMessage]=useState('loading...')
    const [queueRunning,setQueueRunning] = useState(false)
    const [queueMain, setQueueMain] = useState(null)
    const [blockMainContent, setBlockMainContent] = useState(false)
    let queueInterupted = new Queue()
    let queueStarted = false
    const toastRef = useRef(null)
    const [queueData,setQueueData] = useState(null)
    const mQState = store.get('QState')
    const mSloc = store.get('StreamLocation')
    const mTranscript = store.get('Transcript')

    const toast= (message,t)=>{
        if(toastRef.current){
            toastRef.current.add(message,t)
        }
    }

    const loadCourseData = async()=>{
        await generateQueueData()
    }
   
    const generateQueueData = async()=>{
        setBlockMainContent(true)
        const courseApi = new CourseApi(store)
        const course = await courseApi.getCourseInfo(slug)
        const sections = await courseApi.getCourseSections(slug)
        const tocs = await courseApi.getCourseTocs(slug)
        setCourse(course)
        setSections(sections)
        setTocs(tocs)
        setCourseApi(courseApi)
        // setBlockMainContent(false)

        
    }
    const updateQstate = async(qItem, qState, state)=>{
        let toc = queueData.getByIdx(qItem.idx)
        let logMessage = `${qItem.idx} : ${toc.title} ... ${QueueState.toStr(qItem.state)}`
        setLogMessage(logMessage)
        
        qState = await mQState.updateState(qState.id, state)
        qItem.setState(state)
        await timeout(256)
        return qState
    }
    const updateQResult = async(qItem,qState, result)=>{
        await timeout(250)
        let toc = queueData.getByIdx(qItem.idx)
        const resultStr = QueueResult.toStr(result)
        let logMessage = `${qItem.idx} : ${toc.title} ... ${resultStr}`
        // setLogMessage(logMessage)
        let mode = 'error'
        if(result == QueueResult.SUCCESS){
            mode = 'success'
        }
        else if(result == QueueResult.SUCCESS_MEDIA || result == QueueResult.SUCCESS_TRANS){
            mode = 'warning'
        }else{
            mode = 'error'
        }
        toast(logMessage, mode)
        console.log(resultStr)        
        qState = await mQState.updateResult(qState.id, result)
        // qItem.setState(state)
        // await timeout(256)
        return qState
    }
    const processQueue_fetchTrans = async(qItem, qState, toc)=>{
        toast(`processQueue_fetchTrans ${toc.title}`,'normal')
        let nQState = null
        let transcripts = mTranscript.getListByTocId(toc.id)
        
        if(transcripts.length == 0){
            nQState = await updateQstate(qItem, qState, QueueState.FETCH_META_RETRY)
            let [slocs_,transcripts_, err] = await processQueue_fetchMeta(qItem, qState, toc)
            if(!err){
                transcripts = mTranscript.getListByTocId(toc.id)
            }
        }
        if(transcripts.length > 0){
            nQState = await updateQstate(qItem, qState, QueueState.FETCH_TRANS)
            await timeout(256)
            nQState = await updateQstate(qItem, qState, TEST_FAILED_TRANS ? QueueState.FETCH_TRANS_FAIL : QueueState.FETCH_TRANS_OK)


        }

        console.log(transcripts)
        // FETCH_TRANS or FETCH_TRANS_RETRY = loading
        // FETCH_TRANS_OK = ok
        // FETCH_TRANS_FAIL = ok
        
   

        return nQState
    }
    const processQueue_fetchMedia = async(qItem, qState, toc)=>{
        toast(`processQueue_fetchMedia ${toc.title}`,'normal')
        
        let nQState = null
        let slocs = mSloc.getListByTocId(toc.id)
        
        if(slocs.length == 0){
            nQState = await updateQstate(qItem, qState, QueueState.FETCH_META_RETRY)
            let [slocs_,transcripts_, err] = await processQueue_fetchMeta(qItem, qState, toc)
            if(!err){
                slocs = mSloc.getListByTocId(toc.id)
            }
        }
        if(slocs.length > 0){
            nQState = await updateQstate(qItem, qState, QueueState.FETCH_MEDIA)
            await timeout(256)
            nQState = await updateQstate(qItem, qState, TEST_FAILED_MEDIA ? QueueState.FETCH_MEDIA_FAIL : QueueState.FETCH_MEDIA_OK)


        }

        console.log(slocs)
        // FETCH_MEDIA or FETCH_MEDIA_RETRY = loading
        // FETCH_MEDIA_OK = ok
        // FETCH_MEDIA_FAIL = ok
        return nQState
    }
    const processQueue_fetchMeta = async(qItem, qState, toc)=>{
        let nQState = null
        // FETCH_META or FETCH_META_RETRY = loading
        // FETCH_META_OK = ok
        // FETCH_META_FAIL = ok
        
        // update qstate record 
        nQState = await updateQstate(qItem, qState, QueueState.FETCH_META)
        

        

        let [slocs,transcripts, err] = await fetchQMeta(courseApi, toc)
        
        if(!err){
            nQState = await updateQstate(qItem, qState, QueueState.FETCH_META_OK)
           


        }else{
            
            nQState = await updateQstate(qItem, qState, QueueState.FETCH_META_FAIL)
            
            
        }
        return nQState
    }
    const processQueue_result = async(mediaQResult,transQResult,qItem,qState,toc)=>{
        let finalQResult = mediaQResult

        if(mediaQResult == QueueResult.SUCCESS_MEDIA && transQResult == QueueResult.SUCCESS_TRANS){
            finalQResult = QueueResult.SUCCESS
        }else if(mediaQResult != QueueResult.SUCCESS_MEDIA && transQResult == QueueResult.SUCCESS_TRANS){
            finalQResult = transQResult
        }
        else if(mediaQResult == QueueResult.SUCCESS_MEDIA && transQResult != QueueResult.SUCCESS_TRANS){
            finalQResult = mediaQResult
        }
        else{
            finalQResult = QueueResult.FAILED
        }   
        qState = await updateQResult(qItem, qState, finalQResult)
        return qState
    }
    const processQueue_INIT_FAILED = async(qItem,qState,toc)=>{
        console.log(`processQueue_INIT_FAILED() is running`)
        if(qState.state != QueueState.FETCH_META_OK){
            qState = await processQueue_fetchMeta(qItem,qState,toc)
            await mQState.updateMState(qState.id, qState.state)
            await mQState.updateTState(qState.id, qState.state)
        }
        console.log('QSTATE:'+QueueState.toStr(qState.state))

        if(qState.state == QueueState.FETCH_META_OK){
            qState = await processQueue_fetchMedia(qItem,qState,toc)
            await mQState.updateMState(qState.id, qState.state)
            
            if(qState.state == QueueState.FETCH_MEDIA_OK){
                qState = await updateQResult(qItem, qState, QueueResult.SUCCESS_MEDIA)
            }else{
                qState = await updateQResult(qItem, qState,QueueResult.FAILED_MEDIA)
            }
            
            await mQState.updateMState(qState.id, qState.state)
            await mQState.updateMResult(qState.id, qState.result)
            
            let mediaQResult = qState.result
            console.log('MEDIA_RESULT:'+QueueResult.toStr(mediaQResult))
            if(mediaQResult == QueueState.FETCH_MEDIA_OK){
                qState = await processQueue_fetchTrans(qItem,qState,toc)
            }
            else {
                qState = await processQueue_fetchTrans(qItem,qState,toc)

            }
            await mQState.updateTState(qState.id, qState.state)
            
            if(qState.state == QueueState.FETCH_TRANS_OK){
                qState = await updateQResult(qItem, qState, QueueResult.SUCCESS_TRANS)
            }else{
                qState = await updateQResult(qItem, qState, QueueResult.FAILED_TRANS)

            }
            await mQState.updateTResult(qState.id, qState.result)

            let transQResult = qState.result
            console.log('TRANS_RESULT:'+QueueResult.toStr(transQResult))

            qState = await processQueue_result(mediaQResult,transQResult,qItem,qState,toc)
        }
        return qState
    }
    const processQueue_SUCCESS_MEDIA = async(qItem,qState,toc)=>{
        console.log(`processQueue_SUCCESS_MEDIA() is running`)
        if(qState.state != QueueState.FETCH_META_OK){
            qState = await processQueue_fetchMeta(qItem,qState,toc)
        }
        console.log('QSTATE:'+QueueState.toStr(qState.state))
        if(qState.state == QueueState.FETCH_META_OK){
            qState = await processQueue_fetchTrans(qItem,qState,toc)

            if(qState.state == QueueState.FETCH_TRANS_OK){
                qState = await updateQResult(qItem, qState, QueueResult.SUCCESS_TRANS)
            }else{
                qState = await updateQResult(qItem, qState,QueueResult.FAILED_TRANS)
            }
        }
        let mediaQResult = QueueResult.SUCCESS_MEDIA
        let transQResult = qState.result

        qState = await processQueue_result(mediaQResult,transQResult,qItem,qState,toc)
        return qState
    }
    const processQueue_SUCCESS_TRANS = async(qItem,qState,toc)=>{
        console.log(`processQueue_SUCCESS_TRANS() is running`)
        if(qState.state != QueueState.FETCH_META_OK){
            qState = await processQueue_fetchMeta(qItem,qState,toc)
        }
        console.log('QSTATE:'+QueueState.toStr(qState.state))
        if(qState.state == QueueState.FETCH_META_OK){
            qState = await processQueue_fetchMedia(qItem,qState,toc)


            if(qState.state == QueueState.FETCH_MEDIA_OK){
                qState = await updateQResult(qItem, qState, QueueResult.SUCCESS_MEDIA)
            }else{
                qState = await updateQResult(qItem, qState, QueueResult.FAILED_MEDIA)

            }
        }
        let transQResult = QueueResult.SUCCESS_TRANS
        let mediaQResult = qState.result
        qState = await processQueue_result(mediaQResult,transQResult,qItem,qState,toc)
        return qState
    }
    const processQueue = async(qItem)=>{
        let qState = null
        if(qItem){
            let {idx,state} = qItem
            let toc = queueData.getByIdx(idx)
            console.log(toc)
            if(toc){
                // get qstate state from db
                let lastQsRec = mQState.getRow(course.id,toc.id, idx)
                if(!lastQsRec){
                    lastQsRec = await mQState.create(course.id,toc.id, idx, QueueState.INIT)
                }
                qState = lastQsRec
                qItem.setState(qState.state)
                console.log(qState)
                
                if(qState.result == QueueResult.SUCCESS){
                    // qState = await processQueue_SUCCESS_MEDIA(qItem, qState, toc)

                }
                else if(qState.result == QueueResult.SUCCESS_MEDIA){
                    qState = await processQueue_SUCCESS_MEDIA(qItem, qState, toc)

                }
                else if(qState.result == QueueResult.SUCCESS_TRANS){
                    qState = await processQueue_SUCCESS_TRANS(qItem, qState, toc)

                }else{
                    qState = await processQueue_INIT_FAILED(qItem, qState, toc)
                }

                console.log(QueueState.toStr(qState.state))
                // console.log(QueueState.toStr(qItem.state))
                console.log(QueueResult.toStr(qState.result))
                
            }else{
                console.error(`toc = queueData.getByIdx(${idx}) is null`)
            }
            
        }else{
            console.error(`qsObj is null`)
        }
        
    }
    const startQueue = async(f) =>{
        if(queueStarted){
            console.warn("Queue already started")
            return
        }
        queueStarted = true
        onQueueStarted()
        while(!queueMain.isEmpty()){
            if(!queueStarted){
                onQueueStoped()
                break
            }

            let qItem = queueMain.dequeue()
            // console.log(idx)
            if(queueData){
                await processQueue(qItem)
            }
            

        }
        if(queueStarted){
            queueStarted = false
            onQueueStoped()
        }

    }
    const onQueueStarted = f =>{
        setQueueRunning(true)
        if(!onWIndowLeaveSet){
            onWIndowLeaveSet = true
            window.addEventListener('beforeunload', confirmLeaveWidow)
        }
    }
    const onQueueStoped = f =>{
        setQueueRunning(false)
        // queueMain = queueData.cloneQueue()
        if(queueDataReady()){
            initQueueData()
        }

        window.removeEventListener('beforeunload', confirmLeaveWidow)
    }
    const queueDataReady = ()=>{
        const valid_data = course != null && sections != null && tocs != null
        return valid_data
    }
    const initQueueData =() => {
        try{
            const queueData = new QueueData(sections, tocs, course)
            // console.log(queueData)
            setQueueData(queueData)
            // setTocArr(Object.assign([],queueData.getTocArr()))
            const queueMain = queueData.cloneQueue()
            console.log(queueMain)
            setQueueMain(queueMain)
            // setBlockMainContent(false)
            // const pk = queueMain.dequeue()
            // console.group(pk)
        }catch(e){
            console.error(e)
        }
        
    }
    const confirmLeaveWidow = e => {
        // Standard-compliant browsers
        var confirmationMessage = 'Are you sure you want to leave?'
            
        (e || window.event).returnValue = confirmationMessage // For some older browsers
        return confirmationMessage
    }
    useEffect(()=>{
        
        if(slug && lastSlug !== slug){
            lastSlug = slug
            loadCourseData()
        }
        return f => {
            queueStarted =false
            onQueueStoped()
            setSlug(false)
            lastSlug=''
        }
    },[slug]) 


    useEffect(()=>{
        if(queueDataReady()){
            initQueueData()
        }
    },[course,tocs,sections])
    useEffect(()=>{
        if(queueData){
            setBlockMainContent(false)
        }
    },[queueData])
    let btnIconCls = !queueRunning ? "fa fa-play" : "fa fa-spin fa-spinner"
    const thCls = "px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase"
    const tdCls = "px-1 py-1 whitespace-nowrap text-sm font-medium"
    
    let tocArray = null 
    if(queueData)
    {
        tocArray=queueData.getTocArr()
    }
    return <>
    <div className="relative">
    <Toast ref={toastRef}/>

  <div className=" border border-blue-200 rounded-lg p-4">
    <div className="flex">
    <div>
        <div>{
            queueRunning? logMessage : null
        }
        </div>
        <div>
            {
            <Button caption={"Start Queue"} disabled={queueRunning} icon={btnIconCls} onClick={e=>startQueue()}/>
            
            }
        </div>
    </div>
      {/* <div className="flex-shrink-0">
        <svg className="flex-shrink-0 h-4 w-4 text-blue-400 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
      </div>
      <div className="ms-3">
        <h3 className="text-sm text-blue-800 font-medium">
          Attention needed
        </h3>
        <div className="text-sm text-blue-700 mt-2">
          <span className="font-semibold">Holy guacamole!</span> You should check in on some of those fields below.
        </div>
      </div> */}
    </div>
  </div>
  {
    blockMainContent ? <>
    <div className="absolute top-0 start-0 w-full h-full bg-white/[.5] rounded-lg dark:bg-gray-800/[.4]"></div>

<div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2">
  <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
    <span className="sr-only">Loading...</span>
  </div>
</div>
    </>:null
  }    
  
</div>
    
<div className="queue-table border rounded-xl shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700">
        {/* <div className="state-tbl flex flex-col mx-auto w-full"> */}
        <div className="flex flex-col">
  <div className={`overflow-x-auto sm:-mx-6 lg:-mx-8 ${niceScrollbarCls}`}>
    <div className={`inline-block min-w-full py-2 sm:px-6 lg:px-8`}>
      <div className="overflow-hidden"> 
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
                <tr>
                <th className={thCls} rowSpan={2}>No</th>
                <th className={thCls} rowSpan={2}>Title</th>
                <th className={`${thCls}`} colSpan={2}>Status</th>
                <th className={thCls} rowSpan={2}>Action</th>
                </tr>
                <tr>
                    <th className={`${thCls} w-[200px]`}>Subtitle/Transcript</th>
                    <th className={`${thCls} w-[200px]`}>Media</th>
                </tr>
            </thead>
            <tbody>

                {
                    tocArray ? <>
                    {
                        tocArray.length > 0 ? tocArray.map((toc,tidx)=>{
                            return <tr key={tidx}>
                                <td className={tdCls}>{tidx+1}</td>
                                <td className={tdCls}>{toc.title}</td>
                                <td className={tdCls}>{'vtt'}</td>
                                <td className={tdCls}>{'media'}</td>
                                <td className={tdCls}>{'toolbar'}</td>

                            </tr>
                        }) : null
                    }                   
                    </>:null
                }
            </tbody>
        </table>
        </div>
        </div>
        </div>
        {/* </div> */}
        </div>
        </div>
    
    </>
}

export default QueueMan