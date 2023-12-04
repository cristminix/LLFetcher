import React from 'react'
import ReactDOM from 'react-dom/client'
import Popup from './Popup'
// import './index.css'
import "../global/tailwind.index.css"
import Store from "../global/models/Store"
// import 'bootstrap/dist/css/bootstrap.css';
import 'fontawesome-4.7/css/font-awesome.min.css';
// import 'bootstrap/dist/js/bootstrap.esm'

const store = Store.getInstance()

store.ready(()=>{
  ReactDOM.createRoot(document.getElementById('popup')).render(
    <React.StrictMode>
      <Popup store={store}/>
    </React.StrictMode>)

})
