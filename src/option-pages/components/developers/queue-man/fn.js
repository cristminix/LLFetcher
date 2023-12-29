// return sloc and trans url
const fetchQMeta = async(courseApi, toc )=>{
    let slocs = null
    let transcripts = null
    let err = null
    try{
        slocs = await courseApi.getStreamLocs(toc)
        transcripts = await courseApi.getTranscripts(toc)
    }catch(e){
        err = e
    }
    

    return [slocs, transcripts, err]
}

export {
    fetchQMeta
}