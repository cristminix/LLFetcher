import DB from "./DB"
import Course from "./Course"

class DMSetup extends DB{
    table = 'dmSetup'
	fields = [
        "courseId",
        "status",
        "availableFmt", "selectedFmt", "exerciseFile", "sourceRepo"
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
    async create(courseId,availableFmt,selectedFmt,sourceRepo,exerciseFile,status){
        let row = this.getByCourseId(courseId)
        if(!row){
            const id = 0
            row = {id,courseId,availableFmt,selectedFmt,sourceRepo,exerciseFile,status}
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

export default DMSetup