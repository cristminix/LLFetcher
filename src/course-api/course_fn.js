import jQuery from 'jquery'

const slugify = (text) => {
    // Normalize the text to remove diacritics and special characters
    const normalizedText = text.normalize('NFKD').replace(/[^\w\s-]/g, '').toLowerCase();
    // Replace spaces with dashes
    const slug = normalizedText.replace(/\s+/g, '-');
    // Remove any remaining non-alphanumeric characters except for dashes
    const finalSlug = slug.replace(/[^a-z0-9-]/g, '');
    // Remove leading and trailing dashes
    return finalSlug.replace(/^-+|-+$/g, '');
}



const getAvgSpeed = (value,arrayLength=10,integerArray=[],lastIndex=0) => {
	if(lastIndex >= arrayLength-1){
		lastIndex = 0
	}
	if(integerArray.length === arrayLength){
		integerArray[lastIndex] = value
	}else{
		integerArray.push(value)
	}

	const sum = integerArray.reduce((acc, val) => acc + val ,0)
	const avg = sum/integerArray.length
	lastIndex += 1

	return [avg, arrayLength, integerArray, lastIndex]
}
const downloadFileWithResume = (url,outputFilename) => {}
const downloadFile = (url,outputFilename) => {}
const isTimeExpired = (tmStamp) => {
	let expDt = new Date(tmStamp * 1000); // Convert seconds to milliseconds
  	let currStamp = Date.now() / 1000; // Convert milliseconds to seconds
  	let currDt = new Date(currStamp * 1000);

  	return expDt <= currDt
}
const slugToTitle = (slug) => {
	var words = slug.split('-')
  	var titleCaseWords = words.map(function(word) {
    	return word.charAt(0).toUpperCase() + word.slice(1)
  	})
  	
  	return titleCaseWords.join(' ')
}

