import { useState } from "react"
import Button from "../Button"
const btnCls = "py-3 px-4 inline-flex justify-center items-center gap-2 -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
const ToolbarMan = ({dmsetup,queueManRef, alreadySetup, setAlreadySetup,reconfigureSetup, setRunSetup, runSetup, setReconfigureSetup, queueStarted = false, startDownloadQueue, stopDownloadQueue}) => {
    // const [loadingStartQueue, setLoadingStartQueue] = useState(false)
    const onStartQueue = async(e)=>{
      // setLoadingStartQueue(true)
      startDownloadQueue()
      console.log('startQueue')
      console.log(queueManRef)
      queueManRef.current.triggerQueue(true)
    }
    const onStopQueue = async()=>{
      // setLoadingStartQueue(false)
      stopDownloadQueue()

      console.log('stopQueue')
      queueManRef.current.triggerQueue(false)


    }
    const onReconfigure = async()=>{
      setReconfigureSetup(true)
      console.log("reconfigure")
    }
    
    return (<><div className="toolbar-man">
        <div className="toolbar-man-container">
        

<div className="flex flex-col md:inline-flex md:flex-row rounded-md shadow-sm">
  {
    alreadySetup ? <>
    {
      !reconfigureSetup ? <>
      <Button loading={queueStarted} className="mr-1" disabled={queueStarted} caption="Start Queue" icon="fa fa-play" onClick={e=>onStartQueue(e)}/>

        {
          !queueStarted ? <>

        <Button caption="Reconfigure" icon="fa fa-cog" onClick={e=>onReconfigure(e)}/>
          
          </>:<>
        <Button disabled={!queueStarted} caption="Stop Queue" icon="fa fa-square" onClick={e=>onStopQueue(e)}/>
          
          </>
        }
      </>: <></>
    }
        
    </> : <>
    {
      !runSetup ?<button onClick={e=>setRunSetup(true)} type="button" className={btnCls}>
      <i className="fa fa-cog"/> <span>Run Setup Queue</span>
  </button> : ""
    }
        
    </>
  }
  
  
</div>
        </div>
    </div></>)
}

export default ToolbarMan
    