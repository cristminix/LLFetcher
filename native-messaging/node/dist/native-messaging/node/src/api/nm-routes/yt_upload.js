import YtUploadRouter from "../routes/yt-upload.js"

const middleware = (msgObj, datasource)=>{
    // return new Promise((resolve, reject)=>{
        // const router = new YtUploadRouter(datasource, true)
        switch(msgObj.cmd){
            case 'api.cms.yt_upload.list':
            break

            case 'api.cms.yt_upload.create':
            break

            case 'api.cms.yt_upload.update':
            break

            case 'api.cms.yt_upload.delete':
            break
        }

        // resolve(msgObj.cmd)
    // })
    return msgObj.cmd
    
}

export {middleware}