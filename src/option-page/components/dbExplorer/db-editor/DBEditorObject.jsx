import DBEditorGeneric from "./DBEditorGeneric"

class DBEditorObject extends DBEditorGeneric{
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

export default DBEditorObject