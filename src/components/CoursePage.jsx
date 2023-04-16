import {useState, useEffect} from "react"
import FetchSectionQueue from "./coursePage/FetchSectionQueue"
import FetchQueueBar from "./coursePage/FetchQueueBar"
import TocItem from "./coursePage/TocItem"
import  {
	titleCase
} from "./fn"

import Course from "../models/Course"
const mCourse = await Course.getInstance()

const CourseAuthors = ({authors}) =>{
  useEffect(()=>{
  // console.log(authors)

  },[authors])
  if(authors)
  return(<>
  <div style={{display:'flex'}}> 
      <span style={{fontStyle:'italic',marginRight:4}}>By</span>
      {
        authors.map((author, index)=>{
      		return <h4 key={index}> <span>{titleCase(author.slug)}</span> {index<authors.length-1?", ":""}</h4>
      	})
      }
      </div>
  </>)
}

const CourseDetail = ({course, children}) => {
  return (<>
    <div className="course">
      <h2><i className="fa fa-bookmark"></i> <span>{course.title}</span></h2>
      {children}
    </div>
  </>)
}
const SectionToolBar = ({sidx}) => {
  return(<><div className="section-toolbar">
    SectionToolBar
  </div></>)
}

const TocToolBar = ({}) => {
  return(<>CourseTocToolBar</>)
  
}
const CourseToc = ({section,toc, sidx}) => {
  return (<>
      <div id={`collapse${sidx}`} className="accordion-collapse" 
          aria-labelledby={`heading${sidx}`} data-bs-parent="#accordionCourse">
        <div className="accordion-body">
          <div className="toc-item-container" style={{display:'flex'}}>
            <div className="item"></div>
            <div className="item" style={{flexGrow:3}}>{toc.title}</div>
            <div className="item"><TocToolBar/></div>

          </div>
          {/*<TocItem :items="section.items" :sectionIndex="sectionIndex" @update="onTocUpdate($event)" ref="tocItems"/>*/}
        </div>
      </div>
  </>)
}
/*
sidx = sectionIndex sorthand
*/
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
          {/*<FetchQueueBar ref="fetchQueueBar" sectionIndex={sectionIndex}/>*/}
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
const CourseTree = ({sections, tocs}) => {
  const [loading, setLoading] = useState(false)
  const [warningText, setWarningText] = useState('')

  const stopLoading = ()=>{
    setTimeout(()=>{
      setLoading(false)
      setTimeout(()=>{
        setWarningText("No course sections and tocs data available")
      },1000)
    },3000)


  }

  useEffect(()=>{
    setLoading(true)
    setWarningText('Please wait ...')
  },[])
  if(sections.length > 0){
    return(<><div className="accordion accordion-flush" id="accordion-course-tree">
      {
        sections.map((section, index) => {
          const items = tocs[section.slug]
          return(<CourseSection section={section} items={items} sidx={index} key={index}/>)
        })
      }  
    </div></>)
  }else{
    return (<>
      
      <span><i className={loading?"fa fa-spin fa-spinner":"fa fa-exclamation"}></i> {warningText} </span>
      
      </>)
  }
}

const CoursePage = ({course, authors, sections, tocs, setNav}) => {
  const [lastCourse, setLastCourse] = useState('')
  if(!course){
    const slug = mCourse.getLastSlug()
    console.log(slug)
    if(slug){
      if(slug !== ''){
        const courseData = mCourse.getCoursePageData(slug)
        course = courseData.course
        authors = courseData.authors
        sections = courseData.sections
        tocs = courseData.tocs
  
      }
    }
  }
  if(course){
    return(<div className="course-page page">
      <CourseDetail course={course}>
        <CourseAuthors authors={authors} key={course.id}/>
      </CourseDetail>

      <CourseTree sections={sections} tocs={tocs}/>  
    </div>)
  }else{
    // return setNav('welcome')
    return (<div className="course-page page">
      No data available !  
    </div>)
  }
}

export default CoursePage

/*
 <div class="fsqc">
      <FetchSectionQueue/>
    </div>
    
    <div class="accordion accordion-flush" id="accordionCourse">
    <div v-for="(section,sectionIndex ) in sections" :key="sectionIndex" class="accordion-item">
      <div class="accordion-header" :id="'heading'+sectionIndex">
        <div class="row course-section">
        <button class="btn btn-default accordion-button custom btn-collapse" data-bs-toggle="collapse" :data-bs-target="'#collapse'+sectionIndex" aria-expanded="false" :aria-controls="'collapse'+sectionIndex"><i class="fa fa-plus"></i></button>

          <div class="col-md-8" style="padding-left:2.5em">{{section.title}}</div>
          <div class="col-md-4"><FetchQueueBar ref="fetchQueueBar" :sectionIndex="sectionIndex"/></div>
        </div>
      </div>
      <div :id="'collapse'+sectionIndex" class="accordion-collapse collapse" :aria-labelledby="'heading'+sectionIndex" data-bs-parent="#accordionCourse">
        <div class="accordion-body">
          <TocItem :items="section.items" :sectionIndex="sectionIndex" @update="onTocUpdate($event)" ref="tocItems"/>
        </div>
      </div>
    </div>
    </div>
    <div class="lbc">
      <LogBar ref="logBar"/>
    </div>
*/