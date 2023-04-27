import LogBar from "../LogBar"

const DLButtons = ({queueStarted,startDownloadVideoResource, logBarData, enableDl, percentage, iconCls, dlText, enableResetFlag, enableResetQueue,resetQueue,rfIconCls,rqIconCls}) =>{
	return (<><div className="dl-batch-cnt text-center" style={{display:'flex',flexDirection:'column'}}>
				<div className="btn-group">
		<button disabled={queueStarted?true : !enableDl} className="btn btn-primary" 
		onClick={e=>startDownloadVideoResource()}>
			<i className={`fa ${iconCls}`}/> {dlText}
			{
				percentage ? (` ${percentage}%`) : ""
			} 
			</button>
			<button disabled={queueStarted ? false : !enableResetFlag } onClick={e=>resetQueue(true)} className="btn btn-warning"><i className={`fa ${rfIconCls}`}/> Reset Flag</button>
			<button disabled={queueStarted ? false : !enableResetQueue} onClick={e=>resetQueue()} className="btn btn-danger"><i className={`fa ${rqIconCls}`}/> Reset Queue</button>
			</div>
			<LogBar data={logBarData} />

	  </div>
	  <div>
	  
	  </div></>)
}

export default DLButtons