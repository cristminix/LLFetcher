import { Link, useLoaderData } from 'react-router-dom'


import {Component,createRef,useState,useEffect} from "react"

import CourseTree from "./coursePage/CourseTree"
import CourseAuthors from "./coursePage/CourseAuthors"
import CourseDetail from "./coursePage/CourseDetail"
// import {console} from "../../components/fn"
import "./coursePage/course-page.css"


export async function loader({ params }) {
    const { slug } = params
    return { slug }
  }

const CoursePage = ({store,ctl}) => {
    const {slug} = useLoaderData()
    const [activeCourseData, setActiveCourseData] = useState(null)
 
 
    const updateCourseData = async()=>{
      setActiveCourseData(null)
      const courseData = await store.mCourse.getCoursePageData(slug)
      await store.mCourse.setLastSlug(slug)
      setActiveCourseData(courseData)
    }
    useEffect(()=>{
      console.log(slug)
      if(slug){
        updateCourseData()
      }
    },[slug])
    
    if(activeCourseData){
      console.log(activeCourseData)
      const {course, authors, sections, tocs}  = activeCourseData
      return (<>
              { course ? (<div className="course-page">
                  <MainCoursePage store={store} course={course} authors={authors} sections={sections} tocs={tocs}/>
              </div>):""
              }
              </>)
    }else{
      return <>No data</>
    }
}
class MainCoursePage extends Component{
  
  mainQueueRef = null
  sectionToolBarRefs = []
  tocToolBarRefs = {}
  mCourse = null
  store = null
  constructor(props){
    super(props)
    const {course, authors, sections, tocs, store} = props
    this.store = store
    this.mCourse = store.get('Course')
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
  async componentDidMount(){
    const {course} = this.state
    if(!course){
      const slug = await this.mCourse.getLastSlug()
      // console.log(slug)
      if(slug){
        if(slug !== ''){
          const {course, authors, sections, tocs} = await this.mCourse.getCoursePageData(slug)
          this.initRefs(sections, tocs)
          this.setState({course, authors, sections, tocs},()=>{
            

          })
        }
      }
    }
  }
  async runSectionQueue(sidx){
    console.log(sidx)
    this.setState({ qsidx:sidx })

    // this.fetchSectionQueueRef.current.startQueue()
    // console.log(this.mainQueueRef)
    const sectionToolBarRef = this.sectionToolBarRefs[sidx]
    const result = await sectionToolBarRef.current.processQueue()

    return result
    // console.log()
    // console.log(this.tocToolBarRefs[this.state.sections[sidx].slug])
  }
  runTocsQueue(tidx){
    // this.fetchQueueBarRef[this.state.qsidx].current.startQueue()

    this.setState({ qtidx:tidx }) 

    console.log(this.mainQueueRef)

  }
  onUpdateQueueProgress(src, data){
    // console.log(src, data)
    // console.log(this.mainQueueRef.current)
   // const {pageNavigationRef} = this.props

    if(src === 'FetchQueueBar'){
      const {section, percentage} = data
      const result = this.mainQueueRef.current.updateProgressView(section, percentage)

      
      //pageNavigationRef.current.enableDownload(result === 100)
      
    }
  }
  render(){
    const {course, authors, sections, tocs, qsidx, qtidx} = this.state
    const {pageNavigationRef,store} = this.props
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
                    mainQueueRef={this.mainQueueRef}
                    pageNavigationRef={pageNavigationRef}>
        <CourseAuthors authors={authors} key={course.id}/>
      </CourseDetail>

      <CourseTree store={store} course={course} sections={sections} 
                  tocs={tocs} 
                  qsidx={qsidx} 
                  qtidx={qtidx} 
                  runSectionQueue={sidx=>this.runSectionQueue(sidx)} 
                  runTocsQueue={tidx=>this.runTocsQueue(tidx)}
                  sectionToolBarRefs={this.sectionToolBarRefs}
                  tocToolBarRefs={this.tocToolBarRefs}
                  onUpdateQueueProgress={(src, data)=>this.onUpdateQueueProgress(src, data)}
                  />  
    </div>):(<div className="course-page page">
      No data available !  
    </div>)
    }
    </>)
  }
}


// export default CoursePage
export default CoursePage
    