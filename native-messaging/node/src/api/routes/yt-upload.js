import express from "express"
import multer from "multer"
import fs from "fs"
import serveIndex from "serve-index"
import "reflect-metadata"
import path from "path"
// import slugify from'slugify'
import { getFileExtensionFromMimeType } from "../../fn.js"
import { check, validationResult, checkSchema } from "express-validator"
import AuthenticatedRouter from "./AuthenticatedRouter.js"

class YtUploadRouter extends AuthenticatedRouter {
  datasource = null
  mYtUpload = null
  router = null
  appConfig = null
  uploader = null
  logger = null
  thumbnailDir = null
  constructor(datasource, appConfig, logger) {
    super(datasource, appConfig, logger)
    this.appConfig = appConfig
    this.logger = logger
    this.datasource = datasource
    this.mYtUpload = this.datasource.factory("MYtUpload", true)
    this.thumbnailDir = appConfig.get("module.thumbnailDir")
    this.uploader = multer({
      // limits: 100,
      // limits: {fileSize: 4 * Math.pow(1024, 2 /* MBs*/)},
      // fileFilter(req, file, cb){
      //Validate the files as you wish, this is just an example
      // cb(null, file.mimetype === 'image/png' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/webp')
      // },
      dest: this.thumbnailDir,
    })
    this.router = express.Router()
    this.initRouter()
  }

  validateImageFile(fieldname, files) {
    let errors = []
    // let messages = []
    // let notEmpty = false
    let filteredFiles = files.filter((item) => item.fieldname == fieldname)
    // console.log(files,fieldname)
    // console.log(filteredFiles)
    if (filteredFiles.length == 0) {
      errors.push({
        type: "field",
        path: fieldname,
        msg: `${fieldname} is required`,
      })
    } else {
      const [file] = filteredFiles
      const validMime = file.mimetype === "image/png" || file.mimetype === "image/jpeg" || file.mimetype === "image/webp"
      if (!validMime) {
        errors.push({
          path: fieldname,

          type: "mimetype",
          msg: `${fieldname} must be a valid image file`,
        })
      }

      const validSize = file.size <= 1024 * 1024 * 1 // 1MB
      if (!validSize) {
        errors.push({
          path: fieldname,
          type: "filesize",
          msg: `${fieldname} must be less than 1MB`,
        })
      }
      if (errors.length > 0) {
        this.logger.info("yt-upload.validateImageFile delete file")
        fs.unlink(file.path, (err) => {
          if (err) {
            this.logger.info("Error deleting file:", err)
          } else {
            this.logger.info("File deleted successfully!")
          }
        })
      }
    }
    return errors
  }
  getRouter() {
    return this.router
  }
  async getList(req, res) {
    const { page, limit, order_by, order_dir } = req.query
    const results = await this.mYtUpload.getList(page, limit, order_by, order_dir)
    res.send(results)
  }
  async getState(req, res) {
    let { limit, page } = req.query
    page = parseInt(page) || null
    const results = await this.mYtUpload.getState(limit, page)
    res.send(results)
  }
  async get(req, res) {
    // Route logic for handling GET '/yt-upload/:id'
    let id = req.params.id
    const ytupload = await this.mYtUpload.getByPk(id)
    res.send({ data: ytupload })
  }

  async create(req, res) {
    // Route logic for handling POST '/yt-upload/create'
    const validationErrors = validationResult(req)
    const [file] = req.files
    // console.log(req.files)
    let errorThumbnails = this.validateImageFile("thumbnail", req.files)
    let errorValidations = validationErrors.array()
    const errors = [...errorValidations, ...errorThumbnails]
    if (errors.length > 0) {
      // in every situation, only this part of code is going to be executed
      return res.status(422).json({ errors })
    } else {
      // inserting into DB
      // res.send();
    }
    let { title, description, tags, category, thumbnail, video } = req.body
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

    let ytupload = null
    try {
      ytupload = await this.mYtUpload.create(title, description, category, tags, thumbnail, video)

      res.send({ data: ytupload })
    } catch (e) {
      res.send({ data: e.toString() })
    }
  }

  async update(req, res) {
    // Route logic for handling POST '/yt-upload/update'
    // const _id = req.params.id
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
    } else {
      // inserting into DB
      // res.send();
    }

    let id
    if (req.body.id) {
      id = req.body.id
    }
    if (!id) {
      id = req.params.id
    }
    const existingRec = await this.mYtUpload.getByPk(id)
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
      const { title, description, tags, video } = req.body
      let updatedData = { title, description, tags, video }
      if (fileUpdated) {
        updatedData.thumbnail = thumbnail
      }
      const ytupload = await this.mYtUpload.update(id, updatedData)
      res.send({ success: true, data: ytupload, message: "Record updated" })
    } else {
      res.send({ success: false, message: "Record not found" })
    }
  }
  async delete(req, res) {
    // Route logic for handling POST '/yt-upload/delete'
    let id
    if (req.body.id) {
      id = req.body.id
    }
    if (!id) {
      id = req.params.id
    }
    const existingRec = await this.mYtUpload.getByPk(id)

    // this.logger.info(id)
    if (existingRec) {
      const ytupload = await this.mYtUpload.delete(id)
      const oldThumbnailPath = `${this.thumbnailDir}/${existingRec.thumbnail}`

      fs.unlink(oldThumbnailPath, (err) => {
        if (err) {
          this.logger.info("Error deleting file:", err)
        } else {
          this.logger.info("File deleted successfully!")
        }
      })
      res.send({ success: true, data: ytupload, message: "Record deleted" })
    } else {
      res.send({ success: false, message: "Record not found" })
    }
  }
  initRouter() {
    const staticPath = path.join(this.appConfig.get("basepath"), this.thumbnailDir)

    this.router.use("/yt-uploads/thumbnails", express.static(staticPath)) // Serve static files
    this.router.use("/yt-uploads/thumbnails", serveIndex(staticPath, { icons: true }))
    this.router.get("/yt-uploads", /*this.authenticateToken,*/ async (req, res) => await this.getList(req, res))
    this.router.get("/yt-upload/states", async (req, res) => await this.getState(req, res))
    this.router.get("/yt-upload/:id", async (req, res) => await this.get(req, res))
    this.router.post(
      "/yt-upload/create",
      this.uploader.array("thumbnail"),
      // formValidation
      check("title", "title field is required").not().isEmpty(),
      check("description", "description field is required").not().isEmpty(),
      async (req, res) => await this.create(req, res)
    )
    this.router.post(
      "/yt-upload/update/:id?",
      this.uploader.array("thumbnail"),
      // formValidation
      check("title", "title field is required").not().isEmpty(),
      check("description", "description field is required").not().isEmpty(),
      async (req, res) => await this.update(req, res)
    )
    this.router.post("/yt-upload/delete/:id?", async (req, res) => await this.delete(req, res))
  }
}

export default YtUploadRouter
