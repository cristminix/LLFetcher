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

	return (<>
		{ !hideInfo ? (<div className={`alert alert-${alertCls} text-center`}><i className={`fa ${iconCls2}`}/> {message}</div>):""}
		<div className="state-tbl mx-auto w-3/4">
		<div className="flex flex-col">
  <div className="-m-1.5 overflow-x-auto">
    <div className="p-1.5 min-w-full inline-block align-middle">
      <div className="overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead>
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Age</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Address</th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">John Brown</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">45</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">New York No. 1 Lake Park</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Jim Green</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">27</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">London No. 1 Lake Park</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
              </td>
            </tr>

            <tr>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">Joe Black</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">31</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">Sidney No. 1 Lake Park</td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a className="text-blue-500 hover:text-blue-700" href="#">Delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
		<table className="table table-bordered" style={{display:'block'}}>
			<thead>
				<tr>
					<th>Key</th><th>Value</th>
					<th>Key</th><th>Value</th>
					<th>Key</th><th>Value</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>qPercentage</td><td>{qPercentage}</td>
					<td>cPercentage</td><td>{cPercentage}</td>
					<td>percentage</td><td>{percentage}</td>
				</tr>
				<tr>
					<td>iconCls</td><td><i className={`fa ${iconCls}`}/> {iconCls}</td>
					<td>rfIconCls</td><td><i className={`fa ${rfIconCls}`}/> {rfIconCls}</td>
					<td>rqIconCls</td><td><i className={`fa ${rqIconCls}`}/> {rqIconCls}</td>
				</tr>
				<tr>
					<td>loadingDl</td><td>{loadingDl?'Y':'N'}</td>
					<td>loadingResetFlag</td><td>{loadingResetFlag?'Y':'N'}</td>
					<td>loadingResetQueue</td><td>{loadingResetQueue?'Y':'N'}</td>
				</tr>
				<tr>
					<td>enableDl</td><td>{enableDl?'Y':'N'}</td>
					<td>enableResetFlag</td><td>{enableResetFlag?'Y':'N'}</td>
					<td>enableResetQueue</td><td>{enableResetQueue?'Y':'N'}</td>
				</tr>
				<tr>
					<td>cInProgress</td><td>{cInProgress?'Y':'N'}</td>
					<td>queueStarted</td><td>{queueStarted?'Y':'N'}</td>
					<td></td><td>{''}</td>
				</tr>
				<tr>
					<td>Total</td><td>{downloads.length}</td>
					<td>Success</td><td>{cSuccessCount}</td>
					<td>Fails</td><td>{cInteruptCount}</td>
					
				</tr>
				<tr>
					<td>dlstatedata</td><td>{''}</td>
					<td></td><td>{''}</td>
					<td></td><td>{''}</td>
					
				</tr>
			</tbody>
		</table>
	</div></>)
}

export default StateTbl