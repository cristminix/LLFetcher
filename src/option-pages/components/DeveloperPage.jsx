import { Link, useLoaderData } from 'react-router-dom'
import {Component,createRef,useState,useEffect} from "react"
// import DBExplorer from "./dbExplorer/DBExplorer"
// import DBTableManager from './dbExplorer/DBTableManager'
import FetchApi from './developers/FetchApi'
import CourseApi from './developers/CourseApi'
import DevApi from './developers/DevApi'
export async function loader({ params }) {
    const { table, page } = params
    return { table, page }
}


const DeveloperPage = ({store,config}) => {
    const {table, page} = useLoaderData()

    let viewMode = table ? 'explorer' : 'manager'
    if(table == 'table-manager'){
        viewMode = 'manager'
    }

    if(page == 'fetch-api'){
        return <FetchApi store={store} config={config}/>
    }
    if(page == 'course-api'){
        return <CourseApi store={store} config={config}/>
    }
    if(page == 'dev-api'){
        return <DevApi store={store} config={config}/>
    }
    
    return <div className="developer-page">
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




export default DeveloperPage
    