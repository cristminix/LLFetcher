import DB from "./DB"
import App from "./App"

const mApp = App.getInstance()

class Course extends DB {
	table = 'course'
	fields = ["title", "slug", "duration", "sourceCodeRepository", "description",'authorIds']


	getBySlug(slug){
	    const results =  this.db.queryAll(this.table,{query: {slug}});
        return this.singleResult(results)
	}


	getList(){
        const results =  this.db.queryAll(this.table);
        return results
    }

    getById(id){
        return this.singleQuery({query: {id}});
    }

    async addAuthorId(id, authorId){
        const course = this.getById(id)
        if(course){
            const authorIds = course.authorIds
            if(!authorIds.includes(authorId)){
                authorIds.push(authorId)

                this.db.update(this.table,{id}, row => {
                    row.authorIds = authorIds
                    return row
                });
                
                await this.db.commit()
            }
        }

        return course
        
    }
    async create(title,slug,duration,sourceCodeRepository,description){
        let course = this.getBySlug(slug);
        if(!course){
            const id = 0;
            const authorIds = [];
            course = {id,title,slug,duration,sourceCodeRepository,description,authorIds};
            course.id = this.db.insert(this.table,course);
            await this.db.commit();
        }else{
            console.error(`${this.constructor.name}.create() rowExist`)

        }

        return course;
    }
}

export default Course