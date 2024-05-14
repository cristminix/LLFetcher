import React from "react"
import ReactDOM from "react-dom/client"
import Store from "@/global/class/models/Store"
import Router from "./Router"
import AppConfig from "@/global/class/config/AppConfig"
import "@/global/css/tailwind.index.css"
import "fontawesome-4.7/css/font-awesome.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

const store = Store.getInstance()
const config = AppConfig.getInstance()
store.ready(() => {
  ReactDOM.createRoot(document.getElementById("popup")).render(
    <React.StrictMode>
      <Router store={store} config={config} />
    </React.StrictMode>
  )
})
