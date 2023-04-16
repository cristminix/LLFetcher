import DB from "./DB"
import App from "../models/App"
import Author from "../models/Author"
import Section from "../models/Section"
import Toc from "../models/Toc"
const mApp = await App.getInstance()
const mAuthor = await Author.getInstance()
const mSection = await Section.getInstance()
const mToc = await Toc.getInstance()

class Course extends DB {
	table = 'course'
	fields = ["title", "slug", "duration", "sourceCodeRepository", "description",'authorIds','urn']


	getBySlug(slug){
	    const results =  this.db.queryAll(this.table,{query: {slug}});
        return this.singleResult(results)
	}
    getLastSlug(){
        const app = mApp.get()
        if(app){
            return app.lastCourseSlug
        }
        return ''
    }
    async setLastSlug(slug){
        if(slug !== ''){
            console.log(`App.init() update courseSlug=${slug}`)

            await mApp.update(row => {
                row.lastCourseSlug = slug
                return row
            })
        }
    }
    getCoursePageData(slug){
        if(!slug){
            return null
        }
        let course = null, authors=[], sections=[], tocs={}
        course = this.getBySlug(slug)
        if(course){
            authors = mAuthor.getListByCourse(course)
            sections = mSection.getList(course.id)

            for(let i in sections){
                const section = sections[i]
                tocs[section.slug] = mToc.getListBySectionId(section.id)
            }

        } 
        return {course, authors, sections, tocs}

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
    async create(title,slug,duration,sourceCodeRepository,description,urn){
        let course = this.getBySlug(slug);
        if(!course){
            const id = 0;
            const authorIds = [];
            course = {id,title,slug,duration,sourceCodeRepository,description,authorIds,urn};
            course.id = this.db.insert(this.table,course);
            await this.db.commit();
        }else{
            console.error(`${this.constructor.name}.create() rowExist`)

        }

        return course;
    }
}

export default Course