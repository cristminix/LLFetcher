import {Component, useState, useEffect} from "react"
import {queryDownloadProgress,
    getDownloadFilenames,makeDelay} from "../../../components/fn"
// import ComponentWithMessaging from "../ComponentWithMessaging"
let pis = []
import SelectFmt from "./SelectFmt"
import DLButtons from "./DLButtons"
import StateTbl from "./StateTbl"

class DLConfig extends Component{
	pauseOnRecieveProps = false
	mDlState = null
	constructor(props){
		super(props)
		// this.pauseOnRecieveProps = false
		const {store,course,fmt, logBarData, percentage, activeDownloadId, downloadState,queueStarted} = props
		this.mDlState = store.get('DownloadState')
		this.course = course
		this.state = {
			fmt,			 // selected format
			percentage:0,
			qPercentage : percentage, // queue progress from message bg
			cPercentage : 0, // chrome download percentage
			cInProgress : false, // there is download state in_progress by chrome download
			cInteruptCount : 0, // there is download state interupt by chrome download
			cSuccessCount : 0, // count of download state complete by chrome download

			iconCls : "fa-download", // Download button icon className
			enableDl : false, // Enable /Disable Download btn
			loadingDl : false,
			dlText : "Download Video & Caption", // Download Button Text


			enableResetFlag : false,
			enableResetQueue : false,
			loadingResetFlag : false,
			loadingResetQueue : false,
			logBarData,queueStarted,
			dlstate:null
		}
	}
	startDownloadVideoResource(){
		this.props.processDownloadQueue()
	}
	async updateSelectedFmt(label){
		const {onSelectFmt,store} = this.props
		const fmt = label
		this.setState({fmt})
		onSelectFmt(fmt)

		await store.get('Message').set('sw.downloadState', {reset:true}, 'popup')
	}
	async resetQueue(flag){
		const {onResetQueue} = this.props
		let enableDl = false
		this.setState({enableDl})
		let logBarData
		if(flag){
			logBarData = {message : 'resetting queue flag', mode : 2}
			this.setState({
				logBarData,
				enableResetFlag : false,
				loadingResetFlag : true,
				enableResetQueue : false
			})

		}else{
			logBarData = {message : 'resetting queue data', mode : 2 }
			this.setState({
				logBarData,
				enableResetQueue : false,
				loadingResetQueue : true,
				enableResetFlag : false,
				
			})

		}
		await onResetQueue(flag)
		if(flag){
			logBarData = {message : 'resetting queue flag complete', mode : 0 }
			this.setState({
				logBarData,
				enableResetFlag : true,
				loadingResetFlag : false,
				enableResetQueue : true
			})

		}else{
			logBarData = {message : 'resetting queue data complete', mode : 0 } 
			this.setState({
				logBarData,
				enableResetQueue : true,
				loadingResetQueue : false,
				enableResetFlag : true
			})
		}
		enableDl = true
		this.pauseRecieveProps()
		this.setState({enableDl,queueStarted:false,enableResetFlag:false,enableResetQueue:false})
		

		// await this.queryDownload()

	}
	async queryDownload(){
		console.log(`DLConfig.queryDownload()`)
		const {downloads}=this.props
		const filenames = getDownloadFilenames(downloads)
		console.log(filenames)
		const [elist, slist, ilist] = await queryDownloadProgress(filenames)
		// console.log([percentage, elist, slist])
		// setPct(pct_)
		const cInteruptCount = elist.length
		const cSuccessCount = slist.length
		const cInProgress = ilist.length > 0
 		const cPercentage = Math.ceil(Math.floor(slist.length/filenames.length * 100))
     
		return	{cPercentage, cInteruptCount, cSuccessCount, cInProgress,elist,slist,ilist}
		
	}
	async calculateDownloadProgress(qdresult){
		const {cPercentage, cInteruptCount, cSuccessCount, cInProgress,elist} = qdresult
		// const {queueStarted} = 
		this.setState({cPercentage, cInteruptCount, cSuccessCount, cInProgress})
		if(cPercentage === 100){ 
			this.setState({
				iconCls : 'fa-check',
				enableDl : true,
				dlText : 'Complete',
				enableResetFlag: false,
				enableResetQueue: false
			})
			console.log('A')
		}
		else if(cInProgress){ 
			this.setState({
				iconCls : 'fa-spin fa-spinner',
				enableDl : false,
				dlText : 'Downloading',

				enableResetFlag: false,
				enableResetQueue: false
			})
			console.log('B')


		}
		else if(cInteruptCount > 0){
			this.setState({
				iconCls : 'fa-refresh',
				enableDl : true,
				dlText : 'Resume',

				enableResetFlag: true,
				enableResetQueue: true
			})

			const chromeDownloads = [...elist]

			for(let i in chromeDownloads){
				const id = chromeDownloads[i].id
				// console.log(id)
				const eresult = await chrome.downloads.erase({id})
				console.log('chrome.downloads.erase() result=',eresult)
			}
			console.log('C')


		}
		else{

			if(cPercentage === 0){
				this.setState({
					iconCls : 'fa-download',
					dlText : "Download Video & Caption",

				enableResetFlag: false,
				enableResetQueue: false
				}) 
			}
			else if(cPercentage < 100){
				this.setState({
					iconCls : 'fa-refresh',
					dlText : "Resume",
					enableResetFlag: true,
					enableResetQueue: true
				}) 
			}else{
				this.setState({
					iconCls : 'fa-download',
					dlText : "Download Video & Caption"
				}) 
			}
			console.log('D')

			this.setState({enableDl:true})
			
		}
	}
	delay(callback){
		const delay = makeDelay(500)
		delay(callback)
	}
	async componentDidMount(){
		
	 	// await this.updateDownloadProgress()
	}
	async getFromMessage(msg, d, t){
		console.log(msg, d, t)
		return false
	}
	async updateDownloadProgress(callback){
		const qdresult = await this.queryDownload()
		console.log(qdresult)

		const {percentage} = this.props
		const {cPercentage} = qdresult
		const qPercentage = percentage
		let nPercentage = 0 //=  percentage?percentage:  cPercentage?cPercentage : 0
		if(qPercentage > 0){
			nPercentage = qPercentage
		}

		if(nPercentage === 0){
			nPercentage = cPercentage
		}

		if(cPercentage > qPercentage){
			nPercentage = cPercentage
		}
		console.log(nPercentage,qPercentage,cPercentage)
		const dlstate = this.mDlState.get(this.course.id)
		this.setState({percentage:nPercentage,qPercentage,dlstate})

		if(typeof callback === 'function'){
			const data = {
				nPercentage
			}
			callback(data)
		}
		const queueStarted = await this.getFromMessage('sw.queue.started', null, 'bg')
		console.log(`downloadQueue.started = ${queueStarted}`)
		if(queueStarted){
			this.setState({queueStarted},async()=>{
				this.pauseOnRecieveProps = true
				await this.calculateDownloadProgress(qdresult)
			})
		}

			
	}
	pauseRecieveProps(callback){
		this.pauseOnRecieveProps = true

	}
	// componentWillReceiveProps(props,state){
		
