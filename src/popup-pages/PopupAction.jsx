import ComponentWithMessaging from "../components/shared/ComponentWithMessaging"

import  {
	// onMessage,
	slugify,
	// sendMessage,
	// console
} from "../global/fn"


let onMessageAttached = false

class PopupAction extends ComponentWithMessaging{
	store = null
	mApp = null
	mAuthor = null
	mSection = null
	mToc = null
	mCourse = null

	constructor(props){
		super(props)
		const {store} = props
		this.store = store
		
		this.mApp = store.get('App')
		this.mAuthor = store.get('Author')
		this.mSection = store.get('Section')
		this.mToc = store.get('Toc')
		this.mCourse = store.get('Course')
		
		this.state = {
			course : null,
			courseAuthors : null,
			courseSectionInfoStr : '[]',
			courseSectionStr : '[]',
			courseTocsStr : '[]',
			nav : 'welcome'
		}
	}

	onNavUpdate(nav){
		this.setState({nav})
	}
	// onMessageCommand(evt, source){
    // 	if(evt.name === 'cmd.getCourseSections'){
	// 		const csi = evt.data
	// 		const courseSectionInfoStr = JSON.stringify(csi)
	// 		this.setState({courseSectionInfoStr})
	// 		this.createCourseSections(csi)
    // 	}
	// }
	// async createCourseTocs(items, section){
	// 	const tocs = []
	// 	const tocIds = []
	// 	for(let i in items){
	// 		const {title, slug, duration, itemStar, vStatusUrn} = items[i]
	// 		const captionFmt = ""
	// 		const captionUrl = ""
	// 		const url = ""
	// 		const toc = await this.mToc.create(title, slug, url, duration, captionUrl, captionFmt, section.id,itemStar,vStatusUrn)
	// 		tocs.push(toc)
	// 		tocIds.push(toc.id)
	// 	}
	// 	const newSection = await this.mSection.updateTocIds(section.id, tocIds)
	// 	return [newSection, tocs]
	// }

	async loadCourseSections(){
		console.log(`Popup.createCourseSections() empty csi `)
		console.log(`try to load from database `)
		if(this.state.course){
			const sections = this.mSection.getList(this.state.course.id)
			let tocs = {}

			for(let i in sections){
				const section = sections[i]
				tocs[section.slug] = this.mToc.getListBySectionId(section.id)
			}
			await this.updateCourseData(sections, tocs)

		}
	}
	// async createCourseSections(csi){
	// 	if(this.state.course){
	// 		let sections = []
	// 		let tocs = {}
	// 		if( csi.length > 0){
	// 			for(let i in csi){
	// 				const {title,items,itemStars} = csi[i]
	// 				const section = await this.mSection.create(title, slugify(title), this.state.course.id,itemStars)
	// 				// console.log(section)
	// 				const [newSection, newTocs] = await this.createCourseTocs(items, section)
	// 				// console.log(newSection)
	// 				sections.push(newSection)
	// 				tocs[section.slug] = newTocs
	// 			}
	// 		}
	// 		await this.updateCourseData(sections, tocs)
	// 	}

		
				
	// }
	async activateOptionTab(slug){
		const url = chrome.runtime.getURL(`options.html#/manager/${slug}`)
		const tabs = await chrome.tabs.query({ url: `${chrome.runtime.getURL('options.html')}*` })
		if(tabs.length > 0){
			chrome.runtime.sendMessage({ action: 'activateTab', url })
		}else{
			chrome.tabs.create({ url })
		}

		setTimeout(f=>window.close(),100)
	}
	async updateCourseData(sections, tocs){
		const courseSectionStr = JSON.stringify(sections)
		const courseTocsStr = JSON.stringify(tocs)
		
		this.setState({courseSectionStr, courseTocsStr},async()=>{
			if(this.state.course.slug !== ''){
				await this.mCourse.setLastSlug(this.state.course.slug)
				
				this.setState({nav : 'course'},()=>{
					const {course,sections, tocs} = this.state
					console.log(course,sections, tocs)
				})
				// this.pageNavigationRef.current.setNav('course')

				this.activateOptionTab(this.state.course.slug)
				
			}
		})
	}
}
export default PopupAction