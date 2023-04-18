
import {useState} from "react"
import {konsole} from "../fn"
function reducer(state, action) {
	konsole.log(action)
	return {
		...state,...action
	}
}
const QueueInfo=({data})=>{
	// const [current, setCurrent] = useState(0)
	// const [queue, setQueue] = useState([])
	// const [percentage, setPercentage] = useState(0.0)
	const {current,
		percentage,
		next,
		successCount,
		failedCount,
		sucessIndexes,
		failedIndexes,
		infoText} = data
	return (<>
		<div className="queue-info" style={style.queueInfo}>
			<div className="item" style={style.items}>{current}</div>
			<div className="item" style={style.items}>{next}</div>
			<div className="item" style={style.items}>{percentage}</div>
			<div className="item" style={style.items}>{infoText}</div>
		</div>
	</>)
}
const initialQiData = {
		current : 0,
		percentage : 0,
		next : 0,
		successCount : 0,
		failedCount : 0,
		sucessIndexes : [],
		failedIndexes : [],
		infoText : ''
	}
const style = {
	queueInfo : {display:'flex', position:'absolute',right:4, marginLeft:'-400px',top:0},
	items : {border:'none',padding:'2px 2px',fontSize:'50%'}
}

export default QueueInfo
export {reducer, initialQiData}