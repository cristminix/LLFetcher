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
		const {items, sidx} = this.props
		konsole.log(`FetchQueueBar.startQueue() sidx=${sidx}`)

		this.setState({btnState:2, queueStarted:true})

		

		for(let tidx in items){
			const item = items[tidx]
			const key = item.slug
			konsole.log(tidx)
			konsole.log(`Processing ${key}`)
			const nidx = parseInt(tidx)+1
			const percentage = Math.ceil(
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
			// await runSectionQueue(sidx)
			await timeout(250)
		}
		this.setState({btnState:4, queueStarted:false})
	return 'ok'

	}


}

export default FetchQueueBar