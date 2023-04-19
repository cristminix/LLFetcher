import FetchButton from "./FetchButton"

import {Component} from "react"
class TocToolBar extends Component{
    render(){
        const {toc, sidx, tidx, course} = this.props
        
        return(<><FetchButton toc={toc}  sidx={sidx} tidx={tidx} course={course}/></>)

    }
    
  }
const CourseToc = ({course, section, toc, sidx, tidx, collapsed, tocToolBarRefs}) => {
    // console.log(tocToolBarRefs[section.slug][tidx])
    return (<>
        <div id={`collapse${sidx}`} className={`accordion-collapse ${collapsed ? "collapse" : ""}`} 
            aria-labelledby={`heading${sidx}`} data-bs-parent="#accordionCourse">
          <div className="accordion-body">
            <div className="toc-item-container" style={{display:'flex'}}>
              <div className="item"></div>
              <div className="item" style={{flexGrow:3}}>{toc.title}</div>
              <div className="item"><TocToolBar course={course} ref={tocToolBarRefs[section.slug][tidx]} toc={toc} sidx={sidx} tidx={tidx}/></div>
  
            </div>
            {/*<TocItem :items="section.items" :sectionIndex="sectionIndex" @update="onTocUpdate($event)" ref="tocItems"/>*/}
          </div>
        </div>
    </>)
  }

  export default CourseToc