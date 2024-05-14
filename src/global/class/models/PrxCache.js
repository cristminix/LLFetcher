import crc from "crc"
import { sendMessage } from "@/global/fn/chrome"

const WEBCACHE_PREFIX = "WebCache_"

class WebCache {
  key = null
  cacheContent = null
  statusCode = 0
  url = null

  constructor(url) {
    this.setUrl(url)
    sendMessage("prxCache.create", null, "background")
  }
  setUrl(url) {
    this.url = url
    if (url) {
      this.key = `${WEBCACHE_PREFIX}${crc.crc32(url).toString(16)}`
    }
  }
  static async fromKey(key) {
    // const row = await chrome.storage.local.get(key)
    return new Promise((resolve, reject) => {
      sendMessage("prxCache.get", { key }, "background", (data) => {
        if (data) {
          const webCache = new WebCache(data.url)
          webCache.setCacheContent(data.cacheContent)
          webCache.setStatusCode(data.statusCode)
          resolve(webCache)
        }

        resolve(null)
      })
    })

    // return null
  }
  setCacheContent(cacheContent) {
    this.cacheContent = cacheContent
  }

  setStatusCode(statusCode) {
    this.statusCode = statusCode
  }

  async save() {
    const { key, cacheContent, statusCode, url } = this
    const record = { key, statusCode, url, cacheContent }
    sendMessage("prxCache.insert", { records: [record] }, "background")
    // const dataStr = JSON.stringify(data)
    // await chrome.storage.local.set({[key]:dataStr})
  }

  async delete() {
    // await chrome.storage.local.remove(this.key)
    await sendMessage("prxCache.delete", { key: this.key })
  }

  getKey() {
    return this.key
  }

  async remove() {
    await this.delete()
  }

  async load() {
    return new Promise((resolve, reject) => {
      sendMessage("prxCache.get", { key: this.key }, "background", (data) => {
        if (data) {
          if (data.cacheContent) {
            this.cacheContent = data.cacheContent
          }
        }
        resolve(true)
      })
    })
  }
  getCacheContent() {
    return this.cacheContent
  }
  getStatusCode() {
    return this.statusCode
  }
  isEmpty() {
    const empty =
      this.cacheContent == null || typeof this.cacheContent == "undefined"
    console.log(`Empty:`, empty)
    return empty
  }
}

class PrxCache {
  table = "PrxCache"
  static instance = null
  static getInstance() {
    if (!PrxCache.instance) {
      PrxCache.instance = new PrxCache()
    }
    return PrxCache.instance
  }
  async clearAll() {
    return new Promise((resolve, reject) => {
      sendMessage("prxCache.clear", null, "background", (data) => {
        resolve(data)
      })
    })
  }
  async get(url, noCache = false) {
    const webCache = new WebCache(url)
    if (noCache) {
      await webCache.delete()
      console.log(`PrxCache.get(${url},noCache=${noCache ? "1" : "0"})`)
    } else {
      await webCache.load()
    }
    return webCache
  }
  async getByKey(key) {
    const webCache = await WebCache.fromKey(key)
    return webCache
  }
  async set(url, cacheContent, statusCode) {
    const webCache = new WebCache(url)
    webCache.setCacheContent(cacheContent)
    webCache.setStatusCode(statusCode)
    await webCache.save()
    return webCache
  }

  async unset(url) {
    const webCache = await this.get(url)
    if (!webCache.isEmpty()) {
      webCache.remove()
    }
  }
  async unsetByKey(key) {
    const webCache = await this.getByKey(key)
    if (webCache) {
      if (!webCache.isEmpty()) {
        webCache.remove()
      }
    }
  }
  async getCounts() {
    return new Promise((resolve, reject) => {
      sendMessage("prxCache.count", null, "background", (data) => {
        resolve(data)
      })
    })
  }
  async getSize() {
    return new Promise((resolve, reject) => {
      sendMessage("prxCache.size", null, "background", (data) => {
        resolve(data)
      })
    })
  }
}
export { WebCache }
export default PrxCache
