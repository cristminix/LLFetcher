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
    const [queueResume, setQueueResume] = useState(false)

    // setupRelatedState
    const selectFmt = "Select Format"
    const [availableFmt, setAvailableFmt] = useState([])
    const [selectedFmt, setSelectedFmt] = useState(selectFmt)

    const updateCourseData = async()=>{
      setActiveCourseData(null)
      setRunSetup(false)
      setAlreadySetup(false)
      setDmsetup(null)
      setQueueResume(false)
      setQueueFinished(false)


      const courseData = await store.mCourse.getCoursePageData(slug)
      await store.mCourse.setLastSlug(slug)

      // setTimeout(()=>{
        setActiveCourseData(courseData)

      
        const {course} = courseData
        const savedDmsetup = mDMSetup.getByCourseId(course.id)
        if(savedDmsetup){
            console.log(savedDmsetup)
            setDmsetup(savedDmsetup)
            if(savedDmsetup.status == 2){
              setAlreadySetup(true)
            }
            if(savedDmsetup.finished){
              setQueueFinished(true)
            }
        }
      // },3000)
      
    }

    const stopDownloadQueue = async()=>{
      setQueueStarted(false)
    }
    const startDownloadQueue = async()=>{
      setQueueStarted(true)

    }
    const resetDownloadQueue = async() =>{
      setQueueFinished(false)
      setQueueResume(false)

      // setRunSetup(false)
      // setAlreadySetup(false)
      // if(dmsetup){
        const finished = false
        dmsetup.finished = finished
        setDmsetup(dmsetup)
        const {course} = activeCourseData
        await mDMSetup.updateByCourseId(course.id,{finished})

      // }


    }
    useEffect(()=>{
      console.log(slug)
      if(slug){
        updateCourseData()
      }
    },[slug])
    
    useEffect(()=>{
      console.log(queueFinished)

      if(queueFinished){
        console.log(`Updating dmsetup.finished to ${queueFinished}`)
        const {course} = activeCourseData
        const finished = true
        mDMSetup.updateByCourseId(course.id, {finished})
      }
    },[queueFinished])

    if(activeCourseData){
      console.log(activeCourseData)
      const {course, authors, sections, tocs}  = activeCourseData
      return (<><div className="download-manager ">
        <CourseInfo store={store} course={course} authors={authors}/>
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
                    queueManRef={queueManRef}
                    queueResume={queueResume}/>
        <QueueSetup alreadySetup={alreadySetup} 
                    setAlreadySetup={setAlreadySetup}
                    reconfigureSetup={reconfigureSetup}
                    setReconfigureSetup={setReconfigureSetup}
                    displaySetupUi={displaySetupUi}
                    runSetup={runSetup}
                    setRunSetup={setRunSetup}
                    course={course}
                    sections={sections}
                    tocs={tocs}
                    store={store}
                    dmsetup={dmsetup}
                    availableFmt={availableFmt} 
                    setAvailableFmt={setAvailableFmt}
                    selectedFmt={selectedFmt} 
                    setSelectedFmt={setSelectedFmt}
                    selectFmt={selectFmt}
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
                  resetDownloadQueue={resetDownloadQueue}
                  ref={queueManRef}
                  setQueueResume={setQueueResume}
                  selectedFmt={selectedFmt} />
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
    