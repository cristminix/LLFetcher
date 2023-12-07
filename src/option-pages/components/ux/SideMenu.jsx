import {cls10,cls11,cls12,cls13,cls14,cls15,cls16,
    cls17,cls18,cls19,cls20,cls21,cls22,cls23,cls24,cls25,cls26,cls27
  } from "./cls";

import {useState, useEffect} from "react"
import { NavLink } from 'react-router-dom';
import side_menu from "../../side_menu.json"
import AccordionMenu from "./side-menu/AccordionMenu";
import Menu from "./side-menu/Menu";
const SideMenu = ({store,config}) => {
    return (<>
    <nav data-hs-accordion-always-open="" className={cls13}> 
         <Menu data={side_menu.links} store={store} config={config} />
         {/*
         <ul className={cls14}> 
           <li> 
             <a href="#" className={cls15}> 
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls16}> <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"> </path> <polyline points="9 22 9 12 15 12 15 22"> </polyline> </svg> 
              Dashboard
             </a> 
           </li> 
  
           <li id="users-accordion" className={cls17}> 
             <button type="button" className={cls18}> 
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls16}> <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"> </path> <circle cx="9" cy="7" r="4"> </circle> <path d="M22 21v-2a4 4 0 0 0-3-3.87"> </path> <path d="M16 3.13a4 4 0 0 1 0 7.75"> </path> </svg> 
              Users
  
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls19}> <path d="m18 15-6-6-6 6"> </path> </svg> 
  
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls20}> <path d="m6 9 6 6 6-6"> </path> </svg> 
             </button> 
  
             <div id="users-accordion-sub" className={cls21}> 
               <ul data-hs-accordion-always-open="" className={cls22}> 
                 <li id="users-accordion-sub-1" className={cls17}> 
                   <button type="button" className={cls18}> 
                    Sub Menu 1
  
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls19}> <path d="m18 15-6-6-6 6"> </path> </svg> 
  
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls20}> <path d="m6 9 6 6 6-6"> </path> </svg> 
                   </button> 
  
                   <div id="users-accordion-sub-1-child" className={cls21}> 
                     <ul className={cls23}> 
                       <li> 
                         <a href="#" className={cls24}> 
                          Link 1
                         </a> 
                       </li> 
                       <li> 
                         <a href="#" className={cls24}> 
                          Link 2
                         </a> 
                       </li> 
                       <li> 
                         <a href="#" className={cls24}> 
                          Link 3
                         </a> 
                       </li> 
                     </ul> 
                   </div> 
                 </li> 
                 <li id="users-accordion-sub-2" className={cls17}> 
                   <button type="button" className={cls18}> 
                    Sub Menu 2
  
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls19}> <path d="m18 15-6-6-6 6"> </path> </svg> 
  
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls20}> <path d="m6 9 6 6 6-6"> </path> </svg> 
                   </button> 
  
                   <div id="users-accordion-sub-2-child" className={cls25}> 
                     <ul className={cls23}> 
                       <li> 
                         <a href="#" className={cls24}> 
                          Link 1
                         </a> 
                       </li> 
                       <li> 
                         <a href="#" className={cls24}> 
                          Link 2
                         </a> 
                       </li> 
                       <li> 
                         <a href="#" className={cls24}> 
                          Link 3
                         </a> 
                       </li> 
                     </ul> 
                   </div> 
                 </li> 
               </ul> 
             </div> 
           </li> 
  
           <li id="account-accordion" className={cls17}> 
             <button type="button" className={cls18}> 
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls26}> <circle cx="18" cy="15" r="3"> </circle> <circle cx="9" cy="7" r="4"> </circle> <path d="M10 15H6a4 4 0 0 0-4 4v2"> </path> <path d="m21.7 16.4-.9-.3"> </path> <path d="m15.2 13.9-.9-.3"> </path> <path d="m16.6 18.7.3-.9"> </path> <path d="m19.1 12.2.3-.9"> </path> <path d="m19.6 18.7-.4-1"> </path> <path d="m16.8 12.3-.4-1"> </path> <path d="m14.3 16.6 1-.4"> </path> <path d="m20.7 13.8 1-.4"> </path> </svg> 
              Account
  
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls19}> <path d="m18 15-6-6-6 6"> </path> </svg> 
  
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls20}> <path d="m6 9 6 6 6-6"> </path> </svg> 
             </button> 
  
             <div id="account-accordion-sub" className={cls21}> 
               <ul className={cls23}> 
                 <li> 
                   <a href="#" className={cls24}> 
                    Link 1
                   </a> 
                 </li> 
                 <li> 
                   <a href="#" className={cls24}> 
                    Link 2
                   </a> 
                 </li> 
                 <li> 
                   <a href="#" className={cls24}> 
                    Link 3
                   </a> 
                 </li> 
               </ul> 
             </div> 
           </li> 
  
           <li id="projects-accordion" className={cls17}> 
             <button type="button" className={cls18}> 
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls16}> <rect width="20" height="14" x="2" y="7" rx="2" ry="2"> </rect> <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"> </path> </svg> 
              Projects
  
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls19}> <path d="m18 15-6-6-6 6"> </path> </svg> 
  
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls20}> <path d="m6 9 6 6 6-6"> </path> </svg> 
             </button> 
  
             <div id="projects-accordion-sub" className={cls21}> 
               <ul className={cls23}> 
                 <li> 
                   <a href="#" className={cls24}> 
                    Link 1
                   </a> 
                 </li> 
                 <li> 
                   <a href="#" className={cls24}> 
                    Link 2
                   </a> 
                 </li> 
                 <li> 
                   <a href="#" className={cls24}> 
                    Link 3
                   </a> 
                 </li> 
               </ul> 
             </div> 
           </li> 
  
           <li> <a href="#" className={cls27}> 
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls16}> <rect width="18" height="18" x="3" y="4" rx="2" ry="2"> </rect> <line x1="16" x2="16" y1="2" y2="6"> </line> <line x1="8" x2="8" y1="2" y2="6"> </line> <line x1="3" x2="21" y1="10" y2="10"> </line> <path d="M8 14h.01"> </path> <path d="M12 14h.01"> </path> <path d="M16 14h.01"> </path> <path d="M8 18h.01"> </path> <path d="M12 18h.01"> </path> <path d="M16 18h.01"> </path> </svg> 
            Calendar
           </a> </li> 
           <li> <a href="#" className={cls27}> 
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls16}> <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"> </path> <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"> </path> </svg> 
            Documentation
           </a> </li> 
    </ul> */}
       </nav></>)
}

export default SideMenu
    