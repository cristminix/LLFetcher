import { Link, useLoaderData } from 'react-router-dom'
import {Component,createRef,useState,useEffect} from "react"
import NativeClient from './developers/NativeClient'

export async function loader({ params }) {
    const { table, page } = params
    return { table, page }
}


const NativeClientApp = ({store,config}) => {
    const {table, page} = useLoaderData()

    let viewMode = table ? 'explorer' : 'manager'
    if(table == 'table-manager'){
        viewMode = 'manager'
    }

    if(page == 'native-client'){
        return <NativeClient store={store} config={config}/>
    }
    return <div className="native-client-app">
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
    