	// 		this.delay(()=>{
	// 			if(!this.pauseOnRecieveProps){
	// 				const {logBarData,queueStarted} = props
	// 				this.pauseOnRecieveProps = true
	// 				this.setState({logBarData,queueStarted})
					
	// 			}else{
	// 				setTimeout(()=>{
	// 					this.pauseOnRecieveProps = false
	// 				},1000)
	// 			}
	// 			this.updateDownloadProgress()

	// 		})
			

	// 	return true
	// }
	async reloadProgress(dlstatedata){
		console.log(dlstatedata)
		this.updateDownloadProgress()
	}
	render(){
		const {fmtList, downloads, store } = this.props

		const {percentage, fmt, logBarData, enableDl, qPercentage,cPercentage, 
		dlText,loadingResetQueue,loadingResetFlag,loadingDl,
		cInteruptCount,cInProgress,cSuccessCount,queueStarted,dlstate} = this.state

		const rfIconCls = loadingResetFlag ? "fa-spin fa-spinner" : "fa-unlock"
		const rqIconCls = loadingResetQueue ? "fa-spin fa-spinner" : "fa-refresh"
		const hideOnLoading = loadingResetFlag || loadingResetQueue

		const iconCls = queueStarted ? 'fa-spin fa-spinner' : this.state.iconCls
		const enableResetFlag = queueStarted ? this.state.enableResetFlag : true
		const enableResetQueue = queueStarted ? this.state.enableResetQueue : true

			return(<div className="dl-config-cnt" >
				<SelectFmt fmt={fmt} queueStarted={queueStarted} updateSelectedFmt={label=>this.updateSelectedFmt(label)} fmtList={fmtList}/>
			{
				fmt && downloads.length > 0? (<DLButtons startDownloadVideoResource={e=>this.startDownloadVideoResource(e)}
													logBarData={logBarData} queueStarted={queueStarted}
													enableDl={enableDl} 
													qPercentage={qPercentage} 
													cPercentage={cPercentage}
													percentage={percentage} 
													iconCls={iconCls} 
													dlText={dlText} 
													enableResetFlag={enableResetFlag} 
													enableResetQueue={enableResetQueue}
													resetQueue={e=>this.resetQueue(e)}
													rfIconCls={rfIconCls}
													rqIconCls={rqIconCls}
													dlstate={dlstate}/>) : fmt ?(<>
				<i className="fa fa-spin fa-spinner"/> Loading ...
			</>):""
			}
			{
				fmt && downloads.length > 0? (<StateTbl logBarData={logBarData} 
					enableDl={enableDl} loadingDl={loadingDl}
					downloads={downloads} queueStarted={queueStarted}
					qPercentage={qPercentage} 
					cPercentage={cPercentage}
					percentage={percentage} 
					iconCls={iconCls} 
					dlText={dlText} 
					enableResetFlag={enableResetFlag} loadingResetFlag={loadingResetFlag}
					enableResetQueue={enableResetQueue} loadingResetQueue={loadingResetQueue}
					rfIconCls={rfIconCls}
					rqIconCls={rqIconCls}
					cInProgress={cInProgress}
					cSuccessCount={cSuccessCount}
					cInteruptCount={cInteruptCount}
					dlstate={dlstate} store={store} reloadProgress={e=> this.reloadProgress(e)}/>):""
			}
		  </div>)
	}

}


export default DLConfig