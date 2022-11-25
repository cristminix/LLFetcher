import localStorageDB from "localStorageDB";
import Proxy  from "./proxy";
import {makeSlug} from "./utils";
class Store{
    static db(){
        return new localStorageDB("learning", 'localStorage');
    }
    static init(){
        const db = Store.db();
        if(db.isNew()){
            const schema = {
                course : ["title", "slug", "duration", "sourceCodeRepository", "description"],
                author : ["courseId","slug","biography", "shortBiography"],
                exerciseFile : ["courseId","name","url","size"],
                section : ["courseId","slug","title"],
                toc : ["sectionId","title","slug","duration","captionUrl","captionFmt"],
                streamLocation : ["tocId","fmt","url"]
            };
            Object.keys(schema).map((table)=>{
                db.createTable(table, schema[table]);
            });
            db.commit();
        }

    }
    static getExerciseFile(courseId){
        const db = Store.db();
        return db.queryAll('exerciseFile',{query: {courseId}});
    }
    static getCourse(slug){
        const db = Store.db();
        return db.queryAll('course',{query: {slug}});
    }
    static getSection(slug){
        const db = Store.db();
        return db.queryAll('section',{query: {slug}});
    }
    static getToc(slug){
        const db = Store.db();
        return db.queryAll('toc',{query: {slug}});
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
        }
    }

    static getStreamLocation(tocId:number,fmt:string){
        const db = Store.db();
        return db.queryAll('streamLocation',{query: {tocId,fmt}});
    }
    static createStreamLocation(tocId:number,fmt:string,url:string){
        const db = Store.db();
        const streamLocations = Store.getStreamLocation(tocId,fmt);
        if(streamLocations.length > 0){
            const streamLocation = streamLocations[0];
            db.update('streamLocation',(row)=>{
                row.url = url;
                return row;
            })
        }else{
            db.insert('streamLocation',{tocId,fmt,url});
        }
        db.commit()
    }
    static createStreamLocationList(slug:string,streamLocations:any[]){
        const db = Store.db();
        const tocs = Store.getToc(slug);
        if(tocs.length > 0){
            const toc = tocs[0];
            streamLocations.map((streamLocation)=>{
                console.log(streamLocation);
                Store.createStreamLocation(toc.ID,streamLocation.fmt,streamLocation.url);
            });
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
    static createToc(sectionId:number,title:string,slug:string,duration:number, captionUrl?:string, captionFmt?:string){
        const db = Store.db();
        const tocs = Store.getToc(slug);
        let toc = null;

        if(tocs.length === 0){
            const ID = 0;
            toc = {ID,sectionId,title,slug,duration,captionUrl,captionFmt};
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
            course = {ID,title,slug,duration,sourceCodeRepository,description};
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
}

export default Store;