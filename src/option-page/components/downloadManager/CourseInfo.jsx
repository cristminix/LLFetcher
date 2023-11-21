import CourseAuthors from "./CourseAuthors"

const CourseInfo = ({store, course, authors}) => {
    console.log(course)
    return (<><div className="course-info">
        <h4 className="text-2xl"><i className="bi bi-bookmark"></i> {course.title}</h4>
        <CourseAuthors authors={authors}/>
    </div></>)
}

export default CourseInfo
    