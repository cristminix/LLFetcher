import { DS } from "../data-source/index.js"

const LOG = {
    info(a){
        console.log(a)
    },
    error(a){
        console.error(a)
    }
}
const datasource = new DS(LOG)


const doTest = async(ds)=>{
    let results = null
    const messageObj={
        output:null,
        cmd:'',
        data :{
            page:1,limit:5,order_by:'id',order_dir:'asc'
        }
    }
    try{    
        const {page,limit,order_by,order_dir} = messageObj.data
        const mYtUpload = ds.factory('MYtUpload', true)
        // results = await mYtUpload.getList(page,limit,order_by,order_dir)
        results = await mYtUpload.getByPk(12)
        // messageObj.output = results
        // output = messageObj
    }catch(e){
        results = e.toString()
    }

    console.log(results)
}


let connection = datasource.initialize()
if(connection){
    connection.then(f=>{
        LOG.info('Database connected')
        doTest(datasource)
    }).catch(e=>{
        LOG.error('Database not connected')
    })
}else{
    LOG.error('Failed to initialize sqlite database')
}