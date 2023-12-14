import DB,{convertToMySQLDatetime} from "./DB"
import Course from "./Course"

class DMStatus extends DB{
    table = 'dmStatus'
	fields = [
        "courseId",
        "vIndex",
        "metaStatus",
        "videoStatus",
        "captionStatus", 
        "dtMetaStart",
        "dtVideoStart",
        "dtCaptionStart",
        "dtMetaEnd",
        "dtVideoEnd",
        "dtCaptionEnd",
        "dlMetaRetryCount",
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
    getListByCourseId(courseId){
        return this.query({query: {courseId}})
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
        if(!row){

            row = this.createDefaultRow(courseId, vIndex)

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

    async setDlStatus(courseId, t, vIndex, dlStatus, retryCount=0){
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
            if(retryCount >= 0){
                row.dlCaptionRetryCount = retryCount
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
            if(retryCount >= 0){
                row.dlVideoRetryCount = retryCount
            }
        }
        if(dlStatus == -1){
            row.interupted = true
        }
        if(dlStatusResult == 4){
            row.finished = true
            row.interupted = true

        }

        current = await this.updateByCourseId(courseId,vIndex, row)
        return current
    }

    async setDlStatusMeta(courseId,vIndex, dlStatus, retryCount = 0){
        const dt = convertToMySQLDatetime(new Date)

        let current = this.getByCourseId(courseId, vIndex)
        if(!current){
            current = await this.create(courseId, vIndex)
        }

        const metaStatus = dlStatus
        let row = {
            metaStatus
        }
        if(dlStatus == 1){
            row.dtMetaStart = dt
        }else{
            row.dtMetaEnd = dt
        }
        if(retryCount >= 0){
            row.dlMetaRetryCount = retryCount
        }

        current = await this.updateByCourseId(courseId,vIndex, row)
        return current

    }
    async setDlSize(courseId, t, vIndex, loaded){
        // console.log(`DMStatus.setDlSize(${courseId},${t},${this.createVIndex(vIndex)},${loaded})`)

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

    createDefaultRow(courseId, vIndex){
        const dt = convertToMySQLDatetime(new Date)

        const id = 0
        const metaStatus = 0
        const videoStatus = 0
        const captionStatus = 0
        const dtMetaStart = dt
        const dtVideoStart = dt
        const dtCaptionStart = dt     
        const dtMetaEnd = dt
        const dtVideoEnd = dt
        const dtCaptionEnd = dt
        const dlMetaRetryCount = 0
        const dlCaptionRetryCount = 0
        const dlVideoRetryCount = 0
        const finished = false
        const interupted = false
        const videoSz = 0
        const captionSz = 0

        const row = { id, courseId, courseId,
                    vIndex : this.createVIndex(vIndex),
                    metaStatus,
                    videoStatus,
                    captionStatus, 
                    dtMetaStart,
                    dtVideoStart,
                    dtCaptionStart,
                    dtMetaEnd,
                    dtVideoEnd,
                    dtCaptionEnd,
                    dlCaptionRetryCount,
                    dlVideoRetryCount,
                    finished,
                    videoSz,
                    captionSz,
                    interupted
        }

        return row
    }
}

export default DMStatus