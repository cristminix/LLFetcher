console.log('app.jsx')
let appCreated = false
const reactRootId = 'content-script-root'
const appContainerId = 'content-script-app'
const appRef = React.createRef(null)
let appInstance = null
let publicRoutePath = null
class Action_csa extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			validCoursePage : false,
			slug : '',
			outputScriptCls : 'default',
			outputScript : '',
			// ocls : 'default'
		}
	}
	getCourseInfo(){
		return getCourseInfo(this.state.slug)
	}

	getCourseSections(){
		const ci = this.getCourseInfo()
		return getCourseSections(ci.urn)
	}
}
class ContentScriptApp extends Action_csa{
	inputScriptRef = null
	constructor(props){
		super(props)
		this.inputScriptRef = React.createRef(null)
	}
	getData(){
		console.log(chrome)
		createDataCodes(this.state.slug)
	}
	runScript(){
		// is = inputScript shorthand
		let is = {
			cmd : 'getCourseInfo',
			param : null,
			ocls : `os-${(new Date).getTime()}`
		} 

		try{
			is = JSON.parse(this.inputScriptRef.current.value)
			const method = is.cmd
			const param = is.param || null
			const ocls = is.ocls || 'default'

			if(typeof this[method] === 'function'){
				// this.setState({ocls})
				const result = this[method](param)
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
		const inputScriptDefaultValue = JSON.stringify({
			cmd : 'getCourseInfo',
			param : null,
			ocls : `os-${(new Date).getTime()}`
		} )
		return (<><div id={appContainerId}>
			
		{
			this.state.validCoursePage ? (<>
				<span>{this.state.slug}</span>
				<textarea id="input-script" defaultValue={inputScriptDefaultValue} onChange={evt => this.onInputScriptChange(evt)} ref={this.inputScriptRef}></textarea>
				<textarea id="output-script" className={this.state.outputScriptCls} onChange={f=>f} value={this.state.outputScript}></textarea>
				<button id="exec-button" onClick={e=>{this.runScript()}}>Execute Page Fn</button>
			</>) : (<>
				<div>This is not course page</div>
			</>)
				
		}
		</div></>)
		
	}
	
}


const main = async () => {
	attachRouteChangesEvent(async(path)=>{
		publicRoutePath = path
        console.log(`URL changed to ${path}`);
        if(!appInstance){
        	await waitForElm(`#${appContainerId}`)
			appInstance = appRef.current
        }
		const validCoursePage = isCoursePage()
		const slug = getCourseSlugByPath(path)
		// console.log(slug)
		appInstance.setState({validCoursePage, slug})

		if(validCoursePage){
    		pauseVideo()
		}

	})
	createReactRootElement()
	const el = await waitForElm(`#${reactRootId}`)
	const root = ReactDOM.createRoot(el)
	root.render(<ContentScriptApp ref={appRef}/>)
}


main()
