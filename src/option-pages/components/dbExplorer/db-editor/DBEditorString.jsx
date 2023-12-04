import DBEditorGeneric from "./DBEditorGeneric"
import { inputCls } from "./cls"
class DBEditorString extends DBEditorGeneric{
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
 		this.setState({value})
 	}
 	cancelRow(clear){
 		if(clear){
 			const value = this.oldValue
 			this.setState({value})
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

export default DBEditorString