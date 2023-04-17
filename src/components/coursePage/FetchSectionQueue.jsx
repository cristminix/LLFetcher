import {useState, useEffect} from "react"

const FetchSectionQueue = ({}) => {
	const [btnState,setBtnState] = useState(0)

	const [hideProgress, setHideProgress] = useState(true)
	const [hideBtn, setHideBtn] = useState(false)
	const [percentage, setPercentage] = useState(0)
	const iconCls = btnState === 1 ? 'fa-play'
				   : btnState === 2 ? 'fa-spin fa-spinner' 
				   					: btnState === 3 ? 'fa-check' 
				   									 : btnState === 4 ? 'fa-refresh' 
				   									 				  : 'fa-play'
	
	const startQueue = async() => {

	}

	return(<><div className="fetch-section-queue">
        <div className="fsqbc">
            <div className="fetch-section-queue-bar">
                <div className="fetch-section-queue-pb">
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
		        	!hideBtn ? (<div className="btn-fetch-section-queue-cnt">
			            <button style={{ color : btnState === 3 ? 'white' : 'inherit' }} 
			            		disabled={btnState !==1 && btnState !== 4} 
			            		onClick={e => startQueue()} 
			            		className="btn btn-sm btn-fetch-section-queue">
			            	<i className={`fa ${iconCls}`}></i>
						</button>
			        </div>) : ""
		        }
            </div>
        </div>
    </div></>)
}

export default FetchSectionQueue