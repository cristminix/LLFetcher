import xmlbuilder from 'xmlbuilder'
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

const crc32 = (str) => {
	const utf8Encoder = new TextEncoder()
	const data = utf8Encoder.encode(str)
	const crc32Buffer = new ArrayBuffer(4)
	const view = new DataView(crc32Buffer)
  	let byte = 0
	for (let i = 0; i < data.length; i++) {
	  byte = data[i]
	  for (let j = 0; j < 8; j++) {
		if ((byte & 1) !== 0) {
		  byte = (byte >>> 1) ^ 0xEDB88320
		} else {
		  byte = byte >>> 1
		}
	  }
	}
  
	view.setUint32(0, ~byte, false)
	const crc32Hex = Array.prototype.map.call(new Uint8Array(crc32Buffer), x => ('00' + x.toString(16)).slice(-2)).join('')
	return crc32Hex
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
const getAuthors = (doc,mAuthor,course) => {
	const [p,courseUrn] = getCourseXmlParentElement(doc)
    let authorEls=p.find("authors")
    let authors=[]
    for (const authorEl of authorEls){
		let authorUrn = jQuery(authorEl).text()
        let authorEntityEl=doc.find(`entityUrn:contains('${authorUrn}')`)
        if(authorEntityEl.length > 0){
			let authorEntityElP = authorEntityEl.parent()
            let slug = getNText(authorEntityElP,'slug')
            let name=slugToTitle(slug)
            let biography=getNText(authorEntityElP,['biographyV2','text'])
            let shortBiography=getNText(authorEntityElP,['shortBiographyV2','text'])
            // let author =m_author.create(slug=slug, name=name, biography=biography, shortBiography=shortBiography)
            let author = {
				slug, name, biography, shortBiography
			}
			authors.push(author)
            // m_author.addCourse(author,course)
		}
	}
        
            
    return authors
}
const getCourseInfo = (doc,courseSlug) => {
	const [p,courseUrn] = getCourseXmlParentElement(doc)
	if(p){
		let courseSlugFound = p.find('slug').text()
		console.log(`course slug found : ${courseSlugFound}`)
		const data = {
			url : `https://www.linkedin.com/learning/${courseSlug}`,
			slug : courseSlug,
			exerciseFiles : null,
			sourceCodeRepository : null,
			description : null,
			urn : courseUrn
		}
		data.title = p.find('title').text()
		data.visibility = p.find('visibility').text()

		let viewerCounts = p.find('viewerCounts')
		if(viewerCounts.length > 0){
			data.viewerCounts = parseInt(viewerCounts.find('total').text())
		}

		data.description = p.find('description').text()
		data.descriptionV2 = p.find('descriptionV2').text()
		if(data.descriptionV2){
			data.description = data.descriptionV2
		}

		let duration = p.find('duration')
		if(duration.length>0){
			data.duration = parseInt(p.find('duration').text())
		}

        
		let dificulty = p.find('dificulty')
		if(dificulty.length > 0){
			data.dificulty = dificulty.find('difficultylevel').text()
		}

        let descriptionv3 = p.find('descriptionV3')
        if(descriptionv3.length > 0){
        	data.descriptionv3 = descriptionv3.text()
        	if(data.descriptionV3){
				data.description = data.descriptionV3
			}
        }

        let sourceCodeRepo=p.find('sourceCodeRepository')
        if(sourceCodeRepo.length > 0){
        	// data.sourceCodeRepository = 
        	const repoUrl = sourceCodeRepo.text()
        	if(isValidUrl(repoUrl)){
        		data.sourceCodeRepository = repoUrl
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
        			if(!data.exerciseFiles){
        				data.exerciseFiles = {}
        			}

        			if(tag == 'sizeInBytes'){
        				data.exerciseFiles[tag] = parseInt(text)
        			}else{
        				data.exerciseFiles[tag] = text
        			}
        		}
        	}
        }
        return data
	}
	return null
}
const getCourseSections = (p,doc,mSection,courseId) => {
	let sections = null //mSection.getListCourseId(courseId)
    if (sections){
        return sections
	}
    let courseSectionStars = p.find("contents")
    sections=[]
    let tocs={}
    for (const sectionStarEl of courseSectionStars){
		const sectionStar = jQuery(sectionStarEl).text().trim()
        let sectionNd = doc.find(`cachingKey:contains('${sectionStar}')`)
        // # print("213:%s" % section_star)
        if (sectionNd.length > 0){
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
                            continue
						}
                        section.itemStars.push(itemStar)
					}
				}
                    
                // s=m_section.create(courseId, section_slug, section_title, [], section["item_stars"])
                sections.push(section)
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
const convertJsonToXml = (schema) => {
	const row = sanitizeKeys({schema})
	const root = xmlbuilder.create('root');
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

    return dataCodes
}
const convert2Xml = (data,pageName,cacheXmlToFile=false) => {}
const getTranscripts = (vMetaDataNd,doc,toc,mTranscript) => {}
const getStreamLocations = (vMetaDataNd,doc,toc,mStreamLoc) => {}
const getVideoMeta = (vStatusUrn,doc,mConfig,defaultSelector="presentation") => {}
const getCourseToc = (itemStar,doc,mToc,sectionId,courseSlug) => {}
const getTocXmlParentElement = (itemStar,doc) => {}
const getCourseXmlParentElement = (doc) => {
	let p = null
	let courseUrn = null
	let courseUrnNd = doc.find(`star_elements:contains('urn:li:learningApiCourse:')`)
	console.log(courseUrnNd)
	
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
				console.log(entityUrnNdItem)
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
export{
	getAvgSpeed,
	isTimeExpired,
	slugToTitle,
	getAuthors,
	getCourseInfo,
	getCourseSections,
	// courseUrl,
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
	crc32,
	lsSet,lsGet
}