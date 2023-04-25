import {useState, useEffect, Component, createRef} from "react"
import "./styles/DownloadPage.css"

import {konsole, sendMessage, makeDelay,createDownloadFile} from "./fn"
import ComponentWithMessaging from "./ComponentWithMessaging"

import DLAux from "./downloadPage/DLAux"
import DLConfig from "./downloadPage/DLConfig"
import DLExerciseFile from "./downloadPage/DLExerciseFile"


const delay = makeDelay(500)





class DownloadPage extends ComponentWithMessaging{
	btnPrimary = "btn btn-sm btn-primary"
	btnDanger = "btn btn-sm btn-danger"
	logBarRef = null
	mCourse = null 
	mExfile = null 
	mDlConf = null 
	mDlState = null 
	mDownload = null
	mToc = null 
	mStreamloc = null 

	constructor(props){
		super(props)
		const {store} = props
		this.store = store
		this.mCourse = store.get('Course') 
		this.mExfile = store.get('ExerciseFile') 
		this.mDlConf = store.get('DownloadConfig') 
		this.mDlState = store.get('DownloadState') 
		this.mDownload = store.get('Download') 
		this.mToc = store.get('Toc') 
		this.mStreamloc = store.get('StreamLocation')

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
		   const downloadState = await this.mDlState.set(course.id, state)
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
	downloadFile(kind){
		const {course,sections,tocs,fmt,exerciseFile} = this.state
		const config = {
			slug : course.slug,
			fmt,
			sections,
			tocs,
			exerciseFile
		}
		createDownloadFile(kind, config)
		console.log(kind)
	}

	async onResetQueue(flag=false){
		const {course,sections,tocs,fmt,downloadConfig} = this.state
		await this.mDownload.clear(course.id)
		   const downloadState = await this.mDlState.set(course.id, 0)

		const downloads = await this.populateDownloads(course, sections, tocs, fmt, true)
		const logBarData = {
				message : '',
				mode : null
			}
			this.setState({logBarData})
		this.setState({downloads,downloadState:downloadState.state,percentage:0,logBarData})
		console.log(downloads)
		try{
		const result = await this.sendMessageAsync('sw.queue.reset', {fmt,flag}, 'bg')
			console.log(result)

		}catch(e){
			console.log(e)
		}

	}
	async processDownloadQueue(){
		// delay(async()=>{
		const [evt,source] = await this.sendMessageAsync('sw.queue.started', null, 'bg')
		let queueStarted = evt.data

		if(queueStarted){
			const logBarData = {
				message : 'Queue already started ! please reset or wait until download complete!',
				mode : 1
			}
			this.setState({logBarData})
			return
		}
		// console.log(result)
		const data = {
			course : this.state.course,
			fmt : this.state.fmt
		}
		const [evt2,source2] = await this.sendMessageAsync('sw.queue.process', data, 'bg')
		console.log(evt2)
		// })
		
	}
	async populateDownloadConfig(course, sections, tocs){
		let downloadConfig = this.mDlConf.get(course.id)
		

		if(!downloadConfig){
			let fmtList = []
			for(let sidx in sections ){
				const section = sections[sidx]
				const items = tocs[section.slug]

				for(let tidx in items){
					const toc = items[tidx]
						const streamlocs = this.mStreamloc.getListByTocId(toc.id)
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

			downloadConfig = await this.mDlConf.set(fieldName, fmtList.sort(), course.id)

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
          const streamLocations = this.mStreamloc.getListByTocId(toc.id).filter(r=>r.fmt == fmt)
          
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
		            let download =  this.mDownload.getByTocFname(dl.tocId,dl.filename)
		            if(download){
		                console.log('updateDownload')
		                download.url = dl.url
		                download.filename = dl.filename
		                download.status = false
		                download = await this.mDownload.update(download.id,download)
		            }else{
		                console.log('createDownload')
		                download = await  this.mDownload.create(dl.url,dl.filename,dl.tocId,dl,dl.courseId)
		            } 
		           	downloads.push(download)

		        	}
          }
          
          

      }
  	}
  	return downloads
	}
	async loadDownloadData(){
		const lastCourseSlug = await this.mCourse.getLastSlug()
		const {course, authors, sections, tocs} = await this.mCourse.getCoursePageData(lastCourseSlug)
		const exerciseFile = this.mExfile.getByCourseId(course.id)
		const downloadState = await this.mDlState.get(course.id)
		const downloadConfig = await this.populateDownloadConfig(course, sections, tocs)
		let downloads = this.mDownload.getListByCourseId(course.id)

		if(downloads.length === 0){
			downloads = await this.populateDownloads(course, sections, tocs, downloadConfig.selectedFmtList)
		}
		// console.log(downloads)
		this.setState({sections,tocs,downloads,downloadState:downloadState.state,lastCourseSlug, course, exerciseFile, downloadConfig,fmtList:downloadConfig.fmtList,fmt:downloadConfig.selectedFmtList})

      
    }
    async onSelectFmt(fmt){
    	// const {downloadConfig} = this.state
    	// downloadConfig.selectedFmtList = fmt
    	const fieldName = 'selectedFmtList'
			const downloadConfig = await this.mDlConf.set(fieldName, fmt, this.state.course.id)
		
			const {course,sections,tocs} = this.state
			const downloads = await this.populateDownloads(course, sections, tocs, fmt)

			// console.log(downloads)

    	this.setState({downloadConfig,fmt,downloads})
    }
	render(){
		const {activeDownloadId,logBarData,course,downloads, downloadConfig,exerciseFile,downloadState,fmt,fmtList,percentage} = this.state
		// console.log(course)
		return(<div className="download-page page">
			{
			course ?(<div className="dl-cnt">
				{
					exerciseFile ? (<DLExerciseFile exerciseFile={exerciseFile} downloadFile={t=>this.downloadFile(t)}/>):""
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
