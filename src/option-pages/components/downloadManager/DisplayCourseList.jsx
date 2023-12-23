import { useEffect, useState } from "react"
import CourseAuthors from "./CourseAuthors"
import { courseUrlFromSlug, isTimeExpired } from "../../../global/course-api/course_fn"
const CourseDisplay = ({store,config,course})=>{
    let thumbnailUrl = null
    if(course){
        console.log(course)
        const thumbnails = store.get('Thumbnail').getListByCourseId(course.id)
        // console.log(thumbnails)
        if(thumbnails.length>0){
            const thumbnail = thumbnails[thumbnails.length-1]
            if(!isTimeExpired(thumbnail.expiresAt)){
                thumbnailUrl = thumbnail.url            
            }
        }
    }
    const authors = store.get('Author').getListByCourse(course)
    return <>
    <div className="course-display flex gap-2 mb-2 bg-gray-50 dark:bg-slate-800 p-4">
        {
            thumbnailUrl?<div style={{backgroundImage:`url('${thumbnailUrl}'`}} className={`flex-none w-[256px] bg-cover thumbnail-container rounded rounded-md  `}>
                
            </div>:null
        }    
        <div className="">
        <div className="pl-2">
            <div>
                <h4 className="text-2xl">  <a className="" href={`#/manager/${course.slug}`}>{course.title}</a></h4>
                <CourseAuthors authors={authors} noLinks={true}/> 

                <p className="pt-2">{course.description.replace('com.linkedin.learning.api.common.AttributedText','')}</p>

            </div>
            <div className="p-2">
               {/* <i className="fa fa-external-link"/></a> */}
            </div>
        </div>
        </div>
    </div>
    </>
}
const DisplayCourseList=({store,config})=>{
    const [courseList,setCourseList] = useState([])
    const [initial,setInitial] = useState(true)
    
    const loadCourseList=async()=>{
        const courses = store.get('Course').getList()
        setCourseList(courses)
        // setInitial(false)
    }

    useEffect(()=>{

    },[courseList])
    
    useEffect(()=>{
        loadCourseList()
    },[initial])
    return <>
    {
        courseList.length > 0 ? <>
        {
            courseList.map((course,index)=>{
                return <CourseDisplay key={index} course={course} store={store} config={config}/>
            })
        }
        </> : ''
    }
    </>
}

export default DisplayCourseList