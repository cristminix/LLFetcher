import { useEffect, useState } from "react"
import Queue,{QueueState,QueueData} from "./queue-man/Queue"
import { useLocation } from "react-router-dom"
import CourseApi from "../../../global/course-api/CourseApi"
import { timeout } from "../../../global/fn"


const QueueMan= ({store, config})=>{
    const location = useLocation()
    const qs= location.search
    const qp= new URLSearchParams(qs)
    const [slug,setSlug] = useState(qp.get('slug'))
    const [course,setCourse] = useState(null)
    const [sections,setSections] = useState(null)
    const [tocs,setTocs] = useState(null)
    const [streamLocations,setStreamLocations] = useState(null)
    const [transcripts,setTranscripts] = useState(null)
    const [courseApi,setCourseApi] = useState(null)
    const [tocArr,setTocArr] = useState(null)
    const [activeQueue,setActiveQueue] = useState(0)
    // const [queueData,setQueueData]=useState(null)
    let lastSlug = ''
    let queueMain = null
    let queueInterupted = new Queue()
    let queueStarted = false

    let queueData = null

    const loadCourseData = async()=>{
        await generateQueueData()
    }
   
    const generateQueueData = async()=>{
        const courseApi = new CourseApi(store)
        const course = await courseApi.getCourseInfo(slug)
        const sections = await courseApi.getCourseSections(slug)
        const tocs = await courseApi.getCourseTocs(slug)
        setCourse(course)
        setSections(sections)
        setTocs(tocs)
        setCourseApi(courseApi)
        queueData = new QueueData(sections, tocs, course)
        console.log(queueData)
        // setTocArr(Object.assign([],queueData.getTocArr()))
        queueMain = queueData.cloneQueue()
        console.log(queueMain)
        // const pk = queueMain.dequeue()
        // console.group(pk)
        if(!queueStarted)
            startQueue()
        
    }
    const startQueue = async(f) =>{
        if(queueStarted){
            console.warn("Queue already started")
            return
        }
        queueStarted = true
        while(!queueMain.isEmpty()){
            if(!queueStarted){
                break
            }

            let {idx,state} = queueMain.dequeue()
            console.log(idx)
            if(queueData){
                let toc = queueData.getByIdx(idx)
                let currentQueue = `${idx+1} : ${toc.title} ... ${state}`
                console.log(toc)
                setActiveQueue(currentQueue)

            }
            await timeout(84)

        }
        queueStarted = false

    }
    useEffect(()=>{
        if(slug && lastSlug !== slug){
            lastSlug = slug
            loadCourseData()
        }
        return f => {
            queueStarted =false
        }
    },[slug]) 
 
    return <>

    {activeQueue}
    </>
}

export default QueueMan