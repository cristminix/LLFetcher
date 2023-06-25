import DB from "./DB"
import Course from "./Course"
class DownloadState extends DB {
	table = 'downloadState'
	fields = [
        "courseId",
        "state",
        "total",
        "success",

        "qstarted",
        "qsuccess",
        "qfails",
        "qprogress",

        "lastTocId",
        "lastDownloadId",
        "percentage",
        "errors",
        ]
	type = "single"

     getListWithCourse(){
        const mCourse = Course.gotInstance()
        let results =  this.db.queryAll(this.table)
        results = results.map(item => {
            try{item.course = mCourse.getById(item.courseId).title}catch(e){}
            return item
        })
        return results
    }
    async get(courseId){
        let downloadState = this.singleQuery({query:{courseId}})
        if(!downloadState){
            const id = 0
            const state = 0
            downloadState = {id, courseId, state}
            downloadState.id = this.db.insert(this.table,downloadState)
            await this.db.commit()
        }
        
        return downloadState
    }
    async set(courseId,state_) {
        let downloadState = this.singleQuery({query:{courseId}})
        if(downloadState){
            this.db.update(this.table,{courseId},(row)=>{
                row.state = state_
                return row
            })
            downloadState.state = state_
        }else{
            const id = 0
            const state=state_
            downloadState ={id,courseId,state}
            downloadState.it = db.insert(this.table,downloadState)
        }
        await this.db.commit()
        
        return downloadState
    }
    async setTotal(courseId, total){
        this.db.update(this.table,{courseId},(row)=>{
            row.total = total
            return row
        })
    }
    async setSuccess(courseId, success){
        this.db.update(this.table,{courseId},(row)=>{
            row.success = success
            return row
        })
    }
    async setFails(courseId, fails){
        this.db.update(this.table,{courseId},(row)=>{
            row.fails = fails
            return row
        })
    }
    async setLastTocId(courseId, tocId){
        this.db.update(this.table,{courseId},(row)=>{
            row.lastTocId = tocId
            return row
        })
    }
    async setState(courseId, state){
        this.db.update(this.table,{courseId},(row)=>{
            row.state = state
            return row
        })
    }
    async setPercentage(courseId, percentage){
        this.db.update(this.table,{courseId},(row)=>{
            row.percentage = percentage
            return row
        })
    }

    async update(courseId,data){
        this.db.update(this.table,{courseId},row=>{
            for(let k in data){
                row[k] = data[k]
            }
            return row
        })
        await this.db.commit()
    }
}

export default DownloadState