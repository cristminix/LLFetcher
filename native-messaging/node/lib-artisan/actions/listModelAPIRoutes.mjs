import {jsonParseFile, camelToDashCase} from "./lib.js"
const listModelAPIRoutes = async (json_path) => {
    let configs = await jsonParseFile(json_path, null)
 
    
    for(let table_name in configs.schema){
        const config = configs.schema[table_name]
        const instanceName = camelToDashCase(config.model)
        const routeList = [
            `GET /${instanceName}s?page=<PAGE_NUMBER>&limit=<MAX_ROW>&order_by=<FIELD>&order_dir=<FIELD>`,
            `GET /${instanceName}/:id`,
            `POST /${instanceName}/create`,
            `POST /${instanceName}/update/:id?`,
            `POST /${instanceName}/delete/:id?`,
        ]
        console.log(`-------------${config.model}--------------------`)
        console.log(routeList.join("\n"))
    }
    
    // await createRouteFile(config, table_name, target_dir)
}
listModelAPIRoutes.HELP = `listModelAPIRoutes [model-entities.json]`
export default listModelAPIRoutes