const getNText = (p,queries) => {
	let nd=p
    let c=queries
    let text=""
	if(Array.isArray(queries)){
		let maxLen = c.length - 1
		let idx = 0
		let cEl = nd
		let breakTheLoop = false

		for(let ic of c){
			let icEl = cEl.find(ic)
			if(icEl.length === 0 || breakTheLoop){
				break
			}

			if(idx >= maxLen){
				if(icEl.length > 0){
					text = icEl.text()
				}
			}else{
				cEl = icEl
			}
			idx += 1

		}
	}else{
		let cNd = nd.find(c)
		if(cNd.length > 0){
			text = cNd.text()
		}
	}

	return text
    
	
}
const getAuthors = async(doc,mAuthor,mCourse,course) => {
    let authors= mAuthor.getListByCourse(course)

    if(authors.length == 0){
        // authors=[]
        const [p,courseUrn] = getCourseXmlParentElement(doc)
        let authorEls=p.find("authors")
        for (const authorEl of authorEls){
            let authorUrn = jQuery(authorEl).text()
            let authorEntityEls=doc.find(`entityUrn:contains('${authorUrn}')`)
            if(authorEntityEls.length > 0){
                for(const authorEntityElem of authorEntityEls){
                    const authorEntityEl = jQuery(authorEntityElem)
                    const authorEntityUrn = authorEntityEl.text().trim()
                    if(authorEntityUrn == authorUrn){
                        let authorEntityElP = authorEntityEl.parent()
                        let slug = getNText(authorEntityElP,'slug')
                        let name=slugToTitle(slug)
                        let biography=getNText(authorEntityElP,['biographyV2','text'])
                        let shortBiography=getNText(authorEntityElP,['shortBiographyV2','text'])
                        let author = await mAuthor.create(name,slug,biography,shortBiography,course.id)
                        // let author = {
                        //     slug, name, biography, shortBiography
                        // }
                        if(author){
                            await mCourse.addAuthorId(course.id, author.id)
                        }
                        authors.push(author)
                        // m_author.addCourse(author,course)
                    }
                }
            }
        }
    }
        
            
    return authors
}
const getCourseInfo = async(doc,courseSlug,mCourse,mExerciseFile) => {
    let course = mCourse.getBySlug(courseSlug)
    if(course){
        course.exerciseFiles = mExerciseFile.getByCourseId(course.id)
        // if()
        return course
    }
    // let course = null
	const [p,courseUrn] = getCourseXmlParentElement(doc)
	if(p){
		let courseSlugFound = p.find('slug').text()
		console.log(`course slug found : ${courseSlugFound}`)
		course = {
			url : `https://www.linkedin.com/learning/${courseSlug}`,
			slug : courseSlug,
			exerciseFiles : null,
			sourceCodeRepository : null,
			description : null,
			urn : courseUrn
		}
		course.title = p.find('title').text()
		course.visibility = p.find('visibility').text()

		let viewerCounts = p.find('viewerCounts')
		if(viewerCounts.length > 0){
			course.viewerCounts = parseInt(viewerCounts.find('total').text())
		}

		course.description = p.find('description').text()
		course.descriptionV2 = p.find('descriptionV2').text()
		if(course.descriptionV2){
			course.description = course.descriptionV2
		}

		let duration = p.find('duration')
		if(duration.length>0){
			course.duration = parseInt(p.find('duration').text())
		}

        
		let dificulty = p.find('dificulty')
		if(dificulty.length > 0){
			course.dificulty = dificulty.find('difficultylevel').text()
		}

        let descriptionv3 = p.find('descriptionV3')
        if(descriptionv3.length > 0){
        	course.descriptionv3 = descriptionv3.text()
        	if(course.descriptionV3){
				course.description = course.descriptionV3
			}
        }

        let sourceCodeRepo=p.find('sourceCodeRepository')
        if(sourceCodeRepo.length > 0){
        	// course.sourceCodeRepository = 
        	const repoUrl = sourceCodeRepo.text()
        	if(isValidUrl(repoUrl)){
        		course.sourceCodeRepository = repoUrl
        	}
        	// console.log(sourceCodeRepo.html())
        }

        let tags = ["sizeInBytes","name","url"]
        let exerciseFiles = p.find('exerciseFiles')

        if(exerciseFiles.length > 0){
        	for(let i in tags){
        		const tag = tags[i]
        		let exerciseFileNd = exerciseFiles.find(tag)
        		if(exerciseFileNd.length>0){
        			const text = exerciseFileNd.text()
        			if(!course.exerciseFiles){
        				course.exerciseFiles = {}
        			}

        			if(tag == 'sizeInBytes'){
        				course.exerciseFiles[tag] = parseInt(text)
        			}else{
        				course.exerciseFiles[tag] = text
        			}
        		}
        	}
        }
        const {title,slug,sourceCodeRepository,description,urn} = course
        exerciseFiles = course.exerciseFiles
		course = await mCourse.create(title,slug,course.duration,sourceCodeRepository,description,urn)
        if(exerciseFiles){
            try{
                if(exerciseFiles.name.trim() != ""){
                    // create(name,url,size,courseId)
                    const {sizeInBytes,name,url} = exerciseFiles
                    course.exerciseFiles = await mExerciseFile.create(name,url,sizeInBytes,course.id)
                }
            }catch(e){
                console.error(e)
            }
            
        }
        return course
	}
	return null
}
const getCourseSections = async(p,doc,mSection,courseId) => {
	let sections = mSection.getListCourseId(courseId)
    if (sections.length > 0){
        return sections
	}
    let courseSectionStars = p.find("contents")
    sections=[]
    let tocs={}
    for (const sectionStarEl of courseSectionStars){
		const sectionStar = jQuery(sectionStarEl).text().trim()
        let sectionNds = doc.find(`cachingKey:contains('${sectionStar}')`)
        // # print("213:%s" % section_star)
        if (sectionNds.length > 0){
            for(const sectionNdElem of sectionNds){
                const sectionNd = jQuery(sectionNdElem)
                const sectionNdStar = sectionNd.text().trim()
                if(sectionNdStar == sectionStar){

                    let sectionNdP= sectionNd.parent()
                    let sectionTitleEl=sectionNdP.find("title")
                    if(sectionTitleEl.length > 0){
                        const sectionTitle = sectionTitleEl.text()
                        // # print(section_title)
                        const sectionSlug=slugify(sectionTitle)
                        tocs[sectionSlug] = []
                        let section = {
                            title : sectionTitle,
                            itemStars : [],
                            slug : sectionSlug
                        }
                        let itemStarNds = sectionNdP.find("star_items")
                        // # item_stars=[]
                        if (itemStarNds.length > 0){
                            for(const itemStarEl of itemStarNds){
                                const itemStar = jQuery(itemStarEl).text().trim()
                                const skipPattern = "urn:li:learningApiTocItem:urn:li:learningApiAssessmen";
                                const matchSkipPattern = itemStar.match(skipPattern)
                                if(matchSkipPattern){
                                    // continue
                                }else{
                                    if(itemStar.length > 0){
                                        section.itemStars.push(itemStar)
                                    }
                                }
                            }
                        }
                        const {title, itemStars, slug} = section    
                        const row = await mSection.create(title, slug, courseId,itemStars)
                        sections.push(row)
                    }
                }
            }
		}
	}
    return sections
}
const isValidUrl = url => {
  var urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  return urlRegex.test(url);
}
const courseUrlFromSlug = (courseSlug) => {
	return `https://www.linkedin.com/learning/${courseSlug}`
}
const removeQueryString = (url) => {
  // Use URL constructor to parse the URL
  var urlObject = new URL(url)

  // Set the search property of the URL object to an empty string
  urlObject.search = ''

  // Convert the URL object back to a string and return it
  return urlObject.toString()
}
const getCourseSlugFromUrl = (url) => {
	if(! isValidUrl(url)){
		return [false,false]
	}
	if(!isLinkedinLearningUrl(url)){
		return [false,false]
	}
	const slugs = url.replace("https://www.linkedin.com/learning/",'').split('/')
	const courseSlug = slugs[0]
	let tocSlug = false
	if(slugs.length > 1){
		tocSlug= slugs[1]
		return [courseSlug,tocSlug]
	}
	
	return [false,false]

	
}
const isLinkedinLearningUrl = (url) => {
	let pattern = /^https:\/\/www\.linkedin\.com\/learning\//;
  	return pattern.test(url)
}
// const getCourseXmlDoc = async(courseUrl, noCache=false) => {


