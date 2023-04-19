// import {useState, useEffect} from "react"

import {konsole, timeout} from "../fn"
// import {Component} from "react"
import FetchQueue from "./FetchQueue"
class FetchQueueBar extends FetchQueue{
	constructor(props){
		super(props)
		this.prefixCls = 'fetch-queue'
	}
	
	
	async startQueue(){
		const {items, sidx, section} = this.props
		konsole.log(`FetchQueueBar.startQueue() sidx=${sidx}`)

		this.setState({btnState:2, queueStarted:true})

		
		const {tocToolBarRefs} = this.props
		let queues = Object.keys(items)
		let tidx
		while(tidx = queues.shift()){
			const item = items[tidx]
			const key = item.slug
			konsole.log(tidx)
			konsole.log(`Processing ${key}`)
			let nidx = items.length - (queues.length+1)
			let percentage = Math.ceil(
				Math.floor( nidx / items.length * 100 )
			)
			this.setState({
				qiData:{
					current:tidx, 
					infoText:`Processing ${key}`,
					percentage,
					next : nidx
				},
				hideProgress : !(percentage > 0),
				percentage

			})
			const validResource = await tocToolBarRefs[section.slug][tidx].current.fetchBtnRef.current.fetchToc()
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
			}else{
				queues.push(tidx)
			}
			
			// await this.props.runSectionQueue(sidx)
			// await timeout(250)
		}
		this.setState({btnState:3, queueStarted:false})
	return 'ok'

	}


}

export default FetchQueueBar