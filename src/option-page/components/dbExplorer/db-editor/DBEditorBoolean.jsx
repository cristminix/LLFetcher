import DBEditorGeneric from "./DBEditorGeneric"

class DBEditorBoolean extends DBEditorGeneric{
	
	constructor(props){
		super(props)
		this.state.isChecked = JSON.parse(this.value)
		
	}
 
 	onCk_clicked(evt){
 		// console.log(evt.target.checked)
		this.setState({isChecked :evt.target.checked})

	}
	onChange(evt){
 		const value = evt.target.checked
 		this.setState({value})
 	}
 	cancelRow(clear){
 		if(clear){
 			const value = this.oldValue
 			this.setState({value})
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

export default DBEditorBoolean