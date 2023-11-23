import fs from "fs"
import {writeFile, jsonParseFile, excludeFields} from "./lib.js"
import {getFlagArgs} from "../fn.mjs"

const createModelFile = async(config, table_name, target_dir)=>{
    const outputFilename = `${config.model}.js`
    const outputPath = `${target_dir}/${outputFilename}`

    // if(fs.existsSync(outputPath)){
    //     console.error(`${outputPath} already exists, please delete it first `)
    //     return
    // }
    let modelInstanceAssignmentBuffer = ""
    let modelInstanceValidationMethodBuffer = ""

    let requiredFields = excludeFields([config.pk], config.fields)
    const modelInstanceName = config.model.toLowerCase()

    if(config.nullable){
        requiredFields = excludeFields(config.nullable, requiredFields)
    }
    if(config.generated){
        requiredFields = excludeFields(config.generated, requiredFields)
    }
    requiredFields.map((f,index)=>{
        modelInstanceAssignmentBuffer += `${ index > 0 ? "\t\t" : "" }${modelInstanceName}.${f} = ${f}\n`
    })
    if(config.validations){
        const methodList = {}
        config.validations.map((methods,index)=>{
            if(methods){
                const methodSplit = methods.split(',')

                for(let mtdi in methodSplit){
                    const mtd = methodSplit[mtdi]
                    let sValue
                    let [fmethod,setValue] = mtd.split('=')
                    sValue = setValue ?? null
                    if(!methodList[fmethod]){
                        methodList[fmethod] = {}
                    }
                    // if(typeof setValue != 'undefined' ){
                        if(sValue){
                            // console.log(sValue)
                            if(!methodList[fmethod].fields){
                                methodList[fmethod].fields = {}
                            }
                            if(methodList[fmethod].fields){

                                if(parseInt(sValue)){
                                    sValue = parseInt(sValue)
                                }
                                methodList[fmethod].fields[config.fields[index]] = sValue
                            }
                        }
                    // }
                }
            }
            

        })

        for(let meth in methodList){
            modelInstanceValidationMethodBuffer += `
    ${meth}(inputValue){
        ${methodList[meth].fields?'const fields = '+JSON.stringify(methodList[meth].fields,null,2):''}
    }
            `
        }
    }

    const outputContentBuffer = `
import {calculateOffset, calculateTotalPages} from "../libs/utils.js"

class ${config.model} {
    constructor(${config.fields.join(', ')}){
        ${config.fields.map((f,index)=>`${index>0?"\t\t":""}this.${f} = ${f}`).join("\n")}
    }
}
export class ${config.model}Validation {
    model=null
    constructor(model){
        this.model = model
    }
    ${modelInstanceValidationMethodBuffer}
}
export class M${config.model}{
    ds=null
    manager=null
    
    constructor(ds){
        this.ds = ds
        this.manager = ds.manager
    }

    async create(${requiredFields.join(',')}){
        const ${modelInstanceName} = new ${config.model}()
        ${modelInstanceAssignmentBuffer}
        let record = null

        try{
            record = await this.manager.save(${modelInstanceName})
        }catch(err){
            console.log(err)

        }
        return record
    }

    async getByPk(pk){
        let ${config.pk} = pk
        let record = null
        try{
            const ${modelInstanceName} = await this.manager.findOne(${config.model}, {where:{${config.pk}}})

            record = ${modelInstanceName}
        }catch(e){
            console.error(e)
        }

        return record
    }

    async update(pk, row){
        let ${config.pk} = pk
        let record = null
        try{
            const ${modelInstanceName} = await this.manager.findOne(${config.model}, {where:{${config.pk}}})
            if(${modelInstanceName}){
                this.manager.merge(${config.model}, ${modelInstanceName}, row)
                
                record = await this.manager.save(${modelInstanceName} )
            }
        
        }catch(e){
            console.error(e)
        }
        return record
    }

    async delete(pk){
        let ${config.pk} = pk
        let record = null
        try{
            const ${modelInstanceName} = await this.manager.findOne(${config.model}, {where:{${config.pk}}})
            if(${modelInstanceName}){
                record = await this.manager.remove(${modelInstanceName} )
            }
        
        }catch(e){
            console.error(e)
        }
        return record
    }

    async getList(page=1, limit=5, order_by='${config.pk}', order_dir='asc', filter=null){
        if(!limit){
            limit = 5
        }
        
        if(!page){
            page = 1
        }

        if(!order_by){
            order_by='${config.pk}'
        }
        if(order_dir){
            order_dir = order_dir.toLowerCase()

        }
        if(!['asc','desc'].includes(order_dir)){
            order_dir='asc'
        }
        try {
            const total_records =  await this.manager.count(${config.model})
        
            const total_pages = calculateTotalPages(total_records, limit) 
            const offset = calculateOffset(page, limit)
            
            
            let option = {
                skip : offset,
                take : limit,
                order: {}
            }
            option.order[order_by] = order_dir
            if(typeof filter == 'object'){
                option = Object.assign(option,filter)
            }
    
            const ${modelInstanceName}s =  await this.manager.find(${config.model}, option)
            const records = ${modelInstanceName}s
            
            return { page, limit, order_by, order_dir, records, total_pages, total_records}
    
        }catch(e){
            console.error(e)
            // res.send(e)
    
        }
        return { page, limit, order_by, order_dir, records:[], total_pages:0, total_records:0}

    }

}
export default ${config.model}
    `
    await writeFile(outputPath, outputContentBuffer, `create model ${config.model} on ${target_dir}`)
}

