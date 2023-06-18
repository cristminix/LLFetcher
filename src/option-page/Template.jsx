import { Outlet } from 'react-router-dom';
import {useEffect , useState} from "react"

import SideBar from "./SideBar"
export default function Template({config}){
	const [hideSidebar,setHideSidebar] = useState(false)
	useEffect(()=>{
    	// config.getUiConfig().applyHiddenSidebarStatus(setHideSidebar,(status)=>{
	    //   console.log(status)
	    //   setHideSidebar(status)
	    // },'template')
  	},[])	
	const cls = "w-full px-4 sm:px-6 md:px-8";// pt-10	 
	return(<>
		<SideBar config={config}/>
	  	<div id="main-content" className={cls +" px-4 "+ (hideSidebar?"":"lg:pl-72")}>
			<Outlet/>
		</div>
	</>)	
}