import DB from "./DB"

class Course extends DB {
	table = 'course'
	fields = ["title", "slug", "duration", "sourceCodeRepository", "description",'authorIds']


	getBySlug(slug){
		/*static getCourse(slug:string): Course_tableField{
	        const db = Store.db();
	        const results =  db.queryAll('course',{query: {slug}});
	        if(results.length>0){
	            return results[0] as Course_tableField
	        }
	        return null;
	    }*/
	}

	/*

	static getLastCourses(slug?:string): Course_tableField[]{
        const db = Store.db();
        if(typeof slug === 'undefined'){
            const appState = Store.getAppState();
            if(!appState){
                return [];
            }
            slug = appState.lastCourseSlug;

        }

        const results = db.queryAll('course',{query: (row)=>{
                if(row.slug !== slug){
                    return true;
                }
            }
        });

        return results as Course_tableField[];


    }

static getCourseById(ID:number) : Course_tableField{
        const db = Store.db();
        const results = db.queryAll('course',{query: {ID}});
        if(results.length>0){
            return results[0] as Course_tableField
        }
        return null;
    }

static createCourse(title:string,slug:string,duration:number,sourceCodeRepository:string,description:string):Course_tableField{
        const db = Store.db();
        let course = Store.getCourse(slug);
        if(!course){
            const ID = 0;
            const authorIds = [];
            course = {ID,title,slug,duration,sourceCodeRepository,description,authorIds};
            course.ID = db.insert('course',course);
            db.commit();
        }

        return course;
    }
    */
}

export default Course