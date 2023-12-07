import { Outlet } from 'react-router-dom';
import {useEffect , useState,useRef} from "react"

import SideBar from "./SideBar"
import DialogContent from "../components/shared/ux/DialogContent"
export default function Template({store, config}){
	const [hideSidebar,setHideSidebar] = useState(false)
	const dialogContentRef = useRef(null)
	useEffect(()=>{
    	config.getUiConfig().applyHiddenSidebarStatus(setHideSidebar,(status)=>{
	      console.log(status)
	      setHideSidebar(status)
	    },'template')
		
  	},[])
	  window.dialogContentRef = dialogContentRef	
	  const cls = " px-4 dark:scrollbar-y "+ (hideSidebar?"lg:pl-18":"lg:pl-72")
	return(<>
		<SideBar config={config} store={store}/>
	  	<div id="main-content" className={cls}>
			<DialogContent ref={dialogContentRef}/>

			<Outlet/>
		</div>
	</>)	
}