import CourseToc from "./CourseToc"
import FetchQueueBar from "./FetchQueueBar"
import {konsole} from "../fn"
/*
sidx = sectionIndex sorthand
*/
import {useState, Component, useEffect,createRef} from "react"
class SectionToolBar extends Component{
  fetchQueueRef = null
  constructor(props){
    super(props)
    this.fetchQueueRef = createRef(null)
  }
  async processQueue(){
    const {sidx, section, runSectionQueue, runTocsQueue} = this.props
    konsole.log(sidx, runTocsQueue)

    const result = await this.fetchQueueRef.current.startQueue()
    return result
  }
  render(){
    const {sidx, section, runSectionQueue, runTocsQueue, items} = this.props
    return(<><div className="section-toolbar">
      <FetchQueueBar sidx={sidx} 
                     section={section}  
                     runSectionQueue={runSectionQueue} 
                     runTocsQueue={runTocsQueue}
                     items={items}
                     ref={this.fetchQueueRef}/>
  
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
            <SectionToolBar ref={sectionToolBarRefs[sidx]} items={items} sidx={sidx} 
            section={section} runSectionQueue={runSectionQueue} runTocsQueue={runTocsQueue}/>
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