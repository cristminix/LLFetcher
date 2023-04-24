import DB from "./DB"

class Download extends DB {
	table = 'download'
	fields = ["tocId","courseId","downloadId","filename","url","status","exclude","opt"]

    getByTocCourse(tocId,courseId){
        return this.singleQuery({query:{tocId,courseId}})
    }
    getListByCourseId(courseId){
        return this.query({query:{courseId}})
    }
    getById(id){
        return this.singleQuery({query:{id}})
    }
    getByTocFname(tocId, filename){
        return this.singleQuery({query:{tocId,filename}})    
    }
    async create(url,filename,tocId,opt,courseId){
        let download = this.getByTocFname(tocId,filename)
        if(!download){
            const id = 0
            const downloadId = 0
            const status = false
            download = {id,tocId,courseId,downloadId,filename,url,status,opt}
            download.id = this.db.insert(this.table, download)
            await this.db.commit()
        }
        
        return download
    }
    async update(id,row_){
        let download = this.getById(id)
        if(download){
            this.db.update(this.table,{id},(row)=>{
                for(let k in row_){
                    row[k] = row_[k]
                    download[k] = row_[k]
                }
                return row
            })
            await this.db.commit()
        }
        
        return download
    }
    async clear(courseId){
        this.db.deleteRows(this.table,{courseId})
        await this.db.commit()

    }
}

export default Download