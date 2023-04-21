import {useState, useEffect, Component, createRef} from "react"
import "./styles/DownloadPage.css"

import Course from "../models/Course"
import ExerciseFile from "../models/ExerciseFile"
import DownloadConfig from "../models/DownloadConfig"
import DownloadState from "../models/DownloadState"
import Download from "../models/Download"
import Toc from "../models/Toc"
import StreamLocation from "../models/StreamLocation"

import {konsole, sendMessage, makeDelay} from "./fn"
import ComponentWithMessaging from "./ComponentWithMessaging"

const mCourse = await Course.getInstance()
const mExfile = await ExerciseFile.getInstance()
const mDlConf = await DownloadConfig.getInstance()
const mDlState = await DownloadState.getInstance()
const mDownload = await Download.getInstance()
const mToc = await Toc.getInstance()
const mStreamloc = await StreamLocation.getInstance()
const delay = makeDelay(500)
const DLExerciseFile = ({exerciseFile})=> {
	const downloadExerciseFile = () =>{
		console.log(exerciseFile)
	}
	return(<div className="exercise-file-cnt">
		<div>
			<label className="form-label">Exercise File: </label>
			<a onClick={ e=>downloadExerciseFile() }  href="#">{exerciseFile.name}</a>
		</div>
	</div>)
}
const DLConfig = ({fmtList,fmt,onSelectFmt, processDownloadQueue,percentage,downloadState}) =>{
	const iconCls = percentage === 0 ? "fa-download" : percentage === 100 ? "fa-check" : "fa-spin fa-spinner"
	const downloads = []
	const [fmtValue, setFmt] = useState(fmt)
	const startDownloadVideoResource = ()=>{
		
		processDownloadQueue()
	}
	const updateSelectedFmt = async(e) => {
		const v = e.target.value
		setFmt(v)
		
		onSelectFmt(v)
		console.log(v)

	}
	return(<div className="dl-config-cnt">
	<div><label className="form-label">Set video quality : </label> 
	  <select className="form-control" 
	  onChange={e=>updateSelectedFmt(e)} style={{width:'120px',display:"inline"}} defaultValue={fmtValue}>
		<option value="">--Choose--</option>
		{
			fmtList.map((fmt,index)=>{
				return(<option value={fmt} key={index}>{fmt}</option>)
			})
		}
	  </select>
	</div>
	<span className="form-helper">Available video format: {fmtList.join(', ')}</span>
	{
		fmtList ? (<div className="dl-batch-cnt">
		<button disabled={downloadState===1} className="btn btn-danger" 
		onClick={e=>startDownloadVideoResource()}>
			<i className={`fa ${iconCls}`}/> Download All Video &amp; Caption
			{
				percentage ? (` ${percentage}%`) : ""
			} 
			</button>
	  <div>
		<table>
		  <tbody>
			{
				downloads.map((dl, index)=>{
					return(<tr v-for="dl in downloads" key={index}>
					<td>{dl.filename}</td>
				  </tr>)
				})
			}
		  </tbody>
		</table>
	  </div>
	</div>) :""
	}
	
  </div>)
}
const DLAux = ({course,fmt, downloadFile}) =>{
	return(<div>
		{
			fmt ?(<>
				<div className="dl-playlist-cnt">
				  <label className="form-label">Playlist : </label>
				  <a onClick={e=>downloadFile('playlist')}  href="#">{course.slug}-{fmt}.m3u</a>
				</div>
				<div className="dl-playlist-cnt">
				  <label className="form-label">Helper Bash : </label>
				  <a onClick={e=>downloadFile('shell_script')}  href="#">{course.slug}-{fmt}-helper.sh</a>
				</div>
				<div className="dl-playlist-cnt">
				  <label className="form-label">Helper Cmd : </label>
				  <a onClick={e=>downloadFile('batch_script')} href="#">{course.slug}-{fmt}-helper.bat</a>
				</div>
			</>):""
		}
		
		{
			course.sourceCodeRepository?(<div className="exercise-file-cnt">
			<div><label className="form-label">Source Repository : </label> 
				<a target="_blank" href={course.sourceCodeRepository}>{course.sourceCodeRepository}</a></div>
		  </div>):""
		}
				
	</div>)
}

