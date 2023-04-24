import {konsole, timeout} from "../fn"

import FetchQueue from "./FetchQueue"
class FetchSectionQueue extends FetchQueue{

	constructor(props){
		super(props)
		this.prefixCls = 'fetch-section-queue'
		this.state.progressItems = {}
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
			
			this.updateProgressIter(sidx, sectionKeys.length,key, 1)
			await runSectionQueue(sidx)
		}
		this.setState({btnState:3, queueStarted:false})

	}

	updateProgressView(section, percentageItem){
		const {progressItems} = this.state
		// console.log(progressItems)
		// return
		progressItems[section.slug] = percentageItem
		const sectionKeys = Object.keys(progressItems)
		// const percentageSum = sectionKeys.reduce((sum, i)=>{
		// 	const key = sectionKeys[i]
		// 	return sum + progressItems[key]
		// })
		let percentageSum = 0
		for(let key in progressItems){
			percentageSum += progressItems[key]
		}
		const pDevider = sectionKeys.length * 100
		const percentage= Math.ceil(Math.floor((percentageSum / pDevider) * 100))
		// const percentage= (percentageSum / pDevider))
		// console.log(progressItems,percentageSum,percentage)
		
		this.setState({
			progressItems,
			hideProgress : percentage === 0,
			percentage,
			btnState : percentage === 100 ? 3 :  percentage > 0 ? 2: percentage === 0 ? 1 : 4
		})

		return percentage
	}
	updateProgressIter(sidx, itemsLength,key, inc=0){
		const nidx = parseInt(sidx)+inc
		const percentage = Math.ceil(
			Math.floor( nidx / itemsLength * 100 )
		)
		this.setState({
			qiData:{
				current:sidx, 
				infoText:`Processing ${key}`,
				percentage
			},
			// hideProgress : !(percentage > 0),
			// percentage

		})
	}
	populateProgressItemsState(){
		const progressItems = {}
		for(let key in this.props.tocs){
			progressItems[key] = 0
		}
		this.setState({progressItems})
	}
	componentDidMount(){
		this.populateProgressItemsState()

	}
	
}

export default FetchSectionQueue