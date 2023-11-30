import {Component} from "react"

const ToastNormal = ({toast})=>{
  return <>
    {/* <!-- Toast --> */}
<div className="my-1 max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700" role="alert">
  <div className="flex p-4">
    <div className="flex-shrink-0">
      <svg className="flex-shrink-0 h-4 w-4 text-blue-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
      </svg>
    </div>
    <div className="ms-3">
      <p className="text-sm text-gray-700 dark:text-gray-400">
        {toast.message}
      </p>
    </div>
  </div>
</div>
{/* <!-- End Toast --> */}
  </>
}
const ToastSuccess= ({toast})=>{
  return <>
    {/* <!-- Toast --> */}
<div className="my-1 max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700" role="alert">
  <div className="flex p-4">
    <div className="flex-shrink-0">
      <svg className="flex-shrink-0 h-4 w-4 text-teal-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>
    </div>
    <div className="ms-3">
      <p className="text-sm text-gray-700 dark:text-gray-400">
        {toast.message}
      </p>
    </div>
  </div>
</div>
{/* <!-- End Toast --> */}
  </>
}
const ToastError= ({toast})=>{
  return <>
    {/* <!-- Toast --> */}
<div className="my-1 max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700" role="alert">
  <div className="flex p-4">
    <div className="flex-shrink-0">
      <svg className="flex-shrink-0 h-4 w-4 text-red-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>
      </svg>
    </div>
    <div className="ms-3">
      <p className="text-sm text-gray-700 dark:text-gray-400">
        {toast.message}
      </p>
    </div>
  </div>
</div>
{/* <!-- End Toast --> */}
  </>
}
const ToastWarning=({toast})=>{
  return <>
    {/* <!-- Toast --> */}
<div className="my-1 max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700" role="alert">
  <div className="flex p-4">
    <div className="flex-shrink-0">
      <svg className="flex-shrink-0 h-4 w-4 text-yellow-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
      </svg>
    </div>
    <div className="ms-3">
      <p className="text-sm text-gray-700 dark:text-gray-400">
        {toast.message}
      </p>
    </div>
  </div>
</div>
{/* <!-- End Toast --> */}
  </>
}
const ToastClosable = ({toast}) =>{
  return <>
    <div id="dismiss-toast" className="my-1 hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700" role="alert">
  <div className="flex p-4">
    <p className="text-sm text-gray-700 dark:text-gray-400">
      {toast.message}
      {toast.clock}
    </p>

    <div className="ms-auto">
      <button type="button" className="inline-flex flex-shrink-0 justify-center items-center h-5 w-5 rounded-lg text-gray-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 dark:text-white" data-hs-remove-element="#dismiss-toast">
        <span className="sr-only">Close</span>
        <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
      </button>
    </div>
  </div>
</div>
  </>
}

class Toast extends Component{
  constructor(props){
    super(props)
    this.state = {
      toastList : [],
      // toastTimer: []
    }

    // this.toastTimers = []
    // this.toastClocks = []
    this.toastTimeout= 10
  }
  add(message, t="normal"){
    // setTimeout(f=>{
      const toast = {message,t,iv:null,clock:0,hidden:false}
      const {toastList} = this.state
      toastList.push(toast)
      this.setState({toastList})
    // },3000)
    
  }
  checkUnusedToast(){
    const {toastList} = this.state
    let clearAllToast = false
    let countHidden = 0
    
    for(const toast of toastList){
      if(toast.hidden){
        countHidden += 1
      }
    }

    if(countHidden == toastList.length){
      this.setState({toastList:[]})
    }
  }
  createToast(toast,idx){
    // const {message,t} = toast
    const toastComponents = {
      normal : <ToastNormal toast={toast} key={idx}/>,
      error : <ToastError toast={toast} key={idx}/>,
      warning : <ToastWarning toast={toast} key={idx}/>,
      success : <ToastSuccess toast={toast} key={idx}/>,
      closable : <ToastClosable toast={toast} key={idx}/>,
    }

    return toastComponents[toast.t]
  }
  hideToast(idx){
    const {toastList} = this.state
    // const {toastTimers} = this
    toastList[idx].hidden = true
    clearInterval(toastList[idx].iv)

    this.setState({toastList})
  }
  hideToastByTimeout(idx){
    // const {toastTimers} = this
    const {toastList} = this.state
    if(! toastList[idx].iv){
      const iv = setInterval(()=>{
        // if(typeof this.toastClocks[idx] == "undefined"){
        //   this.toastClocks[idx] = 0
        // }
        toastList[idx].clock += 1
        // console.log(toastList[idx].clock)
        this.setState({toastList})
        if(toastList[idx].clock == this.toastTimeout){
          this.hideToast(idx)
          // clearInterval(iv)
        }
      },1000)
      toastList[idx].iv = iv
      this.setState({toastList})
    }
  }
  clearToastTimer(){
    const {toastList} = this.state
    toastList.map((toast)=>{
      clearInterval(toast.iv)
    })
  }
  componentDidMount(){
    // this.add
    this.clearToastTimer()
  }
  render(){
    const {toastList} = this.state
    return <>
    <div className="fixed top-0 right-4 m-4">
    {
      toastList.map((toast,toastIdx)=>{
        if(toast.hidden){
          return ""
        }
        this.hideToastByTimeout(toastIdx)
        return this.createToast(toast,toastIdx)
      })
    }
    </div>
    </>
  }
}

export default Toast