import DB,{convertToMySQLDatetime} from "./DB"
import Course from "./Course"
import { QueueResult, QueueState } from "../../option-pages/components/developers/queue-man/Queue"

class QState extends DB{
    table = 'qstate'
	fields = [
        "courseId",
        "tocId",
        "idx",
        "state",
        "result"
    ]
	type = "collection"
    async deleteByCourseId(courseId){
        await this.deleteRows({courseId})
    }
    getListWithCourse(){
        const mCourse = Course.gotInstance()
        let results =  this.db.queryAll(this.table)
        results = results.map(item => {
            try{item.course = mCourse.getById(item.courseId).title}catch(e){}
            item.state = QueueState.toStr(item.state)
            item.result = QueueResult.toStr(item.result)
            return item
        })
        return results
    }
    getRow(courseId,tocId,idx){
        return this.singleQuery({query: {courseId, tocId, idx}})
    }
    getListByCourseId(courseId){
        return this.query({query: {courseId}})
    }
    getById(id){
        return this.singleQuery({query: {id}})
    }
    
    async create(courseId,tocId,idx,state,result=0){
        let row = this.getRow(courseId, tocId, idx)
        if(!row){

            row = {courseId,tocId,idx,state,result}

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
    async updateRow(courseId,tocId,idx, row){
        let record = this.getRow(courseId, tocId, idx)
        if(record){
            record = await this.update(record.id, row)
        }
        return record
    }
    async updateState(id,state){
        let record = this.getById(id)
        if(record){
            record = await this.update(id, {state})
        }
        return record
    }
    async updateResult(id,result){
        let record = this.getById(id)
        if(record){
            record = await this.update(id, {result})
        }
        return record
    }
    
}

export default QState