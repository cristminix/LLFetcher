import express from "express"
import multer from "multer"
import fs from "fs"
import serveIndex from "serve-index"
import "reflect-metadata"
import path from "path"
import { getFileExtensionFromMimeType, validateImageFile } from "../../fn.js"
import { check, validationResult, checkSchema } from "express-validator"
import AuthenticatedRouter from "./AuthenticatedRouter.js"
class YtUploadTTRouter extends AuthenticatedRouter {
  datasource = null
  mYtUploadTT = null
  router = null
  appConfig = null
  uploader = null
  logger = null
  appConfig = null
  thumbnailDir = null
  constructor(datasource, appConfig, logger) {
    super(datasource, appConfig, logger)
    this.appConfig = appConfig
    this.logger = logger
    this.datasource = datasource
    this.mYtUploadTT = this.datasource.factory("MYtUploadTT", true)
    this.thumbnailDir = appConfig.get("module.thumbnailTTDir")
    this.uploader = multer({ dest: `${this.thumbnailDir}` })

    this.router = express.Router()
    this.initRouter()
  }
  getRouter() {
    return this.router
  }
  validateImageFile(fieldname, files) {
    let errors = validateImageFile(fieldname, files, this.logger, 4)
    return errors
  }
  async getState(req, res) {
    let { limit, page } = req.query
    let { uploadId } = req.params
    page = parseInt(page) || null
    const results = await this.mYtUploadTT.getState(uploadId, limit, page)
    res.send(results)
  }
  async getList(req, res) {
    const { uploadId, page, limit, order_by, order_dir } = req.query
    const results = await this.mYtUploadTT.getList(uploadId, page, limit, order_by, order_dir)
    res.send(results)
  }
  async get(req, res) {
    // Route logic for handling GET '/yt-upload-tt/:id'
    let id = req.params.id
    const row = await this.mYtUploadTT.getByPk(id)
    res.send({ row, success: true })
  }

  async create(req, res) {
    // Route logic for handling POST '/yt-upload-tt/create'
    const validationErrors = validationResult(req)
    const [file] = req.files
    // console.log(req.files)
    let errorThumbnails = this.validateImageFile("thumbnail", req.files)
    let errorValidations = validationErrors.array()
    const errors = [...errorValidations, ...errorThumbnails]
    if (errors.length > 0) {
      // in every situation, only this part of code is going to be executed
      return res.status(422).json({ errors })
    }
    let { title, uploadId, description, thumbnail } = req.body
    this.logger.info(req.files)
    if (file) {
      const ext = getFileExtensionFromMimeType(file.mimetype)
      const baseName = path.basename(file.path)
      thumbnail = `${baseName}.${ext}`
      const oldFilePath = file.path
      const newFilePath = `${this.thumbnailDir}/${thumbnail}`
      fs.rename(oldFilePath, newFilePath, (err) => {
        if (err) {
          this.logger.info("Error renaming file:", err)
        } else {
          this.logger.info("File renamed successfully!")
        }
      })
    }

    let record = null
    try {
      record = await this.mYtUploadTT.create(uploadId, title, description, thumbnail)

      res.send({ data: record })
    } catch (e) {
      res.send({ data: e.toString() })
    }
  }

