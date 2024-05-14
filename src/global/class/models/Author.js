import DB from "./DB"
class Author extends DB {
	table = 'author'
	fields = ["name","slug","biography", "shortBiography","courseIds"]

    getBySlug(slug){

        return this.singleQuery({query: {slug}})
    }
    getById(id){
        return this.singleQuery({query: {id}})
    }
   
    getListByCourse(course){

        const authors = []
        if(!course){
            return authors
        }
        for(let i in course.authorIds){
            const author = this.getById(course.authorIds[i])
            if(author){
                authors.push(author)
            }
        }
        return authors
    }
    async create(name,slug,biography,shortBiography,courseId){
        let author = this.getBySlug(slug)
        if(!author){
            const courseIds = [];
            if(typeof courseId === 'number'){
                courseIds.push(courseId)
            }
            const id = 0
            author = {id,name,slug,biography,shortBiography,courseIds}

            author.id = this.db.insert(this.table,author)

            await this.db.commit()
        }else{
            const courseIds = author.courseIds
            if(!courseIds.includes(courseId)){
                courseIds.push(courseId);

                this.db.update(this.table,{slug},(row)=>{
                    row.courseIds = courseIds
                    return row
                });
                
                await this.db.commit()
                author.courseIds = courseIds
            }
        }
        

        return author
    }	
}

export default Author