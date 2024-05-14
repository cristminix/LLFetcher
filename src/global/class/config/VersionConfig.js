export default class VersionConfig extends LsConfig {
  constructor() {
    const config_key = "llfetcher_version_config"
    super(config_key)
    this.setData("version", 3.0)
    this.setData("firstInstall", true)
  }
}
