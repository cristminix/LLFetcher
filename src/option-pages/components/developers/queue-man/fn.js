import { courseUrlFromSlug } from "../../../../global/course-api/course_fn"
import { QueueResult } from "./Queue"

// return sloc and trans url
const fetchQMeta = async(courseApi, toc )=>{
    let slocs = null
    let transcripts = null
    let err = null
    try{
        slocs = await courseApi.getStreamLocs(toc)
        transcripts = await courseApi.getTranscripts(toc)
        // let courseUrl = courseUrlFromSlug(slug)
    }catch(e){
        err = e
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

const downloadVtt = async(url,outputFilename,onProgressCallback=f=>f) => {

}

const getDmStup = (courseId,store) => {
    const mDMSetup = store.get('DMSetup')
    return mDMSetup.getByCourseId(courseId)
}

const downloadMedia = async(url,outputFilename,onProgressCallback=f=>f) =>{

}

const selectMediaUrl = (slocs, courseId, store, defaultFmt='720') => {
    const dmsetup = getDmStup(courseId, store)
    
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
        mediaUrl = selectedSloc.url
    }
    return [mediaUrl, errWarnMsg]
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