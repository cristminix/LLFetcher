import {Component} from "react"

import CourseTree from "./coursePage/CourseTree"
import CourseAuthors from "./coursePage/CourseAuthors"
import CourseDetail from "./coursePage/CourseDetail"
import Course from "../models/Course"

const mCourse = await Course.getInstance()


class CoursePage extends Component{
  constructor(props){
    super(props)
    const {course, authors, sections, tocs} = props
    this.state = {
      course, authors, sections, tocs
    }
  }
  componentDidMount(){
    const {course} = this.state
    if(!course){
      const slug = mCourse.getLastSlug()
      console.log(slug)
      if(slug){
        if(slug !== ''){
          const {course, authors, sections, tocs} = mCourse.getCoursePageData(slug)
          this.setState({course, authors, sections, tocs})
        }
      }
    }
  }
  render(){
    const {course, authors, sections, tocs} = this.state
    return(<>
    {
      course ? (<div className="course-page page">
      <CourseDetail course={course}>
        <CourseAuthors authors={authors} key={course.id}/>
      </CourseDetail>

      <CourseTree sections={sections} tocs={tocs}/>  
    </div>):(<div className="course-page page">
      No data available !  
    </div>)
    }
    </>)
  }
}


export default CoursePage