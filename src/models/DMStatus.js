import DB from "./DB"
import Course from "./Course"

class DMStatus extends DB{
    table = 'dmStatus'
	fields = [
        "courseId",
        "vIndex",
        "videoStatus",
        "captionStatus", 
        "dtVideoStart",
        "dtCaptionStart",
        "dtVideoEnd",
        "dtCaptionEnd",
        "dlCaptionRetryCount",
        "dlVideoRetryCount",
        "finished",
        "interupted"
    ]
	type = "collection"

    getListWithCourse(){
        const mCourse = Course.gotInstance()
        let results =  this.db.queryAll(this.table)
        results = results.map(item => {
            try{item.course = mCourse.getById(item.courseId).title}catch(e){}
            return item
        })
        return results
    }
    getByCourseId(courseId){
        return this.singleQuery({query: {courseId}})
    }
    getById(id){
        return this.singleQuery({query: {id}})
    }
    async create(courseId,vIndex){
        let row = this.getByCourseId(courseId)
        if(!row){
            const id = 0
            const videoStatus = 0
            const captionStatus = 0
            const dtVideoStart = new Date
            const dtCaptionStart = new Date
            const dtVideoEnd = new Date
            const dtCaptionEnd = new Date
            const dlCaptionRetryCount = 0
            const dlVideoRetryCount = 0
            const finished = false
            const interupted = false

            row = { id, courseId, courseId,
                    vIndex,
                    videoStatus,
                    captionStatus, 
                    dtVideoStart,
                    dtCaptionStart,
                    dtVideoEnd,
                    dtCaptionEnd,
                    dlCaptionRetryCount,
                    dlVideoRetryCount,
                    finished,
                    interupted}

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
    async updateByCourseId(courseId, row_){
        let record = this.getByCourseId(courseId)
        if(record){
            record = await this.update(record.id, row_)
        }
        return record
    }
}

export default DMStatus