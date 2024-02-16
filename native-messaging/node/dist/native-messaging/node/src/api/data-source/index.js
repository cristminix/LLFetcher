
import {DataSource} from 'typeorm'
import config from "./config.json" assert { type: "json" }
import os from 'os'
// import 'dotenv/config' 

async function getEntities(schemaDef){
    // console.log(schemaDef)
    const entitySchemas = []
    const models = {}
    for(let table in schemaDef){
        const item = schemaDef[table]
        const entityModulePath = `../entities/${item.schema}.js`
        const modelModulePath = `../models/${item.model}.js`
        
        try{
            const moduleImport = await import(/* @vite-ignore */  entityModulePath)

            entitySchemas.push(moduleImport.default)
        }catch(e){
            console.error(e)
        }

        try{
            const modelImport = await import(/* @vite-ignore */  modelModulePath)

            models[item.model]= modelImport.default
            models[`M${item.model}`]=modelImport[`M${item.model}`]
        }catch(e){
            console.error(e)
        }
        
    }

    return [entitySchemas, models]
}


// const {CMS_DB_ENGINE, CMS_DB_LOCATION} = process.env


class DS{
    datasource = null
    manager = null
    models = {}
    logger = null
    constructor(CMS_DB_ENGINE, CMS_DB_LOCATION,logger){
        this.logger = logger
        this.CMS_DB_ENGINE = CMS_DB_ENGINE
        this.CMS_DB_LOCATION = CMS_DB_LOCATION
        this.logger.info(CMS_DB_ENGINE, CMS_DB_LOCATION)
        this.logger.info('cwd',process.cwd())

    }
    getDataSource(){
        return this.datasourse
    } 
    getModel(modelName){
        return this.models[modelName]
    }
    factory(modelName,m=false){
        let instance 
        if(m){
            instance = new this.models[modelName](this.datasource)
        }else{
            instance = new this.models(modelName)
        }
        return instance
    }
    async initialize(){
        const [entities, models] = await getEntities(config.schema)
        // this.logger.info('models',models)
        this.models = models
        // this.logger.info('entities',entities)
        // return new Promise(async(resolve, reject)=>{
            if(this.CMS_DB_ENGINE == 'sqlite'){
                // this.logger.info('A')

                if(this.CMS_DB_LOCATION){
                    // this.logger.info('B')

                    this.datasource = new DataSource({
                        type: "better-sqlite3",
                        database:this.CMS_DB_LOCATION,
                        synchronize: true,
                        logging: 0,
                        entities,
                        subscribers: [],
                        migrations: [],
                    })
                    this.manager = this.datasource.manager
                    // this.logger.info(this.manager.toString())
                    return this.datasource.initialize()
                }else{
                    return false
                    // console.log('Data Source is not loaded')
                }
            }
        // })
        
    }
}


 

// const datasource = new DS()
export {DS}