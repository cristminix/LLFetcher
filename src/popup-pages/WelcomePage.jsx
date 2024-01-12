import  {
	slugify,
	titleCase
} from "../global/fn"

import icon from "/logo/icon-48.png"
import ComponentWithMessaging from "../components/shared/ComponentWithMessaging"
import Button from "../components/shared/ux/Button"
import DropdownSelect from "../components/shared/ux/DropdownSelect"
import AdvancedSelect from "../components/shared/ux/AdvancedSelect"
import CheckBox from "../components/shared/ux/CheckBox" 
import { courseUrlFromSlug } from "../global/course-api/course_fn"

let onMessageAttached = false

class WelcomePage extends ComponentWithMessaging {
	mApp = null
	mCourse = null
	mAuthor = null
	mSection = null
	mToc = null
	store = null

	courseAuthors = []
	constructor(props){
		super(props)
		const {store} = props
		this.store = store
		
		this.mApp = store.get('App')
		this.mCourse = store.get('Course')
		this.mAuthor = store.get('Author')
		this.mSection = store.get('Section')
		this.mToc = store.get('Toc')
		this.mPrxCache = store.get('PrxCache')

		this.state = {
			greeting : 'LLFetcher 3.0+',
			lastCourseList : {},
			fetchBtnState : 0,
			loading : false,
			courseInfo : null,
			validCoursePage : false,
			disableFetchBtn:false,
			isLogin: false,
			legacyMode : false,
			blockMainContent:false
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
	async insertCourseLegacyM3Rec(slug, result){
		await this.mPrxCache.set(slug,result,200)
		await this.activateAddCourseOptionTab(slug, true)
	}
	async insertCourseLegacy(course, sections){
		if(course){
			// create Course
			const {title,slug,duration,sourceCodeRepository,description,urn} = course
			const courseRec = await this.mCourse.create(title,slug,duration,sourceCodeRepository,description,urn)
			if(courseRec){
				console.log(courseRec)
				// create Section
				const courseId = courseRec.id
				if(Array.isArray(sections)){
					for(const section of sections){
						const itemStars = []
						const sectionSlug = slugify(section.title)
						const sectionRec = await this.mSection.create(section.title, sectionSlug, courseId,itemStars)
						if(sectionRec){
							console.log(sectionRec)
							if(Array.isArray(section.items)){
								for(const toc of section.items){
									const sectionId = sectionRec.id
									const itemStar = null
									const vStatusUrn = null
									const tocUrl = courseUrlFromSlug(`${course.slug}/${toc.slug}`)
									const tocRec = await this.mToc.create(toc.title, toc.slug, tocUrl, toc.duration, null, null, sectionId,itemStar,vStatusUrn)
									if(tocRec){
										console.log(tocRec)
									}else{
										console.error('failed to create toc')
									}
								}
							}

						}else{
							console.error('failed to create section')

						}
					}
				}
				
			}else{
				console.error('failed to create course')
			}

		}
		
	}
	async addCourseLegacy(slug){
		this.setState({blockMainContent:true})
		const msg = 'cmd.getM3Rec'
		const result = await this.getFromMessage(msg,slug)
		// this.seState({isLogin})
		// if(course && sections){
		this.insertCourseLegacyM3Rec(slug, result)
		// }

		this.setState({blockMainContent:false})

		// console.log(result)
	}
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
	async activateAddCourseOptionTab(slug,useM3Rec=false){
		const optionPageBaseUrl = "src/option-pages/" 
		const optionUrl = chrome.runtime.getURL(`${optionPageBaseUrl}options.html`)
		const url = `${optionUrl}#/course/add/${slug}?useM3Rec=${useM3Rec?1:0}`
		const tabs = await chrome.tabs.query({ url: `${optionUrl}*` })
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
		const {legacyMode} = this.state
		if(legacyMode){
			this.addCourseLegacy(courseSlug)
		}else{
			
			this.activateAddCourseOptionTab(courseSlug)
		}
		
	}
		
	async onSelectCourse(courseSlug){
	 	this.activateAddCourseOptionTab(courseSlug)
		// this.setState({loading:true, disableFetchBtn:true})
		// await this.props.onSelectCourse(course,null,true)
		// this.setState({loading:false, disableFetchBtn:false})
	}
	onLegacyModeChanged(mode){
		this.setState({legacyMode:mode})
	}
	render(){
		const {blockMainContent,legacyMode,isLogin,greeting,lastCourseList,fetchBtnState,validCoursePage, loading, disableFetchBtn} = this.state
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
		return(<div className="relative">
			{
				blockMainContent ? <>
				<div className="absolute top-0 start-0 w-full h-full bg-white/[.5] rounded-lg dark:bg-gray-800/[.4]"></div>

			<div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
				<span className="sr-only">Loading...</span>
			</div>
			</div>
				</>:null
			}
			<div className="welcome-page page gap-2 flex flex-col items-center pt-2">
				<div className="flex gap-2">
					<div><img src={icon}/></div>
					<div><p className="font-bold pt-2 pb-4 text-center text-lg" style={{fontFamily:"Monoton, cursive"}}>{greeting}</p></div>
				</div>
				<div className="action-cnt w-full">
					{
						lastCourseDdData.length > 0 ? <>
							<AdvancedSelect data={lastCourseDdData} label="Load Last Course" onSelect={course=> this.onSelectCourse(course)}/>
						</>:""
					}
				
				

				{validCoursePage?<div className="btn-cnt text-center flex gap-2 p-2">
					<CheckBox label="Legacy Mode" className="pt-2" checked={legacyMode} onChange={e=>this.onLegacyModeChanged(e)}/>
					<Button  disabled={fetchBtnState==1 || !validCoursePage || disableFetchBtn} className="mx-auto btn btn-primary" onClick={e => this.addCourseFromCurrentUrl()} icon={`fa ${btnCls}`} caption="Add This Course"/>
				</div>:""}
				
				</div>
			</div>
	</div>)
	}
    
}


export default WelcomePage