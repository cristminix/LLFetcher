import {useState, useEffect} from "react"
import Store, {
	onMessage,
	MsgEvt,
	sendMessage,
	konsole
} from "./Store"

import App  from "../models/App"
import Course  from "../models/Course"
import Author  from "../models/Author"

let onMessageAttached = false

const mApp = await App.getInstance()
const mCourse = await Course.getInstance()
const mAuthor = await Author.getInstance()

console.log(mApp, mCourse, mAuthor)

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
const WelcomePage = ({onSelectCourse}) => {
	const [greeting, setGreeting] = useState('Welcome to LLFetcher 2.0')
	const [lastCourseList, setLastCourseList] = useState({})
	const [fetchBtnState, setFetchBtnState] = useState(0)
	const [courseInfo,setCourseInfo] = useState({})
	const courseAuthors = []
	const btnCls = fetchBtnState==0 ? 'fa-hand-o-right': fetchBtnState==1 ? 'fa-spin fa-spinner' : fetchBtnState==2 ? 'fa-refresh' : 'fa-hand-o-right'

	const getCourseInfo = async() => {
		// konsole.log(`Popup.WelcomePage.getCourseInfo`)
		
		// console.log(course)
		addToLastCourseList(exampleCourse)
		sendMessage('cmd.getCourseInfo')
	}
	const addToLastCourseList = async(ci) =>{
		setCourseInfo(ci)
		const slug = ci.slug
		const course = await createCourse(ci)
		if(!Object.keys(lastCourseList).includes(slug)){
			const lastCourseList_tmp = Object.assign({}, lastCourseList)
			lastCourseList_tmp[slug] = course

			setLastCourseList(lastCourseList_tmp)
			
			onSelectCourse(course, courseAuthors)
		}
	}
	
	const createAuthors = async(authors, course) => {
		// const courseAuthorsTmp = []
		for(let i in authors){
			const {name,slug,biography,shortBiography} = authors[i]
			const author = await mAuthor.create(name,slug,biography,shortBiography,course.id)
			
			courseAuthors.push(author)
			course = mCourse.addAuthorId(course.id, author.id)
		}

		return course

	}
	const createCourse = async(ci) =>{
		// insert course
		const {title,slug,duration,sourceCodeRepository,description} = ci
		let course = await mCourse.create(title,slug,duration,sourceCodeRepository,description)
		// console.log(course)
		
		course = await createAuthors(ci.authors, course)
		return course
	}
	const onGetCourseInfo = async(evt, source) => {
		const course = evt.data
		console.log(course)
		addToLastCourseList(course)
		// konsole.log(`Popup.WelcomePage.getCourseInfo`, evt.data)
	}

	const onCommand = (evt, source) => {
		// console.log(evt)
    	if(evt.name === 'cmd.getCourseInfo'){
    		onGetCourseInfo(evt, source)
    	}
	}
	useEffect(()=>{
		setLastCourseList(mCourse.getList())
		if(!onMessageAttached){
			onMessage((evt, source)=>{
				if( evt.name.match(/^cmd\./) ){
					onCommand(evt, source)
				}
		    })
		    onMessageAttached = true
		}
	},[])

	const lastCourseListKeys = Object.keys(lastCourseList)
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
				        			<a className="dropdown-item" href="#" onClick={e => onSelectCourse(course)}>{ course.title }</a>
				        			</li>)
				        	})	
				          
				        }
				        </ul>
				     </div>
		    	</>) : ""
		    }
		      

		      <div className="btn-cnt">
		        <button disabled={fetchBtnState==1} className="btn btn-primary" onClick={e => getCourseInfo()}><i className={`fa ${btnCls}`}></i> Fetch This Course</button>
		      </div>

		    </div>
		  </div>
  </>)
}

export default WelcomePage