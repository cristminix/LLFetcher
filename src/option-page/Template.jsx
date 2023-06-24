import { Outlet } from 'react-router-dom';
import {useEffect , useState} from "react"

import SideBar from "./SideBar"
export default function Template({store, config}){
	const [hideSidebar,setHideSidebar] = useState(false)
	useEffect(()=>{
    	// config.getUiConfig().applyHiddenSidebarStatus(setHideSidebar,(status)=>{
	    //   console.log(status)
	    //   setHideSidebar(status)
	    // },'template')
  	},[])	
	const cls = "w-full px-4 sm:px-6 md:px-8 dark:scrollbar-y dark:bg-gray-800 dark:border-gray-700 text-gray-800 dark:text-gray-200";// pt-10	 
	return(<>
		<SideBar config={config} store={store}/>
	  	<div id="main-content" className={cls +" px-4 "+ (hideSidebar?"":"lg:pl-72")}>
			<Outlet/>
		</div>
	</>)	
}