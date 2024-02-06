
import {calculateOffset, calculateTotalPages} from "../libs/utils.js"

class CmsSetting {
    constructor(id, profileName, theme, setAsDefault, createDate, lastUpdated){
        this.id = id
		this.profileName = profileName
		this.theme = theme
		this.setAsDefault = setAsDefault
		this.createDate = createDate
		this.lastUpdated = lastUpdated
    }
}
export class CmsSettingValidation {
    model=null
    constructor(model){
        this.model = model
    }
    
}
export class MCmsSetting{
    ds=null
    manager=null
    
    constructor(ds){
        this.ds = ds
        this.manager = ds.manager
    }

    async create(profileName,theme,createDate,lastUpdated){
        const cmssetting = new CmsSetting()
        cmssetting.profileName = profileName
		cmssetting.theme = theme
		cmssetting.createDate = createDate
		cmssetting.lastUpdated = lastUpdated

        let record = null

        try{
            record = await this.manager.save(cmssetting)
        }catch(err){
            console.log(err)

        }
        return record
    }

    async getByPk(pk){
        let id = pk
        let record = null
        try{
            const cmssetting = await this.manager.findOne(CmsSetting, {where:{id}})

            record = cmssetting
        }catch(e){
            console.error(e)
        }

        return record
    }

    async update(pk, row){
        let id = pk
        let record = null
        try{
            const cmssetting = await this.manager.findOne(CmsSetting, {where:{id}})
            if(cmssetting){
                this.manager.merge(CmsSetting, cmssetting, row)
                
                record = await this.manager.save(cmssetting )
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
            const cmssetting = await this.manager.findOne(CmsSetting, {where:{id}})
            if(cmssetting){
                record = await this.manager.remove(cmssetting )
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
            const total_records =  await this.manager.count(CmsSetting)
        
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
    
            const cmssettings =  await this.manager.find(CmsSetting, option)
            const records = cmssettings
            
            return { page, limit, order_by, order_dir, records, total_pages, total_records}
    
        }catch(e){
            console.error(e)
            // res.send(e)
    
        }
        return { page, limit, order_by, order_dir, records:[], total_pages:0, total_records:0}

    }

}
export default CmsSetting
    