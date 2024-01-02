import {useLoaderData } from 'react-router-dom'
import {useState,useEffect, useRef} from "react"

import QueueMan from "./downloadManager/QueueMan"
import ToolbarMan from "./downloadManager/ToolbarMan"
import StatusBarMan from "./downloadManager/StatusbarMan"
import CourseInfo from "./downloadManager/CourseInfo"
import QueueSetup from "./downloadManager/QueueSetup"
import {makeDelay} from "../../global/fn"
import Toast from '../../components/shared/ux/Toast'
import DisplayCourseList from './downloadManager/DisplayCourseList'
export async function loader({ params }) {
    const { slug } = params
    return { slug }
  }

const delay = makeDelay(7000)
const DownloadManager = ({store, config}) => {
    const toastRef = useRef(null)
    const queueManRef = useRef(null)
    const statusBarManRef = useRef(null)
    const loaderData = useLoaderData()
    const slug = loaderData ? loaderData.slug : null
    const [activeCourseData, setActiveCourseData] = useState(null)
    // setup related state
    const [runSetup, setRunSetup] = useState(false)
    const [alreadySetup, setAlreadySetup] = useState(false)
    const [reconfigureSetup, setReconfigureSetup] = useState(false)
    // setup ui related state
    const [displaySetupUi, setDisplaySetupUi] = useState(false)
    // dmsetup database
    const [dmsetup, setDmsetup] = useState(null)
    const [refreshTable,setRefreshTable]=useState(false)
    const mDMSetup = store.get("DMSetup")

    // queueRelatedState
    const [queueStarted, setQueueStarted] = useState(false)
    const [queueFinished, setQueueFinished] = useState(false)
    const [queueResume, setQueueResume] = useState(false)

    // setupRelatedState
    const selectFmt = "Select Media Format"
    const selectTrans = "Select Transcript Language"
    const [availableFmt, setAvailableFmt] = useState([])
    const [selectedFmt, setSelectedFmt] = useState(selectFmt)

    const [availableTrans, setAvailableTrans] = useState([])
    const [selectedTrans, setSelectedTrans] = useState(selectTrans)

    const toast= (message,t)=>{
      if(toastRef.current){
        toastRef.current.add(message,t)
      }
    }
  
    /**
     * Logs a message to the status bar.
     * 
     * @param {string} t - The message text 
     * @param {any} data - Optional data to log with the message
     */
  const logStatusBar = async (t, data, p1, p2, p3) => {
    statusBarManRef.current.log(t, data)
  }
  /**
   * Clears the status bar message after a short delay.
   * 
   * This allows the message to remain visible for a brief time before being cleared.
   */
  const clearStatusBar = async () => {
    delay(() => {
      if(statusBarManRef.current){
        statusBarManRef.current.clear()
      }

    })
  }
    /**
     * updateCourseData fetches the latest course data for the given course slug, including sections, TOCs, etc.
     * It initializes and updates component state with the latest data.
     * 
     * This includes resetting some state values like runSetup, alreadySetup, etc.
     * It will also check for any existing download manager setup for this course.
     * 
     * If a setup exists, it will update state with that data like setting alreadySetup, queueFinished, etc.
     * 
     * This allows the component to show the latest status when navigating between courses.
    */
  const updateCourseData = async () => {
    setActiveCourseData(null)
    setRunSetup(false)
    setAlreadySetup(false)
    setDmsetup(null)
    setQueueResume(false)
    setQueueFinished(false)
    setReconfigureSetup(false)
    setAvailableFmt([])
    setSelectedFmt(selectFmt)


      const courseData = await store.mCourse.getCoursePageData(slug)
      await store.mCourse.setLastSlug(slug)

      // setTimeout(()=>{
        setActiveCourseData(courseData)
        setDmsetup(null)

      
        const {course} = courseData
        const savedDmsetup = mDMSetup.getByCourseId(course.id)

        document.title =  `${course.title} - LLFetcher Download Manager`

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

    /**
     * Stops the download queue by setting the queueStarted state to false.
     * This will pause the queue if it is running.
    */
  const stopDownloadQueue = async () => {
    setQueueStarted(false)
  }
  /**
   * Starts the download queue by setting the queueStarted state to true.
   * This will begin downloading videos if the queue is not already running.
   */
  const startDownloadQueue = async () => {
    setQueueStarted(true)

  }
  /**
   * Resets the download queue by setting queueFinished and queueResume to false, 
   * updating the dmsetup finished flag to false, and saving to storage.
   * This will clear the finished state and allow the queue to be started again.
  */
  const resetDownloadQueue = async () => {
    setQueueFinished(false)
    setQueueResume(false)

    // setRunSetup(false)
    // setAlreadySetup(false)
      // if(dmsetup){
        const finished = false
        const status= 0
        dmsetup.finished = finished
        // dmsetup.status=status
        setDmsetup(dmsetup)
        const {course} = activeCourseData
        await mDMSetup.updateByCourseId(course.id,{finished})

      // }


    }
    const onCourseslugChange =  (slug) => {
      console.log(slug)
      if(slug){
        updateCourseData()
      }
    }
    useEffect(()=>{
      onCourseslugChange(slug)
    },[slug])
    
    const onQueueFinished = (queueFinished_l) => {
      console.log(queueFinished_l)
      const updateDMSetup = async (course)=>{
        const finished = true
        const dmsetup = await mDMSetup.updateByCourseId(course.id, {finished})
        
        dmsetup.finished = finished
        setDmsetup(dmsetup)
      }
      if(queueFinished_l){
        console.log(`Updating dmsetup.finished to ${queueFinished_l}`)
        const {course} = activeCourseData
        updateDMSetup(course)
      }
    }

    useEffect(()=>{
      onQueueFinished(queueFinished)
    },[queueFinished])
    

    if(activeCourseData){
      console.log(activeCourseData)
      const {course, authors, sections, tocs}  = activeCourseData
      return (<>
      
      <div className="download-manager">
        <Toast ref={toastRef}/>
        <CourseInfo store={store} course={course} authors={authors} selectedFmt={selectedFmt} selectTrans={selectTrans} selectedTrans={selectedTrans} />
        <ToolbarMan alreadySetup={alreadySetup} toast={toast} 
                    setAlreadySetup={setAlreadySetup}
                    reconfigureSetup={reconfigureSetup}
                    setReconfigureSetup={setReconfigureSetup}
                    setRunSetup={setRunSetup}
                    runSetup={runSetup}
                    course={course}
                    sections={sections}
                    tocs={tocs}
                    dmsetup={dmsetup}
                    setAvailableFmt={setAvailableFmt}
                    setDmsetup={setDmsetup}
                    selectedFmt={selectedFmt}
                    setSelectedFmt={setSelectedFmt}
                    queueStarted={queueStarted}
                    startDownloadQueue={startDownloadQueue}
                    stopDownloadQueue={stopDownloadQueue}
                    queueFinished={queueFinished}
                    setQueueFinished={setQueueFinished}
                    queueManRef={queueManRef}
                    queueResume={queueResume}
                    logStatusBar={logStatusBar} store={store}
                    clearStatusBar={clearStatusBar}/>
        <QueueSetup alreadySetup={alreadySetup} toast={toast} setRefreshTable={setRefreshTable}
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
                    setDmsetup={setDmsetup}
                    
                    availableFmt={availableFmt} 
                    setAvailableFmt={setAvailableFmt}
                    selectedFmt={selectedFmt}
                    
                    availableTrans={availableTrans} 
                    setAvailableTrans={setAvailableTrans}
                    selectedTrans={selectedTrans}

                    setSelectedFmt={setSelectedFmt}
                    setSelectedTrans={setSelectedTrans}

                    selectFmt={selectFmt}
                    selectTrans={selectTrans}

                    logStatusBar={logStatusBar}
                    clearStatusBar={clearStatusBar}
                    />
        <QueueMan alreadySetup={alreadySetup} toast={toast} dmsetup={dmsetup} refreshTable={refreshTable}
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
                  selectedFmt={selectedFmt} 
                  logStatusBar={logStatusBar}
                  clearStatusBar={clearStatusBar}/>
        <StatusBarMan store={store} toast={toast}
                      course={course} 
                      alreadySetup={alreadySetup} 
                      reconfigureSetup={reconfigureSetup}
                      ref={statusBarManRef}/>
    </div></>)
    }else{
      if(slug){
        return <><i className='fa fa-spin fa-spinner'/></>
      }else{
        return <DisplayCourseList store={store} config={config} />
      }
    }
    
}

export default DownloadManager
    