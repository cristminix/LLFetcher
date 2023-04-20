import {konsole, timeout} from "../fn"

import FetchQueue from "./FetchQueue"
class FetchSectionQueue extends FetchQueue{

	constructor(props){
		super(props)
		this.prefixCls = 'fetch-section-queue'
	}
	
	
	
	// const [qiData, setQiData] = useReducer(qiReducer, initialQiData)
	async startQueue(){
		if(this.state.queueStarted){
			return 
		}
		konsole.log(`FetchSectionQueue.startQueue()`)
		const {sections,tocs, runSectionQueue} = this.props

		this.setState({btnState:2, queueStarted:true})

		const sectionKeys = Object.keys(tocs)

		for(let sidx in sectionKeys){
			const key = sectionKeys[sidx]
			konsole.log(sidx)
			konsole.log(`Processing ${key}`)
			const nidx = parseInt(sidx)+1
			const percentage = Math.ceil(
				Math.floor( nidx / sectionKeys.length * 100 )
			)
			this.setState({
				qiData:{
					current:sidx, 
					infoText:`Processing ${key}`,
					percentage
				},
				hideProgress : !(percentage > 0),
				percentage

			})
			await runSectionQueue(sidx)
		}
		this.setState({btnState:3, queueStarted:false})

	}

	
	
}

export default FetchSectionQueue