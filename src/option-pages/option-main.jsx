import React from "react"
import ReactDOM from "react-dom/client"
// import OptionPage from './components/OptionPage'
import "@/global/tailwind.index.css"
import "./option-page.css"
import Store from "@/global/models/Store"
import Router from "./Router"
import "bootstrap-icons/font/bootstrap-icons.css"
import AppConfig from "@/global/config/AppConfig"
// import 'bootstrap/dist/css/bootstrap.css';
import "fontawesome-4.7/css/font-awesome.min.css"
// import 'bootstrap/dist/js/bootstrap.esm'
import "@/components/shared/ux/override"
import AppInstaller from "@/global/installer/AppInstaller"

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
