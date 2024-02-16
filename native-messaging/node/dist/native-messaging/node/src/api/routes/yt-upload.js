

import express from "express"
import multer from "multer"
import fs from 'fs'
import serveIndex from 'serve-index'
import 'reflect-metadata'
import path from "path"
import slugify from'slugify'
import { getFileExtensionFromMimeType } from "../../fn.js"

class YtUploadRouter {
    datasource = null
    mYtUpload = null
    router = null
    env = null
    uploader = null
    
    constructor(datasource, env){
        this.env = env
        this.datasource = datasource
        this.mYtUpload = this.datasource.factory('MYtUpload', true)
        this.uploader = multer({ dest: `${env.BASEPATH}/storage/thumbnails` })
        this.router = express.Router()
        this.initRouter()
    }
    getRouter(){
        return this.router
    }
    async getList(req, res){
        const {page,limit,order_by,order_dir} = req.query
        const results = await this.mYtUpload.getList(page,limit,order_by,order_dir)
        res.send(results)
    }
    async get(req,res){
        // Route logic for handling GET '/yt-upload/:id'
        let id  = req.params.id
        const  ytupload = await this.mYtUpload.getByPk(id)
        res.send({data:ytupload})
    }

    async create(req,res){
        // Route logic for handling POST '/yt-upload/create'
        let {title, description,tags, category,thumbnail, video} = req.body
        console.log(req.files)
        const [file] = req.files
        
        if(file){
            const ext = getFileExtensionFromMimeType(file.mimetype)
            const baseName = path.basename(file.path)
            thumbnail = `${baseName}.${ext}`
            const oldFilePath = file.path
            const newFilePath = `${this.env.BASEPATH}/storage/thumbnails/${thumbnail}`
            fs.rename(oldFilePath, newFilePath, (err) => {
                if (err) {
                    console.error('Error renaming file:', err)
                } else {
                    console.log('File renamed successfully!')
                    
                }
            })
        }    
        const  ytupload = await this.mYtUpload.create(title, description,category,tags,thumbnail,video)
        res.send({data: ytupload})
    }

    async update(req,res){
        // Route logic for handling POST '/yt-upload/update'
        // const _id = req.params.id
        console.log(req.body)
       
        
        
        let id 
        if(req.body.id){
            id = req.body.id
        }
        if(!id){
            id = req.params.id
        }
        const existingRec = await this.mYtUpload.getByPk(id)
        if(existingRec){
            
            console.log(req.files)
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
                const newFilePath = `${this.env.BASEPATH}/storage/thumbnails/${thumbnail}`
                fs.rename(oldFilePath, newFilePath, (err) => {
                    if (err) {
                        console.error('Error renaming file:', err)
                    } else {
                        console.log('File renamed successfully!')
                        const oldThumbnailPath = `${this.env.BASEPATH}/storage/thumbnails/${oldThumbnail}`

                        fs.unlink(oldThumbnailPath, (err) => {
                            if (err) {
                              console.error('Error deleting file:', err);
                            } else {
                              console.log('File deleted successfully!');
                            }
                        })
                    }
                })
            }
            const {title, description, tags, video} = req.body
            let updatedData = {title, description,tags, video}
            if(fileUpdated){
                updatedData.thumbnail = thumbnail
            }
            const  ytupload = await this.mYtUpload.update(id,updatedData)
            res.send({success:true, data: ytupload, message: 'Record updated'})
        }else{
            res.send({success:false, message: 'Record not found'})
        }
    }
    async delete(req, res){
        // Route logic for handling POST '/yt-upload/delete'
        let id 
        if(req.body.id){
            id = req.body.id
        }
        if(!id){
            id = req.params.id
        }
        const existingRec = await this.mYtUpload.getByPk(id)
        
        // console.log(id)
        if(existingRec){
            const  ytupload = await this.mYtUpload.delete(id)
            const oldThumbnailPath = `${this.env.BASEPATH}/storage/thumbnails/${existingRec.thumbnail}`

            fs.unlink(oldThumbnailPath, (err) => {
                if (err) {
                  console.error('Error deleting file:', err);
                } else {
                  console.log('File deleted successfully!');
                }
            })
            res.send({success:true, data: ytupload, message: 'Record deleted'})

        }else{
            res.send({success:false, message: 'Record not found'})

        }
    }
    initRouter(){
        const staticPath = path.join(this.env.BASEPATH, '/storage/thumbnails')

        this.router.use('/yt-uploads/thumbnails', express.static(staticPath)); // Serve static files
        this.router.use('/yt-uploads/thumbnails', serveIndex(staticPath, { 'icons': true }))
        this.router.get('/yt-uploads', async (req, res) => await this.getList(req, res))
        this.router.get('/yt-upload/:id',async (req, res) => await this.get(req, res))
        this.router.post('/yt-upload/create',this.uploader.array("thumbnail"),async (req, res) => await this.create(req,res))
        this.router.post('/yt-upload/update/:id?',this.uploader.array("thumbnail"),async (req, res) => await this.update(req, res))
        this.router.post('/yt-upload/delete/:id?',async (req, res) => await this.delete(req,res))
    }
}

export default YtUploadRouter
    