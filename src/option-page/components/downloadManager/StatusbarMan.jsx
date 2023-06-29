import { Component, useState } from "react"
class StatusbarMan extends Component{
    state = {
        message : "",
        mode:3
    }
    setMessage(message,mode){
        this.setState({message, mode})
    }
    render(){
    const {store, course} = this.props
    const {message,mode} = this.state

    return <><div className="statusbar-man fixed bottom-0 w-full -mx-8 bg-white dark:bg-gray-800 dark:text-gray-200">
        <div className="status-bar-man-container rounded border p-2.5">
            {
                mode===0 ? <div className="success text-green-600">
                        <i className="fa fa-check"/> <span>{message}</span>
                    </div> :
                mode===1 ? <div className="warning text-orange-600">
                        <i className="fa fa-exclamation-triangle"/> <span>{message}</span>
                    </div> :
                mode==2 ? <div className="error text-red-600">
                        <i className="fa fa-times-circle"/> <span>{message}</span>
                    </div> : <div className="custom-mode text-custom-mode">
                        <i className="fa fa-times-circle"/> <span>{message}</span>
                    </div> 
            
            }
            
            
            
        </div>
    </div></>
    }
}

export default StatusbarMan
    