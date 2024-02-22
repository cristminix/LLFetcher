import express from "express"
import fs from "fs"
class ManualRouter {
  datasource = null
  mUser = null
  router = null
  appConfig = null
  logger = null
  constructor(datasource, appConfig, logger) {
    this.datasource = datasource
    this.appConfig = appConfig
    this.router = express.Router()
    this.initRouter()
  }
  getRouter() {
    return this.router
  }

  async getFile(req, res) {
    // Route logic for handling POST '/user/create'
    let { path } = req.body
    if (!path) {
      path = req.params.path
    }
    let success = false,
      content = "",
      message = ""
    const filePath = `${this.appConfig.get("module.manualDir")}/${path}`
    try {
      content = await fs.readFileSync(filePath, "utf8")
      success = true
    } catch (e) {
      message = e.message
    }
    res.send({ success, content, message })
  }

  initRouter() {
    console.log("initRouter")
    this.router.get("/man/getFile/:path", async (req, res) => await this.getFile(req, res))
  }
}

export default ManualRouter
