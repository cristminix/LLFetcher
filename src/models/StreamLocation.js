import DB from "./DB"

class StreamLocation extends DB {
	table = 'streamLocation'
	fields = ["tocId","fmt","url"]
/*
 static getStreamLocation(tocId:number,fmt:string):StreamLocation_tableField{
        const db = Store.db();
        const results = db.queryAll('streamLocation',{query: {tocId,fmt}});
        if(results.length>0){
            return results[0] as StreamLocation_tableField;
        }
        return null;
        
    }
    static getStreamLocations(tocId:number):StreamLocation_tableField[]{
        const db = Store.db();
        const results = db.queryAll('streamLocation',{query: {tocId}});
        return results as StreamLocation_tableField[];
    }
    static createStreamLocation(tocId:number,fmt:string,url:string):StreamLocation_tableField{
        const db = Store.db();
        let streamLocation = Store.getStreamLocation(tocId,fmt);
        if(streamLocation){
            streamLocation.url = url;
            db.update('streamLocation',(row)=>{
                row.url = url;
                return row;
            });
        }else{
            const ID = 0;
            streamLocation = {ID,tocId,fmt,url};
            streamLocation.ID = db.insert('streamLocation',streamLocation);
        }
        setTimeout(()=>db.commit(),100);

        return streamLocation;
    }
static createStreamLocationList(slug:string,sectionId:number,streamLocations:StreamLocation[],courseId?:number):StreamLocation_tableField[]{
        const db = Store.db();
        const toc = Store.getToc(slug,sectionId);
        const streamLocationResults : StreamLocation_tableField[] = [];
        const fmtList : string[]=[];
        if(toc){
            const streamLocationIds = toc.streamLocationIds;
            streamLocations.map((streamLocation)=>{
                // console.log(streamLocation);
                if(!fmtList.includes(streamLocation.fmt)){
                    fmtList.push(streamLocation.fmt);
                }
                const streamLoc = Store.createStreamLocation(toc.ID,streamLocation.fmt,streamLocation.url);
                if(!streamLocationIds.includes(streamLoc.ID)){
                    streamLocationIds.push(streamLoc.ID);
                }
                streamLocationResults.push(streamLoc);
            });

            db.update('toc',{slug},(row)=>{
               row.streamLocationIds = streamLocationIds;
               return row;
            });

            db.commit();
            if(courseId){
                Store.updateDownloadConfig('fmtList',fmtList,courseId);
            }
            
        }
        return streamLocationResults;
    }
*/	
}

export default StreamLocation