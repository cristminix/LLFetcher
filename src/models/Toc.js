import DB from "./DB"

class Toc extends DB {
	table = 'toc'
	fields = ["sectionId","title","slug","url","duration","captionUrl","captionFmt","streamLocationIds","itemStar","vStatusUrn"]


    getListBySectionId(sectionId){
        return this.query({query: {sectionId}})
    }
    getBySlug(slug,sectionId){
        return this.singleQuery({query: {slug,sectionId}})
    }
    get(id){
        return this.singleQuery({query: {id}})
    }
    getByItemStar(itemStar){
        return this.singleQuery({query: {itemStar}})

    }
    async update(id, tocUrl, captionUrl, captionFmt, streamlocIds){
        const toc = this.get(id)
        if(toc){
            this.db.update(this.table, {id}, row => {
                row.captionUrl = captionUrl
                row.captionFmt = captionFmt
                row.streamLocationIds = streamlocIds
                row.url = tocUrl
                return row
            })
            toc.streamLocationIds = streamlocIds
            await this.db.commit()
        }else{
            console.warn(`${this.constructor.name}.update() row is not exists`)
        }
        return toc
    }

    async create(title, slug, url, duration, captionUrl, captionFmt, sectionId,itemStar,vStatusUrn){
        let toc = this.getBySlug(slug,sectionId)

        if(!toc){
            const id = 0
            const streamLocationIds = []
            toc = {id,sectionId,title,slug,url,duration,captionUrl,captionFmt,streamLocationIds,itemStar,vStatusUrn}
            toc.id = this.db.insert('toc',toc)
            await this.db.commit()

        }else{
            console.error(`${this.constructor.name}.create() toc row exists`)
        }

        return toc
    }    
}

export default Toc