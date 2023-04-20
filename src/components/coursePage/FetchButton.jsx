import {Component} from "react"
import ComponentWithMessaging from "../ComponentWithMessaging"
import Course from "../../models/Course"
import Toc from "../../models/Toc"
import StreamLocation from "../../models/StreamLocation"
import ExerciseFile from "../../models/ExerciseFile"

const mCourse = await Course.getInstance()
const mToc = await Toc.getInstance()
const mStreamloc = await StreamLocation.getInstance()
const mExfile = await ExerciseFile.getInstance()

class FetchButton extends ComponentWithMessaging{
	course = null
	constructor(props){
		super(props)
		this.course = props.course
		
		this.state = {
			btnState : 0,
			toc : props.toc	,
			exerciseFile : null, 
			streamlocs : []
		}
	}
	
	async fetchToc() {
		console.log(this.state.toc)
		const url =  `https://www.linkedin.com/learning/${this.course.slug}/${this.state.toc.slug}`;
		this.setState({btnState:2})
		const [validResource, tocUp, exFile, streamLocations] = await this.getCourseTocMessage(url)
		console.log([validResource, tocUp, exFile, streamLocations])
		const btnState = validResource ? 3 : 4

		if(validResource){
			tocUp.url = url
			const records = await this.saveRecords(tocUp, exFile, streamLocations)

			console.log(records)

		}
		this.setState({btnState})

		return validResource
		
	}
	async saveRecords(tocUp, exFile, streamLocations){
		// store exercise file
		const {name,sizeInBytes} = exFile
		const exerciseFile = await mExfile.create(name,exFile.url,sizeInBytes,this.course.id)
		// store streamlocations
		
		const streamlocIds = []
		const streamlocs = []

		for(let i in streamLocations){
			const {fmt, url} = streamLocations[i]
			const streamloc = await mStreamloc.create(fmt, url, this.state.toc.id)
			streamlocIds.push(streamloc.id)
			streamlocs.push(streamloc)
		}

		// update toc , with streamlocation ids
		const {captionUrl, captionFmt} = tocUp
		const toc = await mToc.update(this.state.toc.id,tocUp.url, captionUrl, captionFmt, streamlocIds)

		this.setState({toc,  exerciseFile, streamlocs})
		return [toc, exerciseFile, streamlocs]

	}
	async getCourseTocMessage(url){
		const msg = 'cmd.getCourseToc'
		const results = await this.getFromMessage(msg, url)
		return results
		// console.log(results)
	}
	async loadCourseToc(){
		const toc = mToc.get(this.state.toc.id)
		const exerciseFile = mExfile.getByCourseId(this.course.id)
		const streamlocs = mStreamloc.getListByTocId(this.state.toc.id)

		this.setState({toc,  exerciseFile, streamlocs})

	}

	isFetched(){
		return this.state.streamlocs.length > 0
	}
	async componentDidMount(){
		await this.loadCourseToc()
		if(this.state.toc.streamLocationIds.length > 0){
			this.setState({btnState:3})
		}
	}
	render(){

		const {toc} = this.state
		const {btnState} = this.state
		const btnStateNotLoading = btnState !== 1 && btnState !== 4
		const btnStyle = { border : ( btnStateNotLoading ? 'none' : 'inherit') }
		const iconCls = btnState === 1 ? 'fa-play' 
			   : btnState === 2 ? 'fa-spin fa-spinner' 
			   					: btnState === 3 ? 'fa-check' 
		   									 : btnState === 4 ? 'fa-refresh'
		   									 				  : 'fa-play'
		return(<><div className="btn-group">
		    <button style={btnStyle} 
		    		disabled={btnState > 1 && btnState < 4} 
		    		onClick={e => this.fetchToc()} 
		    		className="btn btn-sm" 
		    		title={`Click to fetch TOC resources ${toc.title}`}>
		      	<i className={"fa " + iconCls}></i>
		    </button>
	  	</div></>)
	}
	
}

export default FetchButton