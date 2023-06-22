import FetchButton from "./FetchButton"

import {Component, createRef} from "react"
class TocToolBar extends Component{
    fetchBtnRef = null
    store = null
    constructor(props){
      super(props)
      const {store} = props
      this.store = store
      this.fetchBtnRef = createRef(null)
    }
    render(){
        const {toc, sidx, tidx, course, store} = this.props
        
        return(<><FetchButton store={store} ref={this.fetchBtnRef} toc={toc}  sidx={sidx} tidx={tidx} course={course}/></>)

    }
    
  }
const CourseToc = ({store, course, section, toc, sidx, tidx, collapsed, tocToolBarRefs}) => {
    // console.log(tocToolBarRefs[section.slug][tidx])
    return (<>
        <div id={`collapse${sidx}`} className={`accordion-collapse ${collapsed ? "collapse" : ""}`} 
            aria-labelledby={`heading${sidx}`} data-bs-parent="#accordionCourse">
          <div className="accordion-body">
            <div className="toc-item-container" style={{display:'flex'}}>
              <div className="item"></div>
              <div className="item" style={{flexGrow:3}}>{toc.title}</div>
              <div className="item"><TocToolBar store={store} course={course} ref={tocToolBarRefs[section.slug][tidx]} toc={toc} sidx={sidx} tidx={tidx}/></div>
  
            </div>
            {/*<TocItem :items="section.items" :sectionIndex="sectionIndex" @update="onTocUpdate($event)" ref="tocItems"/>*/}
          </div>
        </div>
    </>)
  }

  export default CourseToc