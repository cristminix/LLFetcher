import DB from "./DB"
import Course from "./Course"
class DownloadConfig extends DB {
	table = 'downloadConfig'
	fields = ["courseId","fmtList","selectedFmtList"]
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
    get(courseId){
        return this.singleQuery({query: {courseId}})
    }

    async set(fieldName,data,courseId){
        let downloadConfig = this.get(courseId)
        if(downloadConfig){
            this.db.update(this.table,{courseId},(row)=>{
                row[fieldName] = data;
                return row;
            })
        }else{
            const id = 0
            const fmtList =[]
            const selectedFmtList =''
            downloadConfig = {id,courseId,fmtList,selectedFmtList}
            downloadConfig[fieldName] = data

            downloadConfig.id = this.db.insert(this.table,downloadConfig)

        }
        await this.db.commit()
        return downloadConfig

    }
}

export default DownloadConfig