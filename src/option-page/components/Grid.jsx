import React from "react"
import ReactDOM from "react-dom"
// import Helper from "../Helper"
import {Link} from "react-router-dom"
import {v4} from "uuid"
const GridItemEmpty = ({spanCls, limit,  options}) => {
	console.log(options)
	const colSpan = options.fields.length + 2
	// const arrLength = lastLength ? lastLength : limit
	const dummyRecords =[0]
	return(<>
		{
			dummyRecords.map((value,index)=>{
				return (<tr className="" key={index}>
		          			<td colSpan={colSpan}><span className="">No records</span></td>
		          		</tr>)
			})
		}
	</>)
}

const GridItemLoading = ({}) => {
	
}
class GridActions extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			editMode : false
		}
	}
	getLinkButton(ref){
		if(ref){
			if(ref.current){
				console.log(ref.current.getLinkButton())

			}
		}
	}

	render(){
		const {options, item, index, linkCls} = this.props

		if(options.enableEdit){
			if(options.callbackActions){
				if(options.callbackActions.edit){
					return options.callbackActions.edit(item, index, options, linkCls, this)
				}
			}
			return (<Link className={linkCls} to={typeof options.editUrl == 'function' ? options.editUrl(item) : options.editUrl}>
	            	<i className="bi bi-pencil-square"></i> Edit
	               </Link>)
		}
	}
	

}
class GridItems extends React.Component{
	spanCls = "my-2 h-8 block bg-gray-200 rounded-full dark:bg-gray-700"
	tdCls  = "px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200"
	tdCls2 = "px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
	trCls = "odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700"
	linkCls = "text-blue-500 hover:text-blue-700"
	editorFactory = () => {console.log(`dummy editorFactory`) }

	constructor(props){
		super(props)
	}
	
	recordNumber(index){
		const {page, limit} = this.props
		const p = (parseInt(index) + 1);
		const gp = parseInt(page)-1;
		const lim =   parseInt(limit||5)

		const recordNumber = p + (gp * lim)
		return recordNumber
	}

	parseCustomAction(item){
		const {options} = this.props
		if(options.actions){
			if(options.actions.edit){
				return options.actions.edit(item)
			}
		}
	}
	
	render(){
		const {empty, records, page, limit, options} = this.props
		return (<>
		{
			empty ? (<GridItemEmpty options={options} spanCls={this.spanCls} limit={limit}/>) : records.map((item,index)=>{
	      		return(
	      			<tr key={index} className={this.trCls}>
		              <td className={this.tdCls}>
		              	{ this.recordNumber(index) }
		              </td>
		              {
		              	options.fields.map((field, fieldIndex)=>{
		              		const value = item[field]
		              		let fieldText = value
		              		if(options.callbackFields){
		              			if(options.callbackFields[field]){
		              				fieldText = options.callbackFields[field](field, value ,item, index)
		              			}
		              		}
		              		return (<td key={fieldIndex} className={this.tdCls}>{fieldText}</td>)
		              	})
		              }
		              

		              <td className={this.tdCls2}>
		                <GridActions options={options} index={index} item={item} linkCls={this.linkCls}/>
		              </td>
		            </tr>
	      		)
	      	})
	    }</>)	
	}
	  	
}

const GridHeaders = ({options}) => {
	const tableCls = "min-w-full divide-y divide-gray-200 dark:divide-gray-700"
	const tableHeaderCls = "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
	const numberWidthCls = options.numberWidthCls || ''
	const actionWidthCls = options.actionWidthCls || ''
	return (<tr>
      <th scope="col" className={`${numberWidthCls} ${tableHeaderCls}`}>No</th>
      {
      	options.headers.map((caption, index) =>{
      		const tableHeaderWidthCls = options.widthCls[index] || ''
      		return (<th key={index} scope="col" className={`${tableHeaderWidthCls} ${tableHeaderCls}`}>{caption}</th>)
      	})
      }
      <th scope="col" className={`${actionWidthCls} ${tableHeaderCls}`}>Action</th>
    </tr>)
}
class GridTable extends React.Component{
	constructor(props){
		super(props)
		this.state= {
			records : this.props.records
		}
		
	}

	async componentWillReceiveProps(props){
		const records = props.records
		this.setState({records: []}, f => { this.setState({records}) })
	}

	render(){
		const {page, limit, options, context} = this.props
		const {records} = this.state
		const tableCls = "min-w-full divide-y divide-gray-200 dark:divide-gray-700"
	
		const emptyRecords = records ? (records.length > 0 ? false : true) : false
		return (<table className={tableCls}>
	          <thead>
	            <GridHeaders options={options}/>
	          </thead>
	          <tbody>
	          	<GridItems empty={emptyRecords}  context={context}
	          			   records={records} 
	          			   page={page} 
	          			   limit={limit}
	          			   options={options}/>
	          </tbody>
	        </table>)
	}
	
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