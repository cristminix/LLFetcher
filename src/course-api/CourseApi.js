import {
	courseUrlFromSlug,
	getAuthors,
	getCourseInfo,
	getCourseSections,
	getCourseToc,
	getTranscripts,
	convertJsonToXml,
	parseJsonSchema,crc32,lsSet,lsGet,
	getCourseXmlParentElement
} from "./course_fn.js"
import jQuery from "jquery"

class CourseApi {
	store = null
	course = null
	courseXmlDoc = null
	tocXmlDocs = {}
	authors=[]
	
	constructor(store){
		this.store = store
	}

	getCourseSlugFromUrl(url){
		const [courseSlug, tocSlug] = getCourseSlugFromUrl(url)
		return courseSlug
	}
	async getCourseInfo(courseSlug, refresh=false){
		let course = null
		if(!course){
			course = await this.fetchCourseInfo(courseSlug, refresh)
		}
		if(course){
			self.course = course
		}

		return course


	}
	async getCourseXmlDoc(courseUrl, noCache=false){

		let xmlDoc = this.courseXmlDoc
		if(!xmlDoc){
			const pageKeyCache = 'fetch_cache_'+crc32(courseUrl)
			let cacheContent = null
			try{
				cacheContent = await lsGet(pageKeyCache)
				console.log(`cacheContent got from localStorage`)
			}catch{}

			if(!cacheContent){
				try{
					let response = await fetch(courseUrl)
					if(response.ok){
						let responseText = await response.text()
						
						// console.log(responseText)
						cacheContent = responseText
					}
					console.log(response)
				}catch(e){
					console.error(e)
				}	
			}
			if(cacheContent){
				try{
					await lsSet(pageKeyCache, cacheContent)
				}catch(e){
					console.error(e)
				}
			}

			// console.log(cacheContent)
			const jsonSchema = parseJsonSchema(cacheContent)
			xmlDoc = jQuery(convertJsonToXml(jsonSchema))
			xmlDoc = jQuery(xmlDoc[2])
			this.courseXmlDoc = xmlDoc
		}

		return xmlDoc
	}
	getTocXmlDoc(tocSlug,tocUrl,noCache=false){

	}
	async getAuthors(courseSlug){
		let authors = []
		if(this.course){
			authors = this.authors
			if(authors.length > 0){
				authors = this.authors
				
			}else{

			}
		}
		
		const courseUrl = courseUrlFromSlug(courseSlug)
		const xmlDoc= await this.getCourseXmlDoc(courseUrl)
		authors = await getAuthors(xmlDoc, this.store.get('Author'), this.course)
		this.authors = authors
		return authors
	}
	async fetchCourseInfo(courseSlug, refresh=false){
		let noCache = !refresh
		const courseUrl = courseUrlFromSlug(courseSlug)
		let xmlDoc = await this.getCourseXmlDoc(courseUrl, noCache)
		let course = await getCourseInfo(xmlDoc,courseSlug)

		// console.log(courseUrl,xmlDoc,course)
		return course

	}
	async getCourseSections(courseSlug){
		let sections = null
		const mSection = this.store.get('Section')
        if (this.course){
            // sections = this.store.get('Section').getListCourseId(this.course.id)
            if (sections){
                // log('course_sections_get_from_m_sections')
                this.sections = sections
                return sections
			}
		}
        let courseUrl = courseUrlFromSlug(courseSlug)
        let xmlDoc= await this.getCourseXmlDoc(courseUrl)
        if (xmlDoc){
            const [p,courseUrn] = getCourseXmlParentElement(xmlDoc)
            if(p){
				sections = getCourseSections(p, xmlDoc, mSection, 0/*this.course.id*/)
                this.sections = sections
			}else{
                console.error("Could not get course xml parent element")
			}
        }else{
            console.error("Could not get course xml doc")
		}
        // b=benchmark('ApiCourse.getCourseSections','end')
        // print(f"ApiCourse.getCourseSections time elapsed:{b['elapsed_time']}\n")

        return sections
	}
	async getCourseTocs(courseSlug){
		const mToc = this.store.get("Toc")
		let tocs=null
        // let courseSlug=this.course.slug
        let sections = this.sections
        if (!sections){
            sections = await this.getCourseSections(courseSlug)
		}
		if (sections){
            tocs={}
            for (const section of sections){
                let sectionSlug = section.slug
                tocs[sectionSlug]=[]//mToc.getListBySectionId(section.id)

                if (tocs[sectionSlug].length == 0 /*|| tocs[sectionSlug].length ==0*/){
                    const courseUrl = courseUrlFromSlug(courseSlug)
                    let courseXmlDoc= await this.getCourseXmlDoc(courseUrl)
                    if (courseXmlDoc){
                        const [p,courseUrn] = getCourseXmlParentElement(courseXmlDoc)
                        if(p){
                            tocs[sectionSlug]=[]
                            for (const itemStar of section.itemStars){
                                let toc = getCourseToc(itemStar,courseXmlDoc,mToc,0/*section.id*/, courseSlug)
                                if(toc){
									tocs[sectionSlug].push(toc)
								}
							}
						}else{
                            	console.error("Could ! get course xml parent element")
						}
					}else{
						console.error("Could ! get course xml doc")
					}
				}else{
					console.log('toc[section_slug]s_get_from_m_toc')
				}
			}
		} 
        return tocs 
	}
	async getStreamLocs(toc, refresh=false){
		
	}
	async getTranscripts(toc, refresh=false){
		
	}
}

export default CourseApi