class LogBar extends Component {
	constructor(props){
		super(props)
		const {mode,message} = this.props
		this.state = {mode, message}

	}
	log(message, mode){
		this.setState({mode, message})
	}
	render(){
		const {mode,message} = this.state
	return(<><div className="log-bar">
	{
		mode >= 0 && message ? (
        <div className={`log-message ${mode === 1 ? 'error' : mode === 0 ? 'success' : 'warning'}`}>
            <span>{message}</span>
        </div>):""
	}

    </div></>)
	}
}
class DownloadPage extends ComponentWithMessaging{
	btnPrimary = "btn btn-sm btn-primary"
	btnDanger = "btn btn-sm btn-danger"
	logBarRef = null
	constructor(props){
		super(props)
		this.logBarRef = createRef(null)
		this.state = {
			enableDownloadBtn : false,
			lastCourseSlug : '',
			course : null,
			downloads:[],
			downloadConfig: {
				selectedFmtList:'720',
				fmtList:['720','480','360']
			},
			downloadState: null,
			exerciseFile : null,

			fmt:'',
			fmtList:[],
			percentage : 0
				
		}
	}
	onMessageCommand(evt, source){

		// if(evt.name === 'cmd.validCoursePageAuto'){
    	// 	this.setState({validCoursePage:evt.data})
		// }
	}
	async onMessageCommand(evt, source){

		if(evt.name === 'sw.downloadState'){
    		console.log(evt)
    		let state = 1
    		if(typeof evt.data.percentage != 'undefined'){
	          this.setState({percentage :evt.data.percentage})
	          if(evt.data.percentage == 100){
	            state = 2;
	          }
	          const downloadState = await mDlState.set(this.state.course.id,state)
	        }
	        this.setState({downloadState:state})
	        if(evt.data.success){
	          this.logBarRef.current.log(evt.data.currentDownload.filename,0)
	        }else{
	          this.logBarRef.current.log(evt.data.currentDownload.filename,2)
	        }
    		/*
(response,b,c){
      // this.downloads = Store.getDownloadByCourseId(this.course.ID);
      // console.log(a,b,c);
      // this.downloadVideoState = a.downloadState;
      if(response.cmd == 'download_state'){
        let state = 1;
        if(typeof response.percentage != 'undefined'){
          this.percentage = response.percentage;
          if(this.percentage == 100){
            state = 2;
          }
          this.downloadState = Store.setDownloadState(this.course.ID,state);
        }
        this.logServer.log(response);
        if(response.success){
          this.logBar.log(response.currentDownload.filename,0)
        }else{
          this.logBar.log(response.currentDownload.filename,2)
        }
      }
    },
    		*/
		}
	}
	async componentDidMount(){

		await this.loadDownloadData()
		this.initMessaging()
	}
	downloadFile(t){
		console.log(t)
	}
	async processDownloadQueue(){
		// delay(async()=>{
		const data = {
			course : this.state.course,
			config : this.state.downloadConfig
		}
		const result = await this.sendMessageAsync('sw.processDownload', data, 'bg')
		console.log(result)
		// })
		
	}
	async populateDownloadConfig(course, sections, tocs){
		let downloadConfig = mDlConf.get(course.id)
		

		if(!downloadConfig){
			let fmtList = []
			for(let sidx in sections ){
				const section = sections[sidx]
				const items = tocs[section.slug]

				for(let tidx in items){
					const toc = items[tidx]
						const streamlocs = mStreamloc.getListByTocId(toc.id)
						const fmtListToc = streamlocs.map(streamloc => streamloc.fmt)
						for(let i in fmtListToc){
							const fmt = fmtListToc[i]
							if(fmt === 'hls'){
								continue
							}
							if(!fmtList.includes(fmt)){
								fmtList.push(fmt)
							}
						}
				}
			}
			const fieldName = 'fmtList'

			downloadConfig = await mDlConf.set(fieldName, fmtList.sort(), course.id)

		}
		return downloadConfig
	}
	async loadDownloadData(){
		const lastCourseSlug = await mCourse.getLastSlug()
		const {course, authors, sections, tocs} = await mCourse.getCoursePageData(lastCourseSlug)
		const exerciseFile = mExfile.getByCourseId(course.id)
		const downloadState = await mDlState.get(course.id)
		const downloadConfig = await this.populateDownloadConfig(course, sections, tocs)

		this.setState({downloadState:downloadState.state,lastCourseSlug, course, exerciseFile, downloadConfig,fmtList:downloadConfig.fmtList,fmt:downloadConfig.selectedFmtList})

      
    }
    async onSelectFmt(fmt){
    	// const {downloadConfig} = this.state
    	// downloadConfig.selectedFmtList = fmt
    	const fieldName = 'selectedFmtList'
		const downloadConfig = await mDlConf.set(fieldName, fmt, this.state.course.id)
    	this.setState({downloadConfig,fmt})
    }
	render(){
		const {course,downloads, downloadConfig,exerciseFile,downloadState,fmt,fmtList,percentage} = this.state
		console.log(course)
		return(<div className="download-page page">
			{
			course ?(<div className="dl-cnt text-center">
				{
					exerciseFile ? (<DLExerciseFile exerciseFile={exerciseFile}/>):""
				}
				
				{
					downloadConfig ? (<DLConfig downloadState={downloadState} percentage={percentage} processDownloadQueue={e=>this.processDownloadQueue(e)} fmtList={fmtList} fmt={fmt} onSelectFmt={fmt=>this.onSelectFmt(fmt)}/>):""
				}
				{
					downloadConfig ? (<DLAux course={course} fmt={fmt} downloadFile={t=>this.downloadFile(t)}/>):""
				}
				
			  </div>):""
			}
			  
			  <LogBar ref={this.logBarRef}/>
		</div>)
	}
}

export default DownloadPage
