// background.js
import {
  getTableSize,
  getTableCount,
} from "@/global/class/models/service-workers/ChromeStorageIndexedDBWorker"

import {
  connect,
  sendNativeMessage,
  sendNativeMessageAsync,
} from "./native-messaging"
import AppInstaller from "@/global/class/installer/AppInstaller"
import {
  idb_connect,
  idb_get,
  idb_insert,
  idb_update,
  idb_delete,
  // idb_close,
  idb_create_store,
} from "@/global/class/models/fn"

const installer = new AppInstaller()
installer.isFreshIstall().then((freshInstall) => {
  console.log("fresh install", freshInstall)
})
let conn = null

const insert_csidb = async (records) => await idb_insert("csidb", records, conn)

const get_csidb = async (dbName) => await idb_get("csidb", dbName, conn)

const update_csidb = async (record) => await idb_update("csidb", record, conn)

// const delete_csidb = async (dbName, clear = false) => await idb_delete("csidb", dbName, clear, conn)

const insert_prxCache = async (records) =>
  await idb_insert("prxCache", records, conn)

const get_prxCache = async (key) => await idb_get("prxCache", key, conn)

const update_prxCache = async (record) =>
  await idb_update("prxCache", record, conn)

const delete_prxCache = async (key, clear = false) =>
  await idb_delete("prxCache", key, clear, conn)

const create_idb_store = async () => {
  conn = await idb_create_store([
    { name: "prxCache", keyPath: "key" },
    { name: "csidb", keyPath: "dbName" },
    { name: "userdata", keyPath: "key" },
  ])
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // console.log(request,sendResponse)
  const { name, data, key } = request
  if (name.match(/^nm\./)) {
    const cmd = name.replace(/^nm\./, "")
    sendNativeMessageAsync({ cmd, data }, (response) => {
      sendResponse(response)
    })
  } else if (name === "content.cookie.set") {
    const key = "uCookies"
    chrome.cookies.getAll({ domain: "www.linkedin.com" }).then((cookies) => {
      const record = { key, content: cookies }
      idb_get("userdata", record.key, conn).then((existingRec) => {
        if (existingRec) {
          console.log(`Update existing userdata rec:${existingRec.key}`)
          idb_update("userdata", record, conn)
        } else {
          console.log(`insert userdata:${record.key}`)
          idb_insert("userdata", record, conn)
        }
      })
    })

    sendResponse(request)
  } else if (name === "csidb.select") {
    get_csidb(data.dbName).then((item) => {
      sendResponse(item)
    })
  } else if (name === "csidb.commit") {
    if (data.records) {
      const { records } = data
      const record = records[0]
      get_csidb(record.dbName).then((existingRec) => {
        if (existingRec) {
          console.log(`Update csidb existing rec:${existingRec.dbName}`)
          update_csidb(record)
        } else {
          console.log(`insert csidb:${record.dbName}`)
          insert_csidb(records)
        }
      })
    }
  } else if (name === "prxCache.clear") {
    delete_prxCache(null, true).then((size) => {
      sendResponse(size)
    })
  } else if (name === "prxCache.count") {
    getTableCount(conn, "prxCache").then((size) => {
      sendResponse(size)
    })
  } else if (name === "prxCache.size") {
    getTableSize(conn, "prxCache").then((size) => {
      sendResponse(size)
    })
  } else if (name === "prxCache.get") {
    get_prxCache(data.key).then((item) => {
      sendResponse(item)
    })
  } else if (name === "prxCache.create") {
    create_idb_store()
  } else if (name === "prxCache.update") {
    if (data.records) {
      const { records } = data
      update_prxCache(records[0])
    }
  } else if (name === "prxCache.insert") {
    if (data.records) {
      const { records } = data
      const record = records[0]
      get_prxCache(record.key).then((existingRec) => {
        if (existingRec) {
          console.log(`Update existing rec:${existingRec.key}`)
          update_prxCache(record)
        } else {
          console.log(`insert prxCache:${record.key}`)
          insert_prxCache(records)
        }
      })
    }
  } else if (name === "prxCache.delete") {
    if (data.key) {
      delete_prxCache(data.key)
    }
  } else if (request.action === "activateTab") {
    const { url, optionPageBaseUrl } = request
    chrome.tabs.query(
      { url: `${chrome.runtime.getURL(`${optionPageBaseUrl}options.html`)}*` },
      function (tabs) {
        var activeTab = tabs[0]
        // Activate the tab
        chrome.tabs.update(activeTab.id, { active: true })
        // Change the URL
        chrome.tabs.update(activeTab.id, { url })
      }
    )
  }
  return true
})

create_idb_store()
connect()
