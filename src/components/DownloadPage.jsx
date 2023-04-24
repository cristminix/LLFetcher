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

import DLAux from "./downloadPage/DLAux"
import DLConfig from "./downloadPage/DLConfig"
import DLExerciseFile from "./downloadPage/DLExerciseFile"

const mCourse = await Course.getInstance()
const mExfile = await ExerciseFile.getInstance()
const mDlConf = await DownloadConfig.getInstance()
const mDlState = await DownloadState.getInstance()
const mDownload = await Download.getInstance()
const mToc = await Toc.getInstance()
const mStreamloc = await StreamLocation.getInstance()
const delay = makeDelay(500)





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
			percentage : 0,
			sections : [],
			tocs : {},
			logBarData:{message:'',mode:0},
			activeDownloadId : -1
				
		
			
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
    		this.updateDownloadState(evt.data)
    		
		}
	}
	async updateDownloadState(data){
		let state = 1
		const {percentage, currentDownload, success} = data
		const {course} = this.state
		if(typeof percentage != 'undefined'){
	    this.setState({percentage})
	    if(percentage == 100){
	      state = 2;
	    }
		   const downloadState = await mDlState.set(course.id, state)
		}
		this.setState({
			downloadState : state,
			logBarData : {
				message : currentDownload.filename,
				mode : success ? 0 : 2
			},
			activeDownloadId: currentDownload.downloadId
		})
	}
	async componentDidMount(){

		await this.loadDownloadData()
		this.initMessaging()
	}
	downloadFile(t){
		console.log(t)
	}

	async onResetQueue(){
		const {course,sections,tocs,fmt,downloadConfig} = this.state
		await mDownload.clear(course.id)
		   const downloadState = await mDlState.set(course.id, 0)

		const downloads = await this.populateDownloads(course, sections, tocs, fmt, true)
		this.setState({downloads,downloadState:downloadState.state,percentage:0})
		console.log(downloads)
		try{
		const result = await this.sendMessageAsync('sw.queue.reset', fmt, 'bg')
			console.log(result)

		}catch(e){
			console.log(e)
		}

	}
	async processDownloadQueue(){
		// delay(async()=>{
		const data = {
			course : this.state.course,
			fmt : this.state.downloadConfig.selectedFmtList
		}
		const result = await this.sendMessageAsync('sw.queue.process', data, 'bg')
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
	async populateDownloads(course, sections, tocs, fmt){
		let dummy = false
		const downloads = []
		const dummyBaseUrl = `http://localhost/linked-learning/${course.slug}`
		for(let sidx in sections){
      const section = sections[sidx]
      const items = tocs[section.slug]

      for(let tidx in items){
          const toc = items[tidx]
          const streamLocations = mStreamloc.getListByTocId(toc.id).filter(r=>r.fmt == fmt)
          
          let streamLoc=null, opt={video:null,transcript:null}
          
          if(streamLocations.length>0){
              streamLoc = streamLocations[0]
              const videoUrl = dummy ? `${dummyBaseUrl}/${toc.slug}-${fmt}.mp4`: streamLoc.url
              const transcriptUrl = dummy? `${dummyBaseUrl}/${toc.slug}-${fmt}.vtt` : toc.captionUrl
              opt.video = {
                  url : videoUrl,
                  filename : `${toc.slug}-${fmt}.mp4`,
                  tocId : toc.id,
                  courseId : course.id
              }
              opt.transcript = {
                  url : transcriptUrl,
                  filename : `${toc.slug}-${fmt}.vtt`,
                  tocId : toc.id,
                  courseId : course.id
              }

              for(let key in opt){
		            const dl = opt[key]
		            let download =  mDownload.getByTocFname(dl.tocId,dl.filename)
		            if(download){
		                console.log('updateDownload')
		                download.url = dl.url
		                download.filename = dl.filename
		                download.status = false
		                download = await mDownload.update(download.id,download)
		            }else{
		                console.log('createDownload')
		                download = await  mDownload.create(dl.url,dl.filename,dl.tocId,dl,dl.courseId)
		            } 
		           	downloads.push(download)

		        	}
          }
          
          

      }
  	}
  	return downloads
	}
	async loadDownloadData(){
		const lastCourseSlug = await mCourse.getLastSlug()
		const {course, authors, sections, tocs} = await mCourse.getCoursePageData(lastCourseSlug)
		const exerciseFile = mExfile.getByCourseId(course.id)
		const downloadState = await mDlState.get(course.id)
		const downloadConfig = await this.populateDownloadConfig(course, sections, tocs)
		let downloads = mDownload.getListByCourseId(course.id)

		if(downloads.length === 0){
			downloads = await this.populateDownloads(course, sections, tocs, downloadConfig.selectedFmtList)
		}
		console.log(downloads)
		this.setState({sections,tocs,downloads,downloadState:downloadState.state,lastCourseSlug, course, exerciseFile, downloadConfig,fmtList:downloadConfig.fmtList,fmt:downloadConfig.selectedFmtList})

      
    }
    async onSelectFmt(fmt){
    	// const {downloadConfig} = this.state
    	// downloadConfig.selectedFmtList = fmt
    	const fieldName = 'selectedFmtList'
			const downloadConfig = await mDlConf.set(fieldName, fmt, this.state.course.id)
			// let downloads = mDownload.getListByCourseId(
			// 	this.state.course.id, 
			// 	this.state.sections,
			// 	this.state.tocs,
			// 	fmt)
			const {course,sections,tocs} = this.state
			const downloads = await this.populateDownloads(course, sections, tocs, fmt)

			console.log(downloads)

    	this.setState({downloadConfig,fmt,downloads})
    }
	render(){
		const {activeDownloadId,logBarData,course,downloads, downloadConfig,exerciseFile,downloadState,fmt,fmtList,percentage} = this.state
		console.log(course)
		return(<div className="download-page page">
			{
			course ?(<div className="dl-cnt">
				{
					exerciseFile ? (<DLExerciseFile exerciseFile={exerciseFile}/>):""
				}
				
				{
					downloadConfig ? (<DLConfig activeDownloadId={activeDownloadId} onResetQueue={e=>this.onResetQueue(e)} logBarData={logBarData} downloads={downloads} downloadState={downloadState} percentage={percentage} processDownloadQueue={e=>this.processDownloadQueue(e)} fmtList={fmtList} fmt={fmt} onSelectFmt={fmt=>this.onSelectFmt(fmt)}/>):""
				}
				{
					downloadConfig ? (<DLAux course={course} fmt={fmt} downloadFile={t=>this.downloadFile(t)}/>):""
				}
				
			  </div>):""
			}
			  
		</div>)
	}
}

export default DownloadPage
