import React, { useEffect, useState } from "react"
import {
    cls16,
    cls28,cls29,cls30,cls31,cls32,cls33,cls34
} from "./cls"
import { Outlet, useOutlet } from 'react-router-dom';
import DownloadManager from "../DownloadManager";
const ExampleContent = ({store, config}) => {
    // const [outletEmpty, setOutletEmpty] = useState(true)
    const outlet = useOutlet()
    useEffect(() => {
 
    }, [/*props.children*/])
    return (<><div className={`${cls28} pb-2`}> 
        {/*<!-- Page Heading -->*/} 

        {outlet||<DownloadManager store={store} config={config}/>}
        {/*
        <header> 
          <p className={cls29}> Starter Pages &amp; Examples </p> 
          <h1 className={cls30}> Application Layout: Sidebar using Tailwind CSS </h1> 
          <p className={cls31}> This is a simple application layout with sidebar and header examples using Tailwind CSS. </p> 
          <div className={cls32}> 
            <a href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html" target="_blank" className={cls33}> 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={cls16}> 
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"> </path> 
              </svg> 
             Get the source code
            </a> 
            <a href="../examples.html" className={cls34}> 
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls16}> <path d="m15 18-6-6 6-6"> </path> </svg> 
             Back to examples
            </a> 
          </div> 
        </header> 
        */}
        {/*<!-- End Page Heading -->*/} 
      </div></>)
}

export default ExampleContent
    