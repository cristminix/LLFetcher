console.log("this is content script inject app")
import React from "react"
import { createRef } from "react"
import ReactDOM from "react-dom/client"
import "../../global/css/tailwind.index.css"
import ContentScriptApp from "./components/ContentScriptApp"
import {
  createReactRootElement,
  attachRouteChangesEvent,
  isCoursePage,
  getCourseSlugByPath,
  pauseVideo,
  waitForElm,
} from "./fn"

const main = async () => {
  // let appCreated = false
  const reactRootId = "content-script-root"
  const appContainerId = "content-script-app"
  const appRef = createRef(null)
  let appInstance = null
  let publicRoutePath = null

  // const {useState, useEffect} = React

  attachRouteChangesEvent(async (path) => {
    publicRoutePath = path

    console.log(`URL changed to ${path}`)

    if (!appInstance) {
      await waitForElm(`#${appContainerId}`)
      appInstance = appRef.current
    }
    const validCoursePage = isCoursePage()
    const slug = getCourseSlugByPath(path)
    // console.log(slug)
    appInstance.setState({ validCoursePage, slug })

    if (validCoursePage) {
      pauseVideo()
    }
  })
  createReactRootElement()
  const el = await waitForElm(`#${reactRootId}`)
  const root = ReactDOM.createRoot(el)
  root.render(<ContentScriptApp ref={appRef} appContainerId={appContainerId} />)
}

main()
