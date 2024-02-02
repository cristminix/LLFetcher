// background.js
import ChromeStorageIndexedDBWorker, {getDatabaseSize,
  getTableSize,
  getTableCount} from "../global/models/service-workers/ChromeStorageIndexedDBWorker"
// const csidbWorker = new ChromeStorageIndexedDBWorker()
// csidbWorker.start()
import { connect, sendNativeMessage, sendNativeMessageAsync } from "./native-messaging"
import base64 from "base-64"
let db = null


async function insert_csidb(records) {
  if (db) {
      const insert_transaction = db.transaction("csidb", "readwrite")
      const objectStore = insert_transaction.objectStore("csidb")

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
async function get_csidb(dbName) {
  if (db) {
      const get_transaction = db.transaction("csidb", "readonly")
      const objectStore = get_transaction.objectStore("csidb")

      return new Promise((resolve, reject) => {
          get_transaction.oncomplete = function () {
          // console.log("ALL GET TRANSACTIONS COMPLETE.")
          }

          get_transaction.onerror = function () {
          // console.log("PROBLEM GETTING RECORDS.")
          }

          let request = objectStore.get(dbName)

          request.onsuccess = function (event) {
          resolve(event.target.result)
          }
      })
  }
}

async function update_csidb(record) {
  if (db) {
      const put_transaction = db.transaction("csidb", "readwrite")
      const objectStore = put_transaction.objectStore("csidb")

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
async function delete_csidb(dbName, clear =false) {
  if (db) {
      const delete_transaction = db.transaction("csidb", "readwrite")
      const objectStore = delete_transaction.objectStore("csidb")

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
            objectStore.delete(dbName)
          }else{
            objectStore.clear()
          }
      })
  }
}
async function create_prxCacheDb() {
    const request = indexedDB.open('main')

    request.onerror = function (event) {
        console.log("Problem opening DB.")
    }

    request.onupgradeneeded = function (event) {
        db = event.target.result

        let objectStore = db.createObjectStore('prxCache', {
            keyPath: 'key'
        })

        objectStore = db.createObjectStore('csidb', {
          keyPath: 'dbName'
      })


        objectStore.transaction.oncomplete = function (event) {
            console.log("ObjectStore Created.")
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

async function delete_prxCache(key, clear=false) {
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

          if(!clear){
            objectStore.delete(key)
          }else{
            objectStore.clear()
          }
      })
  }
}
chrome.runtime.onMessage.addListener((request, sender, sendResponse) =>{
    console.log(request,sendResponse)
    const {name,data,key} = request   
    if(name.match(/^nm\./)){
      const cmd = name.replace(/^nm\./,'')
      const packet64 = base64.encode(JSON.stringify({cmd,data}))
      // sendNativeMessage(packet64)
      sendNativeMessageAsync(packet64,(response)=>{
        sendResponse(response)
      })
    }
    else if(name === 'csidb.select'){
      get_csidb(data.dbName).then((item)=>{
          sendResponse(item)
      })
    }
    else if(name === 'csidb.commit'){
      if(data.records){
        const {records} = data
        const record = records[0]
        get_csidb(record.dbName).then(existingRec=>{
          if(existingRec){
            console.log(`Update csidb existing rec:${existingRec.dbName}`)
            update_csidb(record)
          }else{
            console.log(`insert csidb:${record.dbName}`)
            insert_csidb(records)
          }
        })
        
      }
    }
    else if(name === 'prxCache.clear'){
      delete_prxCache(null, true).then(size=>{
        sendResponse(size)
      })
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

create_prxCacheDb()
connect()