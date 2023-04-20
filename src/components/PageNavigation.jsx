
import {Component, useState, useEffect} from "react"
import App from "../models/App"
const mApp = await App.getInstance()
// const savedlastCourseSlug = mApp.get().lastCourseSlug
class PageNavigation extends Component{
	btnCls = "btn btn-sm btn-primary"
	constructor(props){
		super(props)
		this.state = {
			activeNav : 'welcome',
			enableOptionPage : false,
			lastCourseSlug : '',
			enableDownloadPage : false
		}
	}
	

	onNavClick(activeNav){
		this.setState({activeNav})
		this.props.onNavUpdate(activeNav)
	}

	getBtnCls(navName){
		return this.btnCls
	}
	componentDidMount(){
		this.setState({lastCourseSlug:mApp.get().lastCourseSlug})
	}

	enableDownload(enableDownloadPage){
		this.setState({enableDownloadPage})
	}
	setNav(activeNav){
		this.setState({activeNav})
	}
	render(){
		const {activeNav, lastCourseSlug,enableDownloadPage,enableOptionPage} = this.state
	
		return(<div className="page-navigation text-center">
			<div className="btn-group">
				<button disabled={activeNav==='welcome'} onClick={evt => this.onNavClick('welcome')} className={this.getBtnCls('welcome')}><i className="fa fa-home"/> Welcome</button>
				<button disabled={lastCourseSlug === '' || activeNav==='course'} onClick={evt => this.onNavClick('course')} className={this.getBtnCls('course')} title={lastCourseSlug}><i className="fa fa-bookmark"/> Course {lastCourseSlug !== '' ? `(1)`: ''}</button>
				<button disabled={activeNav==='download' || !enableDownloadPage}  onClick={evt => this.onNavClick('download')} className={this.getBtnCls('download')}><i className="fa fa-download"/> Downloads</button>
				{
					enableOptionPage ? (<button  disabled={activeNav==='option'}  onClick={evt = this.onNavClick('option')} className={this.getBtnCls('option')}><i className="fa fa-cog"/> Option</button>
					):""
				}
				<button  disabled={activeNav==='setting'}  onClick={evt => this.onNavClick('setting')} className={this.getBtnCls('setting')}><i className="fa fa-cog"/> Setting</button>
				
			</div>
		</div>)
	}
}

export default PageNavigation