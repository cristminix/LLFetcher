
import {EntitySchema} from "typeorm"  
import YtUpload from "../models/YtUpload.js"      

const YtUploadSchema = new EntitySchema({
    name: "YtUpload",
    target: YtUpload,
    columns: {
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
		category : {
            type : "varchar", 
			nullable : true, 

        },
		tags : {
            type : "varchar", 
			nullable : true, 

        },
		thumbnail : {
            type : "varchar", 
			nullable : true, 

        },
		video : {
            type : "varchar", 
			nullable : true, 

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



export default YtUploadSchema
    