import DB from "./DB"

class Section extends DB {
	table = 'section'
	fields = ["courseId","slug","title"]


	/*
static getSection(slug:string,courseId:number):Section_tableField{
        const db = Store.db();
        const results = db.queryAll('section',{query: {slug,courseId}});
        if(results.length>0){
            return results[0] as Section_tableField
        }
        return null;
    }
    static getSectionsByCourseId(courseId:number):Section_tableField[]{
        const db = Store.db();
        const results = db.queryAll('section',{query: {courseId}});
        return results  as Section_tableField[];
    }

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
