
import {calculateOffset, calculateTotalPages} from "../libs/utils.js"

class YtUploadData {
    constructor(id, uploadId, kind, content, createDate, owner){
        this.id = id
		this.uploadId = uploadId
		this.kind = kind
		this.content = content
		this.createDate = createDate
		this.owner = owner
    }
}
export class YtUploadDataValidation {
    model=null
    constructor(model){
        this.model = model
    }
    
}
export class MYtUploadData{
    ds=null
    manager=null
    
    constructor(ds){
        this.ds = ds
        this.manager = ds.manager
    }

    async create(uploadId,kind,content){
        const ytuploaddata = new YtUploadData()
        ytuploaddata.uploadId = uploadId
		ytuploaddata.kind = kind
		ytuploaddata.content = content

        let record = null

        try{
            record = await this.manager.save(ytuploaddata)
        }catch(err){
            console.log(err)

        }
        return record
    }

    async getByPk(pk){
        let id = pk
        let record = null
        try{
            const ytuploaddata = await this.manager.findOne(YtUploadData, {where:{id}})

            record = ytuploaddata
        }catch(e){
            console.error(e)
        }

        return record
    }

    async update(pk, row){
        let id = pk
        let record = null
        try{
            const ytuploaddata = await this.manager.findOne(YtUploadData, {where:{id}})
            if(ytuploaddata){
                this.manager.merge(YtUploadData, ytuploaddata, row)
                
                record = await this.manager.save(ytuploaddata )
            }
        
        }catch(e){
            console.error(e)
        }
        return record
    }

    async delete(pk){
        let id = pk
        let record = null
        try{
            const ytuploaddata = await this.manager.findOne(YtUploadData, {where:{id}})
            if(ytuploaddata){
                record = await this.manager.remove(ytuploaddata )
            }
        
        }catch(e){
            console.error(e)
        }
        return record
    }

    async getList(page=1, limit=5, order_by='id', order_dir='asc', filter=null){
        if(!limit){
            limit = 5
        }
        
        if(!page){
            page = 1
        }

        if(!order_by){
            order_by='id'
        }
        if(order_dir){
            order_dir = order_dir.toLowerCase()

        }
        if(!['asc','desc'].includes(order_dir)){
            order_dir='asc'
        }
        try {
            const total_records =  await this.manager.count(YtUploadData)
        
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
    
            const ytuploaddatas =  await this.manager.find(YtUploadData, option)
            const records = ytuploaddatas
            
            return { page, limit, order_by, order_dir, records, total_pages, total_records}
    
        }catch(e){
            console.error(e)
            // res.send(e)
    
        }
        return { page, limit, order_by, order_dir, records:[], total_pages:0, total_records:0}

    }

}
export default YtUploadData
    