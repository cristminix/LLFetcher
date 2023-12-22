import DB from "./DB"
import App from "../models/App"
import Author from "../models/Author"
import Section from "../models/Section"
import Toc from "../models/Toc"


class Course extends DB {
	table = 'course'
	fields = ["title", "slug", "duration", "sourceCodeRepository", "description",'authorIds','urn','thumbnail']


 /**
  * Gets a single course by its slug property.
  * Queries the database for courses matching the given slug, 
  * and returns the first result.
  * @param {string} slug - The slug property to search for.
  * @returns {Object|null} The matching course, or null if not found.
 */
    getBySlug(slug) {
        const results = this.db.queryAll(this.table, { query: { slug } });
        return this.singleResult(results)
    }
    /**
     * Gets the last used course slug from the App model.
     * 
     * Gets the App model instance and retrieves the stored document.
     * Returns the lastCourseSlug property from the document if found,
     * otherwise returns an empty string.
     */
    async getLastSlug() {
        const mApp = await App.getInstance()

        const app = mApp.get()
        if (app) {
            return app.lastCourseSlug
        }
        return ''
    }
    /**
     * Sets the last used course slug in the App model.
     * Gets the singleton App model instance. 
     * If the slug parameter is not empty, it logs a message and updates the 
     * lastCourseSlug property in the App document to the given slug value.
     * @param {string} slug - The course slug to set as last used.
     */
    async setLastSlug(slug) {
        const mApp = await App.getInstance()

        if (slug !== '') {
            console.log(`App.init() update courseSlug=${slug}`)

            await mApp.update(row => {
                row.lastCourseSlug = slug
                return row
            })
        }
    }
    /**
     * Fetches all data needed to display a course page, including the course itself, authors, 
     * sections, and table of contents.
     * 
     * Takes a course slug. Gets the course by that slug. Also gets the authors, 
     * sections, and TOCs related to that course from their respective models.
     * 
     * Returns an object containing the course data, authors array, sections array,
     * and TOCs object mapping section slugs to array of TOC items.
     * 
     * Returns null if no course found for the given slug.
    */
    async getCoursePageData(slug) {
        if (!slug) {
            return null
        }
        const mAuthor = await Author.getInstance()
        const mSection = await Section.getInstance()
        const mToc = await Toc.getInstance()
        let course = null, authors = [], sections = [], tocs = {}
        course = this.getBySlug(slug)
        if (course) {
            authors = mAuthor.getListByCourse(course)
            sections = mSection.getListByCourseId(course.id)

            for(let i in sections){
                const section = sections[i]
                tocs[section.slug] = mToc.getListBySectionId(section.id)
            }

        } 
        return {course, authors, sections, tocs}

    }
    async getCourseSecsTocs(courseId){
        let  sections=[], tocs={}

        const mSection = await Section.getInstance()
        const mToc = await Toc.getInstance()
        sections = mSection.getListByCourseId(courseId)
        for(let i in sections){
            const section = sections[i]
            tocs[section.slug] = mToc.getListBySectionId(section.id)
        }

        return {sections, tocs}

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