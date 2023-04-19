console.log('app.jsx')
let appCreated = false
const reactRootId = 'content-script-root'
const appContainerId = 'content-script-app'
const appRef = React.createRef(null)
let appInstance = null
let publicRoutePath = null
const {useState, useEffect} = React
const CheckerTag = ({children, hasChildren})=>{
	const cls = hasChildren ? 'course-checker' : 'course-checker-last'

	return (<span className={cls}>{children}</span>)
}
const CoursePageChecker = ({validCoursePage}) => {
	const [checkers, setCheckers] = useState('[]')
	const [tree,setTree] = useState(0)
	const maxTree = 10
	useEffect(()=>{
		console.log(validCoursePage)
		console.log(chrome)
		let tree_ = tree
		tree_ += 1


		// if(tree_ >= maxTree){
		// 	tree_ = 1
		// }
		setTree(tree_)

		buildTree(tree_)

	},[validCoursePage])

	const buildTree = (p) => {
		const newCheckers = []
		let newCheckersP = newCheckers
		console.log(p)
		let childrens = []
		let i = 0
		while(p--){
			console.log(p)
			if(newCheckersP.length === 0){
				childrens.push([])
				newCheckersP.push(childrens[i])
				newCheckersP = childrens[i]

				i++
			}
		}
		newCheckersStr = JSON.stringify(newCheckers)
		console.log(newCheckersStr)
		setCheckers(newCheckersStr)
		// setTimeout(()=>{
		// 	setCheckers(newCheckers)
		// },1000)
		
	}

	const buildTreeTag = (checker) => {
		const finalText = !validCoursePage ? 'This is not course page' : ""
		return checker.length ?  (<CheckerTag hasChildren={true}>
			{
				buildTreeTag(checker.pop())
			}
		</CheckerTag>):( <CheckerTag hasChildren={false}>{finalText}</CheckerTag>)
	}
	const checker = JSON.parse(checkers)
	return (<>
	{
		buildTreeTag(checker)
	}
	</>)
}
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
	async getCourseInfo(){
		return getCourseInfo(this.state.slug)
	}


	async validCoursePage(){
		return this.state.validCoursePage

	}
	async validCoursePageAuto(){
		return this.state.validCoursePage

	}
	async getCourseToc(url){
		// console.log(toc.url)
		let resultCode = 4
		try{
			const res = await fetch(url)
			const text= await res.text()
			resultCode = 3
			const parsed = parseToc(text)
			console.log(parsed)
			return parsed
		}catch(e){
			console.log(e)

		}
	}
	async getCourseSections(urn){
		// console.log(urn)
		return getCourseSections(urn)
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
	async runScript(){
		// is = inputScript shorthand
		let is = {
			cmd : 'getCourseInfo',
			param : null,
			ocls : `os-${(new Date).getTime()}`
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
		const inputScriptDefaultValue = JSON.stringify({
			cmd : 'getCourseInfo',
			param : null,
			ocls : `os-${(new Date).getTime()}`
		} )
		return (<><div id={appContainerId} style={{display:'flex',flexDirection:'column',width:'400px',position:'absolute', background:'#000',color:'#fff',zIndex:2001,opacity:.7,fontFamily:'monospace',marginTop:'3.1em',marginLeft:'22%',padding:'1em'}}>
			
		{
			this.state.validCoursePage ? (<>
				<span>{this.state.slug}</span>
				<textarea id="input-script" style={{color:'#fff'}} defaultValue={inputScriptDefaultValue} onChange={evt => this.onInputScriptChange(evt)} ref={this.inputScriptRef}></textarea>
				<textarea id="output-script" style={{color:'#fff'}} className={this.state.outputScriptCls} onChange={f=>f} value={this.state.outputScript}></textarea>
				<div style={{width:'100%',textAlign:'right'}}><button style={{padding:'1em', background:'#fff', color:'#000'}} id="exec-button" onClick={e=>{this.runScript()}}>Execute Page Fn</button></div>
			</>) : ""
				
		}
		<CoursePageChecker validCoursePage={this.state.validCoursePage}/>
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
