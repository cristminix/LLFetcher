
import crc from 'crc'

const WEBCACHE_PREFIX = 'WebCache_'

class WebCache{
    key=null
    cacheContent=null
    statusCode=0
    url=null

    constructor(url){
        this.setUrl(url)
    }
    setUrl(url){
        this.url = url
        if(url){
            this.key = `${WEBCACHE_PREFIX}${crc.crc32(url).toString(16)}`

        }
    }
    static async fromKey(key){
        const row = await chrome.storage.local.get(key)
        if(row){
            const data = JSON.parse(row[key])
            const webCache = new WebCache(data.url)
            webCache.setCacheContent(data.cacheContent)
            webCache.setStatusCode(data.statusCode)
            return webCache
        }
        return null
    }
    setCacheContent(cacheContent){
        this.cacheContent = cacheContent
    }

    setStatusCode(statusCode){
        this.statusCode = statusCode
    }

    async save(){
        const {key,cacheContent,statusCode,url} = this
        const data = {statusCode,url,cacheContent}
        const dataStr = JSON.stringify(data)
        await chrome.storage.local.set({[key]:dataStr})
    }

    async delete(){
        await chrome.storage.local.remove(this.key)
    }

    getKey(){
        return this.key
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
    table = "PrxCache"
    static instance = null
    static getInstance(){
        if(!PrxCache.instance){
            PrxCache.instance = new PrxCache()
        }
        return PrxCache.instance
    }
    async clearAll(){
        Object.keys(await chrome.storage.local.get()).forEach(key=>{
            if(key.startsWith(WEBCACHE_PREFIX)){
                // console.log(key)

                chrome.storage.local.remove(key)
            }
        })
    }
    async get(url){
        const webCache = new WebCache(url)
        await webCache.load()
        return webCache
    }
    async getByKey(key){
        const webCache = await WebCache.fromKey(key)
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
        const webCache = await this.get(url)
        if(!webCache.isEmpty()){
            webCache.remove()
        }
    }
    async unsetByKey(key){
        const webCache = await this.getByKey(key)
        if(webCache){
            if(!webCache.isEmpty()){
                webCache.remove()
            }
        }
    }
    async getCounts(){
        let data = await chrome.storage.local.get(null)
        let count = 0
        for(let key in data){
            if(key.startsWith(WEBCACHE_PREFIX)){
                count += 1
            }
        }
        return count
    }
    async getSize(){
        let data = await chrome.storage.local.get(null)
        let size = 0
        for(let key in data){
            if(key.startsWith(WEBCACHE_PREFIX)){
                let dataSize = new TextEncoder().encode(data[key]).length
                size += dataSize
            }
        }
        return size
    }
}
export {WebCache}
export default PrxCache