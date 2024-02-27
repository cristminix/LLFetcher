import React from "react"
import ReactDOM from "react-dom/client"
import "@/global/tailwind.index.css"
import Store from "@/global/models/Store"
import Router from "./Router"
import "bootstrap-icons/font/bootstrap-icons.css"
import AppConfig from "@/global/config/AppConfig"
import "fontawesome-4.7/css/font-awesome.min.css"

const store = Store.getInstance()
const config = AppConfig.getInstance()
store.ready(() => {
  ReactDOM.createRoot(document.getElementById("popup")).render(
    <React.StrictMode>
      <Router store={store} config={config} />
    </React.StrictMode>
  )
})
