
import {useState, useEffect} from "react"

import WelcomePage from "./WelcomePage"
import CoursePage from "./CoursePage"
import DownloadPage from "./DownloadPage"
import HelpPage from "./DownloadPage"
import OptionPage from "./OptionPage"
import PageNavigation from "./PageNavigation"
import "./styles/Popup.css"
import App from "../models/App"
import Author from "../models/Author"


const mApp = await App.getInstance()
const mAuthor = await Author.getInstance()
console.log(mApp)
await mApp.init()
const Popup = ({}) => {
	const [nav, setNav] = useState('welcome')
	const [course, setCourse] = useState(null)
	const [courseAuthors, setCourseAuthors] = useState(null)

	const setPage = () => {
		const pages = {
			welcome : (<WelcomePage setNav={setNav} onSelectCourse={onSelectCourse}/>),
			course : (<CoursePage setNav={setNav} course={course} authors={courseAuthors}/>),
			download : (<DownloadPage setNav={setNav}/>),
			help : (<HelpPage setNav={setNav}/>),
			option : (<OptionPage setNav={setNav}/>)
		}
	
		return pages[nav]
	}

	const onNavUpdate = navName => {
		setNav(navName)
	}
	const onSelectCourse = (course, authors) => {
		// console.log(authors)
		setCourse(course)
		if(!authors){
			authors = mAuthor.getListByCourseId(course.id)
		}
		setCourseAuthors(authors)
		setNav('course')
	}
	return (<div className="app-container">
		{
			setPage() 
		}
	   
	    <PageNavigation onNavUpdate={onNavUpdate}  nav={nav}/>

	  </div>)
}

export default Popup