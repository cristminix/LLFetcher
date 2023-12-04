import { useLoaderData } from 'react-router-dom'
import {Component,createRef,useState,useEffect,useRef} from "react"
import CourseApi from "../../global/course-api/CourseApi"
import {courseUrlFromSlug} from "../../global/course-api/course_fn"
import JsonView from 'react18-json-view'
import Toast from '../../components/shared/ux/Toast'
import 'react18-json-view/src/style.css'
import Button from "../../components/shared/ux/Button"
import jQuery from 'jquery'

export async function loader({ params }) {
    const { ctl,slug } = params
    return { ctl,slug }
  }
class FetchStateInfo extends Component{
	constructor(props){
		super(props)
		const {name} = props
		// console.log(name)
		this.state = {
			runLevel : 0,
			statusCode : 0,
			loading: false,
		}
	}
	resetState(){
		this.setState({
			runLevel : 0,
			statusCode : 0,
			loading: false,
		})
	}	
	setMessage(message){
		this.setState({message})
	}
	setStatusCode(statusCode){
	
		this.setState({statusCode})
	}
	setLoading(loading){
		this.setState({loading})
	}
	setRunLevel(runLevel){
		this.setState({runLevel})
	}
	render(){
		const {runLevel,statusCode,loading} = this.state
		const {onRetry,onFetch,name} = this.props
		const btnClsName = name.toLowerCase().replace(/\W/g,'-')
		let icon = "fa fa-check"
		let message = `Fetch ${name} success`
		let hasError = false
		let success = false
		if(runLevel == 0){
			icon = "fa fa-globe"
			message = `Fetch ${name}`
		}else{
			if(!loading){
				if(statusCode != 200){
					icon = "fa fa-exclamation-triangle"
					message= `Fetch ${name} failed`
					hasError = true
					success = false
				}else{
					success = true
				}
			}else{
				message= `Fetching ${name} `

				icon = "fa fa-spin fa-spinner"
			}
		}
		
		return <>
		<div className={`flex items-center w-full ${hasError ? 'text-red-200':''} ${success ? 'text-green-200':''}`}>
			<div className="p-2"><i className={icon}/></div>
			<div className="p-2">{statusCode}</div>
			<div className="p-2">{message}</div>
			<div className="p-2">
				{
					hasError ? <Button className={btnClsName} onClick={e=>onRetry(e)} caption="Retry" icon="fa fa-refresh"/>:""
				}
				{
					runLevel == 0? <Button  className={btnClsName} onClick={e=>onFetch(e)} caption="Fetch" icon="fa fa-download"/>:""
				}
				
			</div>
		</div>
		</>
	}
}
const AddCoursePage=({slug, store, config,onOk})=>{
	const [xmlSchema,setXmlSchema] = useState(null)
	const [course,setCourse] = useState(null)
	const [authors,setAuthors] = useState(null)
	const [sections,setSections] = useState(null)
	const [tocs,setTocs]=useState(null)
	const [streamLocations,setStreamLocations]=useState(null)
	const [transcripts,setTranscripts]=useState(null)
	const toastRef = useRef(null)
	const fetchInfoCiRef = useRef(null)
	const fetchInfoCcRef = useRef(null)
	let lastSlug = null
	const courseApi = new CourseApi(store)
	// const lastSlug = useMemo(slug)
	const toast= (message,t)=>{
		toastRef.current.add(message,t)
	}

	const doFetchDlConfig = async()=>{
	
		let fetchStreamLocTransOncePassed = false
		let selectToc = null
		if(sections && tocs){
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
					selectToc = toc 
					
					fetchStreamLocTransOncePassed = true
				}
				
			} 
			if(selectToc){
				toast("try to fetch StreamLoc Trans Once","normal")
				fetchInfoCcRef.current.setRunLevel(1)
				fetchInfoCcRef.current.setLoading(true)
				const streamLocations = await courseApi.getStreamLocs(selectToc)
				
				fetchInfoCcRef.current.setStatusCode(courseApi.tocXmlDocFetchStatus)

				if(streamLocations){
					setStreamLocations(streamLocations)
					// console.log(streamLocations)
					toast(`Fetch stream locations [${Object.keys(streamLocations).join(',')}]`,"success")
				}
				else{
					toast(`Failed to fetch stream locations toc : ${selectToc.title}`,"error")
					fetchInfoCcRef.current.setStatusCode(-1)

				}
				
				const transcripts = await courseApi.getTranscripts(selectToc)
				if(transcripts){
					setTranscripts(transcripts)
					toast(`Fetch transcripts [ ${Object.keys(transcripts).join(', ')} ]`,"success")
				}
				else{
					toast(`Failed to fetch transcripts toc : ${selectToc.title}`,"error")
					fetchInfoCcRef.current.setStatusCode(-1)

				}
				fetchInfoCcRef.current.setLoading(false)

			}
		}
		 
	}
	const doFetchCourse = async(courseSlug) => {
		const mCourse = store.get("Course")
		const mAuthor = store.get("Author")
		const mSection = store.get("Section")
		const mToc = store.get("Toc")
		const mStreamLoc = store.get("StreamLocation")
		const mTranscript = store.get("Transcript")
		const mExerciseFile = store.get("ExerciseFile")

		let course = null //mCourse.getBySlug(courseSlug)
		// const courseSlug = slug
		fetchInfoCiRef.current.setRunLevel(1)
		fetchInfoCiRef.current.setLoading(true)

		let courseGotFromDb = false

		if(course){
			// toast(`Course : ${courseSlug} get from mCourse`)
			// fetchInfoCiRef.current.setStatusCode(200)
			// fetchInfoCiRef.current.setLoading(false)
			// return course
			courseGotFromDb = true
		}else{
			course = await courseApi.getCourseInfo(courseSlug,true)
			
			fetchInfoCiRef.current.setStatusCode(courseApi.courseXmlDocFetchStatus)
		}
		
		
		const courseUrl = courseUrlFromSlug(courseSlug)

		if(course){
			config.getUiConfig().reloadSidebar()
			try{
				setXmlSchema(courseApi.courseXmlDoc.html())
			}catch(e){
				console.warn(e)
			}
			// console.log("Fetch course OK")
			toast("Fetch course OK","success")
			// console.log(course)
			setCourse(course)

			const authors = await courseApi.getAuthors(courseSlug)

			if(authors.length > 0){
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
    		if(tocs){
				// console.log(tocs)
				toast(`Fetch course tocs ok `,"success")
				setTocs(tocs)
				redirectToCourseManager()    
    		}else{
        		toast(`Failed to fetch course tocs course : ${course.title}`,"error")
    		}


		}else{
			toast(`Failed to fetch course slug : ${courseUrl}`,"error")
			fetchInfoCiRef.current.setStatusCode(-1)

		}
		fetchInfoCiRef.current.setLoading(false)


	}
	const redirectToCourseManager = ()=>{
		window.location.hash = `/manager/${slug}`

	}
	const autoClickFetchCourse = ()=>{
		setTimeout(()=>{
			jQuery('button.course-info').click()
		},1000)
	}
	useEffect(()=>{
		if(slug){
			if(slug != lastSlug){
				// doFetchCourse(slug)
				// setLastSlug(slug)
				setCourse(null)
				setAuthors(null)
				setSections(null)
				setTocs(null)	
				setStreamLocations(null)
				setTranscripts(null)
				if(fetchInfoCcRef.current){
					fetchInfoCcRef.current.resetState()
				}
				if(fetchInfoCiRef.current){
					fetchInfoCiRef.current.resetState()
				}
				autoClickFetchCourse()
				lastSlug = slug
			}
		}
	},[slug])
	return <>
		add : {slug}
		<div className="w-full">
			<Toast ref={toastRef}/>
    {
      // xmlSchema ? <>
      // <textarea defaultValue={xmlSchema} className="w-full dark:bg-black h-[200px] p-2 rounded-md rounded border"></textarea>
      // </>:""
    }
    </div>
	<FetchStateInfo ref={fetchInfoCiRef} name="Course Info" onFetch={e=>doFetchCourse(slug)} onRetry={e=>doFetchCourse(slug)} />
	{
		course ? <div className='w-full my-2 p-4 rounded-md border bg-gray-200'>
			<JsonView src={course} />
		</div> : ""
	}
	
	{
		authors ? <div className='w-full my-2 p-4 rounded-md border bg-gray-200'>
			<JsonView src={authors} />
		</div> : ""
	}
	{
		sections ? <div className='w-full my-2 p-4 rounded-md border bg-gray-200'>
			<JsonView src={sections} />
		</div> : ""
	}
	{
		tocs ? <div className='w-full my-2 p-4 rounded-md border bg-gray-200'>
			<JsonView src={tocs} />
		</div>: ""
	}
	{
		sections && tocs ? <>
		<FetchStateInfo ref={fetchInfoCcRef} name="Course Config" onFetch={e=>doFetchDlConfig()} onRetry={e=>doFetchDlConfig()} />

		{
			streamLocations ? <div className='w-full my-2 p-4 rounded-md border bg-gray-200'>
				<JsonView src={streamLocations} />
			</div>: ""
		}

		{
			transcripts ? <div className='w-full my-2 p-4 rounded-md border bg-gray-200'>
				<JsonView src={transcripts} />
			</div>: ""
		}	
		</> : ""
	}
	
	
	</>
}

const CoursePage = ({store,config}) => {
    const {ctl,slug} = useLoaderData()
    const [renderedPage,setRenderedPage] = useState("")
    const middleware = async(ctl,slug)=>{
    	const components = {
    		'add' : <AddCoursePage config={config} slug={slug} store={store} onOk={f=>f}/>
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