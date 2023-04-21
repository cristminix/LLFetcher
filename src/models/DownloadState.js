import DB from "./DB"

class DownloadState extends DB {
	table = 'downloadState'
	fields = ["courseId","state","total","success","fails","lastTocId"]
	type = "single"


    async get(courseId){
        let downloadState = this.singleQuery({query:{courseId}})
        if(!downloadState){
            const id = 0
            const state = 0
            downloadState = {id, courseId, state}
            downloadState.id = this.db.insert(this.table,downloadState)
            await this.db.commit()
        }
        
        return downloadState
    }
    async set(courseId,state_) {
        let downloadState = this.singleQuery({query:{courseId}})
        if(downloadState){
            this.db.update(this.table,{courseId},(row)=>{
                row.state = state_
                return row
            })
            downloadState.state = state_
        }else{
            const id = 0
            const state=state_
            downloadState ={id,courseId,state}
            downloadState.it = db.insert(this.table,downloadState)
        }
        await this.db.commit()
        
        return downloadState
    }
}

export default DownloadState