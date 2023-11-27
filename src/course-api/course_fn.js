
const getAvgSpeed = (value,arrayLength=10,integerArray=[],lastIndex=0) => {}
const downloadFileWithResume = (url,outputFilename) => {}
const downloadFile = (url,outputFilename) => {}
const isTimeExpired = (tmStamp) => {}
const slugToTitle = (slug) => {}
const getNText = (kwargs) => {}
const getAuthors = (doc,mAuthor,course) => {}
const getCourseInfo = (doc) => {}
const getCourseSections = (p,doc,mSection,courseId) => {}
const courseUrlFromSlug = (courseSlug) => {
	return `https://www.linkedin.com/learning/${courseSlug}`
}
const getCourseSlugFromUrl = (url) => {}
const isLinkedinLearningUrl = () => {}
const convert2Xml = (data,pageName,cacheXmlToFile=false) => {}
const getTranscripts = (vMetaDataNd,doc,toc,mTranscript) => {}
const getStreamLocations = (vMetaDataNd,doc,toc,mStreamLoc) => {}
const getVideoMeta = (vStatusUrn,doc,mConfig,defaultSelector="presentation") => {}
const getCourseToc = (itemStar,doc,mToc,sectionId,courseSlug) => {}
const getTocXmlParentElement = (itemStar,doc) => {}
const getCourseXmlParentElement = (doc) => {}
const fetchCourseUrl = (url,includeToc=false,noCache=true) => {}
const fetchCourseTocUrl = (url) => {}

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
	courseUrlFromSlug
}