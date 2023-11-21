import React, {Component} from'react'

class InputDisplay extends Component{
    constructor(props){
        super(props)
        const {value} = props
        this.state = {
            value
        }
    }
    setValue(value){
        this.setState({value})
    }
    render(){
        const {value} = this.state
        return <>
            <div className="w-30 mx-2" >{value}</div>
        </>
    }
    
}

export default InputDisplay