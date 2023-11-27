import {
	getAuthors,
	getCourseInfo,
	getCourseSections,
	getCourseToc,
	getTranscripts
} from "./course_fn.js"

class CourseApi {
	store = null
	
	constructor(store){
		this.store = store
	}

	getCourseSlugFromUrl(url){

	}
	getCourseInfo(courseSlug, refresh=false){

	}
	getCourseXmlDoc(courseUrl, noCache=false){

	}
	getTocXmlDoc(tocSlug,tocUrl,noCache=false){

	}
	getAuthors(courseSlug){

	}
	fetchCourseInfo(courseSlug, refresh=false){

	}
	getCourseSections(courseSlug){

	}
	getCourseTocs(courseSlug){

	}
	getStreamLocs(toc, refresh=false){

	}
	getTranscripts(toc, refresh=false){
		
	}
}

export default CourseApi