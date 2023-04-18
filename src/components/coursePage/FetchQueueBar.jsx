// import {useState, useEffect} from "react"

import {konsole} from "../fn"
// import {Component} from "react"
import FetchQueue from "./FetchQueue"
class FetchQueueBar extends FetchQueue{
	constructor(props){
		super(props)
		this.prefixCls = 'fetch-queue'
	}
	
	
	startQueue(){
		konsole.log(`FetchQueueBar.startQueue() sidx=${sidx}`)
	}


	
}

export default FetchQueueBar