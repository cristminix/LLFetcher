import {Component, useState, useEffect} from "react"
import LogBar from "../LogBar"
import {queryDownloadProgress,
    getDownloadFilenames} from "../fn"
let pis = []
const SelectFmt = ({fmt, updateSelectedFmt, fmtList}) =>{
	return(<div className="text-center">
		<label className="form-label">Set video quality : </label> 
	  		<select className="form-control" 
	  onChange={e=>updateSelectedFmt(e)} style={{width:'120px',display:"inline"}} defaultValue={fmt}>
		<option value="">--Choose--</option>
		{
			fmtList.map((fm,index)=>{
				return(<option value={fm} key={index}>{fm}</option>)
			})
		}
	  </select>
	<div className="form-helper">Available video format: {fmtList.join(', ')}</div>

	</div>)
}

const DLButtons = ({startDownloadVideoResource, logBarData, enableDl, percentage, iconCls, dlText, enableResetFlag, enableResetQueue,resetQueue,rfIconCls,rqIconCls}) =>{
	return (<><div className="dl-batch-cnt text-center" style={{display:'flex',flexDirection:'column'}}>
				<div className="btn-group">
		<button disabled={!enableDl} className="btn btn-primary" 
		onClick={e=>startDownloadVideoResource()}>
			<i className={`fa ${iconCls}`}/> {dlText}
			{
				percentage ? (` ${percentage}%`) : ""
			} 
			</button>
			<button disabled={!enableResetFlag} onClick={e=>resetQueue(true)} className="btn btn-warning"><i className={`fa ${rfIconCls}`}/> Reset Flag</button>
			<button disabled={!enableResetQueue} onClick={e=>resetQueue()} className="btn btn-danger"><i className={`fa ${rqIconCls}`}/> Reset Queue</button>
			</div>
			<LogBar data={logBarData} />

	  </div>
	  <div>
	  
	  </div></>)
}
class DLConfig extends Component{
	constructor(props){
		super(props)
		const {fmt, logBarData, percentage, activeDownloadId, downloadState} = props
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
			dlText : "Download Video & Caption", // Download Button Text


			enableResetFlag : false,
			enableResetQueue : false,
			loadingResetFlag : false,
			loadingResetQueue : false,
			logBarData
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
		const {downloads}=this.props
		const filenames = getDownloadFilenames(downloads)
		const [cPercentage, elist, slist, ilist] = await queryDownloadProgress(filenames)
		// console.log([percentage, elist, slist])
		// setPct(pct_)
		const cInteruptCount = elist.length
		const cSuccessCount = slist.length
		const cInProgress = ilist.length > 0

		this.setState({
			cPercentage, cInteruptCount, cSuccessCount, cInProgress
		})
		if(cPercentage === 100){ 
			this.setState({
				iconCls : 'fa-check',
				enableDl : true,
				dlText : 'Complete'
			})
		}
		else if(cInProgress){ 
			this.setState({
				iconCls : 'fa-spin fa-spinner',
				enableDl : false,
				dlText : 'Downloading'
			})

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
			this.setState({enableDl:true})
			
		}

		
	}
	async componentDidMount(){
		await this.queryDownload()
		const {qPercentage, cPercentage} = this.state
		const percentage =  qPercentage || cPercentage
		this.setState({percentage})
	 
	}
	render(){
		const {fmtList, downloads } = this.props

		const {loadingResetFlag, loadingResetQueue,percentage,iconCls, fmt, logBarData, enableDl, qPercentage,cPercentage, dlText,enableResetFlag,enableResetQueue} = this.state

		const rfIconCls = loadingResetFlag ? "fa-spin fa-spinner" : "fa-flag"
		const rqIconCls = loadingResetQueue ? "fa-spin fa-spinner" : "fa-trash"
		const hideOnLoading = loadingResetFlag || loadingResetQueue
			return(<div className="dl-config-cnt" >
				<SelectFmt fmt={fmt} updateSelectedFmt={e=>this.updateSelectedFmt(e)} fmtList={fmtList}/>
			{
				fmt && downloads.length > 0? (<DLButtons startDownloadVideoResource={e=>this.startDownloadVideoResource(e)}
													logBarData={logBarData} 
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
			
		  </div>)
	}

}


export default DLConfig