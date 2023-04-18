import {Component} from "react"
import {konsole} from "../fn"
import QueueInfo, {initialQiData} from "./QueueInfo"
/**
 * 
 * props : section , sidx, prefixCls
 * */
class FetchQueue extends Component{
	prefixCls = null
	constructor(props){
		super(props)
		const {section, sidx, prefixCls} = props
		this.prefixCls = prefixCls || 'fetch-queue'
		this.state = {
			btnState : 1,
			hideProgress : true,
			hideBtn : false,
			percentage : 0,
			qiData : initialQiData,
			queueStarted : false	
		}
	}
	
	
	startQueue(){
		konsole.log(`FetchQueueBar.startQueue() sidx=${sidx}`)
	}

	render(){
		const {btnState, hideProgress, percentage, hideBtn,qiData} = this.state
		
		const iconCls = btnState === 1 ? 'fa-play'
				   : btnState === 2 ? 'fa-spin fa-spinner' 
				   					: btnState === 3 ? 'fa-check' 
				   									 : btnState === 4 ? 'fa-refresh' 
				   									 				  : 'fa-play'
		const {prefixCls} = this    									 				  
		return(<> <div className={`${prefixCls}-bar`}>
	        <div className="test-data">
	            <code></code>
	        </div>
	        <div className={`${prefixCls}-pb`}>
	        	{
	        		!hideProgress ? (<div className="progress">
		                <div className="progress-bar bg-info" 
		                	 role="progressbar" 
		                	 style={{width : `${percentage}%`}} 
		                	 aria-valuenow={percentage} 
		                	 aria-valuemin={0} 
		                	 aria-valuemax={100}>
		                </div>
		            </div>) : ""
	        	}
	        </div>
	        {
	        	!hideBtn ? (<div className={`btn-${prefixCls}-cnt`}>
		            <button style={{ color : btnState === 3 ? 'white' : 'inherit' }} 
		            		disabled={btnState !==1 && btnState !== 4} 
		            		onClick={e => this.startQueue()} 
		            		className={`btn btn-sm btn-${prefixCls}`}>
		            	<i className={`fa ${iconCls}`}></i></button>
		            <QueueInfo data={qiData}/>	
		        </div>) : ""
	        }
	        
	    </div></>)		   									 				  
	}
	
}

export default FetchQueue