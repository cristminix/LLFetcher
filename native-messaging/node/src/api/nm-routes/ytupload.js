
const controller = (cmd, data, ds, logger=null)=>{
    return new Promise((resolve, reject)=>{
        try{    
            if (cmd === 'api.cms.ytupload.list') {
                const {page,limit,order_by,order_dir} = data
                const mYtUpload = ds.factory('MYtUpload', true)
                mYtUpload.getList(page,limit,order_by,order_dir).then(results=>{
                    resolve(results)
                }).catch(e=>reject(e))
            } else if (cmd === 'api.cms.ytupload.get') {
                const {pk} = data
                const mYtUpload = ds.factory('MYtUpload', true)
                mYtUpload.getByPk(pk).then(record=>{
                    resolve(record)
                }).catch(e=>reject(e))
            } else if (cmd === 'api.cms.ytupload.create') {
                const {title,description,video,category,tags,thumbnail} = data
                const mYtUpload = ds.factory('MYtUpload', true)
                mYtUpload.create(title,description,video,category,tags,thumbnail)
                    .then(record=>resolve(record))
                    .catch(e=>reject(e))

            } else if (cmd === 'api.cms.ytupload.update') {
                const {pk, title, description,video,category,tags,thumbnail} = data
                let updatedData = {}
                if(title){
                    updatedData.title = title
                }
                if(description){
                    updatedData.description = description
                }
                if(video){
                    updatedData.video = title
                }
                if(category){
                    updatedData.category = category
                }
                if(tags){
                    updatedData.tags = tags
                }
                if(thumbnail){
                    updatedData.thumbnail = thumbnail
                }
                const mYtUpload = ds.factory('MYtUpload', true)
                
                mYtUpload.update(pk,updatedData).then(record=>{
                    resolve(record)
                }).catch(e=>reject(e))
            
            } else if (cmd === 'api.cms.ytupload.delete') {
                const {pk} = data
                const mYtUpload = ds.factory('MYtUpload', true)
                mYtUpload.delete(pk).then(record=>resolve(record)).catch(e=>reject(e))
            }   
        }catch(e){
            reject(e)
        }
    })
}
const prefix = 'api.cms.ytupload.'
export default {controller,prefix}