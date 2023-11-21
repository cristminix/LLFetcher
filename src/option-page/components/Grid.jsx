import React from "react"
import GridTable from "./grid/GridTable"
import ReactDOM from "react-dom"
// import Helper from "../Helper"
import {Link} from "react-router-dom"

import {v4} from "uuid"


const GridItemLoading = ({}) => {
	
}





class Grid extends React.Component{

	constructor(props){
		super(props)
		// this.state = {
		// 	records : []
		// }
		// console.log(props)
	}
	// shouldComponentUpdate(newProps, newState){
	// 	console.log('shouldComponentUpdate is triggered')
	// 	console.log('new props: ', newProps)
	// 	console.log('new state: ', newState)
	// 	return true
	// }

	// componentWillUpdate(newProps, newState) {
	// 	console.log('componentWillUpdate is triggered')
	// 	console.log('new props: ', newProps)
	// 	console.log('new state: ', newState)
	// }
	// componentWillMount() {
	// 	console.log(ReactDOM.findDOMNode(this))
	// }
	// componentDidMount() {
	// 	console.dir(ReactDOM.findDOMNode(this))
	// }

	render(){
		// const {records, page, limit} = this.props
		return (<GridTable {...this.props} context={this}/>)
	}
}

export default Grid