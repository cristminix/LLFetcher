
import {useState, useEffect} from "react"

const PageNavigation = ({onNavUpdate}) => {
	const [activeNav, setActiveNav] = useState('welcome')
	const [enableOption, setEnableOption] = useState(false)
	const btnCls = "btn btn-sm btn-primary"

	const onNavClick = (navName) => {
		setActiveNav(navName)
		onNavUpdate(navName)
	}

	const getBtnCls = navName => {

	}

	return(<div className="page-navigation text-center">
	    <ul className="btn-group">
	        <li> <a href="#" onClick={evt => onNavClick('welcome')} className={getBtnCls('welcome')}>Welcome</a></li>
	        <li> <a href="#" onClick={evt => onNavClick('course')} className={getBtnCls('course')}>Course</a></li>
	        <li> <a href="#" onClick={evt => onNavClick('download')} className={getBtnCls('download')}>Downloads</a></li>
	        {
	        	enableOption ? (<li> <a href="#" onClick={evt = onNavClick('option')} className={getBtnCls('option')}>Option</a></li>
	        	):""
	        }
	        
	    </ul>
  	</div>)
}

export default PageNavigation