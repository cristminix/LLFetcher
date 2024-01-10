// background.js
let db = null
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

async function create_prxCacheDb() {
    const request = indexedDB.open('main')

    request.onerror = function (event) {
        // console.log("Problem opening DB.")
    }

    request.onupgradeneeded = function (event) {
        db = event.target.result

        let objectStore = db.createObjectStore('prxCache', {
            keyPath: 'key'
        })

        objectStore.transaction.oncomplete = function (event) {
            // console.log("ObjectStore Created.")
        }
    }

    request.onsuccess = function (event) {
        db = event.target.result
        // console.log("DB OPENED.")
        // insert_records(roster)
        // insert_prxCache([{key:'nana'}])

        db.onerror = function (event) {
            // console.log("FAILED TO OPEN DB.")
        }
    }
}
// background.js
async function insert_prxCache(records) {
  if (db) {
      const insert_transaction = db.transaction("prxCache", "readwrite")
      const objectStore = insert_transaction.objectStore("prxCache")

      return new Promise((resolve, reject) => {
          insert_transaction.oncomplete = function () {
              // console.log("ALL INSERT TRANSACTIONS COMPLETE.")
              resolve(true)
          }

          insert_transaction.onerror = function () {
              // console.log("PROBLEM INSERTING RECORDS.")
              resolve(false)
          }

          records.forEach(item => {
              let request = objectStore.add(item)

              request.onsuccess = function () {
                  // console.log("Added: ", item)
              }
          })
      })
  }
}
// background.js
async function get_prxCache(key) {
  if (db) {
      const get_transaction = db.transaction("prxCache", "readonly")
      const objectStore = get_transaction.objectStore("prxCache")

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
}

async function update_prxCache(record) {
  if (db) {
      const put_transaction = db.transaction("prxCache", "readwrite")
      const objectStore = put_transaction.objectStore("prxCache")

      return new Promise((resolve, reject) => {
          put_transaction.oncomplete = function () {
              // console.log("ALL PUT TRANSACTIONS COMPLETE.")
              resolve(true)
          }

          put_transaction.onerror = function () {
              // console.log("PROBLEM UPDATING RECORDS.")
              resolve(false)
          }

          objectStore.put(record)
      })
  }
}

async function delete_prxCache(key) {
  if (db) {
      const delete_transaction = db.transaction("prxCache", "readwrite")
      const objectStore = delete_transaction.objectStore("prxCache")

      return new Promise((resolve, reject) => {
          delete_transaction.oncomplete = function () {
              // console.log("ALL DELETE TRANSACTIONS COMPLETE.")
              resolve(true)
          }

          delete_transaction.onerror = function () {
              // console.log("PROBLEM DELETE RECORDS.")
              resolve(false)
          }

          objectStore.delete(key)
      })
  }
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{
    // console.log(request,sendResponse)
    const {name,data,key} = request
    if(name === 'db.create'){

    }
    else if(name === 'db.update'){

    }
    else if(name === 'db.delete'){

    }
    else if(name === 'prxCache.clear'){
      // getTableCount(db, 'prxCache').then(size=>{
      //   sendResponse(size)
      // })
    }
    else if(name === 'prxCache.count'){
      getTableCount(db, 'prxCache').then(size=>{
        sendResponse(size)
      })
    }
    else if(name === 'prxCache.size'){
      getTableSize(db, 'prxCache').then(size=>{
        sendResponse(size)
      })
    }
    else if(name === 'prxCache.get'){
      get_prxCache(data.key).then((item)=>{
          sendResponse(item)
      })
    }
    else if(name === 'prxCache.create'){
      create_prxCacheDb()
    }
    else if(name === 'prxCache.update'){
      if(data.records){
        const {records} = data
        update_prxCache(records[0])
      }
    }
    else if(name === 'prxCache.insert'){
      if(data.records){
        const {records} = data
        const record = records[0]
        get_prxCache(record.key).then(existingRec=>{
          if(existingRec){
            console.log(`Update existing rec:${existingRec.key}`)
            update_prxCache(record)
          }else{
            console.log(`insert prxCache:${record.key}`)
            insert_prxCache(records)
          }
        })
        
      }
    }
    else if(name === 'prxCache.delete'){
      if(data.key){
        delete_prxCache(data.key)
      }
    }
    else if (request.action === 'activateTab') {
        const {url,optionPageBaseUrl} = request
      chrome.tabs.query({ url: `${chrome.runtime.getURL(`${optionPageBaseUrl}options.html`)}*`  }, function(tabs) {
        var activeTab = tabs[0]
        // Activate the tab
        chrome.tabs.update(activeTab.id, { active: true })
        // Change the URL
        chrome.tabs.update(activeTab.id, { url })
      })
    }
    return true
  })