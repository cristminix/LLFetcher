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
		const {section, sidx,tidx, prefixCls} = props
		this.prefixCls = prefixCls || 'fetch-queue'
		this.state = {
			btnState : 1,
			hideProgress : false,
			hideBtn : false,
			percentage : 0,
			qiData : initialQiData,
			queueStarted : false	
		}
	}
	
	
	startQueue(){
		konsole.log(`FetchQueueBar.startQueue() sidx=${sidx} sidx=${tidx}`)
	}

	render(){
		const {btnState, hideProgress, percentage, hideBtn,qiData, queueStarted} = this.state
		
		const iconCls = btnState === 1 ? 'fa-play'
				   : btnState === 2 ? 'fa-spin fa-spinner' 
				   					: btnState === 3 ? 'fa-check' 
				   									 : btnState === 4 ? 'fa-refresh' 
				   									 				  : 'fa-play'
		const {prefixCls} = this    									 				  
		return(<> <div className={`${prefixCls}-bar`} style={style.qcnt}>
	        <div className={`${prefixCls}-pb item`} style={{width:100}}>
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
	        	!hideBtn ? (<div className={`btn-${prefixCls}-cnt item`} style={{position:'absolute'}}>
		            <button style={Object.assign({ color : btnState === 3 ? 'white' : 'inherit' },style.btnFetch)} 
		            		disabled={btnState !==1 && btnState !== 4} 
		            		onClick={e => this.startQueue()} 
		            		className={`btn btn-sm btn-${prefixCls}`}>
		            	<i className={`fa ${iconCls}`}></i></button>
		            	{
		            		// queueStarted ? (<QueueInfo data={qiData}/>):""
		            	}
		            	
		        </div>) : ""
	        }
	        
	    </div></>)		   									 				  
	}
	
}

const style={
	qcnt : {
		display : 'flex',
		justifyContent : 'end'
	},
	item:{
		display:'block',
		border:'solid 1px #ddd'
	},
	btnFetch:{
		padding: 0,
	    marginTop: '-10px',
	    fontSize: '70%',
	    marginRight: '4px',
	    border:'none',
	    color:'#333'

	}
}
export default FetchQueue