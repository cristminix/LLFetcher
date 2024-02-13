import { idb_insert,idb_get, idb_update, idb_delete, idb_close, idb_connect } from "./fn"

class UserData {
    storeName = "userdata"
    conn = null
    static instance = null

    static getInstance(){
        if(!UserData.instance){
            UserData.instance = new UserData()
        }
        return UserData.instance
    }
    constructor(){
        this.connect()
    }
    async connect(){
        if(!this.conn){
            this.conn = await idb_connect()
        }
    }
    async disconnect(){
        await idb_close(this.conn)
    }
    async insert(records){
        
        return await idb_insert("userdata", records, this.conn)
    }
    async get(key){
        return await idb_get("userdata", key, this.conn)
    }

    async update(record){
        return await idb_update("userdata", record, this.conn)
    }

    async delete(key, clear = false){
        return await idb_delete("userdata", key, clear, conn)
    }
}

export default UserData