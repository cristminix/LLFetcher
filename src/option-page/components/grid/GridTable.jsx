import React from'react'
import GridItems from './GridItems'
import GridHeaders from "./GridHeaders"

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

export default GridTable