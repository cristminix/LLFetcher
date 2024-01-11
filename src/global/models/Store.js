import DB from "./DB"
import DBIndexed from "./DBIndexed"
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
import Message from "./Message"
import DMSetup from "./DMSetup"
import DMStatus from "./DMStatus"
import Cookie from "./Cookie"
import Transcript from "./Transcript"
import PrxCache from "./PrxCache"
import Thumbnail from "./Thumbnail"
import QState from "./QState"

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
	mMessage = null
	mDMSetup = null
	mDMStatus = null
	mTranscript = null
	mPrxCache = null
	mQState = null
	
 /**
  * List of model class names that the Store will initialize instances of.
  * These model classes will have singleton instances assigned to similarly 
  * named properties on the Store instance (e.g. mDB, mApp etc.)
  */
	availables = ['DB', 'App', 'Author', 'Course', 'Download',
		'DownloadConfig', 'DownloadState', 'ExerciseFile', 'Section',
		'StreamLocation', 'Toc', 'Message','QState',
		'DMSetup', 'DMStatus', 'Cookie','Transcript','PrxCache','Thumbnail']

	static instance = null
	
	constructor(){

	}

 /**
  * Initializes all model instances and calls the callback when ready.
  * 
  * Gets singleton instances for each model class using getInstance(), assigns them 
  * to properties like mDB, mApp etc., calls init() on mApp, and calls the callback 
  * when complete.
  * 
  * This allows consumer code to wait for all models to initialize before continuing.
 */
	async ready(callback) {
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
		this.mMessage = await Message.getInstance()
		this.mDMSetup = await DMSetup.getInstance()
		this.mDMStatus = await DMStatus.getInstance()
		this.mCookie = await Cookie.getInstance()
		this.mTranscript = await Transcript.getInstance()
		this.mPrxCache = PrxCache.getInstance()
		this.mThumbnail = await Thumbnail.getInstance()
		this.mQState = await QState.getInstance()
		await this.mApp.init()
		callback()
	}

 /**
  * Get singleton instance of Store
  * Checks if static instance property is already initialized 
  * If not initialized, creates new instance of Store and assigns to static property
  * Returns static instance property
 */
	static getInstance() {
		if (Store.instance instanceof Store) {
		} else {
			Store.instance = new Store()
		}
		return Store.instance
	}
	async reload(){
		await DB.connection.reload()
	}
 /**
  * Get model instance from store
  * @param {string} model - Model name 
  * @returns Model instance if found, null if not found
  */
	get(model) {
		if (this.availables.includes(model)) {
			const prop = `m${model}`
			return this[prop]
		}
		// console.error(`Store.get() ${model} is not available`)
		return null
	}

	async getStorageSize(model=null,table=null){
		return new Promise((resolve,reject)=>{
		if(model){
			if(!model.useIndexedDb){
				DB.connection.getDataSize(table, size=>resolve(size))
			}else{
				DBIndexed.connection.getDataSize(table, size=>resolve(size))
			}
		}else{
			DB.connection.getDataSize(null, size=>{
				DBIndexed.connection.getDataSize(null, size2=>resolve(size+size2))
				
			})

		}
			
		})
	}
	getCounts(model,table){
		if(!model.useIndexedDb){
			return DB.connection.getTableCounts(table)
		}else{
			return DBIndexed.connection.getTableCounts(table)
		}
	}
}

export default Store