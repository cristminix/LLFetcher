import CourseToc from "./CourseToc"
import FetchQueueBar from "./FetchQueueBar"
/*
sidx = sectionIndex sorthand
*/
import {useState, Component, useEffect} from "react"
class SectionToolBar extends Component{
  constructor(props){
    super(props)
  }
  render(){
    const {sidx, section, runSectionQueue, runTocsQueue} = this.props
    return(<><div className="section-toolbar">
      <FetchQueueBar sidx={sidx} 
                     section={section}  
                     runSectionQueue={runSectionQueue} 
                     runTocsQueue={runTocsQueue}/>
  
    </div></>)
  }
}
const CourseSection = ({section, items, sidx, runSectionQueue, runTocsQueue,
                        tocToolBarRefs, sectionToolBarRefs}) => {
  const [collapsed, setCollapsed] = useState(true)

  // useEffect(()=>{
  // console.log(sectionToolBarRefs)

  // })
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
          <div className="item" style={{flexGrow:3}}>{section.title} ({items.length})</div>
          <div className="item">
            <SectionToolBar ref={sectionToolBarRefs[sidx]} sidx={sidx} section={section} runSectionQueue={runSectionQueue} runTocsQueue={runTocsQueue}/>
          </div>    
      </div>
       <div className="course-section-items-container" style={{padding:".5em 0 .5em 1.5em",display:(!collapsed?'block':'none')}}>
        {
          
          items.map((toc, index)=>{
            return (<CourseToc toc={toc} section={section} key={index} sidx={sidx} tidx={index} collapsed={collapsed} tocToolBarRefs={tocToolBarRefs}/>)
          }) 
               
        }
        </div>
    
    </div></>)
  }

export default CourseSection  