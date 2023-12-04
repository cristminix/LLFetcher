import DB,{convertToMySQLDatetime} from "./DB"

class Cookie extends DB{
    table = 'cookie'
	fields = [
        "path",
        "content",
        "dtSaved"
    ]
	type = "collection"

    
    getById(id){
        return this.singleQuery({query: {id}})
    }
    getByPath(path){
        return this.singleQuery({query: {path}})
    }
    async create(path,content){
        const dtSaved = convertToMySQLDatetime(new Date)
        let row = this.getByPath(path)
        if(!row){
            const id = 0
            row = {path,content,dtSaved}
            row.id = this.db.insert(this.table,row)
            await this.db.commit()
        }else{
            console.error(`${this.constructor.name}.create() rowExist`)

        }

        return row
    }
    async update(id,row_){
        let record = this.getById(id)
        if(record){
            this.db.update(this.table,{id},(row)=>{
                for(let k in row_){
                    row[k] = row_[k]
                    record[k] = row_[k]
                }
                return row
            })
            await this.db.commit()
        }
        
        return record
    }
    async updateByPath(path, row){
        let record = this.getByPath(path)
        if(record){
            record = await this.update(record.id, row)
        }
        return record
    }
}

export default Cookie