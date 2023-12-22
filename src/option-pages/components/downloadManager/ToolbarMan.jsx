import { useEffect } from "react"
import Button from "../../../components/shared/ux/Button"
import {createDownloadFile} from "../../../global/fn"
// import DropdownSelect from "../../../components/shared/ux/DropdownSelect"
import DropdownMenu from "../../../components/shared/ux/DropdownMenu"

// const btnCls = "py-3 px-4 inline-flex justify-center items-center gap-2 -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
const ToolbarMan = ({/*setSelectedFmt,setAvailableFmt,setDmsetup,*/selectedFmt, course, sections,tocs,clearStatusBar,logStatusBar,queueResume,queueFinished, dmsetup,queueManRef, alreadySetup, setAlreadySetup,reconfigureSetup, setRunSetup, runSetup, setReconfigureSetup, queueStarted = false, startDownloadQueue, stopDownloadQueue}) => {
    console.log(`queueResume:${queueResume}`)  
  // const [loadingStartQueue, setLoadingStartQueue] = useState(false)
    /**
     * Starts the download queue. 
     * 
     * Calls startDownloadQueue() to begin queue processing.
     * Logs messages to console.
     * Triggers the QueueMan component to start the queue.
     */
  const onStartQueue = async (e) => {
    // setLoadingStartQueue(true)
    startDownloadQueue()
    console.log('startQueue')
    console.log(queueManRef)
    queueManRef.current.triggerQueue(true)
  }
  /**
   * Stops the download queue.
   *
   * Calls stopDownloadQueue() to stop queue processing.
   * Logs a message to the console.
   * Triggers the QueueMan component to stop the queue.
   */
  const onStopQueue = async () => {
    // setLoadingStartQueue(false)
    stopDownloadQueue()

    console.log('stopQueue')
    queueManRef.current.triggerQueue(false)


    }
    /**
     * Sets the reconfigureSetup state to true to trigger reconfiguration of the download setup.
     * 
     * This will reset the selected format, available formats list, and dmsetup data.
     * It will also open the download setup UI to allow reselecting the format.
     */
  const onReconfigure = async () => {
    // setSelectedFmt("Select Format")
    // setDmsetup(null)
    // setAvailableFmt([])
    setReconfigureSetup(true)
    console.log("reconfigure")
  }
    
    /**
     * Resets the download queue.
     * 
     * Prompts the user to confirm resetting the queue. 
     * If confirmed, calls the QueueMan component's triggerResetQueue() 
     * method to reset the queue state and restart downloading.
     * 
     * Logs a message to the console.
     */
  const onResetQueue = async () => {
    console.log("onResetQueue")
    if (confirm("Are you sure want to reset Queue ?")) {
      const queueMan = queueManRef.current
      queueMan.triggerResetQueue()

    }
  }
  /**
   * Opens the source code repository for the course in a new browser tab.
     * 
     * Gets the sourceRepo URL from the dmsetup state.
     * Opens the URL in a new browser tab using window.open().
     */
  const openSourceRepo = async () => {
    const { sourceRepo } = dmsetup
    // const config = {sourceRepo}
    // createDownloadFile('sourse_repo', config)
    window.open(sourceRepo, "_blank")
  }
  /**
   * Opens the exercise file associated with the course in a new browser tab.
   * 
   * Gets the exerciseFile URL from the dmsetup state.
   * Opens the URL in a new browser tab using window.open().
   */
  const openExerciseFile = async (url) => {
    // const { exerciseFile } = dmsetup
    window.open(url, "_blank")

    // const config = {exerciseFile}
    // createDownloadFile('exercise_file', config)
  }

    /**
     * Downloads a playlist file to execute course content downloads.
     * 
     * Assembles a configuration object with the course slug, format, 
     * and TOC data.  
     * 
     * Passes the configuration to the createDownloadFile() function
     * to generate the playlist file for downloading.
     */
  const downloadPlaylist = async () => {
    const slug = course.slug
    const fmt = selectedFmt
    console.log(dmsetup)
    const {enableFilenameIndex}=dmsetup
    const config = {
      slug, fmt, sections, tocs, enableFilenameIndex
    }
    createDownloadFile('playlist', config)
  }
  /**
     * Downloads a shell script to execute course content downloads.
     * 
     * Assembles a configuration object with the course slug, format, 
     * section and TOC data, and the exercise file info. 
     * 
     * Passes the configuration to the createDownloadFile() function
     * to generate the shell script file for downloading.
     */
  const downloadHelper = async () => {
    const { exerciseFiles, enableFilenameIndex } = dmsetup

    const slug = course.slug
    const fmt = selectedFmt
    const config = {
      slug, fmt, sections, tocs, exerciseFiles, enableFilenameIndex
    }
    createDownloadFile('shell_script', config)
  }

  const downloadHelperCmd = async () => {
    const { exerciseFiles, enableFilenameIndex } = dmsetup

    const slug = course.slug
    const fmt = selectedFmt
    const config = {
      slug, fmt, sections, tocs, exerciseFiles, enableFilenameIndex
    }
    createDownloadFile('batch_script', config)
  }
  /*  
  const isValidExerciseFile = (exerciseFile)=>{
    let validFile = false 
    if(Array.isArray(exerciseFile)){
      if(exerciseFile.length > 0){
        const exFile = exerciseFile[0]
        console.log(exFile)
      }
    }else{
      if("object" === typeof exerciseFile && exerciseFile!== null){
        if("undefined" !== typeof exerciseFile.name && "undefined" !== typeof exerciseFile.url){
          validFile = true
        }
      }
    }
    return validFile
  }*/
  useEffect(()=>{
    console.log(dmsetup)
  },[dmsetup])

  return (<><div className="toolbar-man pr-2 pt-4 pb-1">
        <div className="toolbar-man-container">
        

<div className="flex gap-2 flex-wrap">
  {
    alreadySetup ? <>
    
    {
      !reconfigureSetup ? <>
      {
        !queueFinished ? <>
          <Button onMouseOut={e=>clearStatusBar()} 
                  onMouseOver={e=>logStatusBar('ToolbarMan',`${queueResume?'Resume Queue' : 'Start Queue'}`)}
                  loading={queueStarted} className="" disabled={queueStarted} caption={queueResume?"Resume":"Start Queue"} icon="fa fa-play" onClick={e=>onStartQueue(e)}/>

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
                  className=""  caption="Reset Queue" icon="fa fa-refresh" onClick={e=>onResetQueue(e)}/>
          
        </>
      }
      </>: <></>
    }
    {
      dmsetup && !reconfigureSetup  ? <>
        
       
         
           {
              dmsetup.exerciseFiles ? dmsetup.exerciseFiles.length > 0 ? <>
                <DropdownMenu className="" data={dmsetup.exerciseFiles.map(item=>{return{value:item.url,text:item.name}})} onSelect={url=>openExerciseFile(url)} label="Exercise Files" itemIcon="fa fa-file-archive-o" labelIcon="fa fa-folder-o" />
              </> : '': ''
            } 
            {
              dmsetup.sourceRepo ? <><Button onClick={e=>openSourceRepo(e)} className="" label="Source Repo:" title={dmsetup.sourceRepo} caption="Source Repo" icon="fa fa-file-archive-o"/></> : ''
            }
          <Button onClick={e=>downloadPlaylist(e)}  className="" caption="Playlist.m3u" icon="bi bi-collection-play"/>
            <Button onClick={e=>downloadHelper(e)} className="" caption="Helper.sh" icon="bi bi-terminal-fill"/>
            <Button onClick={e=>downloadHelperCmd(e)} className="" caption="Helper.cmd" icon="bi bi-terminal"/>
          
        
      </>:''
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
    