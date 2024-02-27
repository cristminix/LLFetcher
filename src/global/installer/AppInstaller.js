import { ChromeLsConfig } from "../config/LsConfig"
import menus from "./data/side-menu.json"
import Menu from "../models/Menu"
const mMenu = Menu.getInstance()

class AppInstaller extends ChromeLsConfig {
  constructor() {
    const config_key = "llfetcher_installer"
    super(config_key)
    //
  }

  async importAppMenu() {
    await mMenu.import(menus)
    this.setData("freshInstall", false)
    try {
      document.location.reload()
    } catch (e) {}
  }
  async onInstall() {
    await this.importAppMenu()
  }
  async isFreshIstall() {
    let freshInstall = await this.getData("freshInstall")
    console.log(freshInstall)

    if (freshInstall !== false) {
      //   await this.setData("freshInstall", true)
      return true
    }
    return freshInstall
  }
}

export default AppInstaller
