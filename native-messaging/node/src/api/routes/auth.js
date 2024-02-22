import express from "express"
import { generateAccessToken } from "../../fn.js"

class AuthRouter {
  datasource = null
  mUser = null
  router = null
  appConfig = null
  logger = null
  constructor(datasource, appConfig, logger) {
    this.datasource = datasource
    this.appConfig = appConfig
    this.logger = logger
    this.router = express.Router()
    this.initRouter()
  }
  getRouter() {
    return this.router
  }

  async generateToken(req, res) {
    let { appId } = req.params
    const TOKEN_SECRET = this.appConfig.get("auth.TOKEN_SECRET")
    const token = generateAccessToken(appId, TOKEN_SECRET)
    res.send({ appId, token })
  }

  initRouter() {
    // console.log("initRouter")
    this.router.post("/auth/generateToken/:appId", async (req, res) => await this.generateToken(req, res))
  }
}

export default AuthRouter
