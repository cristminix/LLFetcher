import localStorageDB from "localStorageDB";
import Proxy  from "./proxy";
import {makeSlug, makeTitle} from "./utils";
import {Course_tableField,ExerciseFile_tableField,Author_tableField,Section_tableField,Toc_tableField,StreamLocation_tableField,Downloads_tableField,DownloadConfig_tableField,App_tableField } from "../types/tableFields";
import { Author, CourseInfo, StreamLocation } from "../types/lynda";

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
    queryAll(a:string,b:localStorageDB_queryParams){
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
    tableExists(table:string){
        return this.db.tableExists(table);
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
                if(!db.tableExists(table)){
                    db.createTable(table, schema[table]);

                }
            });
            db.commit();
        }

    }
    static getExerciseFile(courseId:number) : ExerciseFile_tableField{
        const db = Store.db();
        const results =  db.queryAll('exerciseFile',{query: {courseId}});
        if(results.length>0){
            return results[0] as unknown as ExerciseFile_tableField;
        }
        return null;
    }
    static getCourse(slug:string): Course_tableField{
        const db = Store.db();
        const results =  db.queryAll('course',{query: {slug}});
        if(results.length>0){
            return results[0] as Course_tableField
        }
        return null;
    }
    static getLastCourses(slug?:string): Course_tableField[]{
        const db = Store.db();
        if(typeof slug === 'undefined'){
            const appState = Store.getAppState();
            slug = appState.lastCourseSlug;

        }

        const results = db.queryAll('course',{query: (row)=>{
                if(row.slug !== slug){
                    return true;
                }
            }
        });

        return results as Course_tableField[];
    }
    static getCourseById(ID:number) : Course_tableField{
        const db = Store.db();
        const results = db.queryAll('course',{query: {ID}});
        if(results.length>0){
            return results[0] as Course_tableField
        }
        return null;
    }
    static getSection(slug:string):Section_tableField{
        const db = Store.db();
        const results = db.queryAll('section',{query: {slug}});
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
    static getTocsBySectionId(sectionId:number):Toc_tableField[]{
        const db = Store.db();
        const results = db.queryAll('toc',{query: {sectionId}});
        return results as Toc_tableField[];
    }
    static getToc(slug:string):Toc_tableField{
        const db = Store.db();
        const results = db.queryAll('toc',{query: {slug}});
        if(results.length>0){
            return results[0] as Toc_tableField
        }
        return null;
    }
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
    static getDownloadConfig(courseId:number):DownloadConfig_tableField{
        const db = Store.db();
        const results = db.queryAll('downloadConfig',{query: {courseId}});
        if(results.length>0){
            return results[0] as DownloadConfig_tableField
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
                console.log(authorTmp);
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
    static updateTocCaption(slug:string,captionUrl:string,captionFmt:string){
        const db = Store.db();
        const toc = Store.getToc(slug);
        if(toc){
            db.update("toc", {slug}, function(newToc) {
                newToc.captionUrl = captionUrl;
                newToc.captionFmt = captionFmt;
                return newToc;
            });
            db.commit();
        }
    }

    static getStreamLocation(tocId:number,fmt:string):StreamLocation_tableField{
        const db = Store.db();
        const results = db.queryAll('streamLocation',{query: {tocId,fmt}});
        if(results.length>0){
            return results[0] as StreamLocation_tableField;
        }
        return null;
        
    }
    static getStreamLocations(tocId:number):StreamLocation_tableField[]{
        const db = Store.db();
        const results = db.queryAll('streamLocation',{query: {tocId}});
        return results as StreamLocation_tableField[];
    }
    static createStreamLocation(tocId:number,fmt:string,url:string):StreamLocation_tableField{
        const db = Store.db();
        let streamLocation = Store.getStreamLocation(tocId,fmt);
        if(streamLocation){
            streamLocation.url = url;
            db.update('streamLocation',(row)=>{
                row.url = url;
                return row;
            });
        }else{
            const ID = 0;
            streamLocation = {ID,tocId,fmt,url};
            streamLocation.ID = db.insert('streamLocation',streamLocation);
        }
        setTimeout(()=>db.commit(),100);

        return streamLocation;
    }
    static updateDownloadConfig(fieldName:string,data:any,courseId:number){
        const db =  Store.db();
        let downloadConfig = Store.getDownloadConfig(courseId);
        if(downloadConfig){
            db.update('downloadConfig',{courseId},(row)=>{
                row[fieldName] = data;
                return row;
            });
        }else{
            const ID = 0;
            const fmtList =[];
            const selectedFmtList ='';
            downloadConfig = {ID,courseId,fmtList,selectedFmtList};
            downloadConfig[fieldName] = data;

            downloadConfig.ID = db.insert('downloadConfig',downloadConfig);

        }
        setTimeout(()=>db.commit(),100);
        return downloadConfig;

    }
    static createStreamLocationList(slug:string,streamLocations:StreamLocation[],courseId?:number):StreamLocation_tableField[]{
        const db = Store.db();
        const toc = Store.getToc(slug);
        const streamLocationResults : StreamLocation_tableField[] = [];
        const fmtList : string[]=[];
        if(toc){
            const streamLocationIds = toc.streamLocationIds;
            streamLocations.map((streamLocation)=>{
                // console.log(streamLocation);
                if(!fmtList.includes(streamLocation.fmt)){
                    fmtList.push(streamLocation.fmt);
                }
                const streamLoc = Store.createStreamLocation(toc.ID,streamLocation.fmt,streamLocation.url);
                if(!streamLocationIds.includes(streamLoc.ID)){
                    streamLocationIds.push(streamLoc.ID);
                }
                streamLocationResults.push(streamLoc);
            });

            db.update('toc',{slug},(row)=>{
               row.streamLocationIds = streamLocationIds;
               return row;
            });

            db.commit();
            if(courseId){
                Store.updateDownloadConfig('fmtList',fmtList,courseId);
            }
            
        }
        return streamLocationResults;
    }
    static createExerciseFile(courseId:number,name:string,url:string,size:number):ExerciseFile_tableField{
        const db = Store.db();
        let exerciseFile = Store.getExerciseFile(courseId);

        if(!exerciseFile){
            const ID = 0;
            exerciseFile = {ID,courseId,name,url,size};
            exerciseFile.ID = db.insert('exerciseFile',exerciseFile);
            db.commit();

        }

        return exerciseFile;
    }
    static createSection(courseId:number,title:string):Section_tableField{
        const db = Store.db();
        const slug = makeSlug(title);
        let section = Store.getSection(slug);

        if(!section){
            const ID = 0;
            section = {ID,courseId,title,slug};
            section.ID = db.insert('section',section);
            db.commit();

        }

        return section;
    }
    static createToc(sectionId:number,title:string,slug:string,url:string,duration:number, captionUrl?:string, captionFmt?:string):Toc_tableField{
        const db = Store.db();
        let toc = Store.getToc(slug);

        if(!toc){
            const ID = 0;
            const streamLocationIds = [];
            toc = {ID,sectionId,title,slug,url,duration,captionUrl,captionFmt,streamLocationIds};
            toc.ID = db.insert('toc',toc);
            db.commit();

        }

        return toc;
    }
    static createCourse(title:string,slug:string,duration:number,sourceCodeRepository:string,description:string):Course_tableField{
        const db = Store.db();
        let course = Store.getCourse(slug);
        if(!course){
            const ID = 0;
            const authorIds = [];
            course = {ID,title,slug,duration,sourceCodeRepository,description,authorIds};
            course.ID = db.insert('course',course);
            db.commit();
        }

        return course;
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
    static prepareAppStorage(){
        Store.init();
        Store.initApp('');
    }
    static initApp(courseSlug:string):App_tableField{
        const db = Store.db();
        const version = '1.0';
        const apps = db.queryAll('app',{version} as localStorageDB_queryParams);
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

    static getAppState():App_tableField{
        const db = Store.db();
        const version = '1.0';
        const apps = db.queryAll('app',{version} as localStorageDB_queryParams);
        let app = null;
        if(apps.length > 0){
            app = apps[0];
        }
        return app;
    }
    static setAppState(state : number,courseSlug?:string){
        const db = Store.db();
        const version = '1.0';
        const apps = db.queryAll('app',{version} as localStorageDB_queryParams);
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
    static getAppInfo():App_tableField{
        const db = Store.db();
        const version = '1.0';
        const apps = db.queryAll('app',{version} as localStorageDB_queryParams);
        if(apps.length > 0){
            return apps[0] as App_tableField;
        }

        return null;
    }
    
}
Store.prepareAppStorage();
export default Store;