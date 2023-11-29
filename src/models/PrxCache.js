
import { crc32 } from "../components/fn"

class WebCache{
    key=null
    cacheContent=null
    statusCode=0
    url=null

    constructor(url){
        this.key = `WebCache_${crc32(url)}`
        this.url = url
    }

    setCacheContent(cacheContent){
        this.cacheContent = cacheContent
    }

    setStatusCode(statusCode){
        this.statusCode = statusCode
    }

    async save(){
        const {key,cacheContent,statusCode,url} = this
        const data = {statusCode,cacheContent,url}
        const dataStr = JSON.stringify(data)
        await chrome.storage.local.set({[key]:dataStr})
    }

    async delete(){
        await chrome.storage.local.remove(this.key)
    }

    async remove(){
        await this.delete()
    }

    async load(){
        let dataStr = await chrome.storage.local.get(this.key)
        let data = null
        if(typeof dataStr === "object"){
            dataStr = dataStr[this.key]
            try{
                data = JSON.parse(dataStr)
                this.setCacheContent(data.cacheContent)
                this.setStatusCode(data.statusCode)
                this.setUrl(data.url)
            }catch{
                data = null
            }
        }
        if(data){
            if(data.cacheContent){
                this.cacheContent = data.cacheContent
            }
        }
    }
    getCacheContent(){
        return this.cacheContent   
    }
    getStatusCode(){
        return this.statusCode
    }
    isEmpty(){
        return this.cacheContent == null
    }
}

class PrxCache{
    static instance = null
    static getInstance(){
        if(!PrxCache.instance){
            PrxCache.instance = new PrxCache()
        }
        return PrxCache.instance
    }

    async get(url){
        const webCache = new WebCache(url)
        await webCache.load()
        return webCache
    }

    async set(url,cacheContent,statusCode){
        const webCache = new WebCache(url)
        webCache.setCacheContent(cacheContent)
        webCache.setStatusCode(statusCode)
        await webCache.save()
        return webCache
    }

    async unset(url){
        const webCache = await PrxCache.get(url)
        if(!webCache.isEmpty()){
            webCache.remove()
        }
    }
}
export {WebCache}
export default PrxCache