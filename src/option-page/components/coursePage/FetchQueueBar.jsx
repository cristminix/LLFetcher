// import {useState, useEffect} from "react"

import {timeout, makeDelay, isEqual} from "../../../components/fn"
// import {Component} from "react"

// const delay = makeDelay(500)
import FetchQueue from "./FetchQueue"
class FetchQueueBar extends FetchQueue{
	delay = null
	checkChildProgressChecked = false
	constructor(props){
		super(props)
		this.prefixCls = 'fetch-queue'
		this.delay = makeDelay(500)
		this.state.retryCount = []
	}
	
	async startQueue(){
		const {items, sidx, section, tocToolBarRefs, onUpdateQueueProgress} = this.props
		
		let queues = Object.keys(items)
		let tidx
		let retryCount = queues.map(n => 0)
		this.setState({retryCount, btnState:2, queueStarted:true})
		const successQueues = []
		const failedQueues = []
		while(tidx = queues.shift()){
			// this.setState({btnState:2})
			const item = items[tidx]
			const key = item.slug
			console.log(tidx)
			console.log(`Processing ${key}`)
			let nidx = items.length - (queues.length+1)
			
			const fetchBtn = tocToolBarRefs[section.slug][tidx].current.fetchBtnRef.current
			if(fetchBtn.isFetched()){
				nidx += 1
				const percentage = Math.ceil(
					Math.floor( nidx / items.length * 100 )
				)
				onUpdateQueueProgress('FetchQueueBar', {sidx,section, percentage})
				this.setState({
					qiData:{
						current:tidx, 
						infoText:`Complete ${key}`,
						percentage,
						next : nidx
					},
					hideProgress : !(percentage > 0),
					percentage
	
				})
				successQueues.push(tidx)
				continue
			}
			const validResource = await fetchBtn.fetchToc()
			if(validResource){
				nidx += 1
				const percentage = Math.ceil(
					Math.floor( nidx / items.length * 100 )
				)
				onUpdateQueueProgress('FetchQueueBar', {sidx,section, percentage})

				this.setState({
					qiData:{
						current:tidx, 
						infoText:`Complete ${key}`,
						percentage,
						next : nidx
					},
					hideProgress : !(percentage > 0),
					percentage
	
				})
				successQueues.push(tidx)

			}else{
				const retryCount= this.state.retryCount
				if(retryCount[tidx] < 2){
					queues.push(tidx)
					retryCount[tidx] += 1
					console.log(retryCount)
					this.setState({retryCount})
				}
				//failedQueues.push(tidx)

			}
			
			// await this.props.runSectionQueue(sidx)
			// await timeout(250)
		}
		const btnState = successQueues.length === items.length ? 3 : 4
		this.setState({btnState, queueStarted:false})
		return 'ok'

	}
	checkProgressItem(queues, items){
		let nidx = items.length - (queues.length)
		let percentage = Math.ceil(
			Math.floor( nidx / items.length * 100 )
		)
		return percentage
	}
	checkChildProgress(props){
		const {section, items, tocToolBarRefs, onUpdateQueueProgress,sidx} = props
		let tidx=0,queues = Object.keys(items)
		let percentage = 0
		while(tidx = queues.shift()){
			const fetchBtn = tocToolBarRefs[section.slug][tidx].current.fetchBtnRef.current
			if(fetchBtn.isFetched()){
				percentage = this.checkProgressItem(queues, items)
				// console.log(percentage)
			}
			
		}
		this.setState({
			hideProgress : !(percentage > 0),
			percentage,
			btnState : percentage === 0 ? 1 : percentage === 100 ? 3 : 4
		})
		onUpdateQueueProgress('FetchQueueBar', {sidx,section, percentage})
		return percentage
	}
	componentWillReceiveProps(props){
		this.delay(()=>{
			if(!this.checkChildProgressChecked){
				this.checkChildProgress(props)
				this.checkChildProgressChecked = true
			}
		})
		return true
	}
	async componentDidMount(){
		
	}

}

export default FetchQueueBar