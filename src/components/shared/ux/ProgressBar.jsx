import { Component } from "react"

 class ProgressBar extends Component{
  constructor(props) {
    super(props)
    this.state = {
      progress : 0,
      message : 'Initializing...'
    }
  }

  setProgress(progress, message_=null){
    let {message}= this.state
    if(message_){
      message =message_
    }
    this.setState({
      progress,
      message
    })
  }
  setMessage(message){
    this.setState({
      message
    })
  }
  render() { 
    const cls0 = "cls-0 mb-2 flex justify-between items-center"
		const cls1 = "cls-1 text-sm font-semibold text-gray-800 dark:text-white"
		const cls2 = "cls-2 text-sm text-gray-800 dark:text-white"
		const cls3 = "cls-3 flex w-full h-2 bg-gray-200 rounded-full overflow-hidden dark:bg-gray-700"
		const cls4 = "cls-4 flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"

    const { progress, message } = this.state
    const styles = {  stl0 : { width : `${progress}%` }, }
    const {className} =this.props
    return <>
    <div className={className}> 
     <div className={cls0}> 
       <h3 className={cls1}> {message} </h3> 
       <span className={cls2}> {progress}% </span> 
     </div> 
     <div role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100" className={cls3}> 
       <div className={cls4} style={styles.stl0}> </div> 
     </div> 
   </div>
    </>
 }   
}

export default  ProgressBar
    