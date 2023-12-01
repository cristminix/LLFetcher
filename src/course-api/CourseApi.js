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
	sections = []
	courseXmlDoc = null
	tocXmlDocs = {}
	authors=[]
	mPrxCache=null
	// must be refactored with "last_" prefix
	courseXmlDocFetchStatus = 0
	tocXmlDocFetchStatus = 0

	lastCourseXmlDocCacheKey = null
	lastTocXmlDocCacheKey = null

	constructor(store){
		this.store = store
		this.mPrxCache = store.get('PrxCache')
	}

	informUnauthenticatedAccess(){
		alert("Please make sure you are logged in to LinkedIn Learning site !, This window will close in 10 second.")
		setTimeout(()=>{
			window.open("https://www.linkedin.com/learning/login?fromSignIn=true&trk=login-sign-in", "_blank")
		},5000)

		setTimeout(f=>{
			window.close()
		},10000)
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
			this.course = course
		}else{
			this.store.get('PrxCache').unsetByKey(this.lastCourseXmlDocCacheKey)
		}

		return course


	}
	async fetchWithRetry(url){
		let ok = false
        let noCache = false
        let retryCount = 0
        let waitTime = 0
        let statusCode = 0
        let response = {ok:false,status:0,text:f=>""}
        while (!ok) {
            if (retryCount > 0) {
                console.log(`retry ${retryCount}`)
            }

            if (waitTime > 0) {
                console.log(`wait for ${waitTime} second`)
                setTimeout(() => {}, waitTime * 1000)
            }
            try{
				response = await fetch(url)
				// console.log(response)
				statusCode = response.status
				
				// console.log(response)
			}catch(e){
				console.error(e)
			}
            if (statusCode != 200) {
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
        }
        return response
	}
	async getXmlDoc(url,noCache=false,statusCodeSaveKey=null){
		let xmlDoc = null
		const webCache = await this.mPrxCache.get(url)
		let cacheContent = null
		let statusCode = 0
		if(!webCache.isEmpty()){
			cacheContent = webCache.getCacheContent()
			statusCode = webCache.getStatusCode()
		}else{
			
			try{
				let response = await this.fetchWithRetry(url)
				statusCode = response.status
				if(response.ok){
					let responseText = await response.text()
					cacheContent = responseText
					if(statusCode == 200){
						this.mPrxCache.set(url,cacheContent,statusCode)
					}
				}
			
			}catch(e){
				console.error(e)
			}
			
		}
		if(statusCodeSaveKey){
			this[statusCodeSaveKey] = statusCode
		}
		// console.log(cacheContent)
		if(cacheContent){
			const [jsonSchema,errorMessage] = parseJsonSchema(cacheContent)
			console.log(errorMessage)
			if(errorMessage){
				if(errorMessage == "ERR_NO_LOGIN"){
					this.informUnauthenticatedAccess()
				}
			}else{
				xmlDoc = jQuery(convertJsonToXml(jsonSchema))
				xmlDoc = jQuery(xmlDoc[2])
			}
			
		}
		
		return [xmlDoc,webCache.getKey()]
	}
	async getCourseXmlDoc(courseUrl, noCache=false){

		let xmlDoc = this.courseXmlDoc
		if(!xmlDoc){
			const[doc,cacheKey] = await this.getXmlDoc(courseUrl,noCache,'courseXmlDocFetchStatus')
			this.lastCourseXmlDocCacheKey = cacheKey
			xmlDoc = doc
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
			const [doc,cacheKey] = await this.getXmlDoc(tocUrl,noCache,'tocXmlDocFetchStatus')
			this.lastTocXmlDocCacheKey = cacheKey
			xmlDoc = doc
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
			}
		}
		if(authors.length == 0){
			const courseUrl = courseUrlFromSlug(courseSlug)
			const xmlDoc= await this.getCourseXmlDoc(courseUrl)
			authors = await getAuthors(xmlDoc, this.store.get('Author'),  this.store.get('Course'), this.course)
			this.authors = authors
		}
		
		return authors
	}
	async fetchCourseInfo(courseSlug, refresh=false){
		

		let noCache = !refresh
		const courseUrl = courseUrlFromSlug(courseSlug)
		let xmlDoc = await this.getCourseXmlDoc(courseUrl, noCache)
		let course = getCourseInfo(xmlDoc,courseSlug,this.store.get('Course'))

		// console.log(courseUrl,xmlDoc,course)
		// this.course = course
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
				sections = await getCourseSections(p, xmlDoc, mSection, this.course.id)
                this.sections = sections
			}else{
                console.error("Could not get course xml parent element")
			}
        }else{
            console.error("Could not get course xml doc")
		}

        return sections
	}
	async getCourseTocs(courseSlug){
		const mToc = this.store.get("Toc")
		const mSection = this.store.get("Section")
		let tocs=null
        // let courseSlug=this.course.slug
        let sections = this.sections
        if (sections.length == 0){
            sections = await this.getCourseSections(courseSlug)
		}
		if (sections.length > 0){
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
							// console.log(section)
                            for (const itemStar of section.itemStars){
                                let toc = await getCourseToc(itemStar,courseXmlDoc,mToc,mSection,section, courseSlug)
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
		const mStreamLocation = this.store.get('StreamLocation')
		let streamLocations = []
		let noCache = false
        

        if (refresh) {
            await mStreamLocation.deleteByTocId(toc.id)
            noCache = true
        }

        
		const tocXmlDoc = await this.getTocXmlDoc(toc.slug, toc.url, noCache)

		if (tocXmlDoc) {
			const [vMetaDataNd, statuses] = getVideoMetaNd(toc.vStatusUrn, tocXmlDoc)

			if (vMetaDataNd) {
				streamLocations = await getStreamLocations(vMetaDataNd, toc, mStreamLocation)
			} else {
				console.error('Could not get video metadata nd')
			}

			if (streamLocations.length == 0) {
				this.store.get('PrxCache').unsetByKey(this.lastTocXmlDocCacheKey)

			}

			
		} else {
			console.error('Could not get toc xml doc')
			// break
		}
        
 

        return streamLocations
	}
	async getTranscripts(toc, refresh=false){
		let transcripts = null
		let noCache = false
        
		const mTranscript = this.store.get("Transcript")
        if (refresh) {
            this.mTranscript.deleteByTocId(toc.id)
            noCache = true
        }

       

       
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
				this.store.get('PrxCache').unsetByKey(this.lastTocXmlDocCacheKey)

			}

			
		} else {
			console.error('Could not get toc xml doc')
			// break
		}
 

        return transcripts
	}
}

export default CourseApi