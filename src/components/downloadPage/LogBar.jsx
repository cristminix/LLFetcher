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
		const {pct} = this.props
	return(<><div className="log-bar">
	{
		mode >= 0 && message ? (
        <div className={`log-message ${mode === 1 ? 'error' : mode === 0 ? 'success' : 'warning'}`}>
            <span>{message} {pct}%</span>
        </div>):""
	}

    </div></>)
	}
}
export default LogBar