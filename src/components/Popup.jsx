
import {useState, useEffect} from "react"

import WelcomePage from "./WelcomePage"
import CoursePage from "./CoursePage"
import DownloadPage from "./DownloadPage"
import HelpPage from "./DownloadPage"
import OptionPage from "./OptionPage"
import PageNavigation from "./PageNavigation"
import SettingPage from "./SettingPage"
import "./styles/Popup.css"
import App from "../models/App"
import Author from "../models/Author"
import Section from "../models/Section"
import  {
	onMessage,
	slugify,
	sendMessage
} from "./fn"

const mApp = await App.getInstance()
const mAuthor = await Author.getInstance()
const mSection = await Section.getInstance()
// console.log(mApp)
await mApp.init()
let onMessageAttached = false

const Popup = ({}) => {
	const [nav, setNav] = useState('welcome')
	const [course, setCourse] = useState(null)
	const [courseAuthors, setCourseAuthors] = useState(null)
	const [courseSectionInfoStr, setCourseSectionInfoStr] = useState('[]')

	const setPage = () => {
		const pages = {
			welcome : (<WelcomePage onSelectCourse={onSelectCourse}/>),
			course : (<CoursePage  course={course} authors={courseAuthors}/>),
			download : (<DownloadPage />),
			help : (<HelpPage />),
			setting : (<SettingPage />),
			option : (<OptionPage />)
		}
	
		return pages[nav]
	}
	
	const onNavUpdate = navName => {
		setNav(navName)
	}
	const onCommand = (evt, source) => {
		// console.log(evt)
    	if(evt.name === 'cmd.getCourseSections'){
    		console.log(evt, source)

			// setNav('course')
			setCourseSectionInfoStr(JSON.stringify(evt.data))

    	}
	}
	const onPopupOpen = () => {
		// sendMessage('cmd.validCoursePage')
	}
	const onSelectCourse = (course, authors) => {
		// console.log(authors)
		setCourse(course)
		if(!authors){
			authors = mAuthor.getListByCourseId(course.id)
		}
		setCourseAuthors(authors)
		sendMessage('cmd.getCourseSections', course.urn)
	}
	const createCourseTocs = async(tocs) => {

	}
	const createCourseSections = async(csi) =>{
		if(course){
			console.log(csi)
			for(let i in csi){
				let section = csi[i]
				const items = section.items
				section = await mSection.create(section.title, slugify(section.title), course.id)
				await createCourseTocs(items, section)
			}
		}
				
	}
	useEffect(()=>{
		if(!onMessageAttached){
			onMessage((evt, source)=>{
				if( evt.name.match(/^cmd\./) ){
					onCommand(evt, source)
				}
		    })
		    onMessageAttached = true
			onPopupOpen()
		}
	},[])
	
	useEffect(() => {
		
		try{
			const csi = JSON.parse(courseSectionInfoStr)
			createCourseSections(csi)
		}catch(e){
			console.log(csi)
		}
		
	},[courseSectionInfoStr,course])

	return (<div className="app-container">
		{
			setPage() 
		}
	   
	    <PageNavigation onNavUpdate={onNavUpdate}  nav={nav}/>

	  </div>)
}

export default Popup