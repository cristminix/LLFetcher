import {useState, useEffect, Component} from "react"
import "./styles/DownloadPage.css"

import App from "../models/App"
const mApp = await App.getInstance()

class DownloadPage extends Component{
	btnPrimary = "btn btn-sm btn-primary"
	btnDanger = "btn btn-sm btn-danger"
	constructor(props){
		super(props)
		this.state = {
			enableDownloadBtn : false,
			lastCourseSlug : ''
		}
	}
	componentDidMount(){
		this.setState({lastCourseSlug:mApp.get().lastCourseSlug})
	}
	render(){
		return(<>DownloadPage</>)
	}
}

export default DownloadPage