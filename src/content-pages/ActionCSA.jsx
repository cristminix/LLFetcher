import React from 'react'
import { Component } from "react"
import {applyJQueryContainsRegex} from '../global/fn.js'
import jQuery from "jquery"
import { getCourseInfo, getCourseSections, getM3Rec, getM3RecByType } from "./legacy/fn.js"
applyJQueryContainsRegex(jQuery)

class ActionCSA extends Component{
	constructor(props){
		super(props)
		this.state = {
			validCoursePage : false,
			slug : '',
			outputScriptCls : 'default',
			outputScript : '',
			// ocls : 'default',
			display:'flex'
		}
	}
	async getCourseInfo(){
		return getCourseInfo(this.state.slug)
	}
	async getM3Rec(){
		return getM3Rec()
	}
	async getM3RecByType(type,m3Rec){
		return getM3RecByType(type,m3Rec)
	}
	async validCoursePage(){
		return this.state.validCoursePage

	}
	async isLogin(){
		const signInBtnsDetect = jQuery('a:containsRegex("sign in")')
		if(signInBtnsDetect.length>0){
			return false
		}
		// return this.state.validCoursePage
		const meBtnDetect = jQuery('div.nav-bar__item-text:contains(Me)')
		if(meBtnDetect.length > 0){
			return true

		}
		return true
	}
	async getCookie(){
		return cookiesToJSON()
	}
	async validCoursePageAuto(){
		return this.state.validCoursePage

	}
	async getCourseToc(url){
		console.log(url)
		// let resultCode = 4
		// try{
		// 	const res = await fetch(`${url}?rand=${(new Date).getTime()}`)
		// 	const text= await res.text()
		// 	resultCode = 3
		// 	const parsed = parseToc(text)
		// 	console.log(parsed)
		// 	return parsed
		// }catch(e){
		// 	console.log(e)

		// }
	}
	async getCourseSections(urn){
		console.log(urn)
		// return getCourseSections(urn)
	}
	async addCourseLegacy(slug){
		if(!slug){
			slug = document.location.href.replace("https://www.linkedin.com/learning/","").split("/")[0]
		}
		console.log(`Add Course using internal API: ${slug}`)
		let course = getCourseInfo(slug)
		let sections
		if(course) {
			if(course.urn){	
				sections = getCourseSections(course.urn)
			}
		}
		return [course, sections]
		// console.log(course, sections)
		// // return getCourseSections(urn)
	}
}

export default ActionCSA