import { v4 } from "uuid"
/**
 * localStorage
 * key value serialized Config
 * */
class LsConfig {
  config_key = null
  data = null

  constructor(config_key) {
    this.config_key = config_key
    this.init()
  }

  init() {
    if (!this.config_key) {
      config_key = `ls_config_${v4()}`
    }
    this.getData()
  }

  /**
   * set unique config key for localStorage key
   * */
  setConfigKey(key) {
    this.config_key = key
  }
  /**
   * get data by key
   * */
  getData(key) {
    try {
      this.data = JSON.parse(localStorage[this.config_key])
    } catch (e) {
      if (!this.data) {
        this.data = {}
      }
    }
    if (!key) return this.data

    if (!this.data[key]) return null

    return this.data[key]
  }
  /**
   * set data by key
   * */
  setData(key, value) {
    this.data[key] = value
    localStorage[this.config_key] = JSON.stringify(this.data)
  }
}

class ChromeLsConfig {
  config_key = null
  data = null

  constructor(config_key) {
    this.config_key = config_key
    this.init()
  }

  init() {
    if (!this.config_key) {
      config_key = `ls_config_${v4()}`
    }
    this.getData()
  }

  /**
   * set unique config key for localStorage key
   * */
  setConfigKey(key) {
    this.config_key = key
  }
  /**
   * get data by key
   * */
  async getData(key) {
    let usingChromeStorage = false
    try {
      const data = await chrome.storage.local.get(this.config_key)
      this.data = data[this.config_key] || {}
      usingChromeStorage = true
    } catch (e) {
      if (!this.data) {
        this.data = {}
      }
    }
    if(!usingChromeStorage){
      try {
        this.data = JSON.parse(localStorage[this.config_key])
      } catch (e) {
        if (!this.data) {
          this.data = {}
        }
      }
    }
    // console.log(this.data)
    if (!key) return this.data

    if (typeof this.data[key] === "undefined") return null

    return this.data[key]
  }
  /**
   * set data by key
   * */
  async setData(key, value) {
    let usingChromeStorage = false

    this.data[key] = value
    try{
      const lsData = {}
      lsData[this.config_key] = this.data
      await chrome.storage.local.set(lsData)
      usingChromeStorage = true
    }catch(e){

    }
    if(!usingChromeStorage){
      try {
        this.data[key] = value
        localStorage[this.config_key] = JSON.stringify(this.data)
      } catch (e) {
       
      }
    }
    
  }
}

export default LsConfig
export { ChromeLsConfig }
