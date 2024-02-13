const idb_get = async(storeName, key, connection) => {
    const get_transaction = connection.transaction(storeName, "readonly")
    const objectStore = get_transaction.objectStore(storeName)

    return new Promise((resolve, reject) => {
        get_transaction.oncomplete = function () {
        // console.log("ALL GET TRANSACTIONS COMPLETE.")
        }

        get_transaction.onerror = function () {
        // console.log("PROBLEM GETTING RECORDS.")
        }

        let request = objectStore.get(key)

        request.onsuccess = function (event) {
        resolve(event.target.result)
        }
    })
}
  
const idb_insert = async(storeName, records, connection) => {

    const insert_transaction = connection.transaction(storeName, "readwrite")
    const objectStore = insert_transaction.objectStore(storeName)

    return new Promise((resolve, reject) => {
        insert_transaction.oncomplete = function () {
            // console.log("ALL INSERT TRANSACTIONS COMPLETE.")
            resolve(true)
        }

        insert_transaction.onerror = function () {
            // console.log("PROBLEM INSERTING RECORDS.")
            resolve(false)
        }
        if(Array.isArray(records)){
        records.forEach(item => {
            let request = objectStore.add(item)

            request.onsuccess = function () {
                // console.log("Added: ", item)
            }
        })
        }else{
        const item = records
        let request = objectStore.add(item)

            request.onsuccess = function () {
                // console.log("Added: ", item)
            }
        }
        
    })
}

const idb_update = async(storeName, record, connection) => {
    const put_transaction = connection.transaction(storeName, "readwrite")
    const objectStore = put_transaction.objectStore(storeName)

    return new Promise((resolve, reject) => {
        put_transaction.oncomplete = function () {
            // console.log("ALL PUT TRANSACTIONS COMPLETE.")
            resolve(true)
        }

        put_transaction.onerror = function () {
            // console.log("PROBLEM UPDATING RECORDS.")
            reject(false)
        }

        objectStore.put(record)
    })
}

const idb_delete = async(storeName, key, clear, connection) => {
    const delete_transaction = connection.transaction(storeName, "readwrite")
    const objectStore = delete_transaction.objectStore(storeName)

    return new Promise((resolve, reject) => {
        delete_transaction.oncomplete = function () {
            // console.log("ALL DELETE TRANSACTIONS COMPLETE.")
            resolve(true)
        }

        delete_transaction.onerror = function () {
            // console.log("PROBLEM DELETE RECORDS.")
            resolve(false)
        }

        if(!clear){
        objectStore.delete(key)
        }else{
        objectStore.clear()
        }
    })
}

const idb_connect = async(schema = 'main') => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(schema)

        request.onerror = (e)=>{
            reject(e)
        }

        request.onsuccess = (e)=>{
            resolve(e.target.result)
        }
    })
}

/***
 * storeDefs : example [{name:'prxCache',key:'key'}]
 * storeDefs : example {name:'prxCache',key:'key'}
*/
const idb_create_store = async(storeDefs, schema='main') => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(schema)
        request.onupgradeneeded = function (event) {
            const conn = event.target.result

            if(Array.isArray(storeDefs)){
                storeDefs.map((item,index) => {
                    const {name,keyPath} = item
                    const objectStore = conn.createObjectStore(name, {keyPath})
                    objectStore.transaction.oncomplete = e =>{
                        console.log(`object store ${name} : created`)
                        if(index === storeDefs.length-1){
                            resolve(conn)
                        }
                    }
                })
            }else{
                const {name,keyPath} = storeDefs
                const objectStore = conn.createObjectStore(name, {keyPath})
                objectStore.transaction.oncomplete = e =>{
                    console.log(`object store ${name} : created`)
                    resolve(conn)
                }
            }    
        }

        request.onerror = (e)=>{
            reject(e)
        }

        request.onsuccess = (e)=>{
            resolve(e.target.result)
        }
    })
}

const idb_close = connection => connection.close()

export {
    idb_connect,
    idb_get,
    idb_insert,
    idb_update,
    idb_delete,
    idb_close,
    idb_create_store
}