const optionPageBaseUrl = "src/option-pages/"

const getActiveTab = async()=>{
    return new Promise((resolve, reject)=>{
        try{
            chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
                resolve(tabs[0])
            })
        }catch(e){
            resolve(null)
        }
        
    })
}

const getActiveTabUrl = async()=>{
    const activeTab = await getActiveTab()
    if(activeTab){
        return activeTab.url
    }
    return ''
}

const isYoutubeUrl = url =>{
    return url.match("youtube.com")
}

const isLinkedInLearningUrl = url =>{
    return url.match("linkedin.com/learning")
}

const isYoutubeChannelUrl = url => {
    return url.match("youtube.com/@")

}

const isYoutubeVideoUrl = url => {
    return url.match("youtube.com/watch")
}

const optionUrl = (path,qsobj=null) => {
    const optionUrl = chrome.runtime.getURL(`${optionPageBaseUrl}options.html`)
    let url = `${optionUrl}${path}`
    if(typeof qsobj === "object"){
        let qsArr = []
        Object.keys(qsobj).map((qsk,idx)=>{
            let qsv = qsobj[qsk]
            if(typeof qsv === "boolean"){
                qsv = qsv? "1" : "0"
            }
            const qskv = `${qsk}=${qsv}`
            qsArr.push(qskv)
        })
        url = `${url}?${qsArr.join('&')}`
    }
    return url    
}


const openTabOption = async(url)=>{
    const tabs = await chrome.tabs.query({ url: `${url}*` })
    if(tabs.length > 0){
        chrome.runtime.sendMessage({ action: 'activateTab', url ,optionPageBaseUrl})
    }else{
        chrome.tabs.create({ url })
    }

}

export{
    getActiveTab,
    getActiveTabUrl,
    isYoutubeUrl,
    isLinkedInLearningUrl,
    isYoutubeChannelUrl,
    isYoutubeVideoUrl,
    optionUrl,
    optionPageBaseUrl,
    openTabOption
}