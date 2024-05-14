import DB from "./DB"

class ExerciseFile extends DB {
	table = 'exerciseFile'
	fields = ["courseId","name","url","size"]

	getByNameAndCourseId(name,courseId){
        return this.singleQuery({query: {name,courseId}})
	}
    getListByCourseId(courseId){
        return this.query({query:{courseId}})
    }
    async create(name,url,size,courseId){
        let exerciseFile = this.getByNameAndCourseId(name,courseId)

        if(!exerciseFile){
            const id = 0
            exerciseFile = {id,courseId,name,url,size}
            exerciseFile.id = this.db.insert(this.table,exerciseFile)

        }else{
            console.log(exerciseFile.url, url)
            const id = exerciseFile.id
            exerciseFile.url = url
            this.db.update(this.table,{id}, row => {
                row.url = url
                return row
            })
            console.log(`Exercise file updated`)
        }
        await this.db.commit()

        return exerciseFile
    }
}

export default ExerciseFile