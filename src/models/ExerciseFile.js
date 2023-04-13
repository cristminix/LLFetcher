import DB from "./DB"

class ExerciseFile extends DB {
	table = 'exerciseFile'
	fields = ["courseId","name","url","size"]

	getByCourseId(courseId){
		/*
static getExerciseFile(courseId:number) : ExerciseFile_tableField{
        const db = Store.db();
        const results =  db.queryAll('exerciseFile',{query: {courseId}});
        if(results.length>0){
            return results[0] as unknown as ExerciseFile_tableField;
        }
        return null;
    }

		*/
	}
/*
static createExerciseFile(courseId:number,name:string,url:string,size:number):ExerciseFile_tableField{
        const db = Store.db();
        let exerciseFile = Store.getExerciseFile(courseId);

        if(!exerciseFile){
            const ID = 0;
            exerciseFile = {ID,courseId,name,url,size};
            exerciseFile.ID = db.insert('exerciseFile',exerciseFile);
            db.commit();

        }

        return exerciseFile;
    }
*/	
}

export default ExerciseFile