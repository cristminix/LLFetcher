console.log('this is content script')
console.log('src/content-pages/content.js')

import { createRef } from "react"
import ReactDOM from 'react-dom/client'
import "../global/tailwind.index.css"
import ContentScript from "./ContentScript.js"
import ContentScriptApp from './ContentScriptApp.jsx'
import {
    createReactRootElement,
    waitForElm,
	attachRouteChangesEvent,
	isCoursePage,
	getCourseSlugByPath,
	pauseVideo
	 
} from './content-fn.js'



const main = async () => {
	let appCreated = false
	const reactRootId = 'content-script-root'
	const appContainerId = 'content-script-app'
	const appRef = createRef(null)
	let appInstance = null
	let publicRoutePath = null
	
	// const {useState, useEffect} = React

	attachRouteChangesEvent(async(path)=>{
		publicRoutePath = path
		
        console.log(`URL changed to ${path}`)

        if(!appInstance){
        	await waitForElm(`#${appContainerId}`)
			appInstance = appRef.current
        }
		const validCoursePage = isCoursePage()
		const slug = getCourseSlugByPath(path)
		// console.log(slug)
		appInstance.setState({validCoursePage, slug})

		if(validCoursePage){
    		pauseVideo()
		}

	})
	createReactRootElement()
	const el = await waitForElm(`#${reactRootId}`)
	const root = ReactDOM.createRoot(el)
	root.render(<ContentScriptApp ref={appRef} appContainerId={appContainerId} />)

	const contentScript = new ContentScript()  
}


main()
