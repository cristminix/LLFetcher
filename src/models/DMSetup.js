import DB from "./DB"
import Course from "./Course"

class DMSetup extends DB{
    table = 'dmSetup'
	fields = [
        "courseId",
        "state"
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
}

export default DMSetup