import { useEffect, useState } from "react"
import CourseAuthors from "./CourseAuthors"
import { courseUrlFromSlug, isTimeExpired } from "../../../global/course-api/course_fn"
const CourseDisplay = ({store,config,course})=>{
    let thumbnailUrl = null
    if(course){
        // console.log(course)
        const thumbnails = store.get('Thumbnail').getListByCourseId(course.id)
        // console.log(thumbnails)
        if(thumbnails.length>0){
            const thumbnail = thumbnails[thumbnails.length-1]
            if(!isTimeExpired(thumbnail.expiresAt)){
                thumbnailUrl = thumbnail.url            
            }else{
                console.error( `Thumbnail expired`)
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
        </> : <div className="h-screen">
            

<div className="max-w-lg mx-auto p-8">
  <details className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg" open>
    <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
      No course to display ?
    </summary>
    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
      <p>Start by <a className="text-blue-600 hover:text-blue-500 opacity-90 font-bold" href="https://www.linkedin.com/learning" target="_blank"><i className="fa fa-external-link"/> Browse LinkedIn Learning</a> and clicking add this course on the extension popup window.</p>
    </div>
  </details>
</div>
        </div>
    }
    </>
}

export default DisplayCourseList