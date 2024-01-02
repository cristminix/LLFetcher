import { useEffect, useRef, useState } from "react"
import {QueueState,QueueData, QueueResult, QueueItem} from "./queue-man/Queue"
import { useLocation } from "react-router-dom"
import CourseApi from "../../../global/course-api/CourseApi"
import { formatBytes, timeout } from "../../../global/fn"
import { checkQueueIsAllFinished, downloadMedia, downloadVtt, fetchQMeta, selectMediaUrl, selectVttUrl } from "./queue-man/fn"
import Toast from "../../../components/shared/ux/Toast"
import Button from "../../../components/shared/ux/Button"
import { niceScrollbarCls } from "../ux/cls"
import { courseUrlFromSlug } from "../../../global/course-api/course_fn"

let lastSlug = ''
let onWIndowLeaveSet = false

const TEST_FAILED_TRANS = false
const TEST_FAILED_MEDIA = false
const TEST_ENABLE_TIMEOUT_VALUE = 128
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
    const downloaderRef = useRef(null)
    const [activeQueueIdx,setActiveQueueIdx] = useState(0)
    const [logMessage,setLogMessage]=useState('loading...')
    const [queueRunning,setQueueRunning] = useState(false)
    const [singleMode,setSingleMode] = useState(false)
    const [queueMain, setQueueMain] = useState(null)
    const [blockMainContent, setBlockMainContent] = useState(false)
    // let queueInterupted = new Queue()
    let queueStarted = false
    const queueRunningRef = useRef(queueRunning)
    const queueStartedRef = useRef(queueStarted)
    const toastRef = useRef(null)
    const [queueData,setQueueData] = useState(null)
    const mQState = store.get('QState')
    const mSloc = store.get('StreamLocation')
    const mTranscript = store.get('Transcript')
    const mPrxCache = store.get('PrxCache')
    const [queueResetting, setQueueResetting] = useState(false)
    const [queueStoping, setQueueStoping] = useState(false)
    const [qDlViewsM, setQDlViewsM] = useState([])
    const [qDlViewsT, setQDlViewsT] = useState([])
    const [qDlStatusM, setQDlStatusM] = useState([])
    const [qDlStatusT, setQDlStatusT] = useState([])
    const [qDlStatusSet, setQDlStatusSet] = useState(false)
    const [qDlViewsSet, setQDlViewsSet] = useState(false)

    const toast= (message,t)=>{
        return
        if(toastRef.current){
            toastRef.current.add(message,t)
        }
    }

    const loadCourseData = async()=>{
        await generateQueueData()
        loadCourseData.RUNNING = false
    }
   
    const generateQueueData = async()=>{
        setBlockMainContent(true)
        const courseApi = new CourseApi(store)
        const course = await courseApi.getCourseInfo(slug)
        const sections = await courseApi.getCourseSections(slug)
        const tocs = await courseApi.getCourseTocs(slug)
        let courseUrl = courseUrlFromSlug(slug)
        // await mPrxCache.unset(courseUrl)

        setCourse(course)
        setSections(sections)
        setTocs(tocs)
        setCourseApi(courseApi)
        // setBlockMainContent(false)

        
    }
    const handleQDlStatusMChange = (idx, state) => {
        
        setQDlStatusM((prevQDlStatusM) =>
            prevQDlStatusM.map((n_qDlStatusM) =>
              n_qDlStatusM.idx === idx ? { ...n_qDlStatusM, state } : n_qDlStatusM
            )
        )
    }
    const handleQDlStatusTChange = (idx, state) => {
        setQDlStatusT((prevQDlStatusT) =>
            prevQDlStatusT.map((n_qDlStatusT) =>
              n_qDlStatusT.idx === idx ? { ...n_qDlStatusT, state } : n_qDlStatusT
            )
        )
    } 
    const setQDlStatus= (idx, state, t) => {
        if(t=='m'){
            handleQDlStatusMChange(idx, state)
        }else{
            handleQDlStatusTChange(idx, state)
        }
    }
    const initQDlStatus = (queueMain, queueData)=>{
        if(qDlStatusSet){
            return
        }
        const n_qDlStatusM = []
        const n_qDlStatusT = []
        queueMain.items.map((item,idx)=>{
            const toc = queueData.getByIdx(idx)
            const qState = mQState.getByTocId(toc.id)
            
            n_qDlStatusM.push({idx,state:qState?qState.mState:QueueState.INIT})
            n_qDlStatusT.push({idx,state:qState?qState.tState:QueueState.INIT})
        })
        setQDlStatusM(n_qDlStatusM)
        setQDlStatusT(n_qDlStatusT)
        setQDlStatusSet(true)
    }
    const qDlStatusView = (tocId, t=null, defaultText='')=>{
        const idx = queueData.pk2Idx(tocId)
        let cls = ''
        let status = null
        let record = mQState.getByTocId(tocId)
        
        if(t == 'm'){
            const statusM = qDlStatusM[idx]
            status = statusM ? statusM.state:0
        }else if(t == 't'){
            const statusT = qDlStatusT[idx]
            status =statusT?statusT.state:0
        }else{
            if(record){
                const prop = t ? `${t}State` : 'state'
                status = record[prop]
            }
        }
        
        if(status){
            if(t == 'm'){
                if(record){
                    if(record.mResult === QueueResult.SUCCESS_MEDIA || record.result === QueueResult.SUCCESS){
                        status = QueueState.FETCH_MEDIA_OK
                    }
                }
                switch(status){
                    case QueueState.INIT:
                        cls = 'fa fa-hourglass-o'
                        break
                    case QueueState.FETCH_META_OK:
                        cls = 'fa fa-hourglass-o'
                        break
                    case QueueState.FETCH_MEDIA_OK:
                        cls = 'fa fa-check'
                        break
                    case QueueState.FETCH_META_FAIL:
                    case QueueState.FETCH_MEDIA_FAIL:
                        cls = 'fa fa-exclamation-triangle'
                        break
                    default:
                        // cls = 'fa fa-spin fa-spinner'
                        cls = (queueRunning || singleMode) && idx == activeQueueIdx? `fa fa-spin fa-spinner `:''

                            break
                 }
                    
            }else if(t == 't'){
                if(record){
                    if(record.tResult === QueueResult.SUCCESS_TRANS || record.result === QueueResult.SUCCESS){
                        status = QueueState.FETCH_TRANS_OK
                    }
                }
                switch(status){
                    case QueueState.INIT:
                        cls = 'fa fa-hourglass-o'
                        break
                    case QueueState.FETCH_META_OK:
                        cls = 'fa fa-hourglass-o'
                        break
                    case QueueState.FETCH_TRANS_OK:
                        cls = 'fa fa-check'
                        break
                    
                    case QueueState.FETCH_META_FAIL:
                    case QueueState.FETCH_TRANS_FAIL:
                        cls = 'fa fa-exclamation-triangle'
                        break
                    
                    default:
                        cls = (queueRunning || singleMode)  && idx == activeQueueIdx? 'fa fa-spin fa-spinner':''
                        break
                }
            }else{
                switch(status){
                    case QueueState.INIT:
                        cls = ''
                        break
                    case QueueState.FETCH_MEDIA_OK:
                    case QueueState.FETCH_TRANS_OK:
                    case QueueState.FINISHED :
                        cls = 'fa fa-check'
                        break
                    case QueueState.FETCH_META:
                    case QueueState.FETCH_META_RETRY:
                    case QueueState.FETCH_MEDIA:
                    case QueueState.FETCH_TRANS:
                        cls = (queueRunning || singleMode)?'fa fa-spin fa-spinner':'fa fa-exclamation-triangle'
                        break
                    case QueueState.FETCH_META_FAIL:
                    case QueueState.FETCH_MEDIA_FAIL:
                    case QueueState.FETCH_TRANS_FAIL:
                    case QueueState.INTERUPTED:
                        cls = 'fa fa-exclamation-triangle'
                        break
                }
            }
            return <span title={`${QueueState.toStr(status)}:(${status})`}><i className={`fa ${cls}`}/></span>

        }
        // console.log(status, cls)

        return defaultText
    }
    const updateQState = async(qItem, qState, state)=>{
        console.log(`updateQState(${qItem.idx},${QueueState.toStr(state)})`)
        const META_STATES = [QueueState.FETCH_META, QueueState.FETCH_META_FAIL, QueueState.FETCH_META_OK, QueueState.FETCH_META_RETRY]
        const MEDIA_STATES = [QueueState.FETCH_MEDIA, QueueState.FETCH_MEDIA_FAIL, QueueState.FETCH_MEDIA_OK, QueueState.FETCH_MEDIA_RETRY]
        const TRANS_STATES = [QueueState.FETCH_TRANS, QueueState.FETCH_TRANS_FAIL, QueueState.FETCH_TRANS_OK, QueueState.FETCH_TRANS_RETRY]
        if(state == QueueState.INIT){
            setQDlStatus(qItem.idx,state,'m')
            setQDlStatus(qItem.idx,state,'t')
        }else if(META_STATES.includes(state)){
            if(qState.tResult != QueueResult.SUCCESS_TRANS){
                setQDlStatus(qItem.idx,state,'t')
                
            }
            if(qState.tResult != QueueState.SUCCESS_MEDIA){
                setQDlStatus(qItem.idx,state,'m')
            }
        }else if(MEDIA_STATES.includes(state)){
            setQDlStatus(qItem.idx,state,'m')
        }else if(TRANS_STATES.includes(state)){
            setQDlStatus(qItem.idx,state,'t')
        }
        let toc = queueData.getByIdx(qItem.idx)
       
        
        qState = await mQState.updateState(qState.id, state)
        console.log(qState)
        qItem.setState(state)

        let logMessage = `${qItem.idx} : ${toc.title} ... ${QueueState.toStr(qState.state)}`
        setLogMessage(logMessage)
        console.log(logMessage)
        // await timeout(TEST_ENABLE_TIMEOUT_VALUE)
        return qState
    }
    const updateQResult = async(qItem,qState, result)=>{
        // await timeout(TEST_ENABLE_TIMEOUT_VALUE)
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
        // await timeout(TEST_ENABLE_TIMEOUT_VALUE)
        return qState
    }
    
    const processQueue_fetchTrans = async(qItem, qState, toc)=>{
        if(!queueStartedRef.current){
            // toast(`processQueue_fetchTrans ${toc.title}`,'normal')
            console.error(`processQueue_fetchTrans ${toc.title} ABORTED`)
            return qState

        }
        toast(`processQueue_fetchTrans ${toc.title}`,'normal')
        let nQState = null
        let transcripts = mTranscript.getListByTocId(toc.id)
        
        if(transcripts.length == 0){
            nQState = await updateQState(qItem, qState, QueueState.FETCH_META_RETRY)
            let [slocs_,transcripts_, err] = await processQueue_fetchMeta(qItem, qState, toc)
            if(!err){
                transcripts = mTranscript.getListByTocId(toc.id)
            }
        }
        if(transcripts.length > 0){
            nQState = await updateQState(qItem, qState, QueueState.FETCH_TRANS)
            const [vttUrl, errWarn] = selectVttUrl(transcripts, course.id, store)
            // const [mediaUrl, errWarn] = selectMediaUrl(slocs, course.id, store)
            let success = false
            if(vttUrl){
                try{
                    success = await downloadVtt(vttUrl,qItem.idx, course, toc, store, downloaderRef,qState, (e,idx,course,toc,opt,t)=>onDownloadProgress(e,idx,course,toc,opt,qState,t))

                }catch(e){
                    console.error(e)
                }
            }
            console.log(vttUrl)

            // await timeout(TEST_ENABLE_TIMEOUT_VALUE)
            // if()
            nQState = await updateQState(qItem, qState, !success ? QueueState.FETCH_TRANS_FAIL : QueueState.FETCH_TRANS_OK)


        }

        console.log(transcripts)
        // FETCH_TRANS or FETCH_TRANS_RETRY = loading
        // FETCH_TRANS_OK = ok
        // FETCH_TRANS_FAIL = ok
        
   

        return nQState
    }
    const processQueue_fetchMedia = async(qItem, qState, toc)=>{
        if(!queueStartedRef.current){
            // toast(`processQueue_fetchTrans ${toc.title}`,'normal')
            console.error(`processQueue_fetchMedia ${toc.title} ABORTED`)
            return qState

        }
        toast(`processQueue_fetchMedia ${toc.title}`,'normal')
        
        let nQState = null
        let slocs = mSloc.getListByTocId(toc.id)
        
        if(slocs.length == 0){
            nQState = await updateQState(qItem, qState, QueueState.FETCH_META_RETRY)
            let [slocs_,transcripts_, err] = await processQueue_fetchMeta(qItem, qState, toc)
            if(!err){
                slocs = mSloc.getListByTocId(toc.id)
            }
        }
        if(slocs.length > 0){
            nQState = await updateQState(qItem, qState, QueueState.FETCH_MEDIA)
            await timeout(TEST_ENABLE_TIMEOUT_VALUE)
            const [mediaUrl, errWarn] = selectMediaUrl(slocs, course.id, store)
            let success = false
            if(mediaUrl){
                try{
                    success = await downloadMedia(mediaUrl,qItem.idx, course, toc, store, downloaderRef,qState,(e,idx,course,toc,opt,qState,t)=>onDownloadProgress(e,idx,course,toc,opt,qState,t))

                    // check filesize
                    const lastQState = mQState.getById(qState.id)
                    if(lastQState){
                        if(lastQState.loaded !== lastQState.size){
                            alert('Content Size mismatch detected, this caused by unstable net connection')
                            success = false
                        }
                    }
                }catch(e){
                    console.error(e)
                    if(typeof e.request !== 'undefined'){
                        if(typeof e.request.status !== 'undefined'){
                            if(e.request.status === 401){
                                console.error(`reached HTTP 401`)
                                // console.error(`tryng `)
                            }
                        }
                    }
                }
            }
            console.log(mediaUrl)
            nQState = await updateQState(qItem, qState, !success ? QueueState.FETCH_MEDIA_FAIL : QueueState.FETCH_MEDIA_OK)
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
        nQState = await updateQState(qItem, qState, QueueState.FETCH_META)
        

        

        let [slocs,transcripts, err] = await fetchQMeta(courseApi, toc)
        
        if(!err){
            nQState = await updateQState(qItem, qState, QueueState.FETCH_META_OK)
           


        }else{
            
            nQState = await updateQState(qItem, qState, QueueState.FETCH_META_FAIL)
            
            
        }
        await mPrxCache.unset(toc.url)

        return nQState
    }
    const processQueue_result = async(mediaQResult,transQResult,qItem,qState,toc)=>{
        await timeout(TEST_ENABLE_TIMEOUT_VALUE)
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
        if(finalQResult === QueueResult.SUCCESS){
            qState = await updateQState(qItem, qState, QueueState.FINISHED)
        }else{
            qState = await updateQState(qItem, qState, QueueState.INTERUPTED)
        }
        qState = await updateQResult(qItem, qState, finalQResult)
        return qState
    }
    const processQueue_INIT_FAILED = async(qItem,qState,toc)=>{
        console.log(`processQueue_INIT_FAILED() is running`)
        if(qState.state != QueueState.FETCH_META_OK){
            
            await mQState.updateMState(qState.id, QueueState.FETCH_META)
            await mQState.updateTState(qState.id, QueueState.FETCH_META)

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
            await mQState.updateMState(qState.id, QueueState.FETCH_META)
            await mQState.updateTState(qState.id, QueueState.FETCH_META)
            await updateQState(qItem,qState, QueueState.FETCH_META)
            
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
            await mQState.updateMState(qState.id, QueueState.FETCH_META)
            await mQState.updateTState(qState.id, QueueState.FETCH_META)
            await updateQState(qItem,qState, QueueState.FETCH_META)
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
    const stopQueue = async(f) =>{
        const _queueStarted = queueStartedRef.current
        const _queueRunning = queueRunningRef.current
        if(_queueStarted){
            if(confirm("Are you sure want to stop Queue ? ")){
                setQueueStoping(true)
                if(course){
                    // setQueueRunning(false)
                    if(downloaderRef.current){
                        const abortReason = 'USER_CANCELED'
                        downloaderRef.current.abort(abortReason)
                    }
                    queueStartedRef.current = false
                    queueRunningRef.current = false
                    setQueueStoping(false)

                }
            }
        }
    }
   
    const resetQueue = async(f) =>{
        const _queueStarted = queueStartedRef.current
        const _queueRunning = queueRunningRef.current
        if(!_queueStarted){
            if(confirm("Are you sure want to reset Queue ? ")){
                setQueueResetting(true)
                if(course){
                    await mQState.deleteByCourseId(course.id)
                    setQueueResetting(false)
                    setQueueAllFinished(false)
                }
            }
        }
    }
    const startQueue = async(f) =>{
        if(queueStarted){
            console.warn("Queue already started")
            return
        }
        queueStarted = true
        queueStartedRef.current = queueStarted
        onQueueStarted()
        while(!queueMain.isEmpty()){
            const queueStartedTrigger = queueStartedRef.current
            console.log(queueStartedRef.current)
            console.log(queueRunningRef.current)
            if(!queueStartedTrigger){
                console.log(`Queue Stoped by queueStartedRef.current == false`)
                onQueueStoped()
                break
            }
            if(!queueStarted){
                console.log(`Queue Stoped by local queueStarted == false`)

                onQueueStoped()
                break
            }

            let qItem = queueMain.dequeue()
            setActiveQueueIdx(qItem.idx)
            // console.log(idx)
            if(queueData){
                await processQueue(qItem)
            }
            

        }
        if(queueStarted){
            queueStarted = false
            queueStartedRef.current = queueStarted
            onQueueStoped()
        }

    }
    const onQueueStarted = f =>{
        setQueueRunning(true)
        queueRunningRef.current = true

        if(!onWIndowLeaveSet){
            onWIndowLeaveSet = true
            window.addEventListener('beforeunload', confirmLeaveWidow)
        }
    }
    const onQueueStoped = f =>{
        setQueueRunning(false)
        // queueMain = queueData.cloneQueue()
        queueRunningRef.current = false
        if(queueDataReady()){
            initQueueData()
        }

        window.removeEventListener('beforeunload', confirmLeaveWidow)
        onWIndowLeaveSet = false

    }
    const queueDataReady = ()=>{
        const valid_data = course != null && sections != null && tocs != null
        return valid_data
    }
    const initQueueData =() => {
        try{
            const queueData = new QueueData(sections, tocs, course) 
            setQueueData(queueData) 
            const queueMain = queueData.cloneQueue()
            console.log(queueMain)
            setQueueMain(queueMain)
            initQDlViews(queueMain, queueData)
            initQDlStatus(queueMain, queueData) 
        }catch(e){
            console.error(e)
        }
        
    }
    const qResultView = (tocId, prefix=null)=>{
        let cls = ''
        let record = mQState.getByTocId(tocId)
        let result = null
        if(record){
            const prop = prefix ? `${prefix}Result` : 'result'
            result = record[prop]
        }
        if(result && result != QueueResult.INIT){
            if(prefix == 'm'){
                if(result === QueueResult.SUCCESS_MEDIA){
                    cls= 'fa fa-check'
                }else{
                    cls = 'fa fa-exclamation-o'
                }
            }else if(prefix == 't'){
                if(result === QueueResult.SUCCESS_TRANS){
                    cls= 'fa fa-check'
                }else{
                    cls = 'fa fa-exclamation-o'
                }
            }else{
                if(result === QueueResult.SUCCESS){
                    cls= 'fa fa-check'
                }else{
                    cls = 'fa fa-exclamation-o'
                }
            }
            return <i className={`fa ${cls}`}/>

        }
        return null
    }
    

    const initQDlViews = (queueMain, queueData)=>{
        if(qDlViewsSet){
            return
        }
        const n_qDlViewsM = []
        const n_qDlViewsT = []
        queueMain.items.map((item,idx)=>{
            const toc = queueData.getByIdx(idx)
            const qState = mQState.getRow(course.id,toc.id,idx)
            let mPctg = 0
            let tPctg = 0 
            if(qState){        
                mPctg = Math.floor(qState.mLoaded / qState.mSize * 100)
                tPctg = Math.floor(qState.tLoaded / qState.tSize * 100)
            }
            n_qDlViewsM.push({idx,loaded:qState?qState.mLoaded:0,size:qState?qState.mSize:0,percentage:mPctg})
            n_qDlViewsT.push({idx,loaded:qState?qState.tLoaded:0,size:qState?qState.tSize:0,percentage:tPctg})
        })
        setQDlViewsM(n_qDlViewsM)
        setQDlViewsT(n_qDlViewsT)
        setQDlViewsSet(true)
    }
    const handleQdlViewsMChange = (idx, loaded, size) => {
        // Use map to create a new array with the updated user
        const percentage = Math.floor(loaded / size * 100)
        
        setQDlViewsM((prevQDlViewsM) =>
            prevQDlViewsM.map((n_qDlViewsM) =>
                n_qDlViewsM.idx === idx ? { ...n_qDlViewsM, loaded,size, percentage } : n_qDlViewsM
            )
        )
    }
    const handleQdlViewsTChange = (idx, loaded, size) => {
        // Use map to create a new array with the updated user
        const percentage = Math.floor(loaded / size * 100)
        
        setQDlViewsT((prevQDlViewsT) =>
            prevQDlViewsT.map((n_qDlViewsT) =>
                n_qDlViewsT.idx === idx ? { ...n_qDlViewsT, loaded,size, percentage } : n_qDlViewsT
            )
        )
    } 
    const setQDlView = (idx, loaded, size,t) => {
        if(t == 'm'){
            handleQdlViewsMChange(idx,loaded,size )
        }else{
            handleQdlViewsTChange(idx,loaded,size)

        }
    }
    const onDownloadProgress = (e, idx, course, toc, opt, qState, t)=>{
        if (!e.lengthComputable) {
            return
        }
        
        const loaded = e.loaded
        const size = e.total
        // console.log({loaded,size})
        const updateMethod = t=='m'?'updateMSize':'updateTSize'
        mQState[updateMethod](qState.id,size,loaded)
        setQDlView(idx, loaded, size, t)
    }
    const qDlView = (tocId, t)=>{
        const idx = queueData.pk2Idx(tocId)
        let qDlView_item = null
        if(t=='m'){
            const qDlViewsM_item = qDlViewsM[idx]
            qDlView_item = qDlViewsM_item
        }else{
            const qDlViewsT_item = qDlViewsT[idx]
            qDlView_item = qDlViewsT_item

        }
        let message = ''
        if(qDlView_item){
            const {loaded,size,percentage} = qDlView_item
            // console.log(t,idx,loaded,size,percentage)
            const loadedMB = loaded?formatBytes(loaded):''
            const sizeMB = size?formatBytes(size):''
            if(loaded < size){
                message = `${loadedMB} of ${sizeMB} : ${percentage}%`
            }else{
                message= `${sizeMB}`

            }
        }
        // console.log(message)
        return message
    }
    
    const confirmLeaveWidow = e => {
        // Standard-compliant browsers
        var confirmationMessage = 'Are you sure you want to leave?'
            
        (e || window.event).returnValue = confirmationMessage // For some older browsers
        return confirmationMessage
    }

    const startQueueSingle = async(idx,lastResult)=>{
        if(queueStartedRef.current){
            alert('Could not start queue single, Please wait until the last download complete')
            return
        }
        console.log(`startQueueSingle(${idx})`)
        let qItem = queueMain.items[idx]
        setActiveQueueIdx(qItem.idx)
        // console.log(idx)
        console.log(qItem)
        setSingleMode(true)
        queueStartedRef.current = true
        if(queueData){
            console.log(queueData)
            await processQueue(qItem)
            // console.log(`waiting for 3 sec`)
            // await timeout(3000)
            setSingleMode(false)
            queueStartedRef.current = false

            console.log(`single mode complete`)


        }
    }

    const abortQueueSingle = async(idx)=>{
        console.log(`stopQueueSingle(${idx})`)

    }
    
    const resetQueueSingle = async(idx)=>{
        console.log(`resetQueueSingle(${idx})`)

    }
    
    useEffect(()=>{
        if(slug && lastSlug !== slug){
            lastSlug = slug
            if(!loadCourseData.RUNNING){
                loadCourseData.RUNNING = true
                loadCourseData()

                console.log(`call loadCourseData()`)
            }
        }
        return f => {
            queueStarted =false
            onQueueStoped()
            setSlug(false)
            lastSlug=null
            queueStartedRef.current = false
        }
    },[slug]) 


    useEffect(()=>{
        if(queueDataReady()){
            initQueueData()
        }
    },[course,tocs,sections])
    const [queueAllFinished, setQueueAllFinished] = useState(false)
    const checkQueueFinished = async()=>{
        if(course){
            const allFinished = await checkQueueIsAllFinished(course.id, tocArray, mQState)
            setQueueAllFinished(allFinished)
            console.log(queueAllFinished)
        }
    }
    useEffect(()=>{
        if(queueData){
            setBlockMainContent(false)
            checkQueueFinished()            

        }
    },[queueData])
    useEffect(()=>{
        if(!queueRunning){
            checkQueueFinished()            
        }
    },[queueRunning])
    let btnIconCls = !queueRunning ? "fa fa-play" : "fa fa-spin fa-spinner"
    let stopBtnIconCls = !queueStoping ? "fa fa-stop" : "fa fa-spin fa-spinner"
    let resetBtnIconCls = !queueResetting ? "fa fa-refresh" : "fa fa-spin fa-spinner"
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

  <div className=" border border-gray-700 rounded-lg p-4 mb-2">
    <div className="flex">
    <div>
        <div>{
            queueRunning? logMessage : null
        }
        </div>
        <div className="flex gap-2">
            {!singleMode?<>
                {
                    true ? <Button caption={`${queueRunning?'Queue is running':'Start Queue'}`} loading={queueRunning} disabled={queueRunning} icon={btnIconCls} onClick={e=>startQueue()}/> : null
                }
                {
                    queueAllFinished ? <Button caption={"Reset Queue"} disabled={queueResetting} icon={resetBtnIconCls} onClick={e=>resetQueue()}/> : null
                }
                {
                    queueRunning ? <Button caption={"Stop Queue"} disabled={queueStoping} icon={stopBtnIconCls} onClick={e=>stopQueue()}/> : null
                }
            </>:''}
        </div>
    </div>
    
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
                <th className={`${thCls} w-[20px]`} rowSpan={2}>No</th>
                <th className={`${thCls} w-auto`} rowSpan={2}>Title</th>
                <th className={`${thCls}`} colSpan={2}>Status</th>
                <th className={`${thCls} text-center`}  rowSpan={2}>Action</th>
                </tr>
                <tr>
                    <th className={`${thCls} w-[180px]`}>Subtitle/Transcript</th>
                    <th className={`${thCls} w-[180px]`}>Media</th>
                </tr>
            </thead>
            <tbody>

                {
                    tocArray ? <>
                    {
                        tocArray.length > 0 ? tocArray.map((toc,tidx)=>{
                            const qState = mQState.getRow(course.id, toc.id, tidx)
                            let result = QueueResult.INIT
                            if(qState){
                                result = qState.result
                            }
                            return <tr key={tidx}>
                                <td className={tdCls}>{tidx+1}</td>
                                <td className={tdCls}>{toc.title}</td>
                                <td className={tdCls}>
                                    <div className="flex gap-2 px-2">
                                        <span><i className="fa fa-file-text"/></span>
                                        <span className="w-auto">{qDlView(toc.id, 't')}</span>
                                        <span>{qDlStatusView(toc.id, 't','...')}</span>
                                    </div>
                                </td>
                                <td className={tdCls}>
                                    <div className="flex gap-2 px-2">
                                        <span><i className="fa fa-file-video-o"/></span>
                                        <span className="w-auto">{qDlView(toc.id, 'm')}</span>
                                        <span>{qDlStatusView(toc.id, 'm','...')}</span>
                                    </div>
                                   
                                    
                                </td>
                                <td className={tdCls}>
                                    <div className="flex gap-2 items-center px-2 justify-center">
                                    <div className="flex gap-2">{
                                        !queueRunning?<>
                                            {
                                                result === QueueResult.SUCCESS ? <Button title="Requeue" onClick={e=>resetQueueSingle(tidx)} icon="fa fa-trash"/>
                                                :<Button onClick={e=>startQueueSingle(tidx, result)} 
                                                         title={`${result === QueueResult.INTERUPTED || result === QueueResult.FAILED ? 'Retry':'Download'}`} 
                                                         disabled={singleMode}
                                                         loading={singleMode && activeQueueIdx === tidx}
                                                         icon={`fa fa-${result === QueueResult.INTERUPTED || result === QueueResult.FAILED ? 'refresh':'download'}`}/>
                                            }
                                            {/* <span>{QueueResult.toStr(result)}</span> */}
                                            
                                        </>
                                        
                                        :''
                                    }
                                    </div>
                                        
                                    {/* {qDlStatusView(toc.id)} */}

                                    </div>
                                </td>

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