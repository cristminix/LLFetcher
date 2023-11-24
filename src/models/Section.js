import DB from "./DB"

class Section extends DB {
	table = 'section'
	fields = ["courseId","slug","title","tocIds","itemStars"]

    getBySlug(slug, courseId){
        return this.singleQuery({query: {slug,courseId}})
    }
    get(id){
        return this.singleQuery({query: {id}})
    }
    getList(){
        const results =  this.db.queryAll(this.table);
        return results
    }
    async create(title, slug, courseId,itemStars=[]){
        let section = this.getBySlug(slug,courseId)

        if(!section){
            const id = 0
            const tocIds=[]
            section = {id,courseId,title,slug,tocIds,itemStars}
            section.id = this.db.insert(this.table,section)
            await this.db.commit()

        }else{
            console.error(`${this.constructor.name}.create() section row exists`)
        }

        return section
    }
    async updateTocIds(id, tocIds){
        let section = this.get(id)
        if(section){
            this.db.update(this.table,{id}, row => {
                row.tocIds = tocIds
                return row
            })

            await this.db.commit()
            section.tocIds = tocIds

        }else{
            console.error(`${this.constructor.name}.updateTocIds() toc row not exists`)
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
