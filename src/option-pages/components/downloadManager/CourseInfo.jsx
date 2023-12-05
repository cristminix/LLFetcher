import CourseAuthors from "./CourseAuthors"
import {courseUrlFromSlug,authorUrlFromSlug} from "../../../global/course-api/course_fn"
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
        <div className="flex items-center">
            <div>
                <h4 className="text-2xl"><i className="bi bi-bookmark"></i> {course.title}</h4>
            </div>
            <div className="p-2">
                <a className="" href={courseUrlFromSlug(course.slug)} target="_blank"><i className="fa fa-external-link"/></a>
            </div>
        </div>
        <div className="flex items-center">
            <div>
                <CourseAuthors authors={authors}/> 
            </div>
            <div className="p-2">{displaySelectItem(selectedFmt)}</div>
            <div className="p-2">{displaySelectItem(selectedTrans)}</div>
        </div>
        
         
    </div></>)
}

export default CourseInfo
    