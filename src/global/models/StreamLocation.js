import DB from "./DB"

class StreamLocation extends DB {
	table = 'streamLocation'
	fields = ["tocId","fmt","url","expiresAt"]

    async deleteByTocId(tocId){
        await this.deleteRows({query:{tocId}})
    }
    getByTocId(tocId,fmt){
        return this.singleQuery({query: {tocId,fmt}})
        
    }
    getListByTocId(tocId){
        return this.query({query: {tocId}})
    }
    async create(fmt, url, tocId,expiresAt=null){
        
        let streamloc = this.getByTocId(tocId,fmt)
        if(streamloc){
            streamloc.url = url
            this.db.update(this.table,(row)=>{
                row.url = url
                return row
            })
        }else{
            const id = 0
            streamloc = {id,tocId,fmt,url,expiresAt}
            streamloc.id = this.db.insert(this.table,streamloc)
        }
        await this.db.commit()

        return streamloc
    }

}

export default StreamLocation