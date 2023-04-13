import DB from "./DB"

class DownloadState extends DB {
	table = 'downloadState'
	fields = ["courseId","state","total","success","fails","lastTocId"]
	type = "single"

/*
static getDownloadState(courseId: number): any {
        const db = Store.db();
        let downloadState = null;
        const downloadStates = db.queryAll('downloadState',{query:{courseId}});
        if(downloadStates.length > 0){
            downloadState = downloadStates[0];
        }else{
            const ID=0;
            const state=0;
            downloadState ={ID,courseId,state}
            downloadState.ID = db.insert('downloadState',downloadState);
            db.commit();
        }
        

        
        return downloadState;
    }
    static setDownloadState(courseId: number,state_:number): any {
        const db = Store.db();
        let downloadState = null;
        const downloadStates = db.queryAll('downloadState',{query:{courseId}} );
        if(downloadStates.length > 0){
            downloadState = downloadStates[0];
            db.update('downloadState',{courseId},(row)=>{
                row.state = state_;
                return row;
            });
            db.commit();
            downloadState.state = state_;
        }else{
            const ID=0;
            const state=state_;
            downloadState ={ID,courseId,state}
            downloadState.ID = db.insert('downloadState',downloadState);
            db.commit();
        }
        
        return downloadState;
    }
*/	
}

export default DownloadState