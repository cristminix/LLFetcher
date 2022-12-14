interface Course_tableField{
	ID : number,
    title : string,
    slug : string,
    duration : number,
    sourceCodeRepository : string,
    description : string,
    authorIds : number[]
}
interface ExerciseFile_tableField{
	ID : number,
	courseId : number,
	name : string,
	url : string,
	size : number
}
interface Author_tableField{
	ID : number,
	name : string,
	slug : string,
	biography : string,
	shortBiography : string,
	courseIds : number[]
}

interface Section_tableField {
	ID : number,
	courseId : number,
	slug : string,
	title : string,
	tocIds : number[]
}
interface Toc_tableField{
	ID : number,
	sectionId : number,
	title : string,
	slug : string,
	url : string,
	duration : number,
	captionUrl : string,
	captionFmt : string,
	streamLocationIds : number[]
}
interface StreamLocation_tableField{
	ID : number,
	tocId : number,
	fmt : string,
	url : string
}
interface DownloadConfig_tableField{
	ID : number,
	courseId : number,
	fmtList : string[],
	selectedFmtList : string
}
interface Downloads_tableField{
   
	ID : number,
	tocId : number,
	downloadId : number,
	filename : string,
	url: string,
	progress : number,
	status : boolean,
	exclude : boolean

}
interface App_tableField{
	ID : number,
	version : string,
	state : number,
	lastCourseSlug : string,
	nav : string,
	freshInstall : boolean
}
interface DownloadState_tableField{
	ID : number,
	courseId : number,
	state : number,
	total : number,
	successIds : number[],
	failsIds : number[],
	lastTocId : number
}

export {
	Course_tableField,ExerciseFile_tableField,Author_tableField,Section_tableField,
	Toc_tableField,StreamLocation_tableField,Downloads_tableField,DownloadConfig_tableField,App_tableField,
	DownloadState_tableField 
}