import CourseAuthors from "./CourseAuthors"

const CourseInfo = ({store, course, authors,selectedFmt,selectedTrans}) => {
    console.log(course)
    return (<><div className="course-info">
        <div><h4 className="text-2xl"><i className="bi bi-bookmark"></i> {course.title}</h4></div>
        <div className="flex items-center">
            <div><CourseAuthors authors={authors}/> </div>
            <div className="p-2">{selectedFmt}</div>
            <div className="p-2">{selectedTrans}</div>
        </div>
        
         
    </div></>)
}

export default CourseInfo
    