import  {
	titleCase
} from "../global/fn"

import icon from "/logo/icon-48.png"
import ComponentWithMessaging from "../components/shared/ComponentWithMessaging"
import Button from "../components/shared/ux/Button"
import DropdownSelect from "../components/shared/ux/DropdownSelect"

let onMessageAttached = false

class WelcomePage extends ComponentWithMessaging {
	mApp = null
	mCourse = null
	mAuthor = null
	store = null

	courseAuthors = []
	constructor(props){
		super(props)
		const {store} = props
		this.store = store
		
		this.mApp = store.get('App')
		this.mCourse = store.get('Course')
		this.mAuthor = store.get('Author')

		this.state = {
			greeting : 'LLFetcher 3.0+',
			lastCourseList : {},
			fetchBtnState : 0,
			loading : false,
			courseInfo : null,
			validCoursePage : false,
			disableFetchBtn:false,
			isLogin: false
		}
	}



	async addToLastCourseList(ci){
		this.setState({courseInfo:ci})
		const slug = ci.slug
		const course = await this.createCourse(ci)
		if(!Object.keys(this.state.lastCourseList).includes(slug)){
			this.populateLastCourseList()
		}
		await this.props.onSelectCourse(course, this.courseAuthors)

	}
	/*
	async createAuthors(authors, course){
		// const courseAuthorsTmp = []
		for(let i in authors){
			const {slug,biography,shortBiography} = authors[i]
			const name = titleCase(slug)
			const author = await this.mAuthor.create(name,slug,biography,shortBiography,course.id)
			// console.log(author)
			if(this.courseAuthors.filter(_author_ => _author_.id === author.id).length === 0){
				this.courseAuthors.push(author)
				course = await this.mCourse.addAuthorId(course.id, author.id)
			}
			
		}

		return course

	}
	*/
	/*
	async createCourse(ci){
		// insert course
		const {title,slug,duration,sourceCodeRepository,description,urn} = ci
		let course = await this.mCourse.create(title,slug,duration,sourceCodeRepository,description,urn)
		console.log(course)
		
		course = await this.createAuthors(ci.authors, course)
		return course
	}
	*/


	onMessageCommand(evt, source){
		if(evt.name === 'cmd.validCoursePageAuto'){
    		this.setState({validCoursePage:evt.data})
		}
	}

	populateLastCourseList(){
		const savedCourseList = this.mCourse.getList()
		let courseListObj = {}
		for(let i in savedCourseList){
			courseListObj[savedCourseList[i].slug] = savedCourseList[i]
		} 
		this.setState({lastCourseList :courseListObj})

	}
	
