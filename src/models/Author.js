import DB from "./DB"

class Author extends DB {
	table = 'author'
	fields = ["name","slug","biography", "shortBiography","courseIds"]

/*
static getAuthor(slug:string):Author_tableField{
        const db = Store.db();
        const results = db.queryAll('author',{query: {slug}});
        if(results.length>0){
            return results[0] as Author_tableField
        }
        return null;
    }
    static getAuthorById(ID:number):Author_tableField{
        const db = Store.db();
        const results = db.queryAll('author',{query: {ID}});
        if(results.length>0){
            return results[0] as Author_tableField
        }
        return null;
    }

static createAuthor(name:string,slug:string,biography:string,shortBiography:string,courseId:number):Author_tableField{
        const db = Store.db();
        let author = Store.getAuthor(slug);
        if(author){
            const courseIds = author.courseIds;
            if(!courseIds.includes(courseId)){
                courseIds.push(courseId);

                db.update('author',{slug},(row)=>{
                    row.courseIds = courseIds;

                    return row;
                });
                setTimeout(()=>{db.commit()},100);
                author.courseIds = courseIds;
            }

        }else{
            
            const courseIds = [];
            if(typeof courseId === 'number'){
                courseIds.push(courseId);
            }
            const ID = 0;
            author = {ID,name,slug,biography,shortBiography,courseIds};

            author.ID = db.insert('author',author);

            setTimeout(()=>{db.commit()},100);
        }
        

        return author;
    }
    
    static createAuthorList(courseSlug:string,authors:Author[]) : Author_tableField[]{
        const db = Store.db();
        const course = Store.getCourse(courseSlug);
        const authorResults : Author_tableField[] = [];
        if(course){
            let authorIds = course.authorIds;
            authors.map((authorTmp)=>{
                // console.log(authorTmp);
                const name = makeTitle(authorTmp.slug);
                const author = Store.createAuthor(name,authorTmp.slug,authorTmp.biography,authorTmp.shortBiography,course.ID);
                if(!authorIds.includes(author.ID)){
                    authorIds.push(author.ID);
                }  
                authorResults.push(author);              
            });
            
            db.update('course',{slug:courseSlug},(row)=>{
                row.authorIds = authorIds;

                return row;
            });
            db.commit();
        }
        return authorResults;
    }    
*/	
}

export default Author