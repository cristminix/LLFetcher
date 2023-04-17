
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
import Toc from "../models/Toc"
import Course from "../models/Course"
import  {
	onMessage,
	slugify,
	sendMessage,
	konsole
} from "./fn"

const mApp = await App.getInstance()
const mAuthor = await Author.getInstance()
const mSection = await Section.getInstance()
const mToc = await Toc.getInstance()
const mCourse = await Course.getInstance()
// console.log(mApp)
await mApp.init()
let onMessageAttached = false

const Popup = ({}) => {
	const [nav, setNav] = useState('welcome')
	const [course, setCourse] = useState(null)
	const [courseAuthors, setCourseAuthors] = useState(null)
	const [courseSectionInfoStr, setCourseSectionInfoStr] = useState('[]')
	const [courseSectionStr, setCourseSectionStr] = useState('[]')
	const [courseTocsStr, setCourseTocsStr] = useState('{}')

	const setPage = () => {
		const pages = {
			welcome : (<WelcomePage onSelectCourse={onSelectCourse}/>),
			course : (<CoursePage setNav={setNav} course={course} authors={courseAuthors} sections={JSON.parse(courseSectionStr)} tocs={JSON.parse(courseTocsStr)}/>),
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
    		// console.log(evt, source)

			
			setCourseSectionInfoStr(JSON.stringify(evt.data))
			createCourseSections(evt.data)

    	}
	}
	const onPopupOpen = () => {
		// sendMessage('cmd.validCoursePage')
	}
	const onSelectCourse = async (_course_, authors = null, donstSendMessage = false) => {
		// console.log(authors)
		setCourse(_course_)
		if(!authors){
			authors = mAuthor.getListByCourse(_course_)
		}
		setCourseAuthors(authors)
		if(donstSendMessage){
			await loadCourseSections(_course_)
		}else{
			sendMessage('cmd.getCourseSections', _course_.urn)
		}
	}
	const createCourseTocs = async(items, section) => {
		const tocs = []
		const tocIds = []
		for(let i in items){
			const {title, slug, duration} = items[i]
			const captionFmt = ""
			const captionUrl = ""
			const url = ""
			const toc = await mToc.create(title, slug, url, duration, captionUrl, captionFmt, section.id)
			tocs.push(toc)
			tocIds.push(toc.id)
		}
		const newSection = await mSection.updateTocIds(section.id, tocIds)
		return [newSection, tocs]
	}
	const loadCourseSections = async (_course_) => {
		konsole.log(`Popup.createCourseSections() empty csi `)
		konsole.log(`try to load from database `)
		if(_course_){

			const sections = mSection.getList(_course_.id)
			let tocs = {}

			for(let i in sections){
				const section = sections[i]
				tocs[section.slug] = mToc.getListBySectionId(section.id)
			}
			await updateCourseData(_course_, sections, tocs)

		}
	}
	const updateCourseData = async (_course_, sections, tocs) => {
		setCourseSectionStr(JSON.stringify(sections))
		setCourseTocsStr(JSON.stringify(tocs))
		if(_course_.slug !== '')
			await mCourse.setLastSlug(_course_.slug)
		
		konsole.log(_course_,sections, tocs)
		setCourse(_course_)
		setNav('course')
	}
	const createCourseSections = async(csi) =>{
		if(course){
			let sections = []
			let tocs = {}
			if( csi.length > 0){
				for(let i in csi){
					const {title,items} = csi[i]
					const section = await mSection.create(title, slugify(title), course.id)
					console.log(section)
					const [newSection, newTocs] = await createCourseTocs(items, section)
					console.log(newSection)
					sections.push(newSection)
					tocs[section.slug] = newTocs
				}
			}
			await updateCourseData(course, sections, tocs)
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
	
	// useEffect(() => {
		
	// 	try{
	// 		const csi = JSON.parse(courseSectionInfoStr)
	// 		createCourseSections(csi)
	// 	}catch(e){
	// 		console.log(csi)
	// 	}
		
	// },[courseSectionInfoStr,course])

	return (<div className="app-container">
		{
			setPage() 
		}
	   
	    <PageNavigation onNavUpdate={onNavUpdate}  nav={nav}/>

	  </div>)
}

export default Popup