// }
// const getCourseXmlDoc = async(tocSlug, tocUrl, noCache=false) => {

// }
const sanitizeKeys = (obj) => {
	if(Array.isArray(obj)){
	    return obj.map(item=> {
	        return typeof item === 'object'? sanitizeKeys(item) : item
	    })
	}

	let sanitizedObj = {}

	for (const key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      let sanitizedKey = key.replace(/^\$/, '')
	      sanitizedKey = sanitizedKey.replace(/^\@/, '')
	      sanitizedKey = sanitizedKey.replace(/^\#/, '')
	      sanitizedKey = sanitizedKey.replace(/^\*/, 'star_')
	      sanitizedKey = /^\d/.test(sanitizedKey) ? `child_element_${sanitizedKey}` : sanitizedKey
	       if (typeof obj[key] === 'object') {
	        sanitizedObj[sanitizedKey] = sanitizeKeys(obj[key])
	      } else {
	        sanitizedObj[sanitizedKey] = obj[key]
	      }
	    }
	  }
	return sanitizedObj
}
const OBJtoXML = (obj) =>{
    var xml = '';
    for (var prop in obj) {
        xml += "<" + prop + ">"
        if(Array.isArray(obj[prop])) {
            for (var array of obj[prop]) {

                // A real botch fix here
                xml += "</" + prop + ">"
                xml += "<" + prop + ">"

                xml += OBJtoXML(new Object(array))
            }
        } else if (typeof obj[prop] == "object" && typeof obj[prop] !== "string") {
            xml += OBJtoXML(new Object(obj[prop]))
        } else {
            xml += obj[prop];
        }
        xml += "</" + prop + ">"
    }
    var xml = xml.replace(/<\/?[0-9]{1,}>/g,'');
    return xml
}
const convertJsonToXml = (schema) => {
	const row = sanitizeKeys({schema})
    const result = OBJtoXML({root:row})
    // console.log(result)
    return result
    // let options = {compact: true, ignoreComment: true, spaces: 4}
    // let result = xmlbuilder.json2xml(row, options)
    // return result
	/*Old Code*/
    /*const root = xmlbuilder.create('root');
	const convert = (obj, parent) => {
	  if(typeof obj === "string"){
	    parent.text(obj)
	    return
	  }  
	  for (const key in obj) {
	    if (obj.hasOwnProperty(key)) {
	      if (Array.isArray(obj[key])) {
	        obj[key].forEach((item) => {
	          const arrayElement = parent.ele(key);
	          convert(item, arrayElement);
	        });
	      } else if (typeof obj[key] === 'object') {
	        const child = parent.ele(key)
	        convert(obj[key], child)
	      } else {
	        try{
	            parent.ele(key).text(obj[key])
	        }catch(e){
	        }
	      }
	    }
	  }
	};

	convert(row, root)
	return root.end({ pretty: true })
    */
}
const parseJsonSchema = (responseText) => {
    jQuery.expr[':'].containsRegex = jQuery.expr.createPseudo(function (pattern) {
        var regex = new RegExp(pattern, 'i')
        return function (elem) {
            return regex.test(jQuery(elem).text())
        }
    })
    let errorMessage = null

    let validResource = false;
    const elDiv  = jQuery(`<div>${responseText}</div>`)
    
    
    const signInBtns = elDiv.find('a:containsRegex("sign in")')

    if(signInBtns.length > 0){
      errorMessage = "ERR_NO_LOGIN"
    }
    const elCodes = elDiv.find('code')
    let dataCodes = []

    if(! errorMessage){
      for(let codeIndex in elCodes){
          let elCode = elCodes[codeIndex];
          try{
              if(elCode.id.match(/^bpr-guid/)){
                  dataCodes.push(JSON.parse(elCode.textContent))
              }
          }catch(e){}
      }
    }

    return [dataCodes,errorMessage]
}
const convert2Xml = (data,pageName,cacheXmlToFile=false) => {}
const getTranscripts = async (vMetaDataNd,doc,toc,mTranscript) => {
	let transcripts = mTranscript.getListByTocIdAsObject(toc.id)

    if (transcripts) {
        console.log('transcripts_get_from_m_transcript')
        return transcripts
    }

    let pgTranscriptNds = []
    if (vMetaDataNd) {
        pgTranscriptNds = vMetaDataNd.find("transcripts")
    }

    // let transcripts = null
    const tags = ["captionFormat", "isAutogenerated", "captionFile"]

    for (const pgTranscriptElem of pgTranscriptNds) {
		const pgTranscriptEl = jQuery(pgTranscriptElem)
        const locale = pgTranscriptEl.find("locale")

        if (locale.length>0) {
            const lang = locale.find("country")

            if (lang.length>0) {
                let langValue = lang.text().trim().toLowerCase()

                if (!transcripts) {
                    transcripts = {}
                }

                transcripts[langValue] = {
                    country: langValue
                }

                const langCountry = locale.find("lang")

                if (langCountry.length>0) {
                    transcripts[langValue]["lang"] = langCountry.text().trim()
                }

                for (const tag of tags) {
                    const tagNd = pgTranscriptEl.find(tag)

                    if (tagNd.length>0) {
                        let value = tagNd.text().trim()

                        if (tag === 'isAutogenerated') {
                            value = value === "true" ? 1 : 0
                        }

                        transcripts[langValue][tag] = value
                    }
                }

                // transcripts[langValue] = mTranscript.create({
                //     tocId: toc.id,
                //     lang: langValue,
                //     country: transcripts[langValue]["country"],
                //     fmt: transcripts[langValue]["captionFormat"],
                //     url: transcripts[langValue]["captionFile"],
                //     autoGenerated: transcripts[langValue]["isAutogenerated"]
                // })
                const transcript = {
                    lang: langValue,
                    country: transcripts[langValue]["country"],
                    fmt: transcripts[langValue]["captionFormat"],
                    url: transcripts[langValue]["captionFile"],
                    autoGenerated: transcripts[langValue]["isAutogenerated"]
                }
                const {  country, fmt, url, autoGenerated} = transcript
                const row = await mTranscript.create(toc.id, langValue, country, fmt, url, autoGenerated)
				transcripts[langValue] = row
            }
        }
    }

    return transcripts
}
const getStreamLocations = async(vMetaDataNd,toc,mStreamLocation) => {
	let streamLocations = mStreamLocation.getListByTocId(toc.id)

    if (streamLocations.length>0) {
        console.log('stream_locations_get_from_m_stream_location')
        return streamLocations
    }

    let pgStreamNds = []
    if (vMetaDataNd) {
        pgStreamNds = vMetaDataNd.find("progressiveStreams")
    }

    // let streamLocations = null
    const tags = ["size", "bitRate", "width", "height"]

    if (pgStreamNds.length > 0) {
        for (const pgStreamElem of pgStreamNds) {
			const pgStreamEl = jQuery(pgStreamElem)
            let fmt = pgStreamEl.find("height")

            if (fmt.length>0) {
                fmt = fmt.text().trim()

                if (fmt === "0") {
                    fmt = "audio"
                }

                if (!streamLocations) {
                    streamLocations = {}
                }

                streamLocations[fmt] = {}
                const streamLoc = pgStreamEl.find("streamingLocations")

                if (streamLoc.length>0) {
                    const url = streamLoc.find("url")

                    if (url.length>0) {
                        streamLocations[fmt].url = url.text().trim()
                    }

                    const expiresAt = streamLoc.find("expiresAt")

                    if (expiresAt.length>0) {
                        streamLocations[fmt].expiresAt = parseInt(expiresAt.text().trim()) / 1000
                    }

                    for (const tag of tags) {
                        const tagNd = streamLoc.find(tag)

                        if (tagNd.length>0) {
                            streamLocations[fmt][tag] = parseInt(tagNd.text().trim())
                        }
                    }

					const sLoc = {
                        fmt,
                        url: streamLocations[fmt].url,
                        expiresAt: streamLocations[fmt].expiresAt
					}
                    const row = await mStreamLocation.create(fmt, sLoc.url, toc.id, sLoc.expiresAt)
					streamLocations[fmt]=row
                }
            }
        }
    }

    return streamLocations
}
const getVideoMeta = (vStatusUrn,doc,mConfig,defaultSelector="presentation") => {}
const getCourseToc = async (itemStar,doc,mToc,mSection,section,courseSlug) => {
	let toc = mToc.getByItemStar(itemStar)
    if(toc){
        return toc
	}
    let entityNdP = getTocXmlParentElement(itemStar,doc)
    if(!entityNdP){
		return null
	}
    toc={
        streamLocations : null,
        transcripts : null
    }
    let tocSlugNd = entityNdP.find("slug")
    if(tocSlugNd.length > 0){
        let tocSlug = tocSlugNd.text()
        toc.slug = tocSlug
        toc.url = `https://www.linkedin.com/learning/${courseSlug}/${tocSlug}`
	}

    toc.title = entityNdP.find("title").text()
    

    toc.visibility = entityNdP.find("visibility").text() 
    
    toc.duration = parseInt(entityNdP.find("duration").text())
    
    const vStatusUrn = entityNdP.find("star_lyndaVideoViewingStatus").text().trim()
    toc.vStatusUrn = vStatusUrn
    
    const {title, slug, url, duration, captionUrl, captionFmt} = toc
    const row = await mToc.create(title, slug, url, duration, captionUrl, captionFmt, section.id,itemStar,vStatusUrn)
    if(row){
        const {tocIds} = section

        if(!tocIds.includes(row.id)){
            tocIds.push(row.id)
            await mSection.updateTocIds(section.id, tocIds)
        }
        section.tocIds = tocIds
    }
    return row
}
const getTocXmlParentElement = (itemStar,doc) => {
    if(!doc){
        return null
    }
	let tocNd = doc.find(`cachingKey:contains('${itemStar}')`)
    let entityUrn=null
    let entityNdP=null
    if (tocNd.length >0){
        let tocNdP = tocNd.parent()
        let videoUrnNd = tocNdP.find("content")
        if (videoUrnNd.length > 0){
            videoUrnNd = videoUrnNd.find("video")
            if(videoUrnNd.length>0){
                const videoUrn = videoUrnNd.text().trim()
                let entityUrnNds = doc.find(`entityUrn:contains('${videoUrn}')`)
                if (entityUrnNds.length>0){
                    for(const entityUrnNd of entityUrnNds){
						const $entityUrnNd = jQuery(entityUrnNd)
						const text = $entityUrnNd.text().trim()
						// console.log(text)
						if(text == videoUrn){
							entityNdP = $entityUrnNd.closest("included")
						}
					}
				}
			}else{
				console.error(`could_not_find_video_urn: ${itemStar}`)
			}
		}else{
            console.error(`could_not_find_video_entity_urn : ${itemStar}`)
		}
        
	}else{
        console.error(`could_not_find_toc_nd : ${itemStar}`)
	}
	return entityNdP
}
const getCourseXmlParentElement = (doc) => {
    if(!doc){
        return [null,null]
    }
	let p = null
	let courseUrn = null
	let courseUrnNd = doc.find(`star_elements:contains('urn:li:learningApiCourse:')`)
	// console.log(courseUrnNd)
	
	if(courseUrnNd.length == 0){
		courseUrnNd = doc.find("entityUrn")
	}
	if(courseUrnNd.length > 0){
		// for(let i in courseUrnNd ){
		// let courseUrnNdItem = $(courseUrnNd[i])
		courseUrn = courseUrnNd.text()
		let entityUrnNd = doc.find(`entityUrn:contains('${courseUrn}')`)
		for(const entityUrnNdItem of entityUrnNd ){
			if(jQuery(entityUrnNdItem).text() == courseUrn){
				// console.log(entityUrnNdItem)
				p = jQuery(entityUrnNdItem).closest('included')
				break
			}
		}
		
		
	}
	return [p,courseUrn]
}
const fetchCourseUrl = (url,includeToc=false,noCache=true) => {}
const fetchCourseTocUrl = (url) => {}
const lsGet = async(key) => {
	return new Promise((resolve, reject) => {
		chrome.storage.local.get([key], (result) =>{
			resolve(result[key])
		})
	})
}
const lsUnset = async(key) => {
	return new Promise((resolve, reject) => {
		chrome.storage.local.remove([key], (result) =>{
			resolve(result[key])
		})
	})
}
const lsSet = async(key,value) => {
	let obj = {}
	obj[key] = value
	return new Promise((resolve, reject) => {
		chrome.storage.local.set(obj, () =>{
			if (chrome.runtime.lastError) {
				reject(chrome.runtime.lastError);
			} else {
				resolve('Data saved successfully');
			}
		})
	})
}
const getVideoMetaNd = (vStatusUrn, doc) =>{
    // benchmark('getVideoMetaNd', 'start')
    let vMetaDataNd = null
    let vStatusLookups = doc.find(`star_lyndaVideoViewingStatus:contains('${vStatusUrn}')`)
    const status429 = doc.find(`status:contains('429')`)
    const statusEls = doc.find('status')
    const statuses = []

    for (const statusEl of statusEls) {
        statuses.push(parseInt(jQuery(statusEl).text()))
    }

    if (vStatusLookups.length == 0) {
        console.error('A')
        console.error(`could_not_find_v_status_lookup : ${vStatusUrn}`)
        vStatusUrn = vStatusUrn.replace('urn:li:lyndaVideoViewingStatus:', '')
        vStatusLookups = doc.find(`trackingUrn:contains('${vStatusUrn}')`)
    }

    if (vStatusLookups.length == 0) {
        console.error('B')
        console.error(`could_not_find_v_status_lookup : ${vStatusUrn}`)
    }

    let streamLocations = null
    let transcripts = null
    let vStatusLookup = null
    let pos = -1

    if (vStatusLookups.length > 0) {
        let breakTheLoop = false

        for(const vStatusLookupEl of vStatusLookups) {
            const elNd = jQuery(vStatusLookupEl).parent()
            vMetaDataNd = elNd.find("presentation")

            if (vMetaDataNd.length == 0) {
                vMetaDataNd = elNd.find("presentationDerived")
            }

            pos = 0

            if (vMetaDataNd.length>0) {
                pos += 1
                vMetaDataNd = vMetaDataNd.find("videoPlay")

                if (vMetaDataNd.length > 0) {
                    pos += 1
                    vMetaDataNd = vMetaDataNd.find("videoPlayMetadata")
                    breakTheLoop = true
					statuses.push(200)
                }
            }

            if (breakTheLoop) {
                break
            }
        }
    }

    if (!vMetaDataNd) {
        console.error(`could_not_find_v_meta_data_nd_pos : ${pos}`)
        console.log("Try another method")
    }

    // const b = benchmark('getVideoMetaNd', 'end')
    // console.log(`getVideoMetaNd time elapsed:${b['elapsed_time']}\n`)
    return [vMetaDataNd, statuses]
}

export{
	getAvgSpeed,
	isTimeExpired,
	slugToTitle,
	getAuthors,
	getCourseInfo,
	getCourseSections,
	getVideoMetaNd,
	getCourseSlugFromUrl,
	isLinkedinLearningUrl,
	convert2Xml,
	getTranscripts,
	getStreamLocations,
	getVideoMeta,
	getCourseToc,
	getTocXmlParentElement,
	getCourseXmlParentElement,
	fetchCourseUrl,
	fetchCourseTocUrl,
	courseUrlFromSlug,
	convertJsonToXml,
	parseJsonSchema,
	
	lsSet,lsGet,lsUnset
}