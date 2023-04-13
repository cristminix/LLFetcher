import DB from "./DB"

class Toc extends DB {
	table = 'toc'
	fields = ["sectionId","title","slug","url","duration","captionUrl","captionFmt","streamLocationIds"]

/*
 static getTocsBySectionId(sectionId:number):Toc_tableField[]{
        const db = Store.db();
        const results = db.queryAll('toc',{query: {sectionId}});
        return results as Toc_tableField[];
    }
    static getToc(slug:string,sectionId:number):Toc_tableField{
        const db = Store.db();
        const results = db.queryAll('toc',{query: {slug,sectionId}});
        if(results.length>0){
            return results[0] as Toc_tableField
        }
        return null;
    }

static updateTocCaption(slug:string,captionUrl:string,captionFmt:string,sectionId:number){
        const db = Store.db();
        const toc = Store.getToc(slug,sectionId);
        if(toc){
            db.update("toc", {slug}, function(newToc) {
                newToc.captionUrl = captionUrl;
                newToc.captionFmt = captionFmt;
                return newToc;
            });
            db.commit();
        }
    }

static createToc(sectionId:number,title:string,slug:string,url:string,duration:number, captionUrl?:string, captionFmt?:string):Toc_tableField{
        const db = Store.db();
        let toc = Store.getToc(slug,sectionId);

        if(!toc){
            const ID = 0;
            const streamLocationIds = [];
            toc = {ID,sectionId,title,slug,url,duration,captionUrl,captionFmt,streamLocationIds};
            toc.ID = db.insert('toc',toc);
            db.commit();

        }

        return toc;
    }    
*/
}

export default Toc