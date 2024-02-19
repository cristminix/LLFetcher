
import {EntitySchema} from "typeorm"  
import CmsSetting from "../models/CmsSetting.js"      

const CmsSettingSchema = new EntitySchema({
    name: "CmsSetting",
    target: CmsSetting,
    columns: {
        id : {
            type : "int", 
			primary : true, 
			generated : true, 

        },
		profileName : {
            type : "varchar", 
			length : 20, 

        },
		theme : {
            type : "varchar", 
			length : 100, 

        },
		setAsDefault : {
            type : "int", 
			nullable : true, 

        },
		createDate : {
            type : "datetime", 

        },
		lastUpdated : {
            type : "datetime", 

        },
    } 
       
    
})



export default CmsSettingSchema
    