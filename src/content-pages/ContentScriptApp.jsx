import {createRef } from "react"
import ActionCSA from "./ActionCSA"
import crc from "crc"
import CoursePageChecker from "./CoursePageChecker"
class ContentScriptApp extends ActionCSA{
	inputScriptRef = null
	constructor(props){
		super(props)
		this.inputScriptRef = createRef(null)
	}
	getData(){
		console.log('ContentScriptApp.getData()')
		// createDataCodes(this.state.slug)
	}
	componentDidMount(){
		setTimeout(()=>{
			this.setState({display:'none'})
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

		try{
			is = JSON.parse(this.inputScriptRef.current.value)
			// console.log(is)
			const method = is.cmd
			const param = is.param || null
			const ocls = is.ocls || 'default'

			if(typeof this[method] === 'function'){
				// this.setState({ocls})
				const result = await this[method](param)
				this.setState({
					outputScript : JSON.stringify(result, null, 4),
					outputScriptCls : ocls
				})
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

	render(){
		const {display }=this.state
		const {appContainerId} = this.props
		const inputScriptDefaultValue = JSON.stringify({
			cmd : 'getCourseInfo',
			param : null,
			ocls : this.createRandCls()
		} )
		return (<><div id={appContainerId} style={{display,flexDirection:'column',width:'400px',position:'absolute', background:'#000',color:'#fff',zIndex:2001,opacity:.7,fontFamily:'monospace',marginTop:'3.1em',marginLeft:'22%',padding:'1em'}}>
			
		{
			this.state.validCoursePage ? (<>
				<span>{this.state.slug}</span>
				</>) : "Extension is ready"
				
		}
				<textarea id="input-script" style={{color:'#fff'}} defaultValue={inputScriptDefaultValue} onChange={evt => this.onInputScriptChange(evt)} ref={this.inputScriptRef}></textarea>
				<textarea id="output-script" style={{color:'#fff'}} className={this.state.outputScriptCls} onChange={f=>f} value={this.state.outputScript}></textarea>
				<div style={{width:'100%',textAlign:'right'}}><button style={{padding:'1em', background:'#fff', color:'#000'}} id="exec-button" onClick={e=>{this.runScript()}}>Execute Page Fn</button></div>
			
		<CoursePageChecker validCoursePage={this.state.validCoursePage}/>
		</div></>)
		
	}
	
}
import { create } from "underscore"

export default ContentScriptApp