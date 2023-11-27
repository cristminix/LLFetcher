import { Link, useLoaderData } from 'react-router-dom'
import {Component,createRef,useState,useEffect} from "react"
import CourseApi from "../../course-api/CourseApi.js"
import {courseUrlFromSlug} from "../../course-api/course_fn.js"

export async function loader({ params }) {
    const { ctl,slug } = params
    return { ctl,slug }
  }

const AddCoursePage=({slug, store, onOk})=>{

	const doFetchCourse = (courseSlug) => {
		// const courseSlug = slug
		const courseApi = new CourseApi(store)
		const course = courseApi.getCourseInfo(courseSlug,true)
		const courseUrl = courseUrlFromSlug(courseSlug)

		if(course){
			console.log("Fetch course OK")

			const authors = courseApi.getAuthors(courseSlug)

			if(authors){
        		console.log("Fetch course authors ok")

			}else{
				console.error(`Failed to fetch course authors course : ${course.title}`)
			}

			const sections = courseApi.getCourseSections(courseSlug)

		    if (sections){
		        console.log(`Fetch course sections ok ${sections.length}`)
		    }
		    else{
		        console.error(`Failed to fetch course sections course : ${course.title}`)
		    }

    		const tocs = courseApi.getCourseTocs(courseSlug)

    		if(tocs){
    			 for (let section in sections){
    			 	const toc_list = tocs[section.slug]
			        //  setream_locations = api_course.getStreamLocs(toc.item_star)
			        for (toc in toc_list){
			        	const stream_locations = courseApi.getStreamLocs(toc)
			            if(stream_locations){
			                console.log(`Fetch stream locations [${Object.keys(stream_locations).join(',')}]`)

			            }
			            else{
			                console.error(`Failed to fetch stream locations toc : ${toc.title}`)

			            }
			            const transcripts = courseApi.getTranscripts(toc)
			            if(transcripts){
			                console.log(`Fetch transcripts [{ [${Object.keys(transcripts).join(',')}]`)
			            }
			            else{
			                console.error(`Failed to fetch transcripts toc : ${toc.title}`)
			            }
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
	},[])
	return <>
		add : {slug}
	</>
}

const CoursePage = ({store}) => {
    const {ctl,slug} = useLoaderData()
    const [renderedPage,setRenderedPage] = useState("")
    const middleware = async(ctl,slug)=>{
    	const components = {
    		'add' : <AddCoursePage slug={slug} onOk={f=>f}/>
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