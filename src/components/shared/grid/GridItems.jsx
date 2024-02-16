import React from'react'
import GridItemEmpty from './GridEmpty'
import GridActions from './GridActions'
class GridItems extends React.Component{
	spanCls = "my-2 h-8 block bg-gray-200 rounded-full dark:bg-gray-700"
	tdCls  = "px-6 py-4 text-sm font-medium text-gray-800 dark:text-gray-200 align-top"
	tdCls2 = "px-6 py-4 whitespace-nowrap text-right text-sm font-medium align-top"
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
							// console.log(field)
		              		let value = item[field]
		              		try{ value = typeof value == 'object' ? JSON.stringify(value) : value.toString()}catch(e){}
		              		let fieldText = value
		              		if(options.callbackFields){
		              			if(options.callbackFields[field]){
		              				fieldText = options.callbackFields[field](field, value ,item, index)
		              			}
		              		}
							if(options.useAutoEditor){
								let editor = "string"
								try{
									options.editors[fieldIndex]
								}catch(e){
									
								}
									// console.log(item)
								fieldText = options.editorFactory(editor, field, value, item, index,fieldIndex)
							}
		              		return (<td key={fieldIndex} className={this.tdCls}>{fieldText}</td>)
		              	})
		              }
		              

		              <td className={this.tdCls2}>
						<div className="flex items-center gap-1">
		                <GridActions options={options} index={index} item={item} linkCls={this.linkCls}/>
						</div>
						</td>
		            </tr>
	      		)
	      	})
	    }</>)	
	}
	  	
}

export default GridItems