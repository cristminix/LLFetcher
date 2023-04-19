import DB from "./DB"

class ExerciseFile extends DB {
	table = 'exerciseFile'
	fields = ["courseId","name","url","size"]

	getByCourseId(courseId){
        return this.singleQuery({query: {courseId}})
	}
    async create(name,url,size,courseId){
        let exerciseFile = this.getByCourseId(courseId)

        if(!exerciseFile){
            const id = 0
            exerciseFile = {id,courseId,name,url,size}
            exerciseFile.id = this.db.insert(this.table,exerciseFile)
            await this.db.commit()

        }

        return exerciseFile;
    }
}

export default ExerciseFile