import chromeStorageDB from "./chromeStorageDB";
import Proxy  from "./proxy";
import {makeSlug, makeTitle,LogServer} from "./utils";
import {Course_tableField,ExerciseFile_tableField,Author_tableField,Section_tableField,Toc_tableField,StreamLocation_tableField,Downloads_tableField,DownloadConfig_tableField,App_tableField } from "../types/tableFields";
import { Author, CourseInfo, StreamLocation } from "../types/lynda";
const logServer = new LogServer('src/libs/store.ts');

class MyLS {
    db : chromeStorageDB; 
    subscribers = {};
    lastTable:string = '';
    lastTablePk:number;
    fresh : boolean;
    constructor(db:string,engine:string){
        this.db = new chromeStorageDB(db,engine);
        chrome.storage.local.get('db_learning',(db)=>{
            // console.log(db);
            let isFreshInstall = true;
            if(typeof db.db_learning == 'object'){
                if(typeof db.db_learning.tables == 'object'){
                    if(typeof db.db_learning.tables.app == 'object'){
                        isFreshInstall = false;
                    }
                }
            }
            logServer.log(`fresh install MyLS():${isFreshInstall}`,25)
            this.fresh = isFreshInstall;
        });
        
    }
    subscribe(table:string,fn:Function){
        this.subscribers[table] = fn;
    }

    update(table: string, query: chromeStorageDB_dynamicFields | chromeStorageDB_callbackFilter, update?: chromeStorageDB_callback):number{
        // if(this.fresh){
        //     return null;
        // }
        const ret = this.db.update(table,query,update);
        this.lastTable = table;
        this.lastTablePk = ret;

        return ret;
    }
    
    insert(a:string,b){
        // if(this.fresh){
        //     return null;
        // }
        return this.db.insert(a,b);
    }
    queryAll(a:string,b:chromeStorageDB_queryParams){
        if(this.fresh){
            return [];
        }
        return this.db.queryAll(a,b);
    }
    getRow(table:string,ID:number){
        if(this.fresh){
            return null;
        }
        return this.db.queryAll(table,{ID} as chromeStorageDB_queryParams)[0];
    }
    commit(fn?:Function):boolean{
        // if(this.fresh){
        //     return null;
        // }
        const ret = this.db.commit(fn);

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
    getStoreDB(){
        return this.db;
    }
    isNew(fn){
        return this.db.isNew(fn);
    }
    createTable(a:string,b:string[]){
        // if(this.fresh){
        //     return null;
        // }
        return this.db.createTable(a,b);
    }
    tableExists(table:string){
        // if(this.fresh){
        //     return null;
        // }
        const tableExists = this.db.tableExists(table);
        logServer.log(`MyLS.tableExits:${tableExists}`,96);
        return tableExists;
    }
    setFresh(fresh:boolean){
        this.fresh = fresh
    }

}
class Store{
    
    static __db__:undefined | MyLS;
    static db() : undefined | MyLS{
        if(typeof Store.__db__ === 'undefined'){
            Store.__db__ = new MyLS("learning", 'local');
        }
        return Store.__db__;
    }
    static onReady(fn:Function){
        Store.db().getStoreDB().sync(fn);
    }
    static getSchema(){
        const schema = {
            course : ["title", "slug", "duration", "sourceCodeRepository", "description",'authorIds'],
            author : ["name","slug","biography", "shortBiography","courseIds"],
            exerciseFile : ["courseId","name","url","size"],
            section : ["courseId","slug","title"],
            toc : ["sectionId","title","slug","url","duration","captionUrl","captionFmt","streamLocationIds"],
            streamLocation : ["tocId","fmt","url"],
            downloadConfig : ["courseId","fmtList","selectedFmtList"],
            downloads : ["tocId","courseId","downloadId","filename","url","status","exclude"],
            downloadState : ["courseId","state","total","success","fails","lastTocId"],
            app: ["version","state","lastCourseSlug","nav","freshInstall"]
        };
        return schema;
    }
    
    
    
    
    
    
    
   
    
    
    
    

   
    
    
    
    
    
    
    
    
   

    
    
    
    // downloads : ["tocId","courseId","downloadId","filename","progress","status"],
    // downloadState : ["courseId","state","total","success","fails","currentdownloadId"],
    // downloads : ["tocId","courseId","downloadId","filename","url","status"]
   
}

export default Store;