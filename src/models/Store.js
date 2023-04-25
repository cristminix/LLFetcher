import DB from "./DB"
import App from "./App"
import Author from "./Author"
import Course from "./Course"
import Download from "./Download"
import DownloadConfig from "./DownloadConfig"
import DownloadState from "./DownloadState"
import ExerciseFile from "./ExerciseFile"
import Section from "./Section"
import StreamLocation from "./StreamLocation"
import Toc from "./Toc"

class Store {
	mApp = null
	mAuthor = null
	mCourse = null
	mDownload = null
	mDownloadConfig = null
	mDownloadState = null
	mExerciseFile = null
	mSection = null
	mStreamLocation = null
	mToc = null
	mDB = null
	static instance = null
	constructor(){

	}

	async ready(callback){
		this.mDB = await DB.getInstance()
		this.mApp = await App.getInstance()
		this.mAuthor = await Author.getInstance()
		this.mCourse = await Course.getInstance()
		this.mDownload = await Download.getInstance()
		this.mDownloadConfig = await DownloadConfig.getInstance()
		this.mDownloadState = await DownloadState.getInstance()
		this.mExerciseFile = await ExerciseFile.getInstance()
		this.mSection = await Section.getInstance()
		this.mStreamLocation = await StreamLocation.getInstance()
		this.mToc = await Toc.getInstance()

		await this.mApp.init()
		callback()
	}

	static getInstance(){
		if(Store.instance instanceof Store){
		}else{
			Store.instance = new Store()
		}
		return Store.instance	
	}

	get(model){
		const availables = ['DB','App','Author','Course', 'Download', 'DownloadConfig', 'DownloadState','ExerciseFile','Section','StreamLocation','Toc']
		if(availables.includes(model)){
			const prop = `m${model}`
			return this[prop]
		}
		console.error(`Store.get() ${model} is not available`)
		return null
	}
}

export default Store