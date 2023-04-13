import {useState, useEffect} from "react"
import Store, {
	onMessage,
	MsgEvt,
	sendMessage,
	konsole
} from "./Store"

import App  from "../models/App"
import Course  from "../models/Course"

let onMessageAttached = false
const m_app = await App.getInstance()
const m_course = await Course.getInstance()
console.log(m_app, m_course)
const WelcomePage = ({}) => {
	const [greeting, setGreeting] = useState('Welcome to LLFetcher 2.0')
	const [lastCourseList, setLastCourseList] = useState({})
	const [fetchBtnState, setFetchBtnState] = useState(0)
	const btnCls = fetchBtnState==0 ? 'fa-hand-o-right': fetchBtnState==1 ? 'fa-spin fa-spinner' : fetchBtnState==2 ? 'fa-refresh' : 'fa-hand-o-right'

	const getCourseInfo = async() => {
		// konsole.log(`Popup.WelcomePage.getCourseInfo`)
		sendMessage('cmd.getCourseInfo')
	}
	const addToLastCourseList = course =>{
		const slug = course.slug
		if(!Object.keys(lastCourseList).includes(slug)){
			const lastCourseList_tmp = Object.assign({}, lastCourseList)
			lastCourseList_tmp[slug] = course

			setLastCourseList(lastCourseList_tmp)
		}
	}
	const loadRecentCourse = (course) => {

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
				        			<a className="dropdown-item" href="#" onClick={e => loadRecentCourse(course)}>{ course.title }</a>
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