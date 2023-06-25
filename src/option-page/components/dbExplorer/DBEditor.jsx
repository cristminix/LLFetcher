
// const DBEditor = ({}) => {
//     return (<><div className="dbeditor">
//         Hello DBEditor
//     </div></>)
// }
import React, {useState} from "react"
// import Prx from "../../lib/Prx"
const inputCls = "py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"

class DBEditor extends React.Component {
	inputRef = null
	item = null
	key = null
	type = null
	editor = null
	group = null
	prop = null
	oldValue = null
	gridAction = null
	constructor(props){
		super(props)
		this.item = props.item
		this.inputRef = React.createRef(null)
		if(props.item){
			const {key,type,editor,group,prop} = this.item
			let value = {}
			try{
				value = JSON.parse(this.item.val)
			}catch(e){
				value = {
					value : ""
				}
			}
			this.key = key
			this.type = type
			this.editor = editor
			this.group = group
			this.prop = prop
			this.obj =  value
			this.oldValue = this.obj[this.prop]
			this.state = {
				obj : this.obj,
				value : this.obj[this.prop],
				editMode : false

			}	
		}
	}

	editRow(){
		this.setState({editMode:true})
		this.gridAction.setState({editMode:true})

		if(this.constructor.name == 'DBEditorString'){
			setTimeout(()=>{
				$(this.inputRef.current).trigger('focus')
			},500)
		}
	}
	serializeObj(){
		this.obj[this.prop] = this.state.value
		this.item.val = JSON.stringify(this.obj)
	}
	async saveRow(){
		// console.log(this.item.val)
		const postData = {
			val : this.item.val
		}
		const params = {
			key : this.item.key,
			group : this.item.group
		}
		// console.log(postData)
		// console.log(params)
		if(this.gridAction){
			const remoteUrl = typeof this.gridAction.props.options.remoteUrl == 'function' ? this.gridAction.props.options.remoteUrl(this.item) : this.gridAction.props.options.remoteUrl
			// const data = await Prx.post(remoteUrl, postData)
			console.log(remoteUrl, postData)
			// console.log(remoteUrl)
			// console.log(remoteUrl)
		}
		
		this.cancelRow()

	}
	cancelRow(clear){
		this.setState({editMode:false})
		if(this.gridAction){
			this.gridAction.setState({editMode:false})
		}
		
	}
	setGridAction(gridAction){
		this.gridAction = gridAction
	}
	
}
class DBEditorBoolean extends DBEditor{
	
	constructor(props){
		super(props)
		this.state.isChecked = this.obj[this.prop]
		
	}
 
 	onCk_clicked(evt){
 		// console.log(evt.target.checked)
		this.setState({isChecked :evt.target.checked})

	}
	onChange(evt){
 		const value = evt.target.checked
 		this.setState({value},()=>{
 			this.serializeObj()
 		})
 	}
 	cancelRow(clear){
 		if(clear){
 			const value = this.oldValue
 			this.setState({value},()=>{
	 			this.serializeObj()
	 		})
			this.setState({isChecked : value})

 		}
 		super.cancelRow()
 	}
	render(){
		if(this.item){
			return(<>
			{
				this.state.editMode ? (<>
					<input  type="checkbox" className="checkbox -mt-1 mr-1"
						   onChange={e=>{this.onChange(e)}} 
						   onClick={e=>this.onCk_clicked(e)}
						   checked={this.state.isChecked}/>
				</>): ""
			}
			<span> {this.state.isChecked ? 'Yes' : 'No'}</span>	
			</>)
		}
	}
	
}

class DBEditorString extends DBEditor{
	constructor(props){
		super(props)
		// this.state.length = this.state.value.length
		
	}
 
 	onKeyUp(e){
 		if(e.keyCode == 13){
 			// console.log(`Enter Detected`)
 			this.saveRow()
 		}
 		else if(e.keyCode == 27){
 			// console.log(`Esc Detected`)
 			this.cancelRow(true)

 		}
 		// console.log(e.keyCode)
 	}
 	onChange(e){
 		const value = e.target.value
 		this.setState({value},()=>{
 			this.serializeObj()
 		})
 	}
 	cancelRow(clear){
 		if(clear){
 			const value = this.oldValue
 			this.setState({value},()=>{
	 			this.serializeObj()
	 		})
			// this.setState({isChecked : value})

 		}
 		super.cancelRow()
 	}
	render(){
		if(this.item){
			return(<>
			{
				this.state.editMode ? (<>
					<input className={inputCls} type="text" ref={this.inputRef} defaultValue={this.state.value} onKeyUp={e=>this.onKeyUp(e)} onChange={e=>this.onChange(e)}/>
				</>): (<>
					{this.state.value}
				</>)
			}
				
			</>)
		}
	}
} 

class DBEditorObject extends DBEditor{
	constructor(props){
		super(props)
		// this.state = {
		// 	// value : this.obj[this.prop]
		// }
		
	}
 
 
	render(){
		if(this.item)
			return(<>
				{this.state.value}
			</>)	
	}
}

class DBEditorInteger extends DBEditor{
	constructor(props){
		super(props)
		this.state = {
			// value : this.obj[this.prop]
		}
		
	}
 
 
	render(){
		if(this.item){
			return(<>
			{
				this.state.editMode ? (<>
					<input className={inputCls} type="number" ref={this.inputRef} defaultValue={this.state.value} onKeyUp={e=>this.onKeyUp(e)} onChange={e=>this.onChange(e)}/>
				</>): (<>
					{this.state.value}
				</>)
			}
				
			</>)
		}
	}
}

export {
	DBEditorBoolean,
	DBEditorInteger,
	DBEditorObject,
	DBEditorString
}
export default DBEditor
    