import { useState } from "react"
import Button from "../Button"
const btnCls = "py-3 px-4 inline-flex justify-center items-center gap-2 -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
const ToolbarMan = ({clearStatusBar,logStatusBar,queueResume,queueFinished, dmsetup,queueManRef, alreadySetup, setAlreadySetup,reconfigureSetup, setRunSetup, runSetup, setReconfigureSetup, queueStarted = false, startDownloadQueue, stopDownloadQueue}) => {
    console.log(`queueResume:${queueResume}`)  
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
    
    const onResetQueue = async () => {
      console.log("onResetQueue")
      if(confirm("Are you sure want to reset Queue ?")){
        const queueMan = queueManRef.current
        queueMan.triggerResetQueue()

      }


    }
    return (<><div className="toolbar-man pr-2 pt-4 pb-1">
        <div className="toolbar-man-container">
        

<div className="flex flex-col md:inline-flex md:flex-row rounded-md shadow-sm">
  {
    alreadySetup ? <>
    
    {
      !reconfigureSetup ? <>
      {
        !queueFinished ? <>
          <Button onMouseOut={e=>clearStatusBar()} 
                  onMouseOver={e=>logStatusBar('ToolbarMan',`${queueResume?'Resume Queue' : 'Start Queue'}`)}
                  loading={queueStarted} className="mr-1" disabled={queueStarted} caption={queueResume?"Resume":"Start Queue"} icon="fa fa-play" onClick={e=>onStartQueue(e)}/>

          {
            !queueStarted ? <>

          <Button onMouseOut={e=>clearStatusBar()} 
                  onMouseOver={e=>logStatusBar('ToolbarMan',`Reconfigure Queue Setup`)}
                  caption="Reconfigure" icon="fa fa-cog" onClick={e=>onReconfigure(e)}/>
            
            </>:<>
          <Button onMouseOut={e=>clearStatusBar()} 
                  onMouseOver={e=>logStatusBar('ToolbarMan',`Stop Current Queue`)}
                  disabled={!queueStarted} caption="Stop Queue" icon="fa fa-square" onClick={e=>onStopQueue(e)}/>
            
            </>
          }
        </> : <>
          <Button  onMouseOut={e=>clearStatusBar()} 
                  onMouseOver={e=>logStatusBar('ToolbarMan',`Reset Current Queue`)}
                  className="mr-1"  caption="Reset Queue" icon="fa fa-refresh" onClick={e=>onResetQueue(e)}/>
          
        </>
      }
      </>: <></>
    }
        
    </> : <>
    {
      !runSetup ?<Button onMouseOut={e=>clearStatusBar()} 
      onMouseOver={e=>logStatusBar('ToolbarMan',`Run Setup Queue`)} onClick={e=>setRunSetup(true)} icon="fa fa-cog" caption="Run Setup Queue"/> : ""
    }
        
    </>
  }
  
  
</div>
        </div>
    </div></>)
}

export default ToolbarMan
    