	async componentDidMount(){
		this.populateLastCourseList() 
		this.initMessaging()
		await this.getValidCourseMessage()
		
	}
	async getValidCourseMessage(){
		const msg = 'cmd.validCoursePage'
		const validCoursePage = await this.getFromMessage(msg)
		this.setState({validCoursePage})

		// await this.getIsLoginMessage()
		/*
		const cookieContent = await this.getCookieMessage()
		this.store.get("Cookie").create('linkedin',cookieContent)
		console.log(cookieContent)
		*/
	}
	/*
	async getCookieMessage(){
		const msg = 'cmd.getCookie'
		const cookieContent = await this.getFromMessage(msg)
		return cookieContent
	}
	*/
	async getIsLoginMessage(){
		const msg = 'cmd.isLogin'
		const isLogin = await this.getFromMessage(msg)
		this.seState({isLogin})
	}
	async getCourseInfoMessage(){
		const msg = 'cmd.getCourseInfo'
		this.setState({fetchBtnState:1})

		const course = await this.getFromMessage(msg)
		await this.addToLastCourseList(course)
	}
	async getCurrentTabUrl(){
		return new Promise((resolve,reject)=>{
			chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
				let currentTab = tabs[0]
				let tabUrl = currentTab.url
				resolve(tabUrl)
			})
			// reject('error')
		})
	}
	async activateAddCourseOptionTab(slug){
		const optionPageBaseUrl = "src/option-pages/" 
		const url = chrome.runtime.getURL(`${optionPageBaseUrl}options.html#/course/add/${slug}`)
		const tabs = await chrome.tabs.query({ url: `${chrome.runtime.getURL('options.html')}*` })
		if(tabs.length > 0){
			chrome.runtime.sendMessage({ action: 'activateTab', url ,optionPageBaseUrl})
		}else{
			chrome.tabs.create({ url })
		}

		// setTimeout(f=>window.close(),100)
	}
	async addCourseFromCurrentUrl(){
		const url = await this.getCurrentTabUrl()
		const courseSlug = url.replace("https://www.linkedin.com/learning/","").split("/")[0]
		this.activateAddCourseOptionTab(courseSlug)
	}
		
	async onSelectCourse(courseSlug){
	 	this.activateAddCourseOptionTab(courseSlug)
		// this.setState({loading:true, disableFetchBtn:true})
		// await this.props.onSelectCourse(course,null,true)
		// this.setState({loading:false, disableFetchBtn:false})
	}
	
	render(){
		const {isLogin,greeting,lastCourseList,fetchBtnState,validCoursePage, loading, disableFetchBtn} = this.state
		const lastCourseListKeys = Object.keys(lastCourseList)
		const btnCls = fetchBtnState==0 ? 'fa-plus': fetchBtnState==1 ? 'fa-spin fa-spinner' : fetchBtnState==2 ? 'fa-refresh' : 'fa-hand-o-right'
		const lastCourseDdData = lastCourseListKeys.map(slug=>{
			const item = lastCourseList[slug]
			
			const value = item.slug
			const text = item.title
			return {
				value,text
			}
		})
		return(<>
			<div className="welcome-page page gap-2 flex flex-col items-center">
				<div className="flex gap-2">
					<div><img src={icon}/></div>
					<div><p className="font-bold pt-2 pb-4 text-center" style={{fontFamily:"Monoton, cursive"}}>{greeting}</p></div>
				</div>
				<div className="action-cnt">
					{
						lastCourseDdData.length > 0 ? <>
							<DropdownSelect data={lastCourseDdData} selected="Load Last Course" onSelect={course=> this.onSelectCourse(course)}/>
						</>:""
					}
				{
					// lastCourseListKeys.length > 0 ? (<>
					// 	<div className="dropdown">
					// 		<button disabled={loading} className="btn btn-secondary dropdown-toggle" type="button" id="recentCourseButton" data-bs-toggle="dropdown" aria-expanded="false">
					// 		<i className={loading?"fa fa-spin fa-spinner":"fa fa-history"}></i> Load Recent Course
					// 		</button>
					// 		<ul className="dropdown-menu" aria-labelledby="recentCourseButton">
					// 		{
					// 			lastCourseListKeys.map((slug,index)=>{
					// 				const course = lastCourseList[slug]
					// 				return (<li key={index}>
					// 					<a className="dropdown-item" href="#" onClick={e => this.onSelectCourse(course)}>{ course.title }</a>
					// 					</li>)
					// 			})	
							
					// 		}
					// 		</ul>
					// 	</div>
					// </>) : ""
				}
				

				<div className="btn-cnt">
					{/* <button  disabled={fetchBtnState==1 || !validCoursePage || disableFetchBtn} className="btn btn-primary" onClick={e => this.getCourseInfoMessage()}><i className={`fa ${btnCls}`}></i> Fetch This Course</button> */}
					<Button  disabled={fetchBtnState==1 || !validCoursePage || disableFetchBtn} className="btn btn-primary" onClick={e => this.addCourseFromCurrentUrl()} icon={`fa ${btnCls}`} caption="Add This Course"/>
					{/* <span>Valid CoursePage ? {validCoursePage ? 'Yes' : 'No'}</span> */}
				</div>
				<div className="p-4">
					{
					// !isLogin?<div className="alert error"><i className="fa fa-exclamation-triangle"/> <span>Warning you are not loged in</span></div>:''
					
					}
				</div>
				</div>
			</div>
	</>)
	}
    
}


export default WelcomePage