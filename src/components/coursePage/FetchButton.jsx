import {useState, useEffect} from "react"

const FetchButton = ({toc}) => {
	const [btnState,setBtnState] = useState(0)
	const btnStateNotLoading = btnState !== 1 && btnState !== 4
	const btnStyle = { border : ( btnStateNotLoading ? 'none' : 'inherit') }
	const iconCls = btnState === 1 ? 'fa-play' 
		   : btnState === 2 ? 'fa-spin fa-spinner' 
		   					: btnState === 3 ? 'fa-check' 
		   									 : btnState === 4 ? 'fa-refresh'
		   									 				  : 'fa-play'
	const fetchToc = async () => {

	}
	return(<><div className="btn-group">
	    <button style={btnStyle} 
	    		disabled={btnState > 1 && btnState < 4} 
	    		onClick={e => fetchToc()} 
	    		className="btn btn-sm" 
	    		title={`Click to fetch TOC resources ${toc.title}`}>
	      	<i className={"fa " + iconCls}></i>
	    </button>
  	</div></>)
}

export default FetchButton