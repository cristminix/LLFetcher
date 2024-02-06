

import express from "express"

class YtUploadDataRouter {
    datasource = null
    mYtUploadData = null
    router = null
    constructor(datasource){
        this.datasource = datasource
        this.mYtUploadData = this.datasource.factory('MYtUploadData', true)
        this.router = express.Router()
        this.initRouter()
    }
    getRouter(){
        return this.router
    }
    async getList(req, res){
        const {page,limit,order_by,order_dir} = req.query
        const results = await this.mYtUploadData.getList(page,limit,order_by,order_dir)
        res.send(results)
    }
    async get(req,res){
        // Route logic for handling GET '/yt-upload-data/:id'
        let id  = req.params.id
        const  ytuploaddata = await this.mYtUploadData.getByPk(id)
        res.send({data:ytuploaddata})
    }

    async create(req,res){
        // Route logic for handling POST '/yt-upload-data/create'
        let {uploadId, kind, content} = req.body
            
        const  ytuploaddata = await this.mYtUploadData.create(uploadId, kind, content)
        res.send({data: ytuploaddata})
    }

    async update(req,res){
        // Route logic for handling POST '/yt-upload-data/update'
        let id 
        if(req.body.id){
            id = req.body.id
        }
        if(!id){
            id = req.params.id
        }
        
        const {uploadId, kind, content} = req.body
        const updatedData = {uploadId, kind, content}
    
        const  ytuploaddata = await this.mYtUploadData.update(id,updatedData)
        res.send({data: ytuploaddata})
    }
    async delete(req, res){
        // Route logic for handling POST '/yt-upload-data/delete'
        let id 
        if(req.body.id){
            id = req.body.id
        }
        if(!id){
            id = req.params.id
        }
        
        console.log(id)
        
        const  ytuploaddata = await this.mYtUploadData.delete(id)
        res.send({data: ytuploaddata})
    }
    initRouter(){
        this.router.get('/yt-upload-datas', async (req, res) => await this.getList(req, res))
        this.router.get('/yt-upload-data/:id',async (req, res) => await this.get(req, res))
        this.router.post('/yt-upload-data/create',async (req, res) => await this.create(req,res))
        this.router.post('/yt-upload-data/update/:id?',async (req, res) => await this.update(req, res))
        this.router.post('/yt-upload-data/delete/:id?',async (req, res) => await this.delete(req,res))
    }
}

export default YtUploadDataRouter
    