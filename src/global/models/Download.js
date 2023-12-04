import DB from "./DB"

class Download extends DB {
	table = 'download'
	fields = ["tocId","courseId","downloadId","filename","url","status","exclude","opt","fmt"]

    getByTocCourse(tocId,courseId){
        return this.singleQuery({query:{tocId,courseId}})
    }
    getListByCourseId(courseId, fmt=''){
        if(fmt.length>0){
            return this.query({query:{courseId,fmt}})
        }
        return this.query({query:{courseId}})
    }
    getList(){
        const results =  this.db.queryAll(this.table);
        return results
    }
    getById(id){
        return this.singleQuery({query:{id}})
    }
    getByTocFname(tocId, filename,courseId){
        return this.singleQuery({query:{tocId,filename,courseId}})    
    }
    async create(url,filename,tocId,opt,fmt,courseId){
        let download = this.getByTocFname(tocId,filename)
        if(!download){
            const id = 0
            const downloadId = 0
            const status = false
            download = {id,tocId,courseId,downloadId,filename,url,status,opt,fmt}
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