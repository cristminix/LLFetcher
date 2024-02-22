import express from "express"
import { generateAccessToken } from "../../fn.js"
import multer from "multer"
class AuthRouter {
  datasource = null
  mUser = null
  router = null
  appConfig = null
  logger = null
  multer = null
  constructor(datasource, appConfig, logger) {
    this.datasource = datasource
    this.appConfig = appConfig
    this.logger = logger
    this.multer = multer()
    this.router = express.Router()
    this.initRouter()
  }
  getRouter() {
    return this.router
  }

  async generateToken(req, res) {
    let { appId } = req.body
    const TOKEN_SECRET = this.appConfig.get("auth.TOKEN_SECRET")
    const allowedIdentities = this.appConfig.get("auth.allowedIdentities")
    if (allowedIdentities.includes(appId)) {
      const token = generateAccessToken(appId, TOKEN_SECRET)
      res.send({ appId, token })
    }
    res.send({ appId, token: null })
  }

  initRouter() {
    // console.log("initRouter")
    this.router.post("/auth/generateToken", this.multer.none(), async (req, res) => await this.generateToken(req, res))
  }
}

export default AuthRouter
