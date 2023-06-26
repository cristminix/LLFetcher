import { useEffect, useState } from "react"
import {parseToc} from "../learning_fn"
import Button from "../Button"
import DropdownSelect from "../DropdownSelect"
const btnCls = "py-3 px-4 inline-flex justify-center items-center gap-2 -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg border font-medium bg-white text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400"

const FmtSelector = ({  renderState = false, 
                        subRenderState = true,
                        loadingFetchToc = false,
                        getAvailableFmt = f => f,
                        availableFmt = [], 
                        selectFmt = "",
                        selectedFmt ="",
                        setSelectedFmt = f => f,
                        finishSetup = f => f}) => {
    return <>
       {
       renderState ? <>
        {
            subRenderState?  <>
            <Button loading={loadingFetchToc} icon="fa fa-cog" onClick={e=> getAvailableFmt(e)} caption="Get Available Fmt"/>
            </>: <>
                <DropdownSelect data={availableFmt} selected={selectedFmt} onSelect={fmt=>setSelectedFmt(fmt)}/>
                <Button disabled={selectedFmt==selectFmt} icon="fa fa-save" onClick={e=> finishSetup(e)} caption="Finish Setup"/>

            </>  
        }
        </> : ""
        } 
    </>
}

const QueueSetup = ({dmsetup, store,course,sections,tocs, alreadySetup,setAlreadySetup, displaySetupUi, reconfigure = false, runSetup}) => {
    const [availableFmt, setAvailableFmt] = useState([])
    const [loadingFetchToc, setLoadingFetchToc] = useState(false) 
    const selectFmt = "Select Format"
    const [selectedFmt, setSelectedFmt] = useState(selectFmt)
    const mDMSetup = store.get("DMSetup")

    const fetchToc = async(courseSlug,tocSlug)=> {
		
		const url =  `https://www.linkedin.com/learning/${courseSlug}/${tocSlug}`
		// this.setState({btnState:2})
		const [validResource, tocUp, exFile, streamLocations] = await getCourseToc(url)
		console.log([validResource, tocUp, exFile, streamLocations])
		const btnState = validResource ? 3 : 4
        let availableFmtList = []
		if(validResource){
			tocUp.url = url
			// const records = await this.saveRecords(tocUp, exFile, streamLocations)

			console.log(validResource, tocUp, exFile, streamLocations)

            availableFmtList = streamLocations.map(item => item.fmt)
		}
		// this.setState({btnState})

		return [validResource, availableFmtList]
		
	}
    const getCourseToc = async(url)=>{
		// console.log(toc.url)
		let resultCode = 4
		try{
			const res = await fetch(`${url}?rand=${(new Date).getTime()}`)
			const text= await res.text()
			resultCode = 3
			const parsed = parseToc(text)
			console.log(parsed)
			return parsed
		}catch(e){
			console.log(e)

		}

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
            await mDMSetup.create(course.id,availableFmtList,"",course.sourceCodeRepository,exerciseFile,1)
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
        setAlreadySetup(true)}
    }
    const fmtSelectorProps = {
        subRenderState : !availableFmt.length,
        loadingFetchToc,
        getAvailableFmt,
        availableFmt,
        selectFmt,
        selectedFmt,
        setSelectedFmt,
        finishSetup
                    
    }
    return (<><div className="queue-setup">
        <div className="border rounded p-2 flex flex-col">
            <h4 className="font-bold">Setup UI</h4>
        {
            alreadySetup ? <>
                <FmtSelector renderState={reconfigure} {...fmtSelectorProps}/>
               
                <span>Already setted up</span>
                
            </> : <>
            <FmtSelector renderState={runSetup} {...fmtSelectorProps} />
           
            <span>Not Already setted up {selectedFmt == selectFmt ? 'Please select desired video format' : `Selected format ${selectedFmt}`}</span>

            </> 
            
        }
        </div>
    </div></>)
}

export default QueueSetup
    