import FetchButton from "./FetchButton"
const TocToolBar = ({toc}) => {
    return(<><FetchButton toc={toc}/></>)
    
  }
const CourseToc = ({section,toc, sidx}) => {
    return (<>
        <div id={`collapse${sidx}`} className="accordion-collapse" 
            aria-labelledby={`heading${sidx}`} data-bs-parent="#accordionCourse">
          <div className="accordion-body">
            <div className="toc-item-container" style={{display:'flex'}}>
              <div className="item"></div>
              <div className="item" style={{flexGrow:3}}>{toc.title}</div>
              <div className="item"><TocToolBar toc={toc}/></div>
  
            </div>
            {/*<TocItem :items="section.items" :sectionIndex="sectionIndex" @update="onTocUpdate($event)" ref="tocItems"/>*/}
          </div>
        </div>
    </>)
  }

  export default CourseToc