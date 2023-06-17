console.log('option-main.jsx')

import React from 'react'
import ReactDOM from 'react-dom/client'
import OptionPage from './components/OptionPage'
// import './index.css'
import Store from "../models/Store"
import 'bootstrap/dist/css/bootstrap.css';
import 'fontawesome-4.7/css/font-awesome.min.css';
import 'bootstrap/dist/js/bootstrap.esm'

const store = Store.getInstance()

store.ready(()=>{
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <OptionPage store={store}/>
    </React.StrictMode>)

})