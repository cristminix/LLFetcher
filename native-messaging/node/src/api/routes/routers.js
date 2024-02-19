
import routerConfig from "./config.json" assert { type: "json" }

 
class DynamicRouter{
    routers = {} 
    availables = null
    constructor(availables){
        this.availables = availables
    }
    async attach(app, datasource,appConfig,logger){
        for(let ctl in this.availables){
            const item = this.availables[ctl]
            const entityModulePath = `./${ctl}.js`
            try{
                const moduleImport = await import(/* @vite-ignore */  entityModulePath)
    
                this.routers[ctl] = new moduleImport.default(datasource,appConfig,logger)
                app.use('/api/cms',this.routers[ctl].getRouter())
            }catch(e){
                console.error(e)
            }
            
        }
    }
}
const routers = new DynamicRouter(routerConfig.availables)

export default routers