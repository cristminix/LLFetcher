import DB from "./DB"

class DownloadConfig extends DB {
	table = 'downloadConfig'
	fields = ["courseId","fmtList","selectedFmtList"]
	type = "single"

/*
static getDownloadConfig(courseId:number):DownloadConfig_tableField{
        const db = Store.db();
        const results = db.queryAll('downloadConfig',{query: {courseId}});
        if(results.length>0){
            return results[0] as DownloadConfig_tableField
        }
        return null;
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
*/	
}

export default DownloadConfig