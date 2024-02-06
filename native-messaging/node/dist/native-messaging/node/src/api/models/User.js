
import {calculateOffset, calculateTotalPages} from "../libs/utils.js"

class User {
    constructor(id, username, passwd, email, firstName, lastName, displayName, avatarUrl, groupId, createdBy, createDate, lastUpdated){
        this.id = id
		this.username = username
		this.passwd = passwd
		this.email = email
		this.firstName = firstName
		this.lastName = lastName
		this.displayName = displayName
		this.avatarUrl = avatarUrl
		this.groupId = groupId
		this.createdBy = createdBy
		this.createDate = createDate
		this.lastUpdated = lastUpdated
    }
}
export class UserValidation {
    model=null
    constructor(model){
        this.model = model
    }
    
    required(inputValue){
        
    }
            
    min(inputValue){
        const fields = {
            "username": 8,
            "passwd": 8,
            "firstName": 3
        }
    }
            
    validUsername(inputValue){
        
    }
            
    checkUsername(inputValue){
        
    }
            
    uniqueUsername(inputValue){
        
    }
            
    validPasswd(inputValue){
        
    }
            
    validEmail(inputValue){
        
    }
            
    uniqueEmail(inputValue){
        
    }
            
    validUrl(inputValue){
        
    }
            
    validGroupId(inputValue){
        
    }
            
}
export class MUser{
    ds=null
    manager=null
    
    constructor(ds){
        this.ds = ds
        this.manager = ds.manager
    }

    async create(username,email,firstName){
        const user = new User()
        user.username = username
		user.email = email
		user.firstName = firstName

        let record = null

        try{
            record = await this.manager.save(user)
        }catch(err){
            console.log(err)

        }
        return record
    }

    async getByPk(pk){
        let id = pk
        let record = null
        try{
            const user = await this.manager.findOne(User, {where:{id}})

            record = user
        }catch(e){
            console.error(e)
        }

        return record
    }

    async update(pk, row){
        let id = pk
        let record = null
        try{
            const user = await this.manager.findOne(User, {where:{id}})
            if(user){
                this.manager.merge(User, user, row)
                
                record = await this.manager.save(user )
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
            const user = await this.manager.findOne(User, {where:{id}})
            if(user){
                record = await this.manager.remove(user )
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
            const total_records =  await this.manager.count(User)
        
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
    
            const users =  await this.manager.find(User, option)
            const records = users
            
            return { page, limit, order_by, order_dir, records, total_pages, total_records}
    
        }catch(e){
            console.error(e)
            // res.send(e)
    
        }
        return { page, limit, order_by, order_dir, records:[], total_pages:0, total_records:0}

    }

}
export default User
    