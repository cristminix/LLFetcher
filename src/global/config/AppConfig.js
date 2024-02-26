import { v4 } from "uuid"
import jQuery from "jquery"
import { makeDelay } from "../fn"
const delayFn = makeDelay(256)
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
/**
 * UiConfig
 * */
class UiConfig extends LsConfig {
  defaultTheme = "default-theme.css"

  hiddenSidebar_callback_keys = []
  reloadSidebar_callback_keys = []
  onResize_callback_keys = []
  constructor() {
    const config_key = "uiTtsConfig"
    super(config_key)
    this.setData("defaultTheme", this.defaultTheme)
  }
  reloadSidebar() {
    const $main_content = jQuery("#root")
    $main_content.trigger("reloadSidebar")
  }
  /**
   * set sidebar hidden or shown
   * */
  setHiddenSidebarStatus(status = true) {
    const $main_content = jQuery("#root")

    $main_content.prop("hideSidebar", status)
    $main_content.trigger("hideSidebar")

    this.setData("hideSidebar", status)
  }
  /**
   * get sidebar hidden or shown status
   * */
  getHiddenSidebarStatus() {
    return this.getData("hideSidebar")
  }
  /**
	 * apply callback handler on event sidebar hidden or shown change
	 * @param {function} setHideSidebar hook state function
	 * @param {function} callback function to run after event fired
	 * @param {string} callback_key identifier for eliminate duplication
	 * 
	 * @example
	 * function Component(){
	 * 	const [hideSidebar,setHideSidebar] = useState(false)
		useEffect(()=>{
	    	config.getUiConfig().applyHiddenSidebarStatus(setHideSidebar,(status)=>{
		      console.log(status)
		      setHideSidebar(status)
		    },'template')
	  	},[])
	 * }
 	 * */
  windowSize = { width: 0, height: 0 }
  triggerResize = false
  unsetResizeEvent(callback_key) {
    const index = this.onResize_callback_keys.indexOf(callback_key)
    if (index > -1) {
      this.onResize_callback_keys.splice(index, 1)
    }
  }
  applyResizeEvent(callback, callback_key) {
    // console.log(this.onResize_callback_keys)
    if (typeof callback === "function") {
      if (!this.onResize_callback_keys.includes(callback_key)) {
        const $main_content = jQuery("#root")
        const $win = jQuery(window)
        this.windowSize.width = $win.width()
        this.windowSize.height = $win.height()

        $win.on("resize", () => {
          const $uWin = jQuery(window)
          const oW = this.windowSize.width
          const oH = this.windowSize.height
          const nW = $uWin.width()
          const nH = $uWin.height()

          // console.log(oW, oH)

          if (oW != nW || oH != nH || this.triggerResize) {
            this.windowSize.width = nW
            this.windowSize.height = nH
            const viewPortSize = {
              width: $main_content.width(),
              height: $main_content.height(),
            }
            const windowSize = this.windowSize
            delayFn(() => {
              callback(viewPortSize, windowSize, $main_content)
            })
          }
        })
        setTimeout(() => {
          this.triggerResize = true
          jQuery(window).trigger("resize")
        }, 1000)
        this.onResize_callback_keys.push(callback_key)
      }
    }
  }
  applyHiddenSidebarStatus(setHideSidebar, callback, callback_key) {
    setHideSidebar(this.getHiddenSidebarStatus())
    if (typeof callback === "function") {
      if (!this.hiddenSidebar_callback_keys.includes(callback_key)) {
        const $main_content = jQuery("#root")
        $main_content.on("hideSidebar", () => {
          callback($main_content.prop("hideSidebar"))
        })

        this.hiddenSidebar_callback_keys.push(callback_key)
      }
    }
  }

  applyReloadSidebar(callback, callback_key) {
    // reloadSideBarFn()
    if (typeof callback == "function") {
      // if(typeof this.reloadSidebar_callback_keys == "undefined"){
      // 	this.reloadSidebar_callback_keys=[]
      // }
      if (!this.reloadSidebar_callback_keys.includes(callback_key)) {
        const $main_content = jQuery("#root")
        $main_content.on("reloadSidebar", () => {
          console.log(this.reloadSidebar_callback_keys)
          callback()
        })
        this.reloadSidebar_callback_keys.push(callback_key)
      }
    }
  }
}
/**
 * AppConfig
 * class for storing Application Config and state
 * */
class AppConfig {
  mode = "development"
  // host 			= null
  // api_endpoint	= null;
  // push_endpoint 	= null;
  // tts_endpoint 	= null;
  // messaging_endpoint = null;
  appId = "llfetcher-chrome-ext-30"

  uiConfig = null

  static instance = null
  /**
   * get singleton instance */
  static getInstance() {
    if (AppConfig.instance instanceof AppConfig) {
    } else {
      AppConfig.instance = AppConfig.factory()
    }

    return AppConfig.instance
  }
  /**
   * singleton factory*/
  static factory() {
    return new AppConfig()
  }
  /**
   * @constructor
   * */
  constructor() {
    this.uiConfig = new UiConfig()
  }
  getAppId() {
    return this.appId
  }
  /**
   * get UiConfig instance
   * @return {UiConfig} */
  getUiConfig() {
    return this.uiConfig
  }
}

export default AppConfig
