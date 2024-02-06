import { Link, useLoaderData } from 'react-router-dom'
import {Component,createRef,useState,useEffect} from "react"
// import NativeClient from './nat/NativeClient'
import NativeClient from './native-client-app/NativeClient'
import UserManagement from './native-client-app/UserManagement'
import YTUpload from './native-client-app/YTUpload'

export async function loader({ params }) {
    const { module, pageNumber } = params
    return { module, pageNumber }
}


const NativeClientApp = ({store,config}) => {
    const {module, pageNumber} = useLoaderData()

    // let viewMode = table ? 'explorer' : 'manager'
    // if(table == 'table-manager'){
    //     viewMode = 'manager'
    // }

    if(module == 'native-client'){
        return <NativeClient store={store} config={config}/>
    }
    else if(module == 'user-management'){
        return <UserManagement store={store} config={config} pageNumber={pageNumber}/>
    }
    else if(module == 'yt-upload'){
        return <YTUpload store={store} config={config} pageNumber={pageNumber}/>
    }
    else return <div className="native-client-app">
        {
            // viewMode === 'explorer' ? <DBExplorer store={store} table={table} page={page}/> : ''
        }
        {
            // viewMode === 'manager' ? <>
            // {/* You have no select table */}

            //     <DBTableManager store={store} config={config}/>
            // </>: ''
        } 
    </div>
}




export default NativeClientApp
    