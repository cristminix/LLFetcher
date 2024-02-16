
import {calculateOffset, calculateTotalPages} from "../libs/utils.js"

class YtUpload {
    constructor(id, title, description, category, tags, thumbnail, video, createDate, owner){
        this.id = id
		this.title = title
		this.description = description
		this.category = category
		this.tags = tags
		this.thumbnail = thumbnail
		this.video = video
		this.createDate = createDate
		this.owner = owner
    }
}
export class YtUploadValidation {
    model=null
    constructor(model){
        this.model = model
    }
    
}
export class MYtUpload{
    ds=null
    manager=null
    
    constructor(ds){
        this.ds = ds
        this.manager = ds.manager
    }

    async create(title, description,category,tags,thumbnail,video){
        const ytupload = new YtUpload()
        ytupload.title = title
		ytupload.description = description
        ytupload.video = video
        ytupload.category = category
        ytupload.tags = tags
        ytupload.thumbnail = thumbnail

        let record = null

        // try{
            record = await this.manager.save(ytupload)
        // }catch(err){
            // console.log(err)

        // }
        return record
    }

    async getByPk(pk){
        let id = pk
        let record = null
        try{
            const ytupload = await this.manager.findOne(YtUpload, {where:{id}})

            record = ytupload
        }catch(e){
            console.error(e)
        }

        return record
    }

    async update(pk, row){
        let id = pk
        let record = null
        try{
            const ytupload = await this.manager.findOne(YtUpload, {where:{id}})
            if(ytupload){
                this.manager.merge(YtUpload, ytupload, row)
                
                record = await this.manager.save(ytupload )
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
            const ytupload = await this.manager.findOne(YtUpload, {where:{id}})
            if(ytupload){
                record = await this.manager.remove(ytupload )
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
            const total_records =  await this.manager.count(YtUpload)
        
            const total_pages = calculateTotalPages(total_records, limit) 
            const offset = calculateOffset(page, limit)
            
            /*
            let option = {
                skip : offset,
                take : limit,
                order: {}
            }
            option.order[order_by] = order_dir
            if(typeof filter == 'object'){
                option = Object.assign(option,filter)
            }*/
    
            // const ytuploads =  await this.manager.find(YtUpload, option)
            // const
            const records = await this.ds.createQueryBuilder(YtUpload,"a")
            .select(['a.id','a.title','a.description','a.category','a.tags','a.createDate','a.owner','a.thumbnail'])//,title,description,category,tags,video,createDate,owner")
            .orderBy(`a.${order_by}`,order_dir.toUpperCase())
            // .skip(offset)
            // .take(limit)
            .getMany()
            
            return { page, limit, order_by, order_dir, records, total_pages, total_records}
    
        }catch(e){
            console.error(e)
            // res.send(e)
    
        }
        return { page, limit, order_by, order_dir, records:[], total_pages:0, total_records:0}

    }
    async getList2(page=1, limit=5, order_by='id', order_dir='asc', filter=null){
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
            const total_records =  await this.manager.count(YtUpload)
        
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
    
            const ytuploads =  await this.manager.find(YtUpload, option)
            const records = ytuploads
            
            return { page, limit, order_by, order_dir, records, total_pages, total_records}
    
        }catch(e){
            console.error(e)
            // res.send(e)
    
        }
        return { page, limit, order_by, order_dir, records:[], total_pages:0, total_records:0}

    }

}
export default YtUpload
    