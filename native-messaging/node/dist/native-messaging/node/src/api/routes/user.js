

import express from "express"

class UserRouter {
    datasource = null
    mUser = null
    router = null
    constructor(datasource){
        this.datasource = datasource
        this.mUser = this.datasource.factory('MUser', true)
        this.router = express.Router()
        this.initRouter()
    }
    getRouter(){
        return this.router
    }
    async getList(req, res){
        const {page,limit,order_by,order_dir} = req.query
        const results = await this.mUser.getList(page,limit,order_by,order_dir)
        res.send(results)
    }
    async get(req,res){
        // Route logic for handling GET '/user/:id'
        let id  = req.params.id
        const  user = await this.mUser.getByPk(id)
        res.send({data:user})
    }

    async create(req,res){
        // Route logic for handling POST '/user/create'
        let {username, email, firstName} = req.body
            
        const  user = await this.mUser.create(username, email, firstName)
        res.send({data: user})
    }

    async update(req,res){
        // Route logic for handling POST '/user/update'
        let id 
        if(req.body.id){
            id = req.body.id
        }
        if(!id){
            id = req.params.id
        }
        
        const {username, email, firstName} = req.body
        const updatedData = {username, email, firstName}
    
        const  user = await this.mUser.update(id,updatedData)
        res.send({data: user})
    }
    async delete(req, res){
        // Route logic for handling POST '/user/delete'
        let id 
        if(req.body.id){
            id = req.body.id
        }
        if(!id){
            id = req.params.id
        }
        
        console.log(id)
        
        const  user = await this.mUser.delete(id)
        res.send({data: user})
    }
    initRouter(){
        this.router.get('/users', async (req, res) => await this.getList(req, res))
        this.router.get('/user/:id',async (req, res) => await this.get(req, res))
        this.router.post('/user/create',async (req, res) => await this.create(req,res))
        this.router.post('/user/update/:id?',async (req, res) => await this.update(req, res))
        this.router.post('/user/delete/:id?',async (req, res) => await this.delete(req,res))
    }
}

export default UserRouter
    