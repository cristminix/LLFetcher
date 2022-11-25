import localStorageDB from "localStorageDB";
import Proxy  from "./proxy";
import {makeSlug, makeTitle} from "./utils";
class Store{
    static db(){
        return new localStorageDB("learning", 'localStorage');
    }
    static init(){
        const db = Store.db();
        if(db.isNew()){
            const schema = {
                course : ["title", "slug", "duration", "sourceCodeRepository", "description",'authorIds'],
                author : ["name","slug","biography", "shortBiography","courseIds"],
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
    static getExerciseFile(courseId:number){
        const db = Store.db();
        return db.queryAll('exerciseFile',{query: {courseId}});
    }
    static getCourse(slug:string){
        const db = Store.db();
        return db.queryAll('course',{query: {slug}});
    }
    static getCourseById(ID:number){
        const db = Store.db();
        return db.queryAll('course',{query: {ID}});
    }
    static getSection(slug:string){
        const db = Store.db();
        return db.queryAll('section',{query: {slug}});
    }
    static getToc(slug:string){
        const db = Store.db();
        return db.queryAll('toc',{query: {slug}});
    }
    static getAuthor(slug:string){
        const db = Store.db();
        return db.queryAll('author',{query: {slug}});
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
}

export default Store;