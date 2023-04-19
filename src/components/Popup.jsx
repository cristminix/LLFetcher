
import React, {useState, useEffect} from "react"

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
import ComponentWithMessaging from "./ComponentWithMessaging"

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

class PopupAction extends ComponentWithMessaging{
	constructor(props){
		super(props)
		this.state = {
			course : null,
			courseAuthors : null,
			courseSectionInfoStr : '[]',
			courseSectionStr : '[]',
			courseTocsStr : '[]',
			nav : 'welcome'
		}
	}

	onNavUpdate(nav){
		this.setState({nav})
	}
	// onMessageCommand(evt, source){
    // 	if(evt.name === 'cmd.getCourseSections'){
	// 		const csi = evt.data
	// 		const courseSectionInfoStr = JSON.stringify(csi)
	// 		this.setState({courseSectionInfoStr})
	// 		this.createCourseSections(csi)
    // 	}
	// }
	async createCourseTocs(items, section){
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

	async loadCourseSections(){
		konsole.log(`Popup.createCourseSections() empty csi `)
		konsole.log(`try to load from database `)
		if(this.state.course){
			const sections = mSection.getList(this.state.course.id)
			let tocs = {}

			for(let i in sections){
				const section = sections[i]
				tocs[section.slug] = mToc.getListBySectionId(section.id)
			}
			await this.updateCourseData(sections, tocs)

		}
	}
	async createCourseSections(csi){
		if(this.state.course){
			let sections = []
			let tocs = {}
			if( csi.length > 0){
				for(let i in csi){
					const {title,items} = csi[i]
					const section = await mSection.create(title, slugify(title), this.state.course.id)
					// console.log(section)
					const [newSection, newTocs] = await this.createCourseTocs(items, section)
					// console.log(newSection)
					sections.push(newSection)
					tocs[section.slug] = newTocs
				}
			}
			await this.updateCourseData(sections, tocs)
		}

		
				
	}
	async updateCourseData(sections, tocs){
		const courseSectionStr = JSON.stringify(sections)
		const courseTocsStr = JSON.stringify(tocs)
		
		this.setState({courseSectionStr, courseTocsStr},async()=>{
			if(this.state.course.slug !== ''){
				await mCourse.setLastSlug(this.state.course.slug)
				
				this.setState({nav : 'course'},()=>{
					const {course,sections, tocs} = this.state
					konsole.log(course,sections, tocs)
				})
			}
		})
	}
}

class Popup extends PopupAction{
	setPage(){
		const pages = {
			welcome : (<WelcomePage onSelectCourse={(a,b,c)=>this.onSelectCourse(a,b,c)}/>),
			course : (<CoursePage setNav={nav => this.setState({nav})} 
								  course={this.state.course} 
								  authors={this.state.courseAuthors} 
								  sections={JSON.parse(this.state.courseSectionStr)} 
								  tocs={JSON.parse(this.state.courseTocsStr)}/>),
			download : (<DownloadPage />),
			help : (<HelpPage />),
			setting : (<SettingPage />),
			option : (<OptionPage />)
		}
	
		return pages[this.state.nav]
	}
	// onPopupOpen(){
	// 	// sendMessage('cmd.validCoursePage')
	// }
	async onSelectCourse(course, authors = null, dontSendMessage = false){
		this.setState({course},async ()=>{
			if(!authors){
				authors = mAuthor.getListByCourse(this.state.course)
			}
			this.setState({courseAuthors :authors})

			if(dontSendMessage){
				await this.loadCourseSections()
			}else{
				// sendMessage('cmd.getCourseSections', this.state.course.urn)
				await this.getCourseSectionsMessage()
			}
		})
	}

	async getCourseSectionsMessage(){
		const msg = 'cmd.getCourseSections'
		const csi = await this.getFromMessage(msg, this.state.course.urn)

		if(csi){
			const courseSectionInfoStr = JSON.stringify(csi)
			await this.setState({courseSectionInfoStr})
			await this.createCourseSections(csi)
		}
		// this.setState({validCoursePage})
	}

	// componentDidMount(){
	// 	if(!onMessageAttached){
	// 		onMessage((evt, source)=>{
	// 			this.onCommand(evt, source)
	// 	    })
	// 	    onMessageAttached = true
	// 		this.onPopupOpen()
	// 	}
	// }
	render(){
		return (<div className="app-container">
		{
			this.setPage() 
		}
	   
	    <PageNavigation onNavUpdate={nav => this.onNavUpdate(nav)}  nav={this.state.nav}/>

	  </div>)
	}
}


export default Popup