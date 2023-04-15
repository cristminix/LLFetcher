import React, {useState, useEffect} from "react"
import  {
	sendMessage, titleCase
} from "./fn"

import App  from "../models/App"
import Course  from "../models/Course"
import Author  from "../models/Author"

let onMessageAttached = false

const mApp = await App.getInstance()
const mCourse = await Course.getInstance()
const mAuthor = await Author.getInstance()

// console.log(mApp, mCourse, mAuthor)

const exampleCourse = {
    "title": "Creating and Managing a YouTube Channel",
    "slug": "creating-and-managing-a-youtube-channel-14769404",
    "duration": 11409,
    "sourceCodeRepository": null,
    "subtitle": null,
    "description": "YouTube is where video and video creators thrive. By creating a YouTube channel, you can build a highly visible online brand and share content with the world. This course explains how to set up a brand-new YouTube channel, build your subscriber base, and convert clicks into action. Throughout the course, instructor Rich Harrington shares essential strategies for building an audience and maximizing engagement. Rich explains how to design compelling artwork, choose engaging thumbnails, and use YouTube cards and captions. He also dives into building a YouTube community, live streaming, and more. Start watching and learn everything you need to build a YouTube channel into a successful business.\n<br><br>\nThis course was created by Rhed Pixel. We are pleased to host this training in our library.\n",
    "urn": "urn:li:learningApiCourse:38964028",
    "authors": [
        {
            "biography": "Rich Harrington is a digital video expert, educator, speaker, and author.\n\nAs a digital video expert and trained business professional, Rich Harrington understands both the creative and management sides of the visual communications industry. He is the founder of the visual communications company RHED Pixel in Washington, DC. He is a certified instructor for Adobe and Apple and a member of the National Association of Photoshop Professionals Instructor Dream Team. Rich is a popular speaker on the digital video circuit and has served as program manager for conferences hosted by the National Association of Broadcasters (NAB). He has also written several books for the video industry, including An Editor's Guide to Adobe Premiere Pro, From Still to Motion, and Photoshop for Video. To explore more resources for media professionals and to listen to Rich's many podcasts, visit RichardHarrington.com.",
            "shortBiography": "Digital Video Expert, Educator, Speaker",
            "slug": "richard-harrington",
            "urn": "urn:li:learningApiAuthor:538088"
        }
    ]
}
class WelcomePage extends React.Component {
	courseAuthors = []
	constructor(props){
		super(props)
		this.state = {
			greeting : 'Welcome to LLFetcher 2.0',
			lastCourseList : {},
			fetchBtnState : 0,
			courseInfo : null,
			validCoursePage : false
		}
	}

	async getCourseInfo(){
		// konsole.log(`Popup.WelcomePage.getCourseInfo`)
		
		// console.log(course)
		// this.addToLastCourseList(exampleCourse)
		this.setState({fetchBtnState:1})
		sendMessage('cmd.getCourseInfo')
	}

	async addToLastCourseList(ci){
		this.setState({courseInfo:ci})
		const slug = ci.slug
		const course = await this.createCourse(ci)
		if(!Object.keys(this.state.lastCourseList).includes(slug)){
			this.populateLastCourseList()
		}
		this.props.onSelectCourse(course, this.courseAuthors)

	}
	async createAuthors(authors, course){
		// const courseAuthorsTmp = []
		for(let i in authors){
			const {slug,biography,shortBiography} = authors[i]
			const name = titleCase(slug)
			const author = await mAuthor.create(name,slug,biography,shortBiography,course.id)
			console.log(author)
			if(this.courseAuthors.filter(_author_ => _author_.id === author.id).length === 0){
				this.courseAuthors.push(author)
				course = mCourse.addAuthorId(course.id, author.id)
			}
			
		}

		return course

	}

	async createCourse(ci){
		// insert course
		const {title,slug,duration,sourceCodeRepository,description,urn} = ci
		let course = await mCourse.create(title,slug,duration,sourceCodeRepository,description,urn)
		console.log(course)
		
		course = await this.createAuthors(ci.authors, course)
		return course
	}

	onGetCourseInfo(evt){
		const course = evt.data
		console.log(course)
		this.addToLastCourseList(course)
		// konsole.log(`Popup.WelcomePage.getCourseInfo`, evt.data)
	}

	onCommand(evt, source){
		// console.log(evt)
    	if(evt.name === 'cmd.getCourseInfo'){
    		this.onGetCourseInfo(evt, source)
			this.setState({fetchBtnState:2})
    	}
		if(evt.name === 'cmd.validCoursePage'){
    		this.setState({validCoursePage:evt.data})
			
			// console.log(this,evt.data)
			// console.log(`validCoursePage = ${evt.data}`)
		}
	}

	// shouldComponentUpdate(props, state){
	// 	console.log(props, state)
	// 	return true
	// }
	populateLastCourseList(){
		const savedCourseList = mCourse.getList()
		let courseListObj = {}
		for(let i in savedCourseList){
			courseListObj[savedCourseList[i].slug] = savedCourseList[i]
		} 
		this.setState({lastCourseList :courseListObj})

	}
	commandListener = (evt, source) => {
		this.onCommand(evt, source)
	}
	onMessage(){
		try{
			chrome.runtime.onMessage.removeListener(this.commandListener)
			chrome.runtime.onMessage.addListener(this.commandListener)
		}catch(e){
			// console.log(e)
		}	
	
	}
	async componentDidMount(){
		this.populateLastCourseList() 
		this.onMessage()

		sendMessage('cmd.validCoursePage')

	}
	render(){
		const {greeting,lastCourseList,fetchBtnState,validCoursePage} = this.state
		const lastCourseListKeys = Object.keys(lastCourseList)
		const btnCls = fetchBtnState==0 ? 'fa-hand-o-right': fetchBtnState==1 ? 'fa-spin fa-spinner' : fetchBtnState==2 ? 'fa-refresh' : 'fa-hand-o-right'

		return(<>
			<div className="welcome-page page">
				<p className="text-center">{greeting}</p>
				<div className="action-cnt">
				{
					lastCourseListKeys.length > 0 ? (<>
						<div className="dropdown">
							<button className="btn btn-secondary dropdown-toggle" type="button" id="recentCourseButton" data-bs-toggle="dropdown" aria-expanded="false">
							<i className="fa fa-history"></i> Load Recent Course
							</button>
							<ul className="dropdown-menu" aria-labelledby="recentCourseButton">
							{
								lastCourseListKeys.map((slug,index)=>{
									const course = lastCourseList[slug]
									return (<li key={index}>
										<a className="dropdown-item" href="#" onClick={e => this.props.onSelectCourse(course)}>{ course.title }</a>
										</li>)
								})	
							
							}
							</ul>
						</div>
					</>) : ""
				}
				

				<div className="btn-cnt">
					<button  disabled={fetchBtnState==1 || !validCoursePage} className="btn btn-primary" onClick={e => this.getCourseInfo()}><i className={`fa ${btnCls}`}></i> Fetch This Course</button>
					{/* <span>Valid CoursePage ? {validCoursePage ? 'Yes' : 'No'}</span> */}
				</div>

				</div>
			</div>
	</>)
	}
    
}


export default WelcomePage