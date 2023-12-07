import { Component } from "react";
import {cls10,cls11,cls12,cls13,cls14,cls15,cls16,
  cls17,cls18,cls19,cls20,cls21,cls22,cls23,cls24,cls25,cls26,cls27
} from "./cls";


import appLogo from "/logo/icon-48.png"
import SideMenu from "./SideMenu";

class Sidebar extends Component{
    render(){
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
      <SideMenu/>
        
     </div> 
     {/*<!-- End Sidebar -->*/} 
        </>
    }
}

export default Sidebar