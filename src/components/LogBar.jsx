import {Component} from "react"
class LogBar extends Component {
	constructor(props){
		super(props)
		const {mode,message} = this.props.data
		// this.state = {mode, message}

	}
	// log(message, mode){
	// 	this.setState({mode, message})
	// }
	render(){
		const {mode,message} = this.props.data
 
	return(<><div className="log-bar">
	{
		mode >= 0 && message ? (
        <div style={{marginTop:'.5em'}} className={`log-message ${mode === 1 ? 'error' : mode === 0 ? 'success' : 'warning'}`}>
            <span>{message} </span>
        </div>):""
	}

    </div></>)
	}
}
export default LogBar