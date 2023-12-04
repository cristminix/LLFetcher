import React from'react'
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

export default GridActions