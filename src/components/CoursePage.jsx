import {Component,createRef} from "react"

import CourseTree from "./coursePage/CourseTree"
import CourseAuthors from "./coursePage/CourseAuthors"
import CourseDetail from "./coursePage/CourseDetail"
import Course from "../models/Course"
import {konsole} from "./fn"
const mCourse = await Course.getInstance()


class CoursePage extends Component{
  
  mainQueueRef = null
  sectionToolBarRefs = []
  tocToolBarRefs = {}

  constructor(props){
    super(props)
    const {course, authors, sections, tocs} = props
    this.state = {
      course, authors, sections, tocs,
      qsidx : 0,
      qtidx : 0,
    }
    this.initRefs(sections, tocs)
  }

  initRefs(sections, tocs){
    this.mainQueueRef = createRef(null)
    this.sectionToolBarRefs = []
    for(let sidx in sections){
      this.sectionToolBarRefs.push(createRef(null))
    }

    for(let key in tocs){
      this.tocToolBarRefs[key] = []

      for(let tidx in tocs[key]){
        this.tocToolBarRefs[key].push(createRef(null))
      }
    }

    // console.log(this.sectionToolBarRefs)
    // console.log(this.tocToolBarRefs)
  }
  componentDidMount(){
    const {course} = this.state
    if(!course){
      const slug = mCourse.getLastSlug()
      console.log(slug)
      if(slug){
        if(slug !== ''){
          const {course, authors, sections, tocs} = mCourse.getCoursePageData(slug)
          this.initRefs(sections, tocs)
          this.setState({course, authors, sections, tocs},()=>{
            

          })
        }
      }
    }
  }
  runSectionQueue(sidx){
    konsole.log(sidx)
    this.setState({ qsidx:sidx })

    // this.fetchSectionQueueRef.current.startQueue()
    // console.log(this.mainQueueRef)
    console.log(this.sectionToolBarRefs[sidx])
    console.log(this.tocToolBarRefs[this.state.sections[sidx].slug])
  }
  runTocsQueue(tidx){
    // this.fetchQueueBarRef[this.state.qsidx].current.startQueue()

    this.setState({ qtidx:tidx }) 

    console.log(this.mainQueueRef)

  }
  render(){
    const {course, authors, sections, tocs, qsidx, qtidx} = this.state
    return(<>
    {
      course ? (<div className="course-page page">
      <CourseDetail course={course} 
                    sections={sections} 
                    tocs={tocs} 
                    qsidx={qsidx} 
                    qtidx={qtidx} 
                    runSectionQueue={sidx=>this.runSectionQueue(sidx)} 
                    runTocsQueue={tidx=>this.runTocsQueue(tidx)}
                    mainQueueRef={this.mainQueueRef}>
        <CourseAuthors authors={authors} key={course.id}/>
      </CourseDetail>

      <CourseTree sections={sections} 
                  tocs={tocs} 
                  qsidx={qsidx} 
                  qtidx={qtidx} 
                  runSectionQueue={sidx=>this.runSectionQueue(sidx)} 
                  runTocsQueue={tidx=>this.runTocsQueue(tidx)}
                  sectionToolBarRefs={this.sectionToolBarRefs}
                  tocToolBarRefs={this.tocToolBarRefs}
                  />  
    </div>):(<div className="course-page page">
      No data available !  
    </div>)
    }
    </>)
  }
}


export default CoursePage