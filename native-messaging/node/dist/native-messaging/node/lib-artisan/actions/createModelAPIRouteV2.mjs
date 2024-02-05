import fs from "fs"
import path from "path"
import { writeFile, camelToDashCase, excludeFields, jsonParseFile} from "./lib.js"

  
const createRouteFile = async(config, table_name, target_dir)=>{
    const ctl = camelToDashCase(config.model)

    const outputFilename = `${ctl}.js`
    const outputPath = `${target_dir}/${outputFilename}`
    const routeConfigJson = `${target_dir}/config.json`

    // if(fs.existsSync(outputPath)){
    //     console.error(`${outputPath} already exists, please delete it first `)
    //     return
    // }
    const modelInstanceName = config.model.toLowerCase()
    let modelInstanceAssignmentBuffer = ""
    let requiredFields = excludeFields([config.pk], config.fields)

    if(config.nullable){
        requiredFields = excludeFields(config.nullable, requiredFields)
    }
    if(config.generated){
        requiredFields = excludeFields(config.generated, requiredFields)
    }
    requiredFields.map((f,index)=>{
        modelInstanceAssignmentBuffer += `${ index > 0 ? "\t\t" : "" }${modelInstanceName}.${f} = ${f}\n`
    })

    const outputContentBuffer = `

import express from "express"

class ${config.model}Router {
    datasource = null
    m${config.model} = null
    router = null
    constructor(datasource){
        this.datasource = datasource
        this.m${config.model} = this.datasource.factory('M${config.model}', true)
        this.router = express.Router()
        this.initRouter()
    }
    getRouter(){
        return this.router
    }
    async getList(req, res){
        const {page,limit,order_by,order_dir} = req.query
        const results = await this.m${config.model}.getList(page,limit,order_by,order_dir)
        res.send(results)
    }
    async get(req,res){
        // Route logic for handling GET '/${ctl}/:${config.pk}'
        let ${config.pk}  = req.params.id
        const  ${modelInstanceName} = await this.m${config.model}.getByPk(id)
        res.send({data:${modelInstanceName}})
    }

    async create(req,res){
        // Route logic for handling POST '/${ctl}/create'
        let {${requiredFields.join(', ')}} = req.body
            
        const  ${modelInstanceName} = await this.m${config.model}.create(${requiredFields.join(', ')})
        res.send({data: ${modelInstanceName}})
    }

    async update(req,res){
        // Route logic for handling POST '/${ctl}/update'
        let ${config.pk} 
        if(req.body.${config.pk}){
            ${config.pk} = req.body.${config.pk}
        }
        if(!${config.pk}){
            ${config.pk} = req.params.${config.pk}
        }
        
        const {${requiredFields.join(', ')}} = req.body
        const updatedData = {${requiredFields.join(', ')}}
    
        const  ${modelInstanceName} = await this.m${config.model}.update(${config.pk},updatedData)
        res.send({data: ${modelInstanceName}})
    }
    async delete(req, res){
        // Route logic for handling POST '/${ctl}/delete'
        let ${config.pk} 
        if(req.body.${config.pk}){
            ${config.pk} = req.body.${config.pk}
        }
        if(!${config.pk}){
            ${config.pk} = req.params.${config.pk}
        }
        
        console.log(${config.pk})
        
        const  ${modelInstanceName} = await this.m${config.model}.delete(${config.pk})
        res.send({data: ${modelInstanceName}})
    }
    initRouter(){
        this.router.get('/${ctl}s', async (req, res) => await this.getList(req, res))
        this.router.get('/${ctl}/:${config.pk}',async (req, res) => await this.get(req, res))
        this.router.post('/${ctl}/create',async (req, res) => await this.create(req,res))
        this.router.post('/${ctl}/update/:${config.pk}?',async (req, res) => await this.update(req, res))
        this.router.post('/${ctl}/delete/:${config.pk}?',async (req, res) => await this.delete(req,res))
    }
}

export default ${config.model}Router
    `
    await writeFile(outputPath, outputContentBuffer, `create route ${config.model} on ${target_dir}`)

    const routeConfig = await jsonParseFile(routeConfigJson,null,'',null,true)
    if(routeConfig){
        console.log(`updating route config on ${routeConfigJson}`)
        if(routeConfig.availables){
            routeConfig.availables[ctl] = {
                routePath : `/api/cms/${ctl}`,
                routes : {
                    list : {
                        path : "{routePath}s",
                        authenticated : false,
                        groups : [],
                        method : "get",
                        controller : "getList",
                        queryStrings : {
                            order_by : {
                                type: "string",
                                defaultValue : "id"
                            },
                            order_dir : {
                                type: "string",
                                defaultValue : "asc"
                            },
                            limit : {
                                type: "int",
                                defaultValue : 5
                            },
                            page : {
                                type: "int",
                                defaultValue : 1
                            }
                        }
                    },
                    create : {
                        path : "{routePath}/create",
                        authenticated : false,
                        groups : [],
                        method : "post",
                        controller : "create"
                    },
                    update : {
                        path : "{routePath}/update",
                        authenticated : false,
                        groups : [],
                        method : "post",
                        controller : "update",
                        queryStrings : {
                            id : {
                                type: "int",
                                required : true
                            }
                        }
                    },
                    delete : {
                        path : "{routePath}/delete",
                        authenticated : false,
                        groups : [],
                        method : "post",
                        controller : "delete",
                        postData : {
                            id : {
                                type: "int",
                                required : true
                            }
                        }
                    }
                }
            }
            await writeFile(routeConfigJson, JSON.stringify(routeConfig,null,2), `updating route config ${routeConfigJson}`)

        }else{
            console.error(`invalid route config on ${routeConfigJson}`)
            process.exit(1)
        }

    }else{
        console.error(`unable to update route config on ${routeConfigJson}`)
        process.exit(1)

    }
}

const createModelAPIRouteV2 = async(table_name, target_dir, json_path) => {
    
    let config = await jsonParseFile(json_path, table_name, 'table', 'schema')
    await createRouteFile(config, table_name, target_dir)
    
}
createModelAPIRouteV2.HELP = `createModelAPIRoute <table_name> <target_dir> [model_entities.json]`
export default createModelAPIRouteV2