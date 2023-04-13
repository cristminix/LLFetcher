class Store {
	/*
 getSchema()	
static initTables(fn:Function){
        logServer.log(`Store.initTables()`,129);
        const db = Store.db();
        const schema = Store.getSchema();
        logServer.log(schema,129);

        Object.keys(schema).forEach((table)=>{
            if(!db.tableExists(table)){
                logServer.log(`createTable:${table}`,25)

                db.createTable(table, schema[table]);

            }
        });

        db.commit(fn);
        Store.db().setFresh(false);
    }	
static init(fn:Function){
        const db = Store.db();
        db.isNew((isNew:boolean)=>{
            logServer.log(`Store.init():isNew:${isNew}`,144);
            
            // if(isNew){
            Store.initTables(fn);
            // }
        });
        // Store.db().setFresh(false);
    }	
static getCourseJson(callback?:Function){
        Proxy.get('/data/course.json',(r)=>{
            // console.log(r);
            if('function' === typeof callback){
                callback(r);
            }
        })
    }
    static getDataCodesLS(callback:Function){
        setTimeout(()=>{
            chrome.storage.sync.get(['dataCodes'] , (r)=>{callback(JSON.parse(r.dataCodes))});
        },1000);
    }

    static saveDataCodes(dataCodes:CourseInfo):Course_tableField{
        const courseTmp = dataCodes.course;
        const authors = courseTmp.authors;
        const course = Store.createCourse(courseTmp.title, courseTmp.slug, courseTmp.duration, courseTmp.sourceCodeRepository, courseTmp.description);

        const sections = dataCodes.sections;
        sections.map((sectionTmp)=>{
            const section = Store.createSection(course.ID,sectionTmp.title);
            sectionTmp.items.map((tocTmp)=>{
                tocTmp.url = `https://www.linkedin.com/learning/${course.slug}/${tocTmp.slug}`;
                const toc = Store.createToc(section.ID,tocTmp.title,tocTmp.slug,tocTmp.url,tocTmp.duration);
            });
        });

        Store.createAuthorList(course.slug,authors);
        Store.setAppState(1,course.slug);
        return course;
    }
	*/
}

export default Store