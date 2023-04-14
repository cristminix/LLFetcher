import DB from "./DB"

class App extends DB {
	table = 'app'
	fields = ["version","state","lastCourseSlug","nav","freshInstall"]
	type = 'single'
    version = '2.0'
    defaultNav = 'welcome'
    rowExists = false
	
    get(){
        const version = this.version;
        const results = this.db.queryAll(this.table,{query:{version}});
        return this.singleResult(results)
    }

    async init(courseSlug = ''){
        
        let app = this.get()
        if(!app){
            const state = 0
            const id = 0
            const lastCourseSlug = courseSlug
            const nav = this.defaultNav
            app = {id,state,version:this.version,lastCourseSlug,nav}
            app.id = this.db.insert(this.table,app)
            await this.db.commit()
            this.rowExists = true
        }else{
            if(app.lastCourseSlug !== courseSlug){
                app.lastCourseSlug = courseSlug
                await this.update(row => {
                    row.lastCourseSlug = courseSlug
                    return row
                })
            } 
        }
        return app
    }

    async setState(state, courseSlug){
        await this.update( row =>{
            row.state = state
            if(courseSlug){
                row.lastCourseSlug = courseSlug
            }
            return row
        })
        
    }

    async setNav(nav){
        await this.update( row => {
            row.nav = nav
            return row
        })
    }

    async update(callback){
        if(!this.rowExists){
            console.error(`${this.constructor.name}.update() rowExists is false`)
            return
        }
        const version = this.version
        this.db.update(this.table,{version}, callback);
        await this.db.commit()
    }	
}

export default App