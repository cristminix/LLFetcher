import { useEffect, useState } from "react"
import { fetchCourseTocMeta } from "../learning_fn"
import Button from "../Button"
import DropdownSelect from "../DropdownSelect"
const btnCls = "py-2 px-2 inline-flex justify-center items-center gap-2 -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"
const lblCls = "mr-1 mt-1 font-medium  text-sm dark:bg-slate-900 dark:text-gray-400 "    

const FmtSelector = ({  renderState = false, 
                        subRenderState = true,
                        loadingFetchToc = false,
                        getAvailableFmt = f => f,
                        availableFmt = [], 
                        selectFmt = "",
                        selectedFmt ="",
                        setSelectedFmt = f => f,
                        finishSetup = f => f}) => {
    return renderState ? 
            subRenderState?  <>
            <div className="flex p-2 px-2">

            <Button loading={loadingFetchToc} icon="fa fa-cog" onClick={e=> getAvailableFmt(e)} caption="Get Available Fmt"/>
            </div>            </>: <>
            <div className="flex p-2 px-2">
            <label className={lblCls}>Select Format</label>
                <DropdownSelect data={availableFmt} selected={selectedFmt} onSelect={fmt=>setSelectedFmt(fmt)}/>
                {/* <Button disabled={selectedFmt==selectFmt} icon="fa fa-save" onClick={e=> finishSetup(e)} caption="Finish Setup"/> */}
                </div></>  
        : ""
        
}

const QueueSetup = ({dmsetup, store,course,sections,tocs, alreadySetup,setAlreadySetup, displaySetupUi, reconfigureSetup = false, setReconfigureSetup, runSetup, setRunSetup}) => {
    const [availableFmt, setAvailableFmt] = useState([])
    const [loadingFetchToc, setLoadingFetchToc] = useState(false) 
    const selectFmt = "Select Format"
    const [selectedFmt, setSelectedFmt] = useState(selectFmt)
    const mDMSetup = store.get("DMSetup")

    const fetchToc = async(courseSlug,tocSlug)=> {
		
		const [validResource, tocUp, exFile, streamLocations] = await fetchCourseTocMeta(courseSlug,tocSlug)
        let availableFmtList = []

		if(validResource){
            availableFmtList = streamLocations.map(item => item.fmt)
		}
		return [validResource, availableFmtList]
		
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

        const [validResource, availableFmtList, exerciseFile] = await fetchToc(course.slug, tocSlug)
        if(validResource){
            setAvailableFmt(availableFmtList)
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
        
    return (<><div className="queue-setup my-2">
        <div className="border p-2 rounded">
            <div className="flex flex-col">
                {
                        alreadySetup ? <FmtSelector renderState={reconfigureSetup} {...fmtSelectorProps}/> : 
                                        <FmtSelector renderState={runSetup} {...fmtSelectorProps} />
            
                    }
                    {
                        alreadySetup ? <>
                            {
                                reconfigureSetup ? 
                                subRenderState?  "" : <>
                <div className="flex p-2 gap-2">

                                <Button caption="Cancel" icon="fa fa-times" onClick={e=>cancelSetup(e)}/>
                                <Button disabled={selectedFmt==selectFmt} icon="fa fa-save" onClick={e=> finishSetup(e)} caption="Finish Setup"/>
                                </div>
                                <div className="flex p-2">
                    {message}
                </div>
                                </> : ""
                            }
                        </> :<>
                            {
                                runSetup ? 
                                subRenderState?  "" : <>
                <div className="flex p-2 gap-2">

                                <Button caption="Cancel" icon="fa fa-times" onClick={e=>cancelSetup(e)}/>

                                <Button disabled={selectedFmt==selectFmt} icon="fa fa-save" onClick={e=> finishSetup(e)} caption="Finish Setup"/>
                                </div>
                                <div className="flex p-2">
                    {message}
                </div>
                                </> : ""
                            }
                        </>
                        
                    }

                
            </div>
        </div>
    </div></>)
}

export default QueueSetup
    