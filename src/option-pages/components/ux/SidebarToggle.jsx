import Breadcrumb from "./Breadcrumb"
import {
  cls0,
    cls1,
    cls2,
    cls3,
    cls4,
    cls5,
    cls6,cls7,cls8,cls9
} from "./cls"
const SidebarToggle = ({}) => {
    return (<>
        {/*<!-- Sidebar Toggle -->*/} 
     <div className={cls1}> 
       <div className={cls2}> 
         {/*<!-- Navigation Toggle -->*/} 
         <button type="button" data-hs-overlay="#application-sidebar" aria-controls="application-sidebar" aria-label="Toggle navigation" className={cls3}> 
           <span className={cls4}> Toggle Navigation </span> 
           <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={cls5}> 
             <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"> </path> 
           </svg> 
         </button> 
         {/*<!-- End Navigation Toggle -->*/} 
  
         <Breadcrumb/>
       </div> 
     </div> 
     {/*<!-- End Sidebar Toggle -->*/} 
    </>)
}

export default SidebarToggle
    