import {
	courseUrlFromSlug,
	getAuthors,
	getCourseInfo,
	getCourseSections,
	getCourseToc,
	getTranscripts,
	getStreamLocations,
	getVideoMetaNd,
	convertJsonToXml,
	parseJsonSchema,lsSet,lsGet,
	getCourseXmlParentElement
} from "./course_fn.js"

import jQuery from "jquery"

class CourseApi {
	store = null
	course = null
	courseXmlDoc = null
	tocXmlDocs = {}
	authors=[]
	mPrxCache=null
	
	constructor(store){
		this.store = store
		this.mPrxCache = store.get('PrxCache')
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
	async getXmlDoc(url,noCache=false){
		let xmlDoc = null
		const webCache = await this.mPrxCache.get(url)
		let cacheContent = null
		let statusCode = 0

		if(!webCache.isEmpty()){
			cacheContent = webCache.getCacheContent()
			statusCode = webCache.getStatusCode()
		}else{
			try{
				let response = await fetch(url)
				console.log(response)
				statusCode = response.status
				if(response.ok){
					let responseText = await response.text()
					cacheContent = responseText
					if(statusCode == 200){
						this.mPrxCache.set(url,cacheContent,statusCode)
					}
				}
				console.log(response)
			}catch(e){
				console.error(e)
			}
		}
		

		// console.log(cacheContent)
		const jsonSchema = parseJsonSchema(cacheContent)
		xmlDoc = jQuery(convertJsonToXml(jsonSchema))
		xmlDoc = jQuery(xmlDoc[2])
		return xmlDoc
	}
	async getCourseXmlDoc(courseUrl, noCache=false){

		let xmlDoc = this.courseXmlDoc
		if(!xmlDoc){
			xmlDoc = await this.getXmlDoc(courseUrl,noCache)
			this.courseXmlDoc = xmlDoc
		}

		return xmlDoc
	}
	async getTocXmlDoc(tocSlug,tocUrl,noCache=false){
		
		let xmlDoc = null
		if(typeof this.tocXmlDocs[tocSlug] !== 'undefined'){
			xmlDoc = this.tocXmlDocs[tocSlug]
		}
		if(!xmlDoc ){
			xmlDoc = await this.getXmlDoc(tocUrl,noCache)
			this.tocXmlDocs[tocSlug] = xmlDoc
		}

		return xmlDoc
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
		let course = getCourseInfo(xmlDoc,courseSlug)

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
				sections = await getCourseSections(p, xmlDoc, mSection, 0/*this.course.id*/)
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
		let streamLocations = null
        let ok = false
        let noCache = false
        let retryCount = 0
        let waitTime = 0

        if (refresh) {
            // this.mStreamLocation.deleteByTocId(toc.id)
            noCache = true
        }

        while (!ok) {
            if (retryCount > 0) {
                console.log(`retry ${retryCount}`)
            }

            if (waitTime > 0) {
                console.log(`wait for ${waitTime} second`)
                setTimeout(() => {}, waitTime * 1000)
            }

            streamLocations = null//this.mStreamLocation.getByTocId(toc.id)

            if (streamLocations) {
                log('stream_locations_get_from_m_stream_location')
                break
            } else {
                const tocXmlDoc = await this.getTocXmlDoc(toc.slug, toc.url, noCache)

                if (tocXmlDoc) {
                    const [vMetaDataNd, statuses] = getVideoMetaNd(toc.vStatusUrn, tocXmlDoc)

                    if (vMetaDataNd) {
                        streamLocations = await getStreamLocations(vMetaDataNd, tocXmlDoc, toc, this.mStreamLocation)
                    } else {
                        console.error('Could not get video metadata nd')
                    }

                    if (!streamLocations) {
                        // this.mPrx.deleteByPageName(this.prx.getPageName())
                    }

                    if (jQuery.inArray(400, statuses) > 0 || jQuery.inArray(429, statuses) > 0 || jQuery.inArray(427, statuses) > 0 || statuses.length === 0) {
                        retryCount += 1
                        noCache = true
                        waitTime += 5
                    } else {
                        ok = true
                        waitTime = 0
                    }

                    if (retryCount > 3) {
                        console.log(`retry counts reached max : ${retryCount}`)
                        waitTime = 0
                        break
                    }
                } else {
                    console.error('Could not get toc xml doc')
                    break
                }
            }
        }
 

        return streamLocations
	}
	async getTranscripts(toc, refresh=false){
		let transcripts = null
        let ok = false
        let noCache = false
        let retryCount = 0
        let waitTime = 0
		const mTranscript = this.store.get("Transcript")
        if (refresh) {
            // this.mTranscript.deleteByTocId(toc.id)
            noCache = true
        }

        while (!ok) {
            if (retryCount > 0) {
                console.log(`retry ${retryCount}`)
            }

            if (waitTime > 0) {
                console.log(`wait for ${waitTime} second`)
                setTimeout(() => {}, waitTime * 1000)
            }

            transcripts = null//this.mTranscript.getByTocId(toc.id)

            if (transcripts) {
                log('transcripts_get_from_m_transcripts')
                break
            } else {
                const tocXmlDoc = await this.getTocXmlDoc(toc.slug, toc.url, noCache)

                if (tocXmlDoc) {
                    const [vMetaDataNd, statuses] = getVideoMetaNd(toc.vStatusUrn, tocXmlDoc)

                    if (vMetaDataNd) {
                        transcripts = await getTranscripts(vMetaDataNd, tocXmlDoc, toc, mTranscript)
                    } else {
                        console.error('Could not get video metadata nd')
                    }

                    if (!transcripts) {
                        // this.mPrx.deleteByPageName(this.prx.getPageName())
                    }

                    if (jQuery.inArray(400, statuses) > 0 || jQuery.inArray(429, statuses) > 0 || jQuery.inArray(427, statuses) > 0 || statuses.length === 0) {
                        retryCount += 1
                        noCache = true
                        waitTime += 5
                    } else {
                        ok = true
                        waitTime = 0
                    }

                    if (retryCount > 3) {
                        console.log(`retry counts reached max : ${retryCount}`)
                        waitTime = 0
                        break
                    }
                } else {
                    console.error('Could not get toc xml doc')
                    break
                }
            }
        }
 

        return transcripts
	}
}

export default CourseApi