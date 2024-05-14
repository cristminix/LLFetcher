import { Component, useState } from "react"
class StatusbarMan extends Component{
    state = {
        message : "",
        mode:0,
        t: 'default',
        customMessage:''
    }
    setMessage(message,mode){
        this.setState({message, mode})
    }
    log(t, data){
        this.setState({t})
        if(t == 'QueueItem.toc.title'){
            this.setState({customMessage:data})
        }
        else if(t == 'default'){
            this.setState({message:data})
        }
        else if(t=='QueueItemToolbar.startQueue' || t == 'ToolbarMan' || 'QueueSetup'){
            this.setState({customMessage:data})

        }else{
            this.setState({message:data})
        }
    }
    clear(){
        this.setState({t:'default', message:'Enjoy'})

    }
    render(){
    const {store, course} = this.props
    const {message,mode,t,customMessage} = this.state

    return <><div className="statusbar-man fixed bottom-0 w-full -mx-8 bg-white dark:bg-gray-800 dark:text-gray-200">
        <div className="status-bar-man-container rounded  p-2.5">
        {
            t == 'default' ? <>
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
            </>:''
        }
        {
            t == 'QueueItem.toc.title' ? <>
            <div className="success text-green-600">
                <i className="fa fa-bookmark"/> <span>{customMessage}</span>
            </div> 
            </> : ''
            
            
        } 
        {
            t == 'QueueItemToolbar.startQueue' ? <>
            <div className="success text-green-600">
                <i className="fa fa-download"/> <span>{customMessage}</span>
            </div> 
            </> : ''
            
            
        }  
        {
            t == 'QueueItemToolbar.resetQueueItem' ? <>
            <div className="success text-red-600">
                <i className="fa fa-trash"/> <span>{customMessage}</span>
            </div> 
            </> : ''
            
            
        }  
         {
            t == 'ToolbarMan' ? <>
            <div className="success text-green-600">
                <i className="fa fa-arrow-right"/> <span>{customMessage}</span>
            </div> 
            </> : ''
            
            
        }    
        {
            t == 'QueueSetup' ? <>
            <div className="success text-green-600">
                <i className="fa fa-cog"/> <span>{customMessage}</span>
            </div> 
            </> : ''
            
            
        }      
            
            
        </div>
    </div></>
    }
}

export default StatusbarMan
    