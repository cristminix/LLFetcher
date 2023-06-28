import DB,{convertToMySQLDatetime} from "./DB"
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
        "videoSz",
        "captionSz",
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
    getByCourseId(courseId, vIndex){
        return this.singleQuery({query: {courseId, vIndex: this.createVIndex(vIndex)}})
    }
    getById(id){
        return this.singleQuery({query: {id}})
    }
    createVIndex(vIndex){
        const [sIndex,tIndex] = vIndex
        return `${sIndex}${tIndex}`
    }
    async create(courseId,vIndex){
        let row = this.getByCourseId(courseId, vIndex)
        const dt = convertToMySQLDatetime(new Date)
        if(!row){
            const id = 0
            const videoStatus = 0
            const captionStatus = 0
            const dtVideoStart = dt
            const dtCaptionStart = dt     
            const dtVideoEnd = dt
            const dtCaptionEnd = dt
            const dlCaptionRetryCount = 0
            const dlVideoRetryCount = 0
            const finished = false
            const interupted = false

            row = { id, courseId, courseId,
                    vIndex : this.createVIndex(vIndex),
                    videoStatus,
                    captionStatus, 
                    dtVideoStart,
                    dtCaptionStart,
                    dtVideoEnd,
                    dtCaptionEnd,
                    dlCaptionRetryCount,
                    dlVideoRetryCount,
                    finished,
                    videoSz : 0,
                    captionSz: 0,
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
    async updateByCourseId(courseId,vIndex, row){
        let record = this.getByCourseId(courseId, vIndex)
        if(record){
            record = await this.update(record.id, row)
        }
        return record
    }

    async setDlStatus(courseId, t, vIndex, dlStatus){
        const dt = convertToMySQLDatetime(new Date)

        let current = this.getByCourseId(courseId, vIndex)
        if(!current){
            current = await this.create(courseId, vIndex)
        }

        let row,dlStatusResult
        if(t == "caption"){
            const captionStatus = dlStatus
            dlStatusResult = parseInt(current.videoStatus) + parseInt(dlStatus)
            row = {
                captionStatus
            }
            if(dlStatus == 1){
                row.dtCaptionStart = dt
            }else{
                row.dtCaptionEnd = dt
            }
        }else{
            const videoStatus = dlStatus
            dlStatusResult = parseInt(current.captionStatus) + parseInt(dlStatus)

            row = {
                videoStatus
            }
            if(dlStatus == 1){
                row.dtVideoStart = dt
            }else{
                row.dtVideoEnd = dt
            }
        }
        if(dlStatus == -1){
            row.interupted = true
        }
        if(dlStatusResult == 4){
            row.finished = true
            row.interupted = true
            
        }

        await this.updateByCourseId(courseId,vIndex, row)

    }

    async setDlSize(courseId, t, vIndex, loaded){
        console.log(`DMStatus.setDlSize(${courseId},${t},${this.createVIndex(vIndex)},${loaded})`)

        let current = this.getByCourseId(courseId, vIndex)
        if(!current){
            return
        }

        const szField = t == "caption" ? "captionSz" : "videoSz"
        
        let row = {}
        if(t == "caption"){
            row.captionSz = loaded
        }else{
            row.videoSz = loaded
        }
        // row[szField] = loaded

        await this.updateByCourseId(courseId, vIndex, row)
    }
}

export default DMStatus