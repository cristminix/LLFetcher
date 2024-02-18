

import express from "express"
import multer from "multer"
import fs from 'fs'
import serveIndex from 'serve-index'
import 'reflect-metadata'
import path from "path"
// import slugify from'slugify'
import { getFileExtensionFromMimeType } from "../../fn.js"
class YtUploadTTRouter {
    datasource = null
    mYtUploadTT = null
    router = null
    env = null
    uploader = null
    logger = null
    constructor(datasource,env,logger){
        this.env = env
        this.logger = logger
        this.datasource = datasource
        this.mYtUploadTT = this.datasource.factory('MYtUploadTT', true)
        this.uploader = multer({ dest: `${env.BASEPATH}/storage/thumbnails_tt` })

        this.router = express.Router()
        this.initRouter()
    }
    getRouter(){
        return this.router
    }
    async getList(req, res){
        const {uploadId,page,limit,order_by,order_dir} = req.query
        const results = await this.mYtUploadTT.getList(uploadId,page,limit,order_by,order_dir)
        res.send(results)
    }
    async get(req,res){
        // Route logic for handling GET '/yt-upload-tt/:id'
        let id  = req.params.id
        const  ytuploadtt = await this.mYtUploadTT.getByPk(id)
        res.send({data:ytuploadtt})
    }

    async create(req,res){
        // Route logic for handling POST '/yt-upload-tt/create'
        let {title, uploadId, description,thumbnail} = req.body
        this.logger.info(req.files)
        const [file] = req.files
        if(file){
            const ext = getFileExtensionFromMimeType(file.mimetype)
            const baseName = path.basename(file.path)
            thumbnail = `${baseName}.${ext}`
            const oldFilePath = file.path
            const newFilePath = `${this.env.BASEPATH}/storage/thumbnails_tt/${thumbnail}`
            fs.rename(oldFilePath, newFilePath, (err) => {
                if (err) {
                    this.logger.info('Error renaming file:', err)
                } else {
                    this.logger.info('File renamed successfully!')
                   
                }
            })
        }    
        
        let  record = null
        try{
            record = await this.mYtUploadTT.create(uploadId,title, description,thumbnail)

            res.send({data: record})
        }catch(e){
            res.send({data: e.toString()})

        }
    }

    async update(req,res){
        // Route logic for handling POST '/yt-upload-tt/update'
        let id 
        if(req.body.id){
            id = req.body.id
        }
        if(!id){
            id = req.params.id
        }
        
        const existingRec = await this.mYtUploadTT.getByPk(id)
        if(existingRec){
            
            this.logger.info(req.files)
            const [file] = req.files
            let {thumbnail} = existingRec
            let fileUpdated = false
            if(file){
                fileUpdated = true
                const ext = getFileExtensionFromMimeType(file.mimetype)
                const baseName = path.basename(file.path)
                const oldThumbnail = existingRec.thumbnail
                thumbnail = `${baseName}.${ext}`
                const oldFilePath = file.path
                const newFilePath = `${this.env.BASEPATH}/storage/thumbnails_tt/${thumbnail}`
                fs.rename(oldFilePath, newFilePath, (err) => {
                    if (err) {
                        this.logger.info('Error renaming file:', err)
                    } else {
                        this.logger.info('File renamed successfully!')
                        const oldThumbnailPath = `${this.env.BASEPATH}/storage/thumbnails_tt/${oldThumbnail}`

                        fs.unlink(oldThumbnailPath, (err) => {
                            if (err) {
                              this.logger.info('Error deleting file:', err);
                            } else {
                              this.logger.info('File deleted successfully!');
                            }
                        })
                    }
                })
            }
            const {title, description} = req.body
            let updatedData = {title, description}
            if(fileUpdated){
                updatedData.thumbnail = thumbnail
            }
            const  record = await this.mYtUploadTT.update(id,updatedData)
            res.send({success:true, data: record, message: 'Record updated'})
        }else{
            res.send({success:false, message: 'Record not found'})
        }
    }
    async delete(req, res){
        // Route logic for handling POST '/yt-upload-tt/delete'
        let id 
        if(req.body.id){
            id = req.body.id
        }
        if(!id){
            id = req.params.id
        }
        
        const existingRec = await this.mYtUploadTT.getByPk(id)
        
        // this.logger.info(id)
        if(existingRec){
            const  record = await this.mYtUploadTT.delete(id)
            const oldThumbnailPath = `${this.env.BASEPATH}/storage/thumbnails_tt/${existingRec.thumbnail}`

            fs.unlink(oldThumbnailPath, (err) => {
                if (err) {
                  this.logger.info('Error deleting file:', err);
                } else {
                  this.logger.info('File deleted successfully!');
                }
            })
            res.send({success:true, data: record, message: 'Record deleted'})

        }else{
            res.send({success:false, message: 'Record not found'})

        }
    }
    initRouter(){
        const staticPath = path.join(this.env.BASEPATH, '/storage/thumbnails_tt')

        this.router.use('/yt-uploads-tts/thumbnails', express.static(staticPath)); // Serve static files
        this.router.use('/yt-uploads-tts/thumbnails', serveIndex(staticPath, { 'icons': true }))
        this.router.get('/yt-upload-tts', async (req, res) => await this.getList(req, res))
        this.router.get('/yt-upload-tt/:id',async (req, res) => await this.get(req, res))
        this.router.post('/yt-upload-tt/create',this.uploader.array("thumbnail"),async (req, res) => await this.create(req,res))
        this.router.post('/yt-upload-tt/update/:id?',this.uploader.array("thumbnail"),async (req, res) => await this.update(req, res))
        this.router.post('/yt-upload-tt/delete/:id?',async (req, res) => await this.delete(req,res))
    }
}

export default YtUploadTTRouter
    