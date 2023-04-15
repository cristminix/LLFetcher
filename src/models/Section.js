import DB from "./DB"

class Section extends DB {
	table = 'section'
	fields = ["courseId","slug","title"]

    get(slug, courseId){
        return this.singleQuery({query: {slug,courseId}})
    }
    getList(courseId){
        return this.query({query: {courseId}})
    }
    async create(title, slug, courseId){
        let section = this.get(slug,courseId)

        if(!section){
            const id = 0
            const tocIds=[]
            section = {id,courseId,title,slug,tocIds}
            section.id = this.db.insert(this.table,section)
            await this.db.commit()

        }

        return section
    }
	/*


static createSection(courseId:number,title:string):Section_tableField{
        const db = Store.db();
        const slug = makeSlug(title);
        let section = Store.getSection(slug,courseId);

        if(!section){
            const ID = 0;
            const tocIds=[];
            section = {ID,courseId,title,slug,tocIds};
            section.ID = db.insert('section',section);
            db.commit();

        }

        return section;
    }
	*/
}

export default Section
