import DB from "./DB"

class Download extends DB {
	table = 'download'
	fields = ["tocId","courseId","downloadId","filename","url","status","exclude"]
/*
static getDownloads(tocId:number,courseId?:number){
        const db = Store.db();
        const downloads = db.queryAll('downloads',{query:{tocId,courseId}});
        return downloads;
    }
    static getDownloadById(ID:number){
        const db = Store.db();
        const downloads = db.queryAll('downloads',{query:{ID} });
        if( downloads.length > 0){
            return downloads[0];
        }
        return null;
    }
 static createDownload(url:string,filename:string,tocId:number,courseId:number){
        const db = Store.db();
        let download = Store.getDownload(tocId,filename);
        if(!download){
            const ID = 0;
            const downloadId = 0;
            const status = false;
            download = {ID,tocId,courseId,downloadId,filename,url,status};
            download.ID = db.insert('downloads', download);
            // db.commit();
        }
        
        return download;
    }
    static updateDownload(ID:number,row_:any){
        const db = Store.db();
        let download = Store.getDownloadById(ID);
        if(download){
            db.update('downloads',{ID},(row)=>{
                for(let k in row_){
                    row[k] = row_[k];
                    download[k] = row_[k];
                }
                return row;
            })
            // db.commit();
        }
        
        return download;
    }
    static getDownload(tocId:number,filename: string): any {
        const db = Store.db();
        let download = null;
        const downloads = db.queryAll('downloads',{query:{tocId,filename}} );
        if(downloads.length > 0){
            download = downloads[0];
        }
        return download;
    }
   
    static getDownloadByCourseId(courseId:number): any {
        const db = Store.db();
        const downloads = db.queryAll('downloads',{query:{courseId}});
       
        return downloads;
    }
*/
}

export default Download