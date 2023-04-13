
import {useState, useEffect} from "react"

import WelcomePage from "./WelcomePage"
import CoursePage from "./CoursePage"
import DownloadPage from "./DownloadPage"
import HelpPage from "./DownloadPage"
import OptionPage from "./OptionPage"
import PageNavigation from "./PageNavigation"
import "./styles/Popup.css"

const pages = {
	welcome : (<WelcomePage/>),
	course : (<CoursePage/>),
	download : (<DownloadPage/>),
	help : (<HelpPage/>),
	option : (<OptionPage/>)
}
const Popup = ({}) => {
	const [nav, setNav] = useState('welcome')

	const setPage = () => {
		return pages[nav]
	}

	const onNavUpdate = navName => {
		setNav(navName)
	}
	return (<div className="app-container">
		{
			setPage(nav) 
		}
	   
	    <PageNavigation onNavUpdate={onNavUpdate} nav={nav}/>

	  </div>)
}

export default Popup