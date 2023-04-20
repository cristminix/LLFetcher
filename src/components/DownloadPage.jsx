import {useState, useEffect, Component, createRef} from "react"
import "./styles/DownloadPage.css"

import Course from "../models/Course"
import ExerciseFile from "../models/ExerciseFile"
import DownloadConfig from "../models/DownloadConfig"
import DownloadState from "../models/DownloadState"
import Download from "../models/Download"
import Toc from "../models/Toc"
import StreamLocation from "../models/StreamLocation"

import {konsole} from "./fn"

const mCourse = await Course.getInstance()
const mExfile = await ExerciseFile.getInstance()
const mDlConf = await DownloadConfig.getInstance()
const mDlState = await DownloadState.getInstance()
const mDownload = await Download.getInstance()
const mToc = await Toc.getInstance()
const mStreamloc = await StreamLocation.getInstance()

const DLExerciseFile = ({exerciseFile})=> {
	return(<div className="exercise-file-cnt">
		<div>
			<label className="form-label">Exercise File: </label>
			<a onClick={ e=>download() }  href="#">{exerciseFile.name}</a>
		</div>
	</div>)
}
const DLConfig = ({downloadConfig,onSelectFmt}) =>{
	const iconCls = "fa-download"
	const downloadState = 0
	const downloads = []
	const percentage = 0
	const startDownloadVideoResource = ()=>{}
	const updateSelectedFmt = async(e) => {
		await onSelectFmt(e.target.value)
	}
	return(<div className="dl-config-cnt">
	<div><label className="form-label">Set video quality : </label> 
	  <select className="form-control" 
	  onChange={e=>updateSelectedFmt(e)} style={{width:'120px',display:"inline"}}>
		<option value="">--Choose--</option>
		{
			downloadConfig.fmtList.map((fmt,index)=>{
				return(<option value={fmt} key={index}>{fmt}</option>)
			})
		}
	  </select>
	</div>
	<span className="form-helper">Available video format: {downloadConfig.fmtList.join(', ')}</span>
	{
		downloadConfig.selectedFmtList ? (<div className="dl-batch-cnt">
		<button disabled={downloadState===1} className="btn btn-danger" 
		onClick={e=>startDownloadVideoResource()}>
			<i className={`fa ${iconCls}`}/> Download All Video &amp; Caption
			{
				percentage ? (`${percentage}%`) : ""
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
const DLAux = ({course,downloadConfig, downloadFile}) =>{
	return(<div>
		{
			downloadConfig.selectedFmtList ?(<>
				<div className="dl-playlist-cnt">
				  <label className="form-label">Playlist : </label>
				  <a onClick={e=>downloadFile('playlist')}  href="#">{course.slug}-{downloadConfig.selectedFmtList}.m3u</a>
				</div>
				<div className="dl-playlist-cnt">
				  <label className="form-label">Helper Bash : </label>
				  <a onClick={e=>downloadFile('shell_script')}  href="#">{course.slug}-{downloadConfig.selectedFmtList}-helper.sh</a>
				</div>
				<div className="dl-playlist-cnt">
				  <label className="form-label">Helper Cmd : </label>
				  <a onlick={downloadFile('batch_script')} href="#">{course.slug}-{downloadConfig.selectedFmtList}-helper.bat</a>
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
	render(){
	return(<>LogBar</>)
	}
}
class DownloadPage extends Component{
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
			downloadState:0,
			exerciseFile : null
				
		}
	}
	async componentDidMount(){
		await this.loadDownloadData()
	}
	downloadFile(t){
		console.log(t)
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
		const lastCourseSlug = mCourse.getLastSlug()
		const {course, authors, sections, tocs} = mCourse.getCoursePageData(lastCourseSlug)
		const exerciseFile = mExfile.getByCourseId(course.id)
		
		const downloadConfig = await this.populateDownloadConfig(course, sections, tocs)

		this.setState({lastCourseSlug, course, exerciseFile, downloadConfig})

      
    }
    async onSelectFmt(fmt){
    	const {downloadConfig} = this.state
    	downloadConfig.selectedFmtList = fmt
    	this.setState({downloadConfig})
    }
	render(){
		const {course,downloads, downloadConfig,exerciseFile,downloadState} = this.state
		console.log(course)
		return(<div className="download-page page">
			{
			course ?(<div className="dl-cnt text-center">
				{
					exerciseFile ? (<DLExerciseFile exerciseFile={exerciseFile}/>):""
				}
				
				{
					downloadConfig ? (<DLConfig downloadConfig={downloadConfig} onSelectFmt={fmt=>this.onSelectFmt(fmt)}/>):""
				}
				{
					downloadConfig ? (<DLAux course={course} downloadConfig={downloadConfig} downloadFile={t=>this.downloadFile(t)}/>):""
				}
				
			  </div>):""
			}
			  
			  <LogBar ref={this.logBarRef}/>
		</div>)
	}
}

export default DownloadPage
