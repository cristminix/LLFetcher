import DB from "./DB"

class Toc extends DB {
	table = 'toc'
	fields = ["sectionId","title","slug","url","duration","captionUrl","captionFmt","streamLocationIds"]


    getListBySectionId(sectionId){
        return this.query({query: {sectionId}})
    }
    getBySlug(slug,sectionId){
        return this.singleQuery({query: {slug,sectionId}})
    }

    async updateCaption( captionUrl, captionFmt, slug, sectionId){
        const toc = this.getBySlug(slug,sectionId)
        if(toc){
            this.db.update(this.table, {slug, sectionId}, row => {
                row.captionUrl = captionUrl
                row.captionFmt = captionFmt
                return row
            })
            await this.db.commit()
        }else{
            console.warn(`${this.constructor.name}.updateCaption() toc is not exists`)
        }
    }

    async create(title, slug, url, duration, captionUrl, captionFmt, sectionId){
        let toc = this.getBySlug(slug,sectionId)

        if(!toc){
            const id = 0
            const streamLocationIds = []
            toc = {id,sectionId,title,slug,url,duration,captionUrl,captionFmt,streamLocationIds}
            toc.id = this.db.insert('toc',toc)
            await this.db.commit()

        }else{
            console.error(`${this.constructor.name}.create() toc row exists`)
        }

        return toc
    }    
}

export default Toc