const createEntityFile = async (config, table_name, target_dir) => {
  



    

    const outputFilename = `${config.schema}.js`
    const outputPath = `${target_dir}/${outputFilename}`

    // if(fs.existsSync(outputPath)){
    //     console.error(`${outputPath} already exists, please delete it first `)
    //     return
    // }
    const columnDef = {}
    
    config.fields.map((f,index) => {
        columnDef[f] = {
            type : config.types[index]
        }

        if(config.pk == f){
            columnDef[f].primary = true
            columnDef[f].generated = true
        }
        if(config.lengths){
            if(config.lengths[index]){
                columnDef[f].length = config.lengths[index]
            }
        }
        if(config.nullable){
            if(config.nullable.includes(f)){
                columnDef[f].nullable = true
            }
        }
        if(config.generated){
            if(config.generated.includes(f)){
                columnDef[f].generated = true
            }
        }


    }) 
    let columnDefBuffer = ""
    let columnDefBufferKey = {}
    
    config.fields.map((f,index)=>{
        columnDefBufferKey[f] = ""
        let propIdx = 0
        for(let prop in columnDef[f]){
            let value = columnDef[f][prop]
            if(prop == 'length'){
                value = parseInt(value)
            }
            else if(value === false || value === true){

            }else{
                value = `"${value}"`
            }
            columnDefBufferKey[f] += `${propIdx>0?"\t\t\t":""}${prop} : ${value}, \n`
            propIdx += 1
        }
    })

    config.fields.map((f,index)=>{
        columnDefBuffer += `${index>0?"\n\t\t":""}${f} : {
            ${columnDefBufferKey[f]}
        },`
    })
    const outputContentBuffer = `
import {EntitySchema} from "typeorm"  
import ${config.model} from "../models/${config.model}.js"      

const ${config.schema} = new EntitySchema({
    name: "${config.model}",
    target: ${config.model},
    columns: {
        ${columnDefBuffer}
    } 
       
    
})



export default ${config.schema}
    `
    await writeFile(outputPath, outputContentBuffer, `create entity ${config.schema} on ${target_dir}`)
}
const createModelEntity = async(table_name, target_dir) => {
    let json_path = false
    let separateTargetDir = false
    let outEntityDir = target_dir
    let outModelDir = target_dir

    const [jsonPathArgPresent, jsonPathArg] = getFlagArgs('schema')

    if(jsonPathArgPresent){
        json_path = jsonPathArg
    }

    if(!json_path){
        console.error(`Could not load schema json file`)
        process.exit(1)
        
    }

    // console.log(json_path)

    if(target_dir == 'custom'){
        const [outModelDirArgPresent, outModelDirArg] = getFlagArgs('out-model-dir')
        const [outEntityDirArgPresent, outEntityDirArg] = getFlagArgs('out-entity-dir')

        if(outEntityDirArg && outModelDir){
            separateTargetDir = true
            outEntityDir = outEntityDirArg
            outModelDir = outModelDirArg
        }else{
            console.error(`For custom individual target dir please invoke command like this:`)
            console.error(`createModelEntity <table_name> custom --out-model-dir=<target_dir> --out-entity-dir=<target_dir> --schema=<path_to_json>`)
            process.exit(1)
            
        }
    }else{
        if(!target_dir){
            console.error('no target dir set')
            process.exit(1)
        }
    }


    let config = await jsonParseFile(json_path, table_name, 'table', 'schema')


    if(config){
        await createModelFile(config, table_name, outModelDir)
        await createEntityFile(config, table_name, outEntityDir)
    }
    
    
}
createModelEntity.HELP = `createModelEntity <table_name> <target_dir> [model_entities.json]`
export default createModelEntity