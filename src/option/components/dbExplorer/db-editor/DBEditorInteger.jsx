import DBEditorGeneric from "./DBEditorGeneric"
import { inputCls } from "./cls"

class DBEditorInteger extends DBEditorGeneric{
	constructor(props){
		super(props)
		// this.state = {
		// 	// value : this.obj[this.prop]
		// }
		
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

export default DBEditorInteger