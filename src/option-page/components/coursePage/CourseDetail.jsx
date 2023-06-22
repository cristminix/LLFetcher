import FetchSectionQueue from "./FetchSectionQueue"
const CourseDetail = ({course, children, sections, tocs, runSectionQueue, mainQueueRef}) => {
    return (<>
      <div className="course" style={{
        display : 'flex',justifyContent:'space-between'
      }}>
        <div className="item">
          <h2 className="font-bold text-2xl"><i className="bi bi-bookmark"></i> <span>{course.title}</span></h2>
          {children}
        </div>
        <div className="item" style={{width : '200px',paddingTop:'.7em'}}>
          <FetchSectionQueue  course={course} sections={sections} tocs={tocs} 
          runSectionQueue={runSectionQueue}
          ref={mainQueueRef}/>
      </div>
      </div>
    </>)
  }


export default CourseDetail  