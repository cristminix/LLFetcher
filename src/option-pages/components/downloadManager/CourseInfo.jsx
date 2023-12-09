import CourseAuthors from "./CourseAuthors"
import {courseUrlFromSlug,authorUrlFromSlug} from "../../../global/course-api/course_fn"
import { getCode, getName } from 'country-list'

const CourseInfo = ({store, course, authors,selectedFmt,selectedTrans}) => {
    // console.log(course)
    const displaySelectItem = (item,t=null) => {
        if(typeof item === 'string'){
            if(item.match(/^select/i)){
                return ""
            }
        }
        if(!t){
            return item
        }
        if(item.match(/^\d/i)){
            return item+"p"
        }
    }
    const countryCode = displaySelectItem(selectedTrans).toUpperCase()
    const countryName = getName(countryCode)
    const countryFlagUrl = `https://purecatamphetamine.github.io/country-flag-icons/3x2/${countryCode}.svg`

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
            <div className="pl-2">{displaySelectItem(selectedFmt,'fmt')}</div>
            <div className="pl-2">
                {
                    countryCode?<img title={countryName} className="w-[24px]" src={countryFlagUrl} alt={countryName}/>:""
                }
                
            </div>
        </div>
        
         
    </div></>)
}

export default CourseInfo
    