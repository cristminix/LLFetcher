import DB from "./DB"

class App extends DB {
	table = 'app'
	fields = ["version","state","lastCourseSlug","nav","freshInstall"]
	type = 'single'

	

/*
 static initApp(courseSlug:string,fn?:Function):App_tableField{
        const db = Store.db();
        const version = '1.0';
     
        const apps = db.queryAll('app',{query:{version}});
        let app = null;
        if(apps.length === 0){
            const state = 0;
            const ID = 0;
            const lastCourseSlug = courseSlug;
            const nav = 'welcome';
            app = {ID,state,version,lastCourseSlug,nav};
            app.ID = db.insert('app',app);
            db.commit();
            
            
        }else{
            app = apps[0];
            if(app.lastCourseSlug !== courseSlug && courseSlug !==''){
                app.lastCourseSlug = courseSlug;
                db.update('app',{version},(row)=>{
                    row.lastCourseSlug = courseSlug;
                    return row;
                });
                db.commit();
            } 
        }
        if(typeof fn == 'function'){
            fn(app);
        }
        return app;
    }
static getAppState():App_tableField{
        const db = Store.db();
        const version = '1.0';
        const apps = db.queryAll('app',{query:{version}});
        let app = null;
        if(apps.length > 0){
            app = apps[0];
            
        }
        return app;
    }
    static setAppState(state : number,courseSlug?:string){
        const db = Store.db();
        const version = '1.0';
        const apps = db.queryAll('app',{query:{version}} );
        if(apps.length > 0){
            db.update('app',{version},(row)=>{
                row.state = state;
                if(typeof courseSlug !== 'undefined'){
                    row.lastCourseSlug = courseSlug;
                }
                return row;
            });
            db.commit();
        }
    }
    static setAppNav(nav : string){
        const db = Store.db();
        const version = '1.0';
        const apps = db.queryAll('app',{query:{version}});
        if(apps.length > 0){
            db.update('app',{version},(row)=>{
                row.nav = nav;
                return row;
            });
            db.commit();
        }
    }
    static getAppInfo():App_tableField{
        const db = Store.db();
        const version = '1.0';
        const apps = db.queryAll('app',{query:{version}});
        if(apps.length > 0){
            return apps[0] as App_tableField;
        }

        return null;
    }
*/	
}

export default App