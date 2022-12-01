import localStorageDB from "localStorageDB";
import Proxy  from "./proxy";
import {makeSlug, makeTitle} from "./utils";
// import Toc from "../types/toc";
import CourseInfo from "../types/CourseInfo";

class MyLS {
    db : localStorageDB; 
    subscribers = {};
    lastTable:string = '';
    lastTablePk:number;

    constructor(db:string,engine:string){
        this.db = new localStorageDB(db,engine);
    }
    subscribe(table:string,fn:Function){
        this.subscribers[table] = fn;
    }

    update(table: string, query: localStorageDB_dynamicFields | localStorageDB_callbackFilter, update?: localStorageDB_callback):number{

        const ret = this.db.update(table,query,update);
        this.lastTable = table;
        this.lastTablePk = ret;

        return ret;
    }
    
    insert(a:string,b){
        return this.db.insert(a,b);
    }
    queryAll(a:string,b){
        return this.db.queryAll(a,b);
    }
    getRow(table:string,ID:number){
        return this.db.queryAll(table,{ID} as localStorageDB_queryParams)[0];
    }
    commit():boolean{
        const ret = this.db.commit();

        if(this.lastTable !== ''){
            if(typeof this.subscribers[this.lastTable] === 'function'){
                const row = this.getRow(this.lastTable,this.lastTablePk);
                this.subscribers[this.lastTable](row);
                this.lastTable = '';
                this.lastTablePk = -1;
            }
        }
        return ret;
    }
    isNew(){
        return this.db.isNew();
    }
    createTable(a:string,b:string[]){
        return this.db.createTable(a,b);
    }
}
class Store{
    static __db__:undefined | MyLS;
    static db() : undefined | MyLS{
        if(typeof Store.__db__ === 'undefined'){
            Store.__db__ = new MyLS("learning", 'localStorage');
        }
        return Store.__db__;
    }
    static init(){
        const db = Store.db();
        if(db.isNew()){
            const schema = {
                course : ["title", "slug", "duration", "sourceCodeRepository", "description",'authorIds'],
                author : ["name","slug","biography", "shortBiography","courseIds"],
                exerciseFile : ["courseId","name","url","size"],
                section : ["courseId","slug","title"],
                toc : ["sectionId","title","slug","url","duration","captionUrl","captionFmt","streamLocationIds"],
                streamLocation : ["tocId","fmt","url"],
                downloadConfig : ["courseId","fmtList","selectedFmtList"],
                downloads : ["tocId","downloadId","filename","progress","status"],
                app: ["version","state","lastCourseSlug"]
            };
            Object.keys(schema).map((table)=>{
                db.createTable(table, schema[table]);
            });
            db.commit();
        }

    }
    static getExerciseFile(courseId:number){
        const db = Store.db();
        return db.queryAll('exerciseFile',{query: {courseId}});
    }
    static getCourse(slug:string){
        const db = Store.db();
        return db.queryAll('course',{query: {slug}});
    }
    static getLastCourses(){
        const db = Store.db();
        const appState = Store.getAppState();

        return db.queryAll('course',{query: (row)=>{
                if(row.slug !== appState.lastCourseSlug){
                    return true;
                }
            }
        });
    }
    static getCourseById(ID:number){
        const db = Store.db();
        return db.queryAll('course',{query: {ID}});
    }
    static getSection(slug:string){
        const db = Store.db();
        return db.queryAll('section',{query: {slug}});
    }
    static getSectionByCourseId(courseId:number){
        const db = Store.db();
        return db.queryAll('section',{query: {courseId}});
    }
    static getTocBySectionId(sectionId:number){
        const db = Store.db();
        return db.queryAll('toc',{query: {sectionId}});
    }
    static getToc(slug:string){
        const db = Store.db();
        return db.queryAll('toc',{query: {slug}});
    }
    static getAuthor(slug:string){
        const db = Store.db();
        return db.queryAll('author',{query: {slug}});
    }
    static getAuthorById(ID:number){
        const db = Store.db();
        return db.queryAll('author',{query: {ID}});
    }
    static createAuthor(name:string,slug:string,biography:string,shortBiography:string,courseId:number){
        const db = Store.db();
        const authors = Store.getAuthor(slug);
        let author = null;
        if(authors.length > 0){
            author = authors[0];
            if(typeof courseId === 'number'){
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
    
    static createAuthorList(courseSlug:string,authors:any[]){
        const db = Store.db();
        const courses = Store.getCourse(courseSlug);
        if(courses.length > 0){
            const course = courses[0];
            let authorIds = course.authorIds;
            authors.map((authorTmp)=>{
                console.log(authorTmp);
                const name = makeTitle(authorTmp.slug);
                const author = Store.createAuthor(name,authorTmp.slug,authorTmp.biography,authorTmp.shortBiography,course.ID);
                if(!authorIds.includes(author.ID)){
                    authorIds.push(author.ID);
                }
                
            });
            
            db.update('course',{slug:courseSlug},(row)=>{
                row.authorIds = authorIds;

                return row;
            });
            db.commit();
        }
    }
    static updateTocCaption(slug:string,captionUrl:string,captionFmt:string){
        const db = Store.db();
        const tocs = Store.getToc(slug);
        if(tocs.length > 0){
            const toc = tocs[0];
            db.update("toc", {slug}, function(newToc) {
                newToc.captionUrl = captionUrl;
                newToc.captionFmt = captionFmt;
                return newToc;
            });
            db.commit();
        }
    }

    static getStreamLocation(tocId:number,fmt:string){
        const db = Store.db();
        return db.queryAll('streamLocation',{query: {tocId,fmt}});
    }
    static createStreamLocation(tocId:number,fmt:string,url:string){
        const db = Store.db();
        const streamLocations = Store.getStreamLocation(tocId,fmt);
        let streamLoc = null;
        if(streamLocations.length > 0){
            streamLoc = streamLocations[0];
            streamLoc.url = url;
            db.update('streamLocation',(row)=>{
                row.url = url;
                return row;
            });
        }else{
            const ID = 0;
            streamLoc = {ID,tocId,fmt,url};
            streamLoc.ID = db.insert('streamLocation',streamLoc);
        }
        setTimeout(()=>db.commit(),100);

        return streamLoc;
    }
    static createStreamLocationList(slug:string,streamLocations:any[]){
        const db = Store.db();
        const tocs = Store.getToc(slug);
        if(tocs.length > 0){
            const toc = tocs[0];
            const streamLocationIds = toc.streamLocationIds;
            streamLocations.map((streamLocation)=>{
                console.log(streamLocation);
                const streamLoc = Store.createStreamLocation(toc.ID,streamLocation.fmt,streamLocation.url);
                if(!streamLocationIds.includes(streamLoc.ID)){
                    streamLocationIds.push(streamLoc.ID);
                }
            });

            db.update('toc',{slug},(row)=>{
               row.streamLocationIds = streamLocationIds;
               return row;
            });

            db.commit();
        }
    }
    static createExerciseFile(courseId:number,name:string,url:string,size:number){
        const db = Store.db();
        const exerciseFiles = Store.getExerciseFile(courseId);
        let exerciseFile = null;

        if(exerciseFiles.length === 0){
            const ID = 0;
            exerciseFile = {ID,courseId,name,url,size};
            exerciseFile.ID = db.insert('exerciseFile',exerciseFile);
            db.commit();

        }else{
            exerciseFile = exerciseFiles[0];
        }

        return exerciseFile;
    }
    static createSection(courseId:number,title:string){
        const db = Store.db();
        const slug = makeSlug(title);
        const sections = Store.getSection(slug);
        let section = null;

        if(sections.length === 0){
            const ID = 0;
            section = {ID,courseId,title,slug};
            section.ID = db.insert('section',section);
            db.commit();

        }else{
            section = sections[0];
        }

        return section;
    }
    static createToc(sectionId:number,title:string,slug:string,url:string,duration:number, captionUrl?:string, captionFmt?:string){
        const db = Store.db();
        const tocs = Store.getToc(slug);
        let toc = null;

        if(tocs.length === 0){
            const ID = 0;
            const streamLocationIds = [];
            toc = {ID,sectionId,title,slug,url,duration,captionUrl,captionFmt,streamLocationIds};
            toc.ID = db.insert('toc',toc);
            db.commit();

        }else{
            toc = tocs[0];
        }

        return toc;
    }
    static createCourse(title:string,slug:string,duration:number,sourceCodeRepository:string,description:string){
        const db = Store.db();
        const courses = Store.getCourse(slug);
        let course = null;
        if(courses.length === 0){
            const ID = 0;
            const authorIds = [];
            course = {ID,title,slug,duration,sourceCodeRepository,description,authorIds};
            course.ID = db.insert('course',course);
            db.commit();
        }else{
            course = courses[0];
        }


        return course;
    }
    static getCourseJson(callback:any){
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

    static saveDataCodes(dataCodes:CourseInfo){
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
    static prepareAppStorage(){
        Store.init();
        Store.initApp('');
    }
    static initApp(courseSlug:string){
        const db = Store.db();
        const version = '1.0';
        const apps = db.queryAll('app',{version});
        let app = null;
        if(apps.length === 0){
            const state = 0;
            const ID = 0;
            const lastCourseSlug = courseSlug;
            app = {ID,state,version,lastCourseSlug};
            app.ID = db.insert('app',app);
            db.commit();
        }else{
            app = apps[0];
            if(app.lastCourseSlug !== courseSlug && courseSlug !==''){
                app.lastCourseSlug = courseSlug;
                db.update('app',{version},(row)=>{
                    row.lastCourseSlug = courseSlug;
                    return row;
                });
                db.commit();
            } 
        }

        return app;
    }

    static getAppState(){
        const db = Store.db();
        //let appState = 0;
        const version = '1.0';
        const apps = db.queryAll('app',{version});
        let app = null;
        if(apps.length > 0){
            app = apps[0];
            //appState = app.state;
        }
        return app;
    }
    static setAppState(state : number,courseSlug?:string){
        const db = Store.db();
        const version = '1.0';
        const apps = db.queryAll('app',{version});
        if(apps.length > 0){
            db.update('app',{version},(row)=>{
                row.state = state;
                if(typeof courseSlug !== 'undefined'){
                    row.lastCourseSlug = courseSlug;
                }
                return row;
            });
            db.commit();
        }
    }
    static getAppInfo(){
        const db = Store.db();
        const version = '1.0';
        const apps = db.queryAll('app',{version});
        if(apps.length > 0){
            return apps[0];
        }

        return null;
    }
    
}
Store.init();
export default Store;