
const controller = (cmd, data, ds, logger=null)=>{
    return new Promise((resolve, reject)=>{
        try{    
            if (cmd === 'api.cms.users') {
                const {page,limit,order_by,order_dir} = data
                const mUser = ds.factory('MUser', true)
                mUser.getList(page,limit,order_by,order_dir).then(results=>{
                    resolve(results)
                })
            } 
        }catch(e){
            reject(e)
        }
    })
}
const prefix = 'api.cms.user'
export default {controller, prefix}