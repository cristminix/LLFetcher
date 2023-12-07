console.log('option-main.jsx')

import React from 'react'
import ReactDOM from 'react-dom/client'
// import OptionPage from './components/OptionPage'
import '../global/tailwind.index.css'
import './option-page.css'
import Store from "../global/models/Store"
import Router from "./Router"
import "bootstrap-icons/font/bootstrap-icons.css"
import AppConfig from "../global/config/AppConfig"
// import 'bootstrap/dist/css/bootstrap.css';
import 'fontawesome-4.7/css/font-awesome.min.css'
// import 'bootstrap/dist/js/bootstrap.esm'
import "../components/shared/ux/override"
import "./style.css"

const store = Store.getInstance()
const config = AppConfig.getInstance();
store.ready(()=>{
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Router store={store} config={config}/>
    </React.StrictMode>)

})