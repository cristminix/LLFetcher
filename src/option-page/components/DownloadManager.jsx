import { Link, useLoaderData } from 'react-router-dom'
import {Component,createRef,useState,useEffect} from "react"

import QueueMan from "./downloadManager/QueueMan"
import ToolbarMan from "./downloadManager/ToolbarMan"
import StatusBarMan from "./downloadManager/StatusbarMan"
import CourseInfo from "./downloadManager/CourseInfo"
import QueueSetup from "./downloadManager/QueueSetup"

export async function loader({ params }) {
    const { slug } = params
    return { slug }
  }

const DownloadManager = ({store}) => {
    const {slug} = useLoaderData()
    const [activeCourseData, setActiveCourseData] = useState(null)
    // setup related state
    const [runSetup, setRunSetup] = useState(false)
    const [alreadySetup, setAlreadySetup] = useState(false)
    const [reconfigureSetup, setReconfigureSetup] = useState(false)
    // setup ui related state
    const [displaySetupUi, setDisplaySetupUi] = useState(false)
    const updateCourseData = async()=>{
      setActiveCourseData(null)
      setRunSetup(false)
      const courseData = await store.mCourse.getCoursePageData(slug)
      await store.mCourse.setLastSlug(slug)
      setActiveCourseData(courseData)
    }
    useEffect(()=>{
      console.log(slug)
      if(slug){
        updateCourseData()
      }
    },[slug])
    
    if(activeCourseData){
      console.log(activeCourseData)
      const {course, authors, sections, tocs}  = activeCourseData
      return (<><div className="download-manager ">
        <CourseInfo store={store} course={course}/>
        <ToolbarMan alreadySetup={alreadySetup} 
                    setAlreadySetup={setAlreadySetup}
                    reconfigureSetup={reconfigureSetup}
                    setReconfigureSetup={setReconfigureSetup}
                    setRunSetup={setRunSetup}
                    runSetup={runSetup}/>
        <QueueSetup alreadySetup={alreadySetup} 
                    reconfigureSetup={reconfigureSetup}
                    displaySetupUi={displaySetupUi}
                    runSetup={runSetup}/>
        <QueueMan alreadySetup={alreadySetup} 
                  reconfigureSetup={reconfigureSetup}/>
        <StatusBarMan store={store} 
                      course={course} 
                      alreadySetup={alreadySetup} 
                      reconfigureSetup={reconfigureSetup}/>
    </div></>)
    }else{
      return <>No data</>
    }
    
}

export default DownloadManager
    