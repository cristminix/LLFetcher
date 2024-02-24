import { Link, useLoaderData } from "react-router-dom"
import { Component, createRef, useState, useEffect } from "react"
// import DBExplorer from "./dbExplorer/DBExplorer"
// import DBTableManager from './dbExplorer/DBTableManager'
import FetchApi from "./developers/FetchApi"
import CourseApi from "./developers/CourseApi"
import DevApi from "./developers/DevApi"
import VideoPlayer from "./developers/VideoPlayer"
import MenuManager from "./developers/MenuManager"
import QueueMan from "./developers/QueueMan"
import IndexedDb from "./developers/IndexedDb"
// import NativeClient from './developers/NativeClient'
import VideoAnalizer from "./youtube/VideoAnalizer"
import TreeTable from "./developers/TreeTable"
import JsStoreApp from "./developers/JsStoreApp"
export async function loader({ params }) {
  const { table, page } = params
  return { table, page }
}

const DeveloperPage = ({ store, config }) => {
  const { table, page } = useLoaderData()

  let viewMode = table ? "explorer" : "manager"
  if (table == "table-manager") {
    viewMode = "manager"
  }

  if (page == "video-analizer") {
    return <VideoAnalizer store={store} config={config} />
  }
  if (page == "fetch-api") {
    return <FetchApi store={store} config={config} />
  }

  if (page == "indexed-db") {
    return <IndexedDb store={store} config={config} />
  }
  if (page == "queue-man") {
    return <QueueMan store={store} config={config} />
  }
  if (page == "menu-manager") {
    return <MenuManager store={store} config={config} />
  }
  if (page == "video-player") {
    return <VideoPlayer store={store} config={config} />
  }
  if (page == "course-api") {
    return <CourseApi store={store} config={config} />
  }
  if (page == "dev-api") {
    return <DevApi store={store} config={config} />
  }
  if (page == "tree-table") {
    return <TreeTable store={store} config={config} />
  }
  if (page == "jsstore") {
    return <JsStoreApp store={store} config={config} />
  }
  return (
    <div className="developer-page">
      {
        // viewMode === 'explorer' ? <DBExplorer store={store} table={table} page={page}/> : ''
      }
      {page}
    </div>
  )
}

export default DeveloperPage
