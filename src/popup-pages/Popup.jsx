
import {createRef} from "react"

import WelcomePage from "./WelcomePage"
// import CoursePage from "./CoursePage"
// import DownloadPage from "./DownloadPage"
// import HelpPage from "./DownloadPage"
// import OptionPage from "./OptionPage"
// import PageNavigation from "./PageNavigation"
// import SettingPage from "./SettingPage"
// import "./styles/Popup.css"




import PopupAction from "./PopupAction"
class Popup extends PopupAction{
	// pageNavigationRef = null

	constructor(props){
		super(props)
		// this.pageNavigationRef = createRef(null)
	}
	// setPage(){
	// 	const {store,pageNavigationRef} = this
	// 	const pages = {
	// 		welcome : (<WelcomePage store={store} onSelectCourse={(a,b,c)=>this.onSelectCourse(a,b,c)}/>),
	// 		course : (<CoursePage store={store} setNav={nav => this.setState({nav})} 
	// 							  course={this.state.course} 
	// 							  authors={this.state.courseAuthors} 
	// 							  sections={JSON.parse(this.state.courseSectionStr)} 
	// 							  tocs={JSON.parse(this.state.courseTocsStr)}
	// 							  pageNavigationRef={this.pageNavigationRef}/>),
	// 		download : (<DownloadPage store={store}/>),
	// 		help : (<HelpPage store={store}/>),
	// 		setting : (<SettingPage store={store} pageNavigationRef={pageNavigationRef}/>),
	// 		option : (<OptionPage store={store}/>)
	// 	}
	
	// 	return pages[this.state.nav]
	// }
	// onPopupOpen(){
	// 	// sendMessage('cmd.validCoursePage')
	// }
	async onSelectCourse(course){
		console.log(course)
		// this.setState({course},async ()=>{
		// 	if(!authors){
		// 		authors = this.mAuthor.getListByCourse(this.state.course)
		// 	}
		// 	this.setState({courseAuthors :authors})

		// 	if(dontSendMessage){
		// 		await this.loadCourseSections()
		// 	}else{
		// 		// sendMessage('cmd.getCourseSections', this.state.course.urn)
		// 		await this.getCourseSectionsMessage()
		// 	}
		// })
	}

	// async getCourseSectionsMessage(){
	// 	const msg = 'cmd.getCourseSections'
	// 	const csi = await this.getFromMessage(msg, this.state.course.urn)

	// 	if(csi){
	// 		const courseSectionInfoStr = JSON.stringify(csi)
	// 		await this.setState({courseSectionInfoStr})
	// 		await this.createCourseSections(csi)
	// 	}
	// 	// this.setState({validCoursePage})
	// }

	componentDidMount(){
		// if(!onMessageAttached){
		// 	onMessage((evt, source)=>{
		// 		this.onCommand(evt, source)
		//     })
		//     onMessageAttached = true
		// 	this.onPopupOpen()
		// }
		// const {store} = this
		// store.reload()
	}
	render(){
		const {store} = this
		return <div className="app-container w-[300px] py-4 px-2 dark:bg-gray-700 dark:text-gray-200">
			<WelcomePage  store={store}/>
		</div>
	}
}


export default Popup