  async update(req, res) {
    // Route logic for handling POST '/yt-upload-tt/update'
    const validationErrors = validationResult(req)
    const [file] = req.files
    // console.log(req.files)
    let errors = validationErrors.array()

    if (file) {
      let errorThumbnails = this.validateImageFile("thumbnail", req.files)
      errors = [...errors, ...errorThumbnails]
    }
    // errors = [...errors,...]
    if (errors.length > 0) {
      // in every situation, only this part of code is going to be executed
      return res.status(422).json({ errors })
    }
    let id
    if (req.body.id) {
      id = req.body.id
    }
    if (!id) {
      id = req.params.id
    }

    const existingRec = await this.mYtUploadTT.getByPk(id)
    if (existingRec) {
      this.logger.info(req.files)
      const [file] = req.files
      let { thumbnail } = existingRec
      let fileUpdated = false
      if (file) {
        fileUpdated = true
        const ext = getFileExtensionFromMimeType(file.mimetype)
        const baseName = path.basename(file.path)
        const oldThumbnail = existingRec.thumbnail
        thumbnail = `${baseName}.${ext}`
        const oldFilePath = file.path
        const newFilePath = `${this.thumbnailDir}/${thumbnail}`
        fs.rename(oldFilePath, newFilePath, (err) => {
          if (err) {
            this.logger.info("Error renaming file:", err)
          } else {
            this.logger.info("File renamed successfully!")
            const oldThumbnailPath = `${this.thumbnailDir}/${oldThumbnail}`

            fs.unlink(oldThumbnailPath, (err) => {
              if (err) {
                this.logger.info("Error deleting file:", err)
              } else {
                this.logger.info("File deleted successfully!")
              }
            })
          }
        })
      }
      const { title, description } = req.body
      let updatedData = { title, description }
      if (fileUpdated) {
        updatedData.thumbnail = thumbnail
      }
      const record = await this.mYtUploadTT.update(id, updatedData)
      res.send({ success: true, data: record, message: "Record updated" })
    } else {
      res.send({ success: false, message: "Record not found" })
    }
  }
  async delete(req, res) {
    // Route logic for handling POST '/yt-upload-tt/delete'
    let id
    if (req.body.id) {
      id = req.body.id
    }
    if (!id) {
      id = req.params.id
    }

    const existingRec = await this.mYtUploadTT.getByPk(id)

    // this.logger.info(id)
    if (existingRec) {
      const record = await this.mYtUploadTT.delete(id)
      const oldThumbnailPath = `${this.thumbnailDir}/${existingRec.thumbnail}`

      fs.unlink(oldThumbnailPath, (err) => {
        if (err) {
          this.logger.info("Error deleting file:", err)
        } else {
          this.logger.info("File deleted successfully!")
        }
      })
      res.send({ success: true, data: record, message: "Record deleted" })
    } else {
      res.send({ success: false, message: "Record not found" })
    }
  }
  initRouter() {
    const staticPath = path.join(this.appConfig.get("basepath"), this.thumbnailDir)

    this.router.use("/yt-upload-tts/thumbnails", express.static(staticPath)) // Serve static files
    this.router.use("/yt-upload-tts/thumbnails", serveIndex(staticPath, { icons: true }))
    this.router.get(
      "/yt-upload-tts",
      async (req, res, next) => {
        this.authenticateToken(req, res, next)
      },
      async (req, res) => await this.getList(req, res)
    )
    this.router.get(
      "/yt-upload-tt/states/:uploadId",
      async (req, res, next) => {
        this.getState(req, res, next)
      },
      async (req, res) => await this.get(req, res)
    )
    this.router.get(
      "/yt-upload-tt/:id",
      async (req, res, next) => {
        this.authenticateToken(req, res, next)
      },
      async (req, res) => await this.get(req, res)
    )
    this.router.post(
      "/yt-upload-tt/create",
      async (req, res, next) => {
        this.authenticateToken(req, res, next)
      },
      this.uploader.array("thumbnail"),
      check("title", "title field is required").not().isEmpty(),
      check("description", "description field is required").not().isEmpty(),
      async (req, res) => await this.create(req, res)
    )
    this.router.put(
      "/yt-upload-tt/update/:id?",
      async (req, res, next) => {
        this.authenticateToken(req, res, next)
      },
      this.uploader.array("thumbnail"),
      check("title", "title field is required").not().isEmpty(),
      check("description", "description field is required").not().isEmpty(),
      async (req, res) => await this.update(req, res)
    )
    this.router.delete(
      "/yt-upload-tt/delete/:id?",
      async (req, res, next) => {
        this.authenticateToken(req, res, next)
      },
      async (req, res) => await this.delete(req, res)
    )
  }
}

export default YtUploadTTRouter
