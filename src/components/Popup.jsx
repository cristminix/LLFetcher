
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
			course : (<CoursePage  course={course} authors={courseAuthors} sections={JSON.parse(courseSectionStr)} tocs={JSON.parse(courseTocsStr)}/>),
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
	const createCourseSections = async(csi) =>{
		let sections = []
		let tocs = {}
		if(course){
			konsole.log(csi)

			if( csi.length === 0){
				konsole.log(`Popup.createCourseSections() empty csi `)
				konsole.log(`try to load from database `)

				const sections = mSection.getList(course.id)

				for(let i in sections){
					const section = sections[i]
					tocs[section.slug] = mToc.getListBySectionId(section.id)
				}
			}
			else{
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
			
		}

		konsole.log(sections, tocs)
		setCourseSectionStr(JSON.stringify(sections))
		setCourseTocsStr(JSON.stringify(tocs))

		setNav('course')
				
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