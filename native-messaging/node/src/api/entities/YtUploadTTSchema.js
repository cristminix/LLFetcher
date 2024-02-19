
import {EntitySchema} from "typeorm"  
import YtUploadTT from "../models/YtUploadTT.js"      

const YtUploadTTSchema = new EntitySchema({
    name: "YtUploadTT",
    target: YtUploadTT,
    columns: {
        uploadId : {
            type : "int", 

        },
		id : {
            type : "int", 
			primary : true, 
			generated : true, 

        },
		title : {
            type : "varchar", 
			length : 225, 

        },
		description : {
            type : "varchar", 
			length : 400, 

        },
		thumbnail : {
            type : "varchar", 

        },
    } ,
    // relations: {
    //     YtUpload: {
    //       target: 'YtUpload',
    //       type: 'many-to-one',
    //     //   joinColumn: true,
    //     },
    //   },
    
})



export default YtUploadTTSchema
    