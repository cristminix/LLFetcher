import {useState, useEffect} from "react"
import LogBar from "../LogBar"
import {queryDownloadProgress,
    getDownloadFilenames} from "../fn"
let pis = []
const DLConfig = ({activeDownloadId,onResetQueue,logBarData, downloads, fmtList,fmt,onSelectFmt, processDownloadQueue,percentage,downloadState}) =>{
	
	const [fmtValue, setFmt] = useState(fmt)
	const [pct, setPct] = useState(0)
	const [pctg, setPctg] = useState(0)
	const [inProgress, setInProgress] = useState(false)
	const [interuptCount, setInteruptCount] = useState(0)
	const [successCount, setSuccessCount] = useState(0)
	const [iconCls, setIconCls] = useState("fa-download")
	const [enableDl, setEnableDl] = useState(true)
	const [dlText, setDlText] = useState("'Download Video & Caption'") 
	const [enableResetFlag, setEnableResetFlag] = useState(true)
	const [enableResetQueue, setEnableResetQueue] = useState(true)
	const [loadingResetFlag, setLoadingResetFlag] = useState(false)
	const [loadingResetQueue, setLoadingResetQueue] = useState(false)
	const [lbData,setLbData] = useState(logBarData)
	const startDownloadVideoResource = ()=>{
		
		processDownloadQueue()
	}
	const updateSelectedFmt = async(e) => {
		const v = e.target.value
		setFmt(v)
		
		onSelectFmt(v)
		console.log(v)

	}
	const getProgress = async (id) => {
		return new Promise((resolve,reject)=>{
			chrome.downloads.search({id}, (item) => {
				if(item.length > 0)
				{item = item[0]
			    if(item.totalBytes > 0) {
			    	const percentage = Math.ceil(
					Math.floor( item.bytesReceived / item.totalBytes * 100 )
				)
			      resolve(percentage)
			    } else {
			      resolve(-1)
			    }
				}else {
			      resolve(-1)
			    }
			  })
		})
	}
	const resetQueue = async(flag)=>{
		setEnableDl(false)
		if(flag){
			setLbData({
				message : 'resetting queue flag',
				mode : 2
			})
			setEnableResetFlag(false)
			setLoadingResetFlag(true)
			setEnableResetQueue(false)

		}else{
			setLbData({
				message : 'resetting queue data',
				mode : 2
			})
			setEnableResetQueue(false)
			setLoadingResetQueue(true)
			setEnableResetFlag(false)

		}
		await onResetQueue(flag)
		if(flag){
			setLbData({
				message : 'resetting queue flag complete',
				mode : 0
			})
			setEnableResetFlag(true)
			setLoadingResetFlag(false)
			setEnableResetQueue(true)

		}else{
			setLbData({
				message : 'resetting queue data complete',
				mode : 0
			})
			setEnableResetQueue(true)
			setLoadingResetQueue(false)
			setEnableResetFlag(true)


		}
		setEnableDl(true)
		await queryDownload()

	}
	const queryDownload = async()=>{
		const filenames = getDownloadFilenames(downloads)
		const [pct_, elist, slist, ilist] = await queryDownloadProgress(filenames)
		console.log([percentage, elist, slist])
		setPct(pct_)
		const interuptCount_ = elist.length
		const successCount_ = slist.length
		const inProgress_ = ilist.length > 0

		setInteruptCount(interuptCount_)
		setSuccessCount(successCount_)
		setInProgress(inProgress_)
		const pctg_ = percentage || pct_
		if(pctg_ === 100){
			setIconCls("fa-check")
			setEnableDl(true)
			setDlText("Complete")
		}
		else if(inProgress_){
			setIconCls("fa-spin fa-spinner")
			setEnableDl(false)
			setDlText("Downloading")

		}
		else if(interuptCount_ > 0){
			setIconCls("fa-refresh")
			setEnableDl(true)
			setDlText("Resume")
			const chromeDownloads = [...elist]

			for(let i in chromeDownloads){
				const id = chromeDownloads[i].id
				console.log(id)
				const eresult = await chrome.downloads.erase({id})
				console.log(eresult)
			}

		}
		else{
			if(pctg_ < 100){
				setIconCls("fa-refresh")
				setDlText("Resume")
			}else{
				setIconCls("fa-download")
				setDlText("Download Video & Caption")
			}
			setEnableDl(true)
			
		}

		
	}
	useEffect(()=>{
		queryDownload()
	},[fmt])
	useEffect(()=>{

		setLbData(logBarData)
	},[logBarData])
	// console.log(downloads)
	useEffect(()=>{
		queryDownload()
		const pctg_ = percentage || pct
		console.log(pctg_)
		setPctg(pctg_)
		//setIconCls(pctg_ === 0 ? "fa-download" : pctg_ === 100 ? "fa-check" : "fa-spin fa-spinner")

	},[percentage,pct])
	const rfIconCls = loadingResetFlag ? "fa-spin fa-spinner" : "fa-flag"
	const rqIconCls = loadingResetQueue ? "fa-spin fa-spinner" : "fa-trash"
	const hideOnLoading = loadingResetFlag || loadingResetQueue
	// const iconCls = 
		return(<div className="dl-config-cnt" >
			<div className="text-center">
				<label className="form-label">Set video quality : </label> 
			  		<select className="form-control" 
			  onChange={e=>updateSelectedFmt(e)} style={{width:'120px',display:"inline"}} defaultValue={fmtValue}>
				<option value="">--Choose--</option>
				{
					fmtList.map((fmt,index)=>{
						return(<option value={fmt} key={index}>{fmt}</option>)
					})
				}
			  </select>
			<div className="form-helper">Available video format: {fmtList.join(', ')}</div>

			</div>
		{
			fmtValue && downloads.length > 0? (<><div className="dl-batch-cnt text-center" style={{display:'flex',flexDirection:'column'}}>
				<div className="btn-group">
			<button disabled={!enableDl} className="btn btn-primary" 
			onClick={e=>startDownloadVideoResource()}>
				<i className={`fa ${iconCls}`}/> {dlText}
				{
					pctg ? (` ${pctg}%`) : ""
				} 
				</button>
				<button disabled={!enableResetFlag} onClick={e=>resetQueue(true)} className="btn btn-warning"><i className={`fa ${rfIconCls}`}/> Reset Flag</button>
				<button disabled={!enableResetQueue} onClick={e=>resetQueue()} className="btn btn-danger"><i className={`fa ${rqIconCls}`}/> Reset Queue</button>
				</div>
				<LogBar data={lbData} />

		  </div>
		  <div>
		  {
		  	/*downloads ?(
			<table className="table table-bordered">
				<thead>
					<tr>
						<th>No.</th>
						<th>Filename</th>
						<th>Status</th>
					</tr>
				</thead>	
			  <tbody>
				{
					downloads.map((dl, index)=>{
						return(<tr key={index}>
							<td>{index+1}</td>
							<td><span title={dl.url}>{dl.filename}</span></td>
							<td>{dl.status}</td>
					  </tr>)
					})
				}
			  </tbody>
			</table>):null*/
		}
		  </div>

		  </>) : fmt ?(<>
			<i className="fa fa-spin fa-spinner"/> Loading ...
		</>):""
		}
		
	  </div>)
	
}

export default DLConfig