
import {EntitySchema} from "typeorm"  
import User from "../models/User.js"      

const UserSchema = new EntitySchema({
    name: "User",
    target: User,
    columns: {
        id : {
            type : "int", 
			primary : true, 
			generated : true, 

        },
		username : {
            type : "varchar", 
			length : 25, 

        },
		passwd : {
            type : "varchar", 
			length : 25, 
			nullable : true, 

        },
		email : {
            type : "varchar", 
			length : 25, 

        },
		firstName : {
            type : "varchar", 
			length : 25, 

        },
		lastName : {
            type : "varchar", 
			length : 25, 
			nullable : true, 

        },
		displayName : {
            type : "varchar", 
			length : 25, 
			nullable : true, 

        },
		avatarUrl : {
            type : "varchar", 
			length : 25, 
			nullable : true, 

        },
		groupId : {
            type : "int", 
			nullable : true, 

        },
		createdBy : {
            type : "int", 
			nullable : true, 

        },
		createDate : {
            type : "datetime", 
			nullable : true, 

        },
		lastUpdated : {
            type : "datetime", 
			nullable : true, 

        },
    } 
       
    
})



export default UserSchema
    