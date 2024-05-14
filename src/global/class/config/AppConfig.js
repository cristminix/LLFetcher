import UiConfig from "./UiConfig"
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
  // versionConfig = null

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
    // this.versionConfig = new VersionConfig()
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
