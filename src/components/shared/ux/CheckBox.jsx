import { Component, createRef } from "react";

class CheckBox extends Component{
    ckRef = createRef(null)
    onCheckChange(e){
        const {onChange} = this.props
        setTimeout(f=>{
            console.log(this.ckRef.current.checked)
            onChange(this.ckRef.current.checked)
        },256)
        
    }
    componentDidMount(){
        setTimeout(f=>{
            if(this.ckRef.current){
                this.ckRef.current.checked = this.props.checked
            }
        },256)
        
    }
    componentWillReceiveProps(a,b){
        // console.log(a,b)
        // if(this.ckRef.current){
        //     this.ckRef.current.checked = b.checked
        // }
    }
    render(){
        const {id,checked,label, className} = this.props
        return <>
        <div className={`flex ${className}`}>
  <input ref={this.ckRef} onClick={e=>this.onCheckChange(e)} type="checkbox" className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id={id}/>
  <label htmlFor="hs-default-checkbox" className="text-sm text-gray-500 ms-3 dark:text-gray-400">{label}</label>
</div>
        </>
    }
}

export default CheckBox