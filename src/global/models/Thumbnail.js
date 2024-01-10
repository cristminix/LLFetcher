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
                transcripts[row.size] = row
            }
        }
        return thumbs
    }
    getBySizeAndCourseId(courseId,size){
        return this.singleQuery({query: {courseId,size}})
    }
    get(id){
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
            console.error(`${this.constructor.name}.create() toc row exists`)
        }
        
        return row
    }
}

export default Thumbnail