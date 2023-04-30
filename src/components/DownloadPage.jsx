import {useState, useEffect, Component, createRef} from "react"
import "./styles/DownloadPage.css"

import {konsole, sendMessage, makeDelay,createDownloadFile,getDownloadFilenames, queryDownloadProgress,validateUrl,timeout} from "./fn"
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
			activeDownloadId : -1,
			queueStarted: false
				
		
			
			}
	}
	onMessageCommand(evt, source){

		// if(evt.name === 'cmd.validCoursePageAuto'){
    	// 	this.setState({validCoursePage:evt.data})
		// }
	}
	async onMessageCommand(evt, source){

		if(evt.name === 'sw.downloadState'){
    		// console.log(evt)
				const {data} = evt
    		this.updateDownloadState(data)
    		
		}
	}
	async updateDownloadState(data){
		console.log(data)
		let state = 1
		const {info,percentage, download, success, delta} = data
		const {course} = this.state
		if(info){
			const {message, mode} = data
			const logBarData = {message, mode}
			this.setState({logBarData})
		}
		else if(success){
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
					message : download.filename,
					mode : success ? 0 : 1
				},
				activeDownloadId: download.downloadId
			})
		}else{
			//error
			if(typeof delta === 'object'){
					const {error,filename,id,state} = delta
					const message = `${filename} download ${state} because of ${error}`
					const mode = 1
					const logBarData = {message, mode}
					this.setState({logBarData})
				}
		}
		
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
		const downloadState = await this.mDlState.set(course.id, 0)
		if(!flag){
			// erase chrome downloads

			const filenames = getDownloadFilenames(this.state.downloads)
			const [ elist, slist, ilist] = await queryDownloadProgress(filenames)
			const chromeDownloads = [...elist,...slist,...ilist]

			for(let i in chromeDownloads){
				const id = chromeDownloads[i].id
				// console.log(id)
				const eresult = await chrome.downloads.erase({id})
				console.log(eresult)
			}

		}
		const downloads = await this.populateDownloads(course, sections, tocs, fmt, !flag)
		const logBarData = {
				message : '',
				mode : null
			}
		this.setState({downloads,downloadState:downloadState.state,percentage:0,logBarData})
		// console.log(downloads)
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
				message : 'Queue is locked ! please wait until download complete, you can unlock or reset',
				mode : 1,
				queueStarted
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
		queueStarted = true
		this.setState({queueStarted})
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
	async populateDownloads(course, sections, tocs, fmt, clear=false){
		if(clear){
			await this.mDownload.clear(course.id)	
		}
		
		let dummy = false
		const downloads = []
		const dummyBaseUrl = `http://localhost/linked-learning/${course.slug}`
		const errors = []
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
              if(validateUrl(videoUrl)){
                opt.video = {
                    url : videoUrl,
                    filename : `${toc.slug}-${fmt}.mp4`,
                    tocId : toc.id,
                    courseId : course.id
                }
              }else{

              	errors.push(`video url is not valid for ${toc.slug}`)
              }
              if(validateUrl(transcriptUrl)){
                opt.transcript = {
                    url : transcriptUrl,
                    filename : `${toc.slug}-${fmt}.vtt`,
                    tocId : toc.id,
                    courseId : course.id
                }
              }else{
              	errors.push(`transcript url is not valid for ${toc.slug}`)

              }

              for(let key in opt){
		            const dl = opt[key]
		            if(dl){
		            	let download =  this.mDownload.getByTocFname(dl.tocId,dl.filename,course.id)
			            if(download){
			                console.log('updateDownload')
			                download.url = dl.url
			                download.filename = dl.filename
			                download.status = false
			                download = await this.mDownload.update(download.id,download)
			            }else{
			                console.log('createDownload')
			                download = await  this.mDownload.create(dl.url,dl.filename,dl.tocId,dl,fmt,course.id)
			            } 
			           	downloads.push(download)
		            }
		            

		        	}
          }
          
          

      }
  	}
  	if(errors.length>0){
  		this.setState({logBarData:{
  			mode:1,message:errors.join(',')
  		}})
  	}
  	return downloads
	}
	async loadDownloadData(){
		const lastCourseSlug = await this.mCourse.getLastSlug()
		const {course, authors, sections, tocs} = await this.mCourse.getCoursePageData(lastCourseSlug)
		const exerciseFile = this.mExfile.getByCourseId(course.id)
		const downloadState = await this.mDlState.get(course.id)
		const downloadConfig = await this.populateDownloadConfig(course, sections, tocs)
		const fmt = downloadConfig.selectedFmtList
		const fmtList = downloadConfig.fmtList
		let downloads = this.mDownload.getListByCourseId(course.id,fmt)

		if(downloads.length === 0){
			downloads = await this.populateDownloads(course, sections, tocs, fmt)
		}
		// console.log(downloads)
		this.setState({
				sections,
				tocs,
				downloads,
				downloadState:downloadState.state,
				lastCourseSlug, 
				course, 
				exerciseFile, 
				downloadConfig,
				fmtList,
				fmt
			})

      
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
		const {queueStarted,activeDownloadId,logBarData,course,downloads, 
		downloadConfig,exerciseFile,downloadState,
		fmt,fmtList,percentage} = this.state
		// console.log(course)
		return(<div className="download-page page">
			{
			course ?(<div className="dl-cnt">
				{
					exerciseFile ? (<DLExerciseFile exerciseFile={exerciseFile} downloadFile={t=>this.downloadFile(t)}/>):""
				}
				
				{
					downloadConfig ? (<DLConfig course={course} store={this.store}
						queueStarted={queueStarted} 
						activeDownloadId={activeDownloadId} 
						onResetQueue={e=>this.onResetQueue(e)} 
						logBarData={logBarData} 
						downloads={downloads} 
						downloadState={downloadState} 
						percentage={percentage} 
						processDownloadQueue={e=>this.processDownloadQueue(e)} 
						fmtList={fmtList} 
						fmt={fmt} 
						onSelectFmt={fmt=>this.onSelectFmt(fmt)}/>):""
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
