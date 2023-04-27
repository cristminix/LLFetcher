import {Component, useState, useEffect} from "react"
import {queryDownloadProgress,
    getDownloadFilenames,makeDelay} from "../fn"
let pis = []
import SelectFmt from "./SelectFmt"
import DLButtons from "./DLButtons"
import StateTbl from "./StateTbl"

class DLConfig extends Component{
	constructor(props){
		super(props)
		const {fmt, logBarData, percentage, activeDownloadId, downloadState,queueStarted} = props
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


			enableResetFlag : true,
			enableResetQueue : true,
			loadingResetFlag : false,
			loadingResetQueue : false,
			logBarData,queueStarted
		}
	}
	startDownloadVideoResource(){
		this.props.processDownloadQueue()
	}
	async updateSelectedFmt(e){
		const {onSelectFmt} = this.props
		const fmt = e.target.value
		this.setState({fmt})
		onSelectFmt(fmt)

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
		this.setState({enableDl})

		await this.queryDownload()

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
		this.setState({cPercentage, cInteruptCount, cSuccessCount, cInProgress})
		if(cPercentage === 100){ 
			this.setState({
				iconCls : 'fa-check',
				enableDl : true,
				dlText : 'Complete'
			})
			console.log('A')
		}
		else if(cInProgress){ 
			this.setState({
				iconCls : 'fa-spin fa-spinner',
				enableDl : false,
				dlText : 'Downloading'
			})
			console.log('B')


		}
		else if(cInteruptCount > 0){
			this.setState({
				iconCls : 'fa-refresh',
				enableDl : true,
				dlText : 'Resume'
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
					dlText : "Download Video & Caption"
				}) 
			}
			else if(cPercentage < 100){
				this.setState({
					iconCls : 'fa-refresh',
					dlText : "Resume"
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
		
	 	await this.updateDownloadProgress()
	}
	async updateDownloadProgress(){
		const qdresult = await this.queryDownload()
		console.log(qdresult)
		await this.calculateDownloadProgress(qdresult)

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
		console.log(nPercentage,qPercentage,cPercentage)

		this.setState({percentage:nPercentage,qPercentage})
	}
	componentWillReceiveProps(props){
		this.delay(()=>{
			const {logBarData,queueStarted} = props
			this.setState({logBarData,queueStarted})
			this.updateDownloadProgress()
		})
		return true
	}
	render(){
		const {fmtList, downloads } = this.props

		const {percentage,iconCls, fmt, logBarData, enableDl, qPercentage,cPercentage, 
		dlText,enableResetFlag,enableResetQueue,loadingResetQueue,loadingResetFlag,loadingDl,
		cInteruptCount,cInProgress,cSuccessCount,queueStarted} = this.state

		const rfIconCls = loadingResetFlag ? "fa-spin fa-spinner" : "fa-flag"
		const rqIconCls = loadingResetQueue ? "fa-spin fa-spinner" : "fa-trash"
		const hideOnLoading = loadingResetFlag || loadingResetQueue
			return(<div className="dl-config-cnt" >
				<SelectFmt fmt={fmt} queueStarted={queueStarted} updateSelectedFmt={e=>this.updateSelectedFmt(e)} fmtList={fmtList}/>
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
													rqIconCls={rqIconCls}/>) : fmt ?(<>
				<i className="fa fa-spin fa-spinner"/> Loading ...
			</>):""
			}
			<StateTbl logBarData={logBarData} 
					enableDl={enableDl} loadingDl={loadingDl}
					downloads={downloads}
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
					cInteruptCount={cInteruptCount}/>
		  </div>)
	}

}


export default DLConfig