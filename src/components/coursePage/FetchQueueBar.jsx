// import {useState, useEffect} from "react"

import {konsole, timeout, makeDelay, isEqual} from "../fn"
// import {Component} from "react"

// const delay = makeDelay(500)
import FetchQueue from "./FetchQueue"
class FetchQueueBar extends FetchQueue{
	delay = null
	constructor(props){
		super(props)
		this.prefixCls = 'fetch-queue'
		this.delay = makeDelay(500)
		this.state.retryCount = []
	}
	
	async startQueue(){
		const {items, sidx, section} = this.props
		konsole.log(`FetchQueueBar.startQueue() sidx=${sidx}`)

		this.setState({btnState:2, queueStarted:true})

		
		const {tocToolBarRefs} = this.props
		let queues = Object.keys(items)
		let tidx
		let retryCount = queues.map(n => 0)
		this.setState({retryCount})
		const successQueues = []
		const failedQueues = []
		while(tidx = queues.shift()){
			const item = items[tidx]
			const key = item.slug
			konsole.log(tidx)
			konsole.log(`Processing ${key}`)
			let nidx = items.length - (queues.length+1)
			
			const fetchBtn = tocToolBarRefs[section.slug][tidx].current.fetchBtnRef.current
			if(fetchBtn.isFetched()){
				nidx += 1
				const percentage = Math.ceil(
					Math.floor( nidx / items.length * 100 )
				)
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
		const {section, items, tocToolBarRefs} = props
		let tidx=0,queues = Object.keys(items)
		let percentage = 0
		while(tidx = queues.shift()){
			// try{
				const fetchBtn = tocToolBarRefs[section.slug][tidx].current.fetchBtnRef.current
				if(fetchBtn.isFetched()){
					percentage = this.checkProgressItem(queues, items)
					console.log(percentage)
				}
			// }catch(e){
				// console.error(e)
			// }
			
		}
		this.setState({
			hideProgress : !(percentage > 0),
			percentage,
			btnState : percentage === 0 ? 1 : percentage === 100 ? 3 : 4
		})

		return percentage
	}
	componentWillReceiveProps(props){
		
		this.delay(()=>{
			
			this.checkChildProgress(props)
			// if(!isEqual(props.tocToolBarRefs, this.props.tocToolBarRefs)){
				// console.log(props.tocToolBarRefs[props.section.slug])
			// }	
		})
		return true
	}
	async componentDidMount(){
		
	}

}

export default FetchQueueBar