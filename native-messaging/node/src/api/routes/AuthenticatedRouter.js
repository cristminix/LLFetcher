class AuthenticatedRouter {
  constructor(datasource, appConfig, logger) {
    this.appConfig = appConfig
    this.logger = logger
    this.datasource = datasource
  }
  authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]

    if (token == null) return res.sendStatus(401)

    jwt.verify(token, this.appConfig.get(`auth.TOKEN_SECRET`), (err, identity) => {
      this.logger.info(err)

      if (err) {
        return res.sendStatus(403)
      }

      req.identity = identity

      next()
    })
  }
}

export default AuthenticatedRouter
