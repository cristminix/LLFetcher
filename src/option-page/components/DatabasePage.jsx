import { Link, useLoaderData } from 'react-router-dom'
import {Component,createRef,useState,useEffect} from "react"
import DBExplorer from "./dbExplorer/DBExplorer"


export async function loader({ params }) {
    const { table, page } = params
    return { table, page }
}


const DatabasePage = ({store}) => {
    const {table, page} = useLoaderData()

    
    return (<><div className="database-page">
        {
            table ? <>
                <DBExplorer store={store} table={table} page={page}/>
            </> : "You have no select table"
        }
    </div></>)
}




export default DatabasePage
    