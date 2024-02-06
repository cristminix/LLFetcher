
import {EntitySchema} from "typeorm"  
import YtUploadData from "../models/YtUploadData.js"      

const YtUploadDataSchema = new EntitySchema({
    name: "YtUploadData",
    target: YtUploadData,
    columns: {
        id : {
            type : "int", 
			primary : true, 
			generated : true, 

        },
		uploadId : {
            type : "int", 

        },
		kind : {
            type : "varchar", 

        },
		content : {
            type : "varchar", 

        },
		createDate : {
            type : "datetime", 
			nullable : true, 

        },
		owner : {
            type : "int", 
			nullable : true, 

        },
    } 
       
    
})



export default YtUploadDataSchema
    