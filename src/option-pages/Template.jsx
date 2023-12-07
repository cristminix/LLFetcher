import { Component } from "react";
import Sidebar from "./components/ux/Sidebar";
import SidebarToggle from "./components/ux/SidebarToggle";
import Content from "./components/ux/Content";

import { cls0 } from "./components/ux/cls";

class Template extends Component{
    render(){
        
    return <>
    <div className={cls0}> 
     {/*<!-- ========== MAIN CONTENT ========== -->*/} 
     
     <SidebarToggle/>   
     <Sidebar/>
     <Content/>   
    
     {/*<!-- ========== END MAIN CONTENT ========== -->*/} 
   </div>
    </>
    }
}

export default Template