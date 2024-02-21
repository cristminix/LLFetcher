import express from "express"

class AuthRouter {
  datasource = null
  mUser = null
  router = null
  appConfig = null
  logger = null
  constructor(datasource, appConfig, logger) {
    this.datasource = datasource
    // this.mUser = this.datasource.factory("MUser", true)
    this.router = express.Router()
    this.initRouter()
  }
  getRouter() {
    return this.router
  }

  async generateToken(req, res) {
    // Route logic for handling POST '/user/create'
    let { username, email, firstName } = req.body

    const user = await this.mUser.create(username, email, firstName)
    res.send({ data: user })
  }

  initRouter() {
    this.router.post("/auth/generateToken:identity", async (req, res) => await this.generateToken(req, res))
  }
}

export default AuthRouter
