import { Link, useLoaderData } from 'react-router-dom'
import {Component,createRef,useState,useEffect,useRef,useMemo} from "react"
import CourseApi from "../../course-api/CourseApi.js"
import {courseUrlFromSlug} from "../../course-api/course_fn.js"
import JsonView from 'react18-json-view'
import Toast from '../Toast.jsx'
import 'react18-json-view/src/style.css'

export async function loader({ params }) {
    const { ctl,slug } = params
    return { ctl,slug }
  }
const AddCoursePage=({slug, store, onOk})=>{
	const [xmlSchema,setXmlSchema] = useState(null)
	const [course,setCourse] = useState(null)
	const [authors,setAuthors] = useState(null)
	const [sections,setSections] = useState(null)
	const [tocs,setTocs]=useState(null)
	const [streamLocations,setStreamLocations]=useState(null)
	const [transcripts,setTranscripts]=useState(null)
	const toastRef = useRef(null)
	let lastSlug = null

	// const lastSlug = useMemo(slug)
	const toast= (message,t)=>{
		toastRef.current.add(message,t)
	}

	const doFetchCourse = async(courseSlug) => {
		// const courseSlug = slug
		const courseApi = new CourseApi(store)
		const course = await courseApi.getCourseInfo(courseSlug,true)
		setXmlSchema(courseApi.courseXmlDoc.html())
		const courseUrl = courseUrlFromSlug(courseSlug)

		if(course){
			// console.log("Fetch course OK")
			toast("Fetch course OK","success")
			// console.log(course)
			setCourse(course)

			const authors = await courseApi.getAuthors(courseSlug)

			if(authors){
        		toast("Fetch course authors ok","success")
				// console.log(authors)
				setAuthors(authors)

			}else{
				toast(`Failed to fetch course authors course : ${course.title}`,"error")
			}

			const sections = await courseApi.getCourseSections(courseSlug)

		    if (sections){
		        toast(`Fetch course sections ok ${sections.length}`,"success")
				// console.log(sections)
				setSections(sections)
		    }
		    else{
		        toast(`Failed to fetch course sections course : ${course.title}`,"error")
		    }

    		const tocs = await courseApi.getCourseTocs(courseSlug)
			let fetchStreamLocTransOncePassed = false
    		if(tocs){
				// console.log(tocs)
				toast(`Fetch course tocs ok `,"success")
				setTocs(tocs)
				for (const section of sections){
					if(fetchStreamLocTransOncePassed){
						break
					}
					const tocList = tocs[section.slug]
					//  setream_locations = api_course.getStreamLocs(toc.item_star)
					for (const toc of tocList){
						if(fetchStreamLocTransOncePassed){
							break
						}
						toast("try to fetch StreamLoc Trans Once","normal")
						const streamLocations = await courseApi.getStreamLocs(toc)
						if(streamLocations){
							setStreamLocations(streamLocations)
							// console.log(streamLocations)
							toast(`Fetch stream locations [${Object.keys(streamLocations).join(',')}]`,"success")
						}
						else{
							toast(`Failed to fetch stream locations toc : ${toc.title}`,"error")

						}
						const transcripts = await courseApi.getTranscripts(toc)
						if(transcripts){
							setTranscripts(transcripts)
							toast(`Fetch transcripts [${Object.keys(transcripts).join(',')}]`,"success")
						}
						else{
							toast(`Failed to fetch transcripts toc : ${toc.title}`,"error")
						}
						fetchStreamLocTransOncePassed = true
					}
					
				}      
    		}else{
        		toast(`Failed to fetch course tocs course : ${course.title}`,"error")
    		}


		}else{
			toast(`Failed to fetch course slug : ${courseUrl}`,"error")
		}

	}
	useEffect(()=>{
		if(slug){
			if(slug != lastSlug){
				doFetchCourse(slug)
				// setLastSlug(slug)
				lastSlug = slug
			}
		}
	},[slug])
	return <>
		add : {slug}
		<div className="w-full">
			<Toast ref={toastRef}/>
    {
      xmlSchema ? <>
      <textarea defaultValue={xmlSchema} className="w-full dark:bg-black h-[200px] p-2 rounded-md rounded border"></textarea>
      </>:""
    }
    </div>
	<div className='w-full my-2 p-4 rounded-md border bg-gray-200'>
		<JsonView src={course} />
	</div>
	<div className='w-full my-2 p-4 rounded-md border bg-gray-200'>
		<JsonView src={authors} />
	</div>
	<div className='w-full my-2 p-4 rounded-md border bg-gray-200'>
		<JsonView src={sections} />
	</div>
	<div className='w-full my-2 p-4 rounded-md border bg-gray-200'>
		<JsonView src={tocs} />
	</div>
	<div className='w-full my-2 p-4 rounded-md border bg-gray-200'>
		<JsonView src={streamLocations} />
	</div>
	<div className='w-full my-2 p-4 rounded-md border bg-gray-200'>
		<JsonView src={transcripts} />
	</div>
	</>
}

const CoursePage = ({store}) => {
    const {ctl,slug} = useLoaderData()
    const [renderedPage,setRenderedPage] = useState("")
    const middleware = async(ctl,slug)=>{
    	const components = {
    		'add' : <AddCoursePage slug={slug} store={store} onOk={f=>f}/>
    	}
    	// console.log(ctl,slug)
    	setRenderedPage(components[ctl])
    }
    useEffect(()=>{
    	if(ctl && slug){
    		middleware(ctl,slug)
    	}
    },[ctl,slug])

    return <>
    	{renderedPage}

    </>
}

export default CoursePage