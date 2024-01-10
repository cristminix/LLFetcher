
const getTableCount = async (db_, dbName)=>{
    return new Promise((resolve,reject) => {
      if (db_ == null) {
        return reject()
      }
      var size = 0
      // db_ = event.target.result
      var transaction = db_.transaction([dbName])
        .objectStore(dbName)
        .openCursor()
  
      transaction.onsuccess = function(event){
          var cursor = event.target.result
          if(cursor){
              var storedObject = cursor.value
              // var json = JSON.stringify(storedObject)
              size += 1 //json.length
              cursor.continue()
          }
          else{
            resolve(size)
          }
      }.bind(this)
      transaction.onerror = function(err){
          reject("error in " + dbName + ": " + err)
      }
    })
  }
  const getTableSize = async (db_, dbName)=>{
    return new Promise((resolve,reject) => {
      if (db_ == null) {
        return reject()
      }
      var size = 0
      // db_ = event.target.result
      var transaction = db_.transaction([dbName])
        .objectStore(dbName)
        .openCursor()
  
      transaction.onsuccess = function(event){
          var cursor = event.target.result
          if(cursor){
              var storedObject = cursor.value
              var json = JSON.stringify(storedObject)
              size += json.length
              cursor.continue()
          }
          else{
            resolve(size)
          }
      }.bind(this)
      transaction.onerror = function(err){
          reject("error in " + dbName + ": " + err)
      }
    })
  }
  
  const getDatabaseSize = function (dbName) {
    const request = indexedDB.open(dbName)
    let db_
    let dbSize = 0
    request.onerror = function(event) {
      alert("Why didn't you allow my web app to use IndexedDB?!")
    }
    request.onsuccess = function(event) {
      db_ = event.target.result
      let tableNames = [ ...db_.objectStoreNames ]
      (function(tableNames, db_) {
        let tableSizeGetters = tableNames
          .reduce( (acc, tableName) => {
            acc.push( getTableSize(db_, tableName) )
            return acc
          }, [])
  
        Promise.all(tableSizeGetters)
          .then(sizes => {
            console.log('--------- ' + db_.name + ' -------------')
            tableNames.forEach( (tableName,i) => {
              console.log(" - " + tableName + "\t: " + humanReadableSize(sizes[i]))
            })
            var total = sizes.reduce(function(acc, val) {
              return acc + val
            }, 0)
  
            // console.log("TOTAL: " + total)
          })
        })(tableNames, db_)
    }
  }
class ChromeStorageIndexedDBWorker{
    createDb(dbName){
        console.log(`ChromeStorageIndexedDBWorker.createDb(${tableName})`)
    }
    createTable(tableName, options){
        console.log(`ChromeStorageIndexedDBWorker.createTable(${tableName})`, options)

    }
    start(){
        console.log(`ChromeStorageIndexedDBWorker listener started`)
        chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{
            console.log(`csidb:request:`,request)
            const {name,data,key} = request   
            if(name === 'csidb.create.db'){
            }
            else if(name === 'csidb.create.table'){
              
            }
            else if(name === 'csidb.size'){
                
            }
            else if(name === 'csidb.get'){

            }
            else if(name === 'csidb.update'){
              
            }
            else if(name === 'csidb.insert'){
              
            }
            
            return true
          })
    }
    insertTable(tableName, record){
        console.log(`ChromeStorageIndexedDBWorker.insertTable(${tableName})`, record)
    }
    updateTable(tableName, record){
        console.log(`ChromeStorageIndexedDBWorker.updateTable(${tableName})`, record)

    }
    getTable(tableName){
        console.log(`ChromeStorageIndexedDBWorker.getTable(${tableName})`)

    }
}

export default ChromeStorageIndexedDBWorker

export {
    getDatabaseSize,
    getTableSize,
    getTableCount
}