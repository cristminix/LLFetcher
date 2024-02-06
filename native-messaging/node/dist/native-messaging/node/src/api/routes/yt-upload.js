

import express from "express"

class YtUploadRouter {
    datasource = null
    mYtUpload = null
    router = null
    constructor(datasource, noRouter=false){
        this.datasource = datasource
        this.mYtUpload = this.datasource.factory('MYtUpload', true)
        if(!noRouter){
            this.router = express.Router()
            this.initRouter()
        }
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
        let {title, description} = req.body
            
        const  ytupload = await this.mYtUpload.create(title, description)
        res.send({data: ytupload})
    }

    async update(req,res){
        // Route logic for handling POST '/yt-upload/update'
        let id 
        if(req.body.id){
            id = req.body.id
        }
        if(!id){
            id = req.params.id
        }
        
        const {title, description} = req.body
        const updatedData = {title, description}
    
        const  ytupload = await this.mYtUpload.update(id,updatedData)
        res.send({data: ytupload})
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
        
        console.log(id)
        
        const  ytupload = await this.mYtUpload.delete(id)
        res.send({data: ytupload})
    }
    initRouter(){
        this.router.get('/yt-uploads', async (req, res) => await this.getList(req, res))
        this.router.get('/yt-upload/:id',async (req, res) => await this.get(req, res))
        this.router.post('/yt-upload/create',async (req, res) => await this.create(req,res))
        this.router.post('/yt-upload/update/:id?',async (req, res) => await this.update(req, res))
        this.router.post('/yt-upload/delete/:id?',async (req, res) => await this.delete(req,res))
    }
}

export default YtUploadRouter
    