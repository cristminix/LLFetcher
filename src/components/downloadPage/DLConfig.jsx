import {useState, useEffect} from "react"
import LogBar from "./LogBar"
let pis = []
const DLConfig = ({activeDownloadId,onResetQueue,logBarData, downloads, fmtList,fmt,onSelectFmt, processDownloadQueue,percentage,downloadState}) =>{
	const iconCls = percentage === 0 ? "fa-download" : percentage === 100 ? "fa-check" : "fa-spin fa-spinner"
	const [fmtValue, setFmt] = useState(fmt)
	const [pct, setPct] = useState(0)
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
	const resetQueue = async()=>{
		await onResetQueue()
	}
	useEffect(()=>{
		for(let i in pis){
			clearInterval(pis[i])
		}
		if(activeDownloadId){
			const pi = setInterval(async()=>{
				const pc = await getProgress(activeDownloadId)
				// console.log(pc)
				setPct(pc)
				if(pc === -1 || pc === 100){
					clearInterval(pi)
				}
			},250)
			pis.push(pi)
		}

	},[activeDownloadId])
	console.log(logBarData)
	return(<div className="dl-config-cnt">
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
		fmtList ? (<><div className="dl-batch-cnt text-center">
			<div className="btn-group">
		<button disabled={downloadState===1} className="btn btn-danger" 
		onClick={e=>startDownloadVideoResource()}>
			<i className={`fa ${iconCls}`}/> Download All Video &amp; Caption
			{
				percentage ? (` ${percentage}%`) : ""
			} 
			</button>
			<button onClick={e=>resetQueue()} className="btn btn-primary"><i className="fa fa-trash"/> Reset Queue</button>
			</div>
			<LogBar data={logBarData} pct={pct}/>

	  </div>
	  <div>
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
		</table>
	  </div></>) :""
	}
	
  </div>)
}

export default DLConfig