import FetchSectionQueue from "./FetchSectionQueue"
const CourseDetail = ({course, children, sections, tocs, runSectionQueue, mainQueueRef}) => {
    return (<>
      <div className="course" style={{
        display : 'flex'
      }}>
        <div className="item">
          <h2><i className="fa fa-bookmark"></i> <span>{course.title}</span></h2>
          {children}
        </div>
        <div className="item" style={{width : '200px'}}></div>
          <FetchSectionQueue  course={course} sections={sections} tocs={tocs} runSectionQueue={runSectionQueue}/>
      </div>
    </>)
  }


export default CourseDetail  