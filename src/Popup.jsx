import { useEffect,useState } from 'react'
import logo from './logo.svg'
import './App.css'

const onMessage = (callback) => {
  chrome.runtime.onMessage.addListener((evt, source) =>{
    callback(evt, source);  
  });
}
const MsgEvt = (name, data = null) => {
	return {name, data}
}
const sendMessage = (eventName, data = null, target='content', callback = f => f) => {
	const evt = MsgEvt(eventName, data)
    
    if(target === 'content'){
    	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	        const tab = tabs[0];
	        chrome.tabs.sendMessage(tab.id, evt, callback)
	    })
    }else{
    	chrome.runtime.sendMessage(evt,callback);
    }
    
}

let onMessageAttached = false

class Item {
	duration = null
	slug = null
	title = null
}

class Section {
	title = null
	items = []

	constructor(title, items){
		this.title = title
		this.items = items
	}
}
class Author {
	bio = null
	shortBio = null
	slug = null
	name = null

	constructor(bio, shortBio, slug){
		this.bio = bio
		this.shortBio = shortBio
		this.slug = slug
	}
}
class Course = {
	title = null
	subtitle = null
	description = null
	duration = null
	slug = null
	repo = null
	authors = null

	constructor(title, subtitle, description, duration, slug, repo = null, authors = []){
		this.title = title
		this.subtitle = subtitle
		this.description = description
		this.duration = duration
		this.slug = slug
		this.repo = repo
		this.authors = authors
	}
}

function Popup() {

	const [count, setCount] = useState(0)
	const [courseInfo, setCourseInfo] = useState({})
	const [course, setCourse] = useState(defaultCourse)
	const [ready,setReady] = useState(false)

	/**/
	const getData = () => {
		sendMessage('cmd.getDataCode')
	}

	const onGetDataMessage = evt => {
		try{
			const ci = JSON.parse(evt.data)
			setCourseInfo(ci)
			console.log(ci)
		}catch(e){

		}
	}

	useEffect(()=>{
		if(!onMessageAttached){
			onMessage((evt, source)=>{
		    	if(evt.name === 'cmd.getDataCode'){
		    		onGetDataMessage(evt, source)
		    	}
		    })
		    onMessageAttached = true
		}
	},[])

	return (<div className="App">
		  <header className="App-header">
		    <img src={logo} className="App-logo" alt="logo" />
		    <p>LLFecher</p>
		    <p>
		      <button type="button" onClick={() => getData()}>
		        Get Data
		      </button>
		    </p>

		    <div className="course">
		      <h1></h1>
		    </div>
		  </header>
	</div>)
}

export default Popup
