import DB from "./DB"

class Transcript extends DB {
	table = 'transcript'
	fields = ["tocId", "lang", "country", "fmt","url","autoGenerated"]

    async deleteByTocId(tocId){
        await this.deleteRows({query:{tocId}})
    }

    getListByTocId(tocId){
        return this.query({query: {tocId}})
    }
    getListByTocIdAsObject(tocId){
        const results = this.getListByTocId(tocId)
        let transcripts = null
        if(results.length > 0){
            transcripts = {}
            for(const row of results){
                transcripts[row.lang] = row
            }
        }
        return transcripts
    }
    getByLang(lang, tocId){
        return this.singleQuery({query: {lang,tocId}})
    }
    get(id){
        return this.singleQuery({query: {id}})
    }
    async create(tocId, lang, country, fmt, url, autoGenerated){
        let row = this.getByLang(lang,tocId)
        if(!row){
            const id = 0
            row = {id,tocId,lang,country,fmt,url,autoGenerated}
            row.id = this.db.insert(this.table,row)
            await this.db.commit()
        }else{
            console.error(`${this.constructor.name}.create() toc row exists`)
        }
        
        return row
    }
}

export default Transcript