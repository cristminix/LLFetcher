import jwt from "jsonwebtoken"

class AuthenticatedRouter {
  appConfig = null
  logger = null
  datasource = null
  constructor(datasource, appConfig, logger) {
    this.appConfig = appConfig
    this.logger = logger
    this.datasource = datasource

    // console.log("AuthenticatedRouter", appConfig)
  }
  authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]

    if (token == null) return res.sendStatus(401)
    // console.log(this.appConfig)
    const TOKEN_SECRET = this.appConfig.get("auth.TOKEN_SECRET")
    console.log(TOKEN_SECRET)
    jwt.verify(token, TOKEN_SECRET, (err, name) => {
      if (err) {
        this.logger.info(err)

        return res.sendStatus(403)
      }
      // console.log(name)
      req.name = name

      next()
    })
  }
}

export default AuthenticatedRouter
