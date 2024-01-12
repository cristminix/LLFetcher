import React from 'react'
import {createRef } from "react"
import ActionCSA from "./ActionCSA"
import crc from "crc"
import CoursePageChecker from "./CoursePageChecker"
function jsonStringifyRecursive(obj) {
    const cache = new Set();
    return JSON.stringify(obj, (key, value) => {
        if (typeof value === 'object' && value !== null) {
            if (cache.has(value)) {
                // Circular reference found, discard key
                return;
            }
            // Store value in our collection
            cache.add(value);
        }
        return value;
    }, 4);
}

class ContentScriptApp extends ActionCSA{
	inputScriptRef = null
	inputScriptCallerRef = null
	constructor(props){
		super(props)
		this.inputScriptRef = createRef(null)
		this.inputScriptCallerRef = createRef(null)
	}
	getData(){
		console.log('ContentScriptApp.getData()')
		// createDataCodes(this.state.slug)
	}
	componentDidMount(){
		setTimeout(()=>{
			// this.setState({display:'none'})
		},5000)
	}
	createRandCls(){
		const dtStr = (new Date).getTime().toString()
		return `os-${crc.crc32(dtStr).toString(16)}`
	}
	async runScript(){
		// is = inputScript shorthand
		let is = {
			cmd : 'getCourseInfo',
			param : null,
			ocls : this.createRandCls()
		} 
		const caller = this.inputScriptCallerRef.current.value
		this.setState({inputScriptCaller:caller})
		try{
			is = JSON.parse(this.inputScriptRef.current.value)
			// console.log(is)
			const method = is.cmd
			const param = is.param || null
			const ocls = is.ocls || 'default'
			
			if(typeof this[method] === 'function'){
				// this.setState({ocls})
				const result = await this[method](param)
				// console.log(result)
				const state ={
					outputScript : (new Date).getTime().toString(),
					outputScriptCls : ocls,
					// inputScriptCaller: caller
				}
				try{
					state.outputScript = jsonStringifyRecursive(result)
					if(state.outputScript.length/1024 > 1000){
						setTimeout(()=>{
							this.setState({outputScript:`{cleared:'to save memory'}`})
						},5000)
					}
				}catch(e){
					console.error(e)
				}
				this.setState(state)
			}else{
				console.error(`ContentScriptApp doesnt have any method called ${method}`)
			}
			console.log(is)
		}catch(e){
			console.error(e)
		}
	}


	onInputScriptChange(evt){
	
	}
	onInputScriptCallerChange(evt){

	}

	render(){
		let {display,inputScriptCaller }=this.state
		const {appContainerId} = this.props
		const inputScriptDefaultValue = JSON.stringify({
			cmd : 'getCourseInfo',
			param : null,
			ocls : this.createRandCls()
		} )
		// const inputScriptCaller = inputScriptDefaultValue.caller  
		// const textareStyle = {color:'#fff'}
		return (<><div id={appContainerId} style={{display,flexDirection:'column',width:'400px',position:'absolute', background:'#000',color:'#fff',zIndex:2001,opacity:.7,fontFamily:'monospace',marginTop:'3.1em',marginLeft:'22%',padding:'1em'}}>
			
		{
			this.state.validCoursePage ? (<>
				<span>{this.state.slug}</span>
				</>) : "Extension is ready"
				
		}
				<textarea id="input-script" style={{color:'#fff'}} defaultValue={inputScriptDefaultValue} onChange={evt => this.onInputScriptChange(evt)} ref={this.inputScriptRef}></textarea>
				<textarea id="input-script-caller" style={{color:'#fff'}} defaultValue={inputScriptCaller} onChange={evt => this.onInputScriptCallerChange(evt)} ref={this.inputScriptCallerRef}></textarea>
				<textarea id="output-script" style={{color:'#fff'}} className={this.state.outputScriptCls} onChange={f=>f} value={this.state.outputScript}></textarea>
				<div style={{width:'100%',textAlign:'right'}}><button style={{padding:'1em', background:'#fff', color:'#000'}} id="exec-button" onClick={e=>{this.runScript()}}>Execute Page Fn</button></div>
			
		<CoursePageChecker validCoursePage={this.state.validCoursePage}/>
		</div></>)
		
	}
	
}

export default ContentScriptApp