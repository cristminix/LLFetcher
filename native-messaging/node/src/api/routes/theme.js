import express from "express"
import fs from "fs"
import path from "path"

async function getFileList(dir){
    return new Promise((resolve,reject)=>{
        fs.readdir(dir, (err, files) => {
            if (err) {
                reject(err)
                return
            }
            
            // Log the list of files
            // console.log('Files in directory:', files)
            resolve(files)
        })
    })
}
class ThemeRouter {
    datasource = null
    mUser = null
    router = null
    constructor(datasource){
        this.datasource = datasource
        this.router = express.Router()
        this.initRouter()
    }
    getRouter(){
        return this.router
    }
    async getDraft(req, res){
        const cwd = process.cwd()
        const {themeName} = req.params
        const themePath = `${cwd}/src/cms/themes/${themeName}`
        const draftPath=`${themePath}/templates/draft/html`
        const {dir,file} = req.query
        let errors
        let files = []
        let content = ""

        if(dir && file){
            try{
                content = await fs.readFileSync(`${draftPath}/${dir}/${file}`)
                content = content.toString()
            }catch(e){
                errors = e
            }
        }
        else if(dir){
            try{
                files = await getFileList(`${draftPath}/${dir}`)

            }catch(e){
                errors = e
            }
        }
        const results = {
            themeName, 
            themePath, 
            draftPath,
            dir,file,
            files,
            errors,
            content
        }
        res.send(results)
    }
    initRouter(){
        this.router.get('/theme/drafts/:themeName?', async (req, res) => await this.getDraft(req, res))
    }
}

export default ThemeRouter