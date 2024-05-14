import React from "react"
import ReactDOM from "react-dom/client"

import Store from "@/global/class/models/Store"
import Router from "./Router"
import "bootstrap-icons/font/bootstrap-icons.css"
import AppConfig from "@/global/class/config/AppConfig"
import "@/global/css/tailwind.index.css"
import "./option-page.css"
import "fontawesome-4.7/css/font-awesome.min.css"
import "@/components/shared/ux/override"

import AppInstaller from "@/global/class/installer/AppInstaller"

const store = Store.getInstance()
const config = AppConfig.getInstance()
const installer = new AppInstaller()

installer.isFreshIstall().then(async (freshInstall) => {
  if (freshInstall) {
    console.log("fresh install")
    await installer.onInstall()
  } else {
    store.ready(() => {
      ReactDOM.createRoot(document.getElementById("root")).render(
        // <React.StrictMode>
        <Router store={store} config={config} />
        // </React.StrictMode>
      )
    })
  }
})
