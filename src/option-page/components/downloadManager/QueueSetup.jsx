import { useEffect, useState } from "react"
import { fetchCourseTocMeta } from "../learning_fn"
import Button from "../Button"
import DropdownSelect from "../DropdownSelect"
import FmtSelector from "./queue-setup/FmtSelector"

const btnCls = "py-2 px-2 inline-flex justify-center items-center gap-2 -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
const lblCls = "mr-1 mt-1 font-medium  text-sm dark:bg-slate-900 dark:text-gray-400 "    


const QueueSetup = ({
    logStatusBar,clearStatusBar,
    availableFmt, setAvailableFmt,
    selectedFmt, setSelectedFmt,
    selectFmt,
    dmsetup, store,course,sections,tocs, alreadySetup,setAlreadySetup, displaySetupUi, reconfigureSetup = false, setReconfigureSetup, runSetup, setRunSetup}) => {
  

    const [loadingFetchToc, setLoadingFetchToc] = useState(false) 
    const mDMSetup = store.get("DMSetup")

    const fetchToc = async(courseSlug,tocSlug)=> {
		
		const [validResource, tocUp, exFile, streamLocations,errorMsg] = await fetchCourseTocMeta(courseSlug,tocSlug)
        let availableFmtList = []

		if(validResource){
            availableFmtList = streamLocations.map(item => item.fmt)
		}else{
            if(errorMsg == "ERR_NO_LOGIN"){
                alert("You must login to linkedin learning website")
            }
        }
		return [validResource, availableFmtList,exFile]
		
	}

    const getAvailableFmtOld = async(e) => {
        if(dmsetup){
            const savedFmtList = dmsetup.availableFmt
            setAvailableFmt(savedFmtList)
            return
        }
        const tocKeys = Object.keys(tocs)
        const sectionSlug = tocKeys[0]
        const tocList = tocs[sectionSlug]
        const tocSlug = tocList[0].slug
        console.log(tocSlug)
        setLoadingFetchToc(true)
        setAvailableFmt([])

        const [validResource, availableFmtList,exerciseFile] = await fetchToc(course.slug, tocSlug)
        if(validResource){
            setAvailableFmt(availableFmtList)
            console.log(exerciseFile)
            await mDMSetup.create(course.id,availableFmtList,"",course.sourceCodeRepository,exerciseFile,1, false)
        }
        setLoadingFetchToc(false)

    }
    const getAvailableFmt = async(e) => {
        if(dmsetup){
            const savedFmtList = dmsetup.availableFmt
            setAvailableFmt(savedFmtList)
            return
        }
        const tocKeys = Object.keys(tocs)
        const sectionSlug = tocKeys[0]
        const tocList = tocs[sectionSlug]
        const tocSlug = tocList[0].slug
        console.log(tocSlug)
        setLoadingFetchToc(true)
        setAvailableFmt([])

        const [validResource, availableFmtList,exerciseFile] = await fetchToc(course.slug, tocSlug)
        if(validResource){
            setAvailableFmt(availableFmtList)
            console.log(exerciseFile)
            await mDMSetup.create(course.id,availableFmtList,"",course.sourceCodeRepository,exerciseFile,1, false)
        }
        setLoadingFetchToc(false)

    }
    useEffect(()=>{
        if(dmsetup){
            const savedFmtList = dmsetup.availableFmt
            const savedSelectedFmt = dmsetup.selectedFmt
            if(savedSelectedFmt){
                setSelectedFmt(savedSelectedFmt)
            }
            setAvailableFmt(savedFmtList)
        }
    },[dmsetup])
    const finishSetup = async() =>{
       if(confirm("Are you sure want to finish setup")){
        const row = {
            status: 2,
            selectedFmt 
        }
        await mDMSetup.updateByCourseId(course.id, row)
        if(reconfigureSetup){
            setReconfigureSetup(false)
        }
        setAlreadySetup(true)
        }
    }
    const cancelSetup = async() => {
        if(reconfigureSetup){
            setReconfigureSetup(false)
        }else{
            setRunSetup(false)
        }
        // setAlreadySetup(false)
    }
    const subRenderState = !availableFmt.length
    const fmtSelectorProps = {
        subRenderState,
        loadingFetchToc,
        getAvailableFmt,
        availableFmt,
        selectFmt,
        selectedFmt,
        setSelectedFmt,
        finishSetup
                    
    }
    const selectFmtMessage = selectedFmt == selectFmt ? 'Please select desired video format' : `Selected format ${selectedFmt}`
    const chgSelectFmtMessage = selectedFmt == selectFmt ? "Not Already setted up" : `You select ${selectedFmt}`
    const message = alreadySetup ? `Selected video format is ${selectedFmt}` : chgSelectFmtMessage
    
    let showQueueSetup = false
    let showGetAvailableFmt = false
    let showConfigSetup = false
    

    const fmtAlreadyAvailable = availableFmt.length > 0

    if(!fmtAlreadyAvailable){
        if(reconfigureSetup){
            showGetAvailableFmt = true
        }else if(runSetup){
            showGetAvailableFmt = true
        }
    }
    if(alreadySetup){
        if(reconfigureSetup){
            showQueueSetup = true
        }
    }else{
        if(runSetup){
            showQueueSetup = true
        }
    }

    if(!showGetAvailableFmt){
        showConfigSetup = true
    }
    return (<>
    {/* <div>Show Queue Setup : {showQueueSetup ? "Y":"N" }</div>
    <div>Show Get Availble Fmt : {showGetAvailableFmt ? "Y":"N" }</div>
    <div>Show Config Setup : {showConfigSetup ? "Y":"N" }</div> */}
    {
        showQueueSetup ? <div className="queue-setup my-2 border p-2 rounded">
        {
            showGetAvailableFmt ? <div className="flex p-2 px-2">
                <Button onMouseOut={e=>clearStatusBar()} 
                  onMouseOver={e=>logStatusBar('QueueSetup',`Click to retrieve available video format or size`)}
                loading={loadingFetchToc} icon="fa fa-cog" onClick={e=> getAvailableFmt(e)} caption="Get Available Media Format & Transcripts"/>
            </div> : ''
        }
        {
            showConfigSetup ? <>
            <div className="flex p-2 px-2">
                <label className={lblCls}>Select Format</label>
                <DropdownSelect onMouseOut={e=>clearStatusBar()} 
                  onMouseOver={e=>logStatusBar('QueueSetup',`Select video size or format`)}
                 data={availableFmt} selected={selectedFmt} onSelect={fmt=>setSelectedFmt(fmt)}/>
            </div>
            <div className="flex p-2 gap-2">
                <Button onMouseOut={e=>clearStatusBar()} 
                  onMouseOver={e=>logStatusBar('QueueSetup',`Cancel this setup and back to main queue`)}
                caption="Cancel" icon="fa fa-times" onClick={e=>cancelSetup(e)}/>
                <Button onMouseOut={e=>clearStatusBar()} 
                  onMouseOver={e=>logStatusBar('QueueSetup',`Finish this setup and back to main queue`)}
                disabled={selectedFmt==selectFmt} icon="fa fa-save" onClick={e=> finishSetup(e)} caption="Finish Setup"/>
            </div>
            <div className="flex p-2">
                {message}
            </div>
            </>:''
        }    
        </div>:''
    }
    </>)
}

export default QueueSetup
    