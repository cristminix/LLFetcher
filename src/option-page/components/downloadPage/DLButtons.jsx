import LogBar from "../../../components/LogBar"

const DLButtons = ({queueStarted,startDownloadVideoResource, logBarData, enableDl, percentage, iconCls, dlText, enableResetFlag, enableResetQueue,resetQueue,rfIconCls,rqIconCls}) =>{
	const btnCls = "py-3 px-4 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
	return (<><div className="dl-batch-cnt flex flex-col mx-auto w-2/4">
				<div className="inline-flex rounded-md shadow-sm">
		<button disabled={queueStarted?true : !enableDl} className={btnCls}
		onClick={e=>startDownloadVideoResource()}>
			<i className={`fa ${iconCls}`}/> {dlText}
			{
				percentage ? (` ${percentage}%`) : ""
			} 
			</button>
			<button disabled={!enableResetFlag } onClick={e=>resetQueue(true)} className={btnCls}><i className={`fa ${rfIconCls}`}/> Unlock</button>
			<button disabled={!enableResetQueue} onClick={e=>resetQueue()} className={btnCls}><i className={`fa ${rqIconCls}`}/> Reset</button>
			</div>
			<LogBar data={logBarData} />

	  </div>
	  <div>
	  
	  </div></>)
}

export default DLButtons