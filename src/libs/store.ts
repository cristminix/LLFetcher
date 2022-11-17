import Proxy  from "./proxy";
class Store{
    static getCourseJson(callback:any){
        Proxy.get('/chrome_extension/data/course.json',(r)=>{
            // console.log(r);
            if('function' === typeof callback){
                callback(r);
            }
        })
    }
}

export default Store;