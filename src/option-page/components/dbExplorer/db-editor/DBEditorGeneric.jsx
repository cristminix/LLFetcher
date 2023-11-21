// const DBEditor = ({}) => {
//     return (<><div className="dbeditor">
//         Hello DBEditor
//     </div></>)
// }
import React, {useState} from "react"
// import Prx from "../../lib/Prx"
import $ from "jquery"
class DBEditorGeneric extends React.Component {
	inputRef = null
	item = null
	// key = null
	type = null
	// editor = null
	// group = null
	field = null
	value = null

	oldValue = null
	gridAction = null
	constructor(props){
		super(props)
		this.item = props.item
		this.value = props.value
		this.field = props.field

		this.inputRef = React.createRef(null)

		if(props.item){
			// const {key,type} = this.item
			// const {field,editor} = props

			// let value = {}
			// try{
			// 	value = JSON.parse(this.item[field])
			// }catch(e){
			// 	value = {
			// 		value : this.item[field]
			// 	}
			// }
			// this.field = field
			// this.type = type
			// this.editor = editor
			// this.group = group
			// this.field = field
			// this.obj =  value
			this.oldValue = this.value

			this.state = {
				// obj : this.obj,
				value : this.value,
				editMode : false

			}	
		}
	}

	editRow(){
		this.setState({editMode:true})
		// this.gridAction.setState({editMode:true})

		if(this.constructor.name == 'DBEditorString'){
			setTimeout(()=>{
				$(this.inputRef.current).trigger('focus')
			},500)
		}
	}
	serializeObj(){
		// this.obj[this.prop] = this.state.value
		// this.item.val = JSON.stringify(this.obj)
	}
	async saveRow(){
		// console.log(this.item.val)
		// const postData = {
		// 	val : this.item.val
		// }
		// const params = {
		// 	key : this.item.key,
		// 	group : this.item.group
		// }
		// // console.log(postData)
		// // console.log(params)
		// if(this.gridAction){
		// 	const remoteUrl = typeof this.gridAction.props.options.remoteUrl == 'function' ? this.gridAction.props.options.remoteUrl(this.item) : this.gridAction.props.options.remoteUrl
		// 	// const data = await Prx.post(remoteUrl, postData)
		// 	console.log(remoteUrl, postData)
		// 	// console.log(remoteUrl)
		// 	// console.log(remoteUrl)
		// }
		
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

export default DBEditorGeneric