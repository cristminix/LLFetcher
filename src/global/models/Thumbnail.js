// import DB from "./DB"
import DBIndexed from "./DBIndexed"

class Thumbnail extends DBIndexed {
	table = 'thumbnail'
	fields = ["courseId", "size", "url","expiresAt"]

    async deleteByCourseId(courseId){
        await this.deleteRows({courseId})
    }


    getListByCourseId(courseId){
        return this.query({query: {courseId}})
    }
    getListByCourseIdAsObject(courseId){
        const results = this.getListByCourseId(courseId)
        let thumbs = null
        if(results.length > 0){
            thumbs = {}
            for(const row of results){
                thumbs[row.size] = row
            }
        }
        return thumbs
    }
    getBySizeAndCourseId(size,courseId){
        return this.singleQuery({query: {courseId,size}})
    }
    getById(id){
        return this.singleQuery({query: {id}})
    }
    async create(courseId, size, url, expiresAt){
        let row = this.getBySizeAndCourseId(size,courseId)
        if(!row){
            const id = 0
            row = {courseId, size, url, expiresAt}
            row.id = this.db.insert(this.table,row)
            await this.db.commit()
        }else{
            await this.update(row.id,{size, url, expiresAt})
            // console.error(`${this.constructor.name}.create() toc row exists`)
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
}

export default Thumbnail