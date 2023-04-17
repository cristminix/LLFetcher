import CourseToc from "./CourseToc"
import FetchQueueBar from "./FetchQueueBar"
/*
sidx = sectionIndex sorthand
*/

const SectionToolBar = ({sidx}) => {
    return(<><div className="section-toolbar">
      <FetchQueueBar sectionIndex={sidx}/>
  
    </div></>)
  }
const CourseSection = ({section, items, sidx}) => {
    return(<><div className="accordion-item">
      <div className="course-section-container">
          <div className="item">
          <button className="btn btn-default accordion-button custom btn-collapse" 
                  data-bs-toggle="collapse" data-bs-target={`#collapse${sidx}`} 
                  aria-expanded="false" aria-controls={`collapse${sidx}`}>
            <i className="fa fa-plus"></i>
          </button>
          </div>
          <div className="item" style={{flexGrow:3}}>{section.title}</div>
          <div className="item">
            <SectionToolBar sidx={sidx}/>
          </div>    
      </div>
      <div className="course-section-items-container">
        {
      
          items.map((toc, index)=>{
            return (<CourseToc toc={toc} key={index} sidx={sidx}/>)
          })
               
        }
      </div>
    
    </div></>)
  }

export default CourseSection  