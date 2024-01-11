const dbOpen = (dbName, callbackUpgrade = null, callbackSuccess = null, callbackErr = null) => {
    const request = indexedDB.open(dbName, 1)  
    
    request.onerror = (event)=>{
        callbackErr && callbackErr(event)
    }
    request.onupgradeneeded = (event) => {  
        let dbResource = event.target.result  
        callbackUpgrade && callbackUpgrade(dbResource)  
    }
    request.onsuccess = function (event) {
        const dbResource = event.target.result
        callbackSuccess && callbackSuccess(dbResource)
    }
}
const dbOpenAsync = async(dbName, onUpgrade = f => f) => {
    return new Promise((resolve, reject)=>{
        dbOpen(dbName, dbResource => resolve(dbResource), dbResource => onUpgrade(dbResource), errorCode => reject(errorCode))
    })
}
const dbCreateStore = (dbResource, storeName, autoIncrement = true, keyPath = 'key', callbackSuccess = null, callbackErr = null) => {
    // create the Names object store and indexes  
    // create the Names object store  
    // with auto-increment id  
    let store = dbResource.createObjectStore(storeName, {  
        autoIncrement,
        keyPath  
    })

    store.transaction.oncomplete = function (event) {
        callbackSuccess && callbackSuccess(event)
        // console.log("ObjectStore Created.")
    }
    store.transaction.onerror = function (event) {
        callbackErr && callbackErr(event)
        // console.log("ObjectStore Created.")
    }
}
const dbCreateStoreAsync = async(dbResource, storeName, autoIncrement, keyPath) => {
    return new Promise((resolve, reject)=>{
        dbCreateStore(dbResource, storeName, autoIncrement, keyPath, e => resolve(e), e => reject(e))
    })
}

const dbGetStoreTxn = (dbResource, storeName, readOnly = true)=>{
    let txn = readOnly ? dbResource.transaction(storeName, 'readonly') : dbResource.transaction(storeName)  
    const store = txn.objectStore(storeName)

    return [store,txn]
}
const dbDeleteByKey = (dbResource, storeName, key, callbackSuccess = null, callbackErr = null, callbackComplete = null) =>{  
    const [store, txn] = dbGetStoreTxn(dbResource, storeName) 
    let query = store.delete(key)

    query.onsuccess = (event) => {
        const result = event.target.result  
        callbackSuccess && callbackSuccess(result)
    }  
    
    query.onerror = (event) => {  
        const errorCode = event.target.errorCode
        callbackErr && callbackErr(event)
    }
    
    txn.oncomplete = function () {  
        callbackComplete && callbackComplete()
    }  
}

const dbDeleteByKeyAsync = async(dbResource, storeName, key)=>{
    return new Promise((resolve, reject)=>{
        dbDeleteByKey(dbResource, storeName, key, e => resolve(e), e => reject(e))
    })
}
const dbTruncate = (dbResource, storeName, callbackSuccess = null, callbackErr = null, callbackComplete = null) =>{  
    const [store, txn] = dbGetStoreTxn(dbResource, storeName) 
    let query = store.clear()

    query.onsuccess = (event) => {
        const result = event.target.result  
        callbackSuccess && callbackSuccess(result)
    }  
    
    query.onerror = (event) => {  
        const errorCode = event.target.errorCode
        callbackErr && callbackErr(event)
    }
    
    txn.oncomplete = function () {  
        callbackComplete && callbackComplete()
    }   
}

const dbTruncateAsync = async(dbResource, storeName)=>{
    return new Promise((resolve, reject)=>{
        dbTruncate(dbResource, storeName, e => resolve(e), e => reject(e))
    })
}

const dbGet = (dbResource, storeName, key, callbackSuccess, callbackErr = null, callbackComplete = null) => {
    const [store, txn] = dbGetStoreTxn(dbResource, storeName)

    let query = store.get(key)

    query.onsuccess = (event) => {
        const result = event.target.result  
        callbackSuccess && callbackSuccess(result)
    }  
    
    query.onerror = (event) => {  
        const errorCode = event.target.errorCode
        callbackErr && callbackErr(event)
    }
    
    txn.oncomplete = function () {  
        callbackComplete && callbackComplete()
    }
}

const dbGetAsync = async(dbResource, storeName, key)=>{
    return new Promise((resolve, reject)=>{
        dbGet(dbResource, storeName, key, e => resolve(e), e => reject(e))
    })
}

const dbKeyExists = async(dbResource, storeName, key) => {
    // return dbGetAsync(dbResource, storeName, key) 
}

export{
    dbOpen, dbOpenAsync,
    dbCreateStore, dbCreateStoreAsync,
    dbDeleteByKey, dbDeleteByKeyAsync,
    dbTruncate, dbTruncateAsync,
    dbGet,dbGetAsync
}