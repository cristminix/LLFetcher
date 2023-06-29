const CourseAuthors = ({authors}) =>{

    return authors ?
    <div className="flex text-lg"> 
        <span className="italic mr-1 ">By</span>
        {
          authors.map((author, index)=>{
                return <h4 key={index}> <span>{author.name}</span> {index<authors.length-1?", ":""}</h4>
            })
        }
    </div> : ''
  }

const CourseInfo = ({store, course, authors}) => {
    console.log(course)
    return (<><div className="course-info">
        <h4 className="text-2xl"><i className="bi bi-bookmark"></i> {course.title}</h4>
        <CourseAuthors authors={authors}/>
    </div></>)
}

export default CourseInfo
    