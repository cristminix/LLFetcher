import { Link, useLoaderData } from 'react-router-dom'
import {Component,createRef,useState,useEffect} from "react"
import CourseApi from "../../course-api/CourseApi.js"
import {courseUrlFromSlug} from "../../course-api/course_fn.js"
import JsonView from 'react18-json-view'
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
	const doFetchCourse = async(courseSlug) => {
		// const courseSlug = slug
		const courseApi = new CourseApi(store)
		const course = await courseApi.getCourseInfo(courseSlug,true)
		setXmlSchema(courseApi.courseXmlDoc.html())
		const courseUrl = courseUrlFromSlug(courseSlug)

		if(course){
			console.log("Fetch course OK")
			console.log(course)
			setCourse(course)

			const authors = await courseApi.getAuthors(courseSlug)

			if(authors){
        		console.log("Fetch course authors ok")
				console.log(authors)
				setAuthors(authors)

			}else{
				console.error(`Failed to fetch course authors course : ${course.title}`)
			}

			const sections = await courseApi.getCourseSections(courseSlug)

		    if (sections){
		        console.log(`Fetch course sections ok ${sections.length}`)
				console.log(sections)
				setSections(sections)
		    }
		    else{
		        console.error(`Failed to fetch course sections course : ${course.title}`)
		    }

    		const tocs = await courseApi.getCourseTocs(courseSlug)
			let fetchStreamLocTransOncePassed = false
    		if(tocs){
				console.log(tocs)
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
						console.log("try to fetch StreamLoc Trans Once")
						const streamLocations = await courseApi.getStreamLocs(toc)
						if(streamLocations){
							console.log(`Fetch stream locations [${Object.keys(streamLocations).join(',')}]`)
						}
						else{
							console.error(`Failed to fetch stream locations toc : ${toc.title}`)

						}
						const transcripts = await courseApi.getTranscripts(toc)
						if(transcripts){
							console.log(`Fetch transcripts [${Object.keys(transcripts).join(',')}]`)
						}
						else{
							console.error(`Failed to fetch transcripts toc : ${toc.title}`)
						}
						fetchStreamLocTransOncePassed = true
					}
					
				}      
    		}else{
        		console.error(`Failed to fetch course tocs course : ${course.title}`)
    		}


		}else{
			console.error(`Failed to fetch course slug : ${courseUrl}`)
		}

	}
	useEffect(()=>{
		if(slug)
		doFetchCourse(slug)
	},[slug])
	return <>
		add : {slug}
		<div className="w-full">
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