import {cls10,cls11,cls12,cls13,cls14,cls15,cls16,
  cls17,cls18,cls19,cls20,cls21,cls22,cls23,cls24,cls25,cls26,cls27
} from "./cls";


import appLogo from "/logo/icon-48.png"
import SideMenu from "./SideMenu";
import { useEffect,useRef } from "react";
const Sidebar=({store,config})=>{
  const sideMenuRef = useRef(null)
  const toggle = ()=>{
    // const status = !hideSidebar
    // setHideSidebar(status)
    // config.getUiConfig().setHiddenSidebarStatus(status)
       
  }
  const reloadSidebar=f=>{
    console.log('SideBar.reloadSidebar()')
    if(sideMenuRef.current)
      sideMenuRef.current.reload()
    // setSideMenuLinks({})
    // setTimeout(f=>setSideMenuLinks(side_menu.links),100)
  }
  useEffect(()=>{
  //  config.getUiConfig().applyHiddenSidebarStatus(setHideSidebar)
   config.getUiConfig().applyReloadSidebar(f=>{
    reloadSidebar()
   },'sidebar')
  },[])
        return<>
        {/*<!-- Sidebar -->*/} 
     <div id="application-sidebar" className={cls10}> 
       <div className={cls11}> 
         {/* <a href="#" aria-label="Brand" className={cls12}> Brand </a>  */}
         <a className={cls12} href="#" aria-label="Brand">
          <div className="flex">
                <img src={appLogo}/> <div className="m-3">LLFecther</div>
          </div>
        </a>
       </div> 
      <SideMenu store={store} config={config} ref={sideMenuRef}/>
        
     </div> 
     {/*<!-- End Sidebar -->*/} 
        </>
}

export default Sidebar