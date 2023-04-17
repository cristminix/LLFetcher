import CourseToc from "./CourseToc"
import FetchQueueBar from "./FetchQueueBar"
/*
sidx = sectionIndex sorthand
*/
import {useState} from "react"
const SectionToolBar = ({sidx}) => {
    return(<><div className="section-toolbar">
      <FetchQueueBar sectionIndex={sidx}/>
  
    </div></>)
  }
const CourseSection = ({section, items, sidx}) => {
  const [collapsed, setCollapsed] = useState(true)
  return(<><div className="accordion-item">
      <div className="course-section-container">
          <div className="item">
          <button className="btn btn-default accordion-button custom btn-collapse" 
                  data-bs-toggle="collapse" data-bs-target={`#collapse${sidx}`} 
                  aria-expanded="false" aria-controls={`collapse${sidx}`}
                  onClick={e => {setCollapsed(!collapsed)}}>
            <i className={!collapsed?"fa fa-minus":"fa fa-plus"}></i>
          </button>
          </div>
          <div className="item" style={{flexGrow:3}}>{section.title}</div>
          <div className="item">
            <SectionToolBar sidx={sidx}/>
          </div>    
      </div>
      {
        !collapsed ?( <div className="course-section-items-container" style={{padding:".5em 0 .5em 1.5em"}}>
        {
          
          items.map((toc, index)=>{
            return (<CourseToc toc={toc} key={index} sidx={sidx} collapsed={collapsed}/>)
          }) 
               
        }
        </div>) : ""
      }
    
    </div></>)
  }

export default CourseSection  