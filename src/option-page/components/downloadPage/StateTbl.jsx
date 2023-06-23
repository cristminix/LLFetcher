import {useEffect, useState} from "react"
import _ from "underscore"
const ivs = []
let lastDlState = null
const StateTbl = ({logBarData, 
					enableDl,loadingDl,
					qPercentage,
					cPercentage,
					percentage, 
					iconCls, 
					dlText, 
					enableResetFlag,loadingResetFlag,
					enableResetQueue,loadingResetQueue,
					rfIconCls,
					rqIconCls,
					cInProgress,
					cSuccessCount,cInteruptCount,downloads,queueStarted,dlstate,store,reloadProgress}) => {
	const [dlstatedata, setDlStateMsgData] = useState(null)
	const getMessageDb = async()=>{
		await store.reload()
		const cmd = 'sw.downloadState'
		const mMessage = store.get("Message")
		const message = mMessage.get(cmd,'popup')
		if(! _.isEqual(lastDlState, message)){
			lastDlState = message
			setDlStateMsgData(message.data)
			console.log(message)
		}
		

	}
	useEffect(()=>{
		for(let i in ivs){
			clearInterval(ivs[i])
		}

		const iv = setInterval(()=>{
			getMessageDb()
		},1000)

		ivs.push(iv)

		return ()=>{ clearInterval(iv) }
	},[])


	useEffect(()=>{
		//reloadProgress(dlstatedata)
	},[dlstatedata])
	let hideInfo = false
	let alertCls = ''
	let message = ''
	let iconCls2= 'fa-spin fa-spinner'
/*
{"download":{"courseId":4,"downloadId":1979,"exclude":null,"filename":"adjusting-audio-720.mp4","fmt":"720","id":369,"opt":{"courseId":4,"filename":"adjusting-audio-720.mp4","tocId":74,"url":"https://www.linkedin.com/dms/C4E0DAQF-jEWFj0W3Ng/learning-original-video-vbr-720/0/1598693004052?ea=95231473&ua=153712024&e=1683017434&v=beta&t=-f9eDsYqjw7FdWWejZjNKF_XCEyk1foAGfatM2CBGvM"},"status":false,"tocId":74,"url":"https://www.linkedin.com/dms/C4E0DAQF-jEWFj0W3Ng/learning-original-video-vbr-720/0/1598693004052?ea=95231473&ua=153712024&e=1683017434&v=beta&t=-f9eDsYqjw7FdWWejZjNKF_XCEyk1foAGfatM2CBGvM"}}
*/
	// console.log(dlstatedata)
	if(dlstatedata){
		const {info,download,mode,delta,success,reset} = dlstatedata
		hideInfo = reset ? true : false
		if(reset){
			alertCls = ''
			message = ''
			// showInfo = false
		}else{
			// showInfo = true
		}
		

		if(success){
			alertCls =  'success' 
			message = download.filename
			iconCls2 = 'fa-check'
		}else{


			if(info){
				alertCls = dlstatedata.mode === 0 ? 'success' : dlstatedata.mode === 1 ? 'danger' : 'warning'
				message = dlstatedata.message

				if(alertCls === 'success'){
					iconCls2 = 'fa-check'

				}
				if(alertCls === 'danger'){
					iconCls2 = 'fa-times'

				}
			}
			
			if(download){
				alertCls = download.status ? 'success'  : 'warning'
				message = download.filename
			}

			if(delta){
				const {error,filename,id,state} = delta

				if(error){
					alertCls = 'danger'
					message = `${filename} download ${state} because of ${error}`
					iconCls2 = 'fa-times'

				}
						
			}
		}
	}
	const thCls = "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
	const tdCls = "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
	return (<>
		{ !hideInfo ? (<div className={`alert alert-${alertCls} text-center`}><i className={`fa ${iconCls2}`}/> {message}</div>):""}
		<div className="state-tbl flex flex-col mx-auto w-full">
		
		<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
			<thead>
				<tr>
					<th className={thCls}>Key</th><th className={thCls}>Value</th>
					<th className={thCls}>Key</th><th className={thCls}>Value</th>
					<th className={thCls}>Key</th><th className={thCls}>Value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td className={tdCls}>qPercentage</td><td className={tdCls}>{qPercentage}</td>
					<td className={tdCls}>cPercentage</td><td className={tdCls}>{cPercentage}</td>
					<td className={tdCls}>percentage</td><td className={tdCls}>{percentage}</td>
				</tr>
				<tr>
					<td className={tdCls}>iconCls</td><td className={tdCls}><i className={`fa ${iconCls}`}/> {iconCls}</td>
					<td className={tdCls}>rfIconCls</td><td className={tdCls}><i className={`fa ${rfIconCls}`}/> {rfIconCls}</td>
					<td className={tdCls}>rqIconCls</td><td className={tdCls}><i className={`fa ${rqIconCls}`}/> {rqIconCls}</td>
				</tr>
				<tr>
					<td className={tdCls}>loadingDl</td><td className={tdCls}>{loadingDl?'Y':'N'}</td>
					<td className={tdCls}>loadingResetFlag</td><td className={tdCls}>{loadingResetFlag?'Y':'N'}</td>
					<td className={tdCls}>loadingResetQueue</td><td className={tdCls}>{loadingResetQueue?'Y':'N'}</td>
				</tr>
				<tr>
					<td className={tdCls}>enableDl</td><td className={tdCls}>{enableDl?'Y':'N'}</td>
					<td className={tdCls}>enableResetFlag</td><td className={tdCls}>{enableResetFlag?'Y':'N'}</td>
					<td className={tdCls}>enableResetQueue</td><td className={tdCls}>{enableResetQueue?'Y':'N'}</td>
				</tr>
				<tr>
					<td className={tdCls}>cInProgress</td><td className={tdCls}>{cInProgress?'Y':'N'}</td>
					<td className={tdCls}>queueStarted</td><td className={tdCls}>{queueStarted?'Y':'N'}</td>
					<td className={tdCls}></td><td className={tdCls}>{''}</td>
				</tr>
				<tr>
					<td className={tdCls}>Total</td><td className={tdCls}>{downloads.length}</td>
					<td className={tdCls}>Success</td><td className={tdCls}>{cSuccessCount}</td>
					<td className={tdCls}>Fails</td><td className={tdCls}>{cInteruptCount}</td>
					
				</tr>
				<tr>
					<td className={tdCls}>dlstatedata</td><td className={tdCls}>{''}</td>
					<td className={tdCls}></td><td className={tdCls}>{''}</td>
					<td className={tdCls}></td><td className={tdCls}>{''}</td>
					
				</tr>
			</tbody>
		</table>
	</div></>)
}

export default StateTbl