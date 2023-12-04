import CourseAuthors from "./CourseAuthors"

const CourseInfo = ({store, course, authors,selectedFmt,selectedTrans}) => {
    // console.log(course)
    const displaySelectItem = (item) => {
        if(typeof item === 'string'){
            if(item.match(/^select/i)){
                return ""
            }
        }
        return item
    }
    return (<><div className="course-info">
        <div><h4 className="text-2xl"><i className="bi bi-bookmark"></i> {course.title}</h4></div>
        <div className="flex items-center">
            <div><CourseAuthors authors={authors}/> </div>
            <div className="p-2">{displaySelectItem(selectedFmt)}</div>
            <div className="p-2">{displaySelectItem(selectedTrans)}</div>
        </div>
        
         
    </div></>)
}

export default CourseInfo
    