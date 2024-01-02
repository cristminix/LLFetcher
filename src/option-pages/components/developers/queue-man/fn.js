import { courseUrlFromSlug, isTimeExpired } from "../../../../global/course-api/course_fn"
import { formatLeadingZeros } from "../../../../global/fn"
import { QueueResult } from "./Queue"
import JsFileDownloader from "js-file-downloader"


const checkSlocsExpired = (slocs)=>{
    let countExpired = 0
    slocs.map(item => {
        if(isTimeExpired(item.expiresAt)){
            countExpired+=1
        }
    })

    return countExpired
}
// return sloc and trans url
const fetchQMeta = async(courseApi, toc )=>{
    let slocs = null
    let transcripts = null
    let err = null
    let refresh = false
    try{
        slocs = await courseApi.getStreamLocs(toc, refresh)
        if(checkSlocsExpired(slocs) > 0){
            console.error('EXPIRED')
            refresh = true
            slocs = await courseApi.getStreamLocs(toc, refresh)

        }
        transcripts = await courseApi.getTranscripts(toc, refresh)
        // let courseUrl = courseUrlFromSlug(slug)
    }catch(e){
        err = e
        console.error(e)
    }
    

    return [slocs, transcripts, err]
}

const checkQueueIsAllFinished = async (courseId, tocArray=[], mQState)=>{
    const records = mQState.getListByCourseId(courseId)
    if(records.length == 0 || !Array.isArray(tocArray)){
        return false
    }
    const recordsFiltered = records.filter(rec => rec.result === QueueResult.SUCCESS)
    return recordsFiltered.length === tocArray.length
}

const downloadVtt = async(vttUrl,idx, course, toc, store, downloaderRef, qState, onProgressCallback=(e,idx,course,toc,opt,qState,t)=>null) => {
    return new Promise((resolve, reject)=>{
        const dmsetup = getDmStup(course.id, store)
    
        if(!dmsetup){
            resolve(false)
            return
        }
        const {enableFilenameIndex, selectedFmt} = dmsetup
        const filenamePrefix = enableFilenameIndex ? `${formatLeadingZeros(idx+1)}-` : ''
        const filename = `${filenamePrefix}${toc.slug}-${selectedFmt}.vtt`
        const url = vttUrl
        const downloader = new JsFileDownloader({
            url,
            autoStart : false,
            filename,
            timeout : 86400*1000,
            process : e => {
                onProgressCallback(e, idx, course, toc, {filename,url},qState, 't')
            }
        })
        downloaderRef.current = downloader

        downloader.start().then(function(){
            resolve(true)
        })
        .catch(function(error){
            reject(error)
        })
    })
}

const getDmStup = (courseId,store) => {
    const mDMSetup = store.get('DMSetup')
    return mDMSetup.getByCourseId(courseId)
}

const downloadMedia = async(mediaUrl, idx, course, toc, store, downloaderRef, qState, onProgressCallback=(e,idx,course,toc,opt,qState,t)=>null) =>{
    

    return new Promise((resolve, reject)=>{
        const dmsetup = getDmStup(course.id, store)
    
        if(!dmsetup){
            resolve(false)
            return
        }
        const {enableFilenameIndex, selectedFmt} = dmsetup
        const filenamePrefix = enableFilenameIndex ? `${formatLeadingZeros(idx+1)}-` : ''
        const filename = `${filenamePrefix}${toc.slug}-${selectedFmt}.mp4`
        const url = mediaUrl
        const downloader = new JsFileDownloader({
            url,
            autoStart : false,
            filename,
            timeout : 86400*1000,
            process : e => {
                onProgressCallback(e, idx, course, toc, {filename,url},qState, 'm')
            }
        })
        downloaderRef.current = downloader
        downloader.start().then(function(){
            resolve(true)
        })
        .catch(function(error){
            reject(error)
        })
    })

}

const selectMediaUrl = (slocs, courseId, store, defaultFmt='720') => {
    const dmsetup = getDmStup(courseId, store)
    let isExpired = false
    if(!dmsetup){
        return null
    }

    const {selectedFmt} = dmsetup
    let errWarnMsg = {
        match : false,
        prefered : defaultFmt,
        orig : selectedFmt
    }
    console.log(selectedFmt, dmsetup)
    let mediaUrl = null
    let selectedSloc

    let filteredSlocs = slocs.filter(item => item.fmt === selectedFmt)
    if(filteredSlocs.length > 0){
        errWarnMsg.match = true
        selectedSloc = filteredSlocs[0]
    }else{
        filteredSlocs = slocs.filter(item => item.fmt === defaultFmt)
        if(filteredSlocs.length > 0){
            selectedSloc = filteredSlocs[0]
            
        }else{
            selectedSloc = slocs[slocs.length-1]
        }
        errWarnMsg.match = false
        errWarnMsg.prefered = selectedSloc.fmt
    }
    if(selectedSloc){
        isExpired = isTimeExpired(selectedSloc.expiresAt)
        if(isExpired){
            console.error(`sloc url is expired`)
        }
        mediaUrl = selectedSloc.url
    }
    return [mediaUrl, errWarnMsg, isExpired]
}

const selectVttUrl = (transcripts,courseId, store, defaultLang='en')=>{
    const dmsetup = getDmStup(courseId, store)
    if(!dmsetup){
        return null
    }

    const selectedLang = dmsetup.selectedTrans
    let errWarnMsg = {
        match : false,
        prefered : defaultLang,
        orig : selectedLang
    }
    console.log(selectedLang, dmsetup)

    let vttUrl = null
    let selectedTrans = null

    let filteredTanscripts = transcripts.filter(item => item.lang === selectedLang)
    if(filteredTanscripts.length > 0){
        selectedTrans = filteredTanscripts[0]
        errWarnMsg.match = true
    }else{
        filteredTanscripts = transcripts.filter(item => item.lang === defaultLang)
        if(filteredTanscripts.length > 0){
            selectedTrans = filteredTanscripts[0]
        }else{
            selectedTrans = filteredTanscripts[transcripts.length-1]
        }
        errWarnMsg.match = false
        errWarnMsg.prefered = selectedSloc.lang
    }
    if(selectedTrans){
        vttUrl = selectedTrans.url
    }
    return [vttUrl, errWarnMsg]

}

const downloadHelperSh = async(courseId)=>{

}

const downloadHelperCmd = async(courseId)=>{
    
}

const downloadPlaylistM3u = async(courseId)=>{

}

const downloadExerciseFile = async(url)=>{

}

export {
    fetchQMeta,
    checkQueueIsAllFinished,
    downloadVtt,
    downloadMedia,
    selectMediaUrl,
    selectVttUrl,
    downloadExerciseFile,
    downloadHelperCmd,downloadHelperSh,
    downloadPlaylistM3u,

}