import { Link, useLoaderData } from 'react-router-dom'
import {Component,createRef,useState,useEffect, useRef} from "react"

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
    const queueManRef = useRef(null)
    const {slug} = useLoaderData()
    const [activeCourseData, setActiveCourseData] = useState(null)
    // setup related state
    const [runSetup, setRunSetup] = useState(false)
    const [alreadySetup, setAlreadySetup] = useState(false)
    const [reconfigureSetup, setReconfigureSetup] = useState(false)
    // setup ui related state
    const [displaySetupUi, setDisplaySetupUi] = useState(false)
    // dmsetup database
    const [dmsetup, setDmsetup] = useState(null)
    const mDMSetup = store.get("DMSetup")

    // queueRelatedState
    const [queueStarted, setQueueStarted] = useState(false)
    const [queueFinished, setQueueFinished] = useState(false)

    const updateCourseData = async()=>{
      setActiveCourseData(null)
      setRunSetup(false)
      const courseData = await store.mCourse.getCoursePageData(slug)
      await store.mCourse.setLastSlug(slug)
      setActiveCourseData(courseData)

      setDmsetup(null)
      const {course} = courseData
      const savedDmsetup = mDMSetup.getByCourseId(course.id)
      if(savedDmsetup){
          setDmsetup(savedDmsetup)
          if(savedDmsetup.status == 2){
            setAlreadySetup(true)
          }
      }
    }

    const stopDownloadQueue = async()=>{
      setQueueStarted(false)
    }
    const startDownloadQueue = async()=>{
      setQueueStarted(true)

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
                    runSetup={runSetup}
                    course={course}
                    dmsetup={dmsetup}
                    queueStarted={queueStarted}
                    startDownloadQueue={startDownloadQueue}
                    stopDownloadQueue={stopDownloadQueue}
                    queueFinished={queueFinished}
                    setQueueFinished={setQueueFinished}
                    queueManRef={queueManRef}/>
        <QueueSetup alreadySetup={alreadySetup} 
                    setAlreadySetup={setAlreadySetup}
                    reconfigureSetup={reconfigureSetup}
                    setReconfigureSetup={setReconfigureSetup}
                    displaySetupUi={displaySetupUi}
                    runSetup={runSetup}
                    course={course}
                    sections={sections}
                    tocs={tocs}
                    store={store}
                    dmsetup={dmsetup}
                    />
        <QueueMan alreadySetup={alreadySetup} 
                  reconfigureSetup={reconfigureSetup}
                  course={course}
                  sections={sections}
                  tocs={tocs}
                  store={store}
                  queueStarted={queueStarted} 
                  stopDownloadQueue={stopDownloadQueue}
                  queueFinished={queueFinished}
                  setQueueFinished={setQueueFinished}
                  ref={queueManRef}/>
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
    