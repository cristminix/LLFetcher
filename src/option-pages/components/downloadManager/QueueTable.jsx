import { useEffect, useState } from "react"
import QueueItem from "./QueueItem"
import { niceScrollbarCls } from "../ux/cls"
const QueueTable = ({refreshTable,dmsetup,clearStatusBar, logStatusBar,startQueueItem,store, course, sections, tocs, queueItemRef,resetQueueItem}) => {
    const thCls = "px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase"
	const [tmpSections,setTmpSections]=useState(Object.assign([],sections))
    useEffect(()=>{
        // setTmpSections([])
        setTimeout(f=>setTmpSections(Object.assign([],sections)),512)
        // console.log(dmsetup)
    },[dmsetup])
    return (<><div className="queue-table border rounded-xl shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700">
        {/* <div className="state-tbl flex flex-col mx-auto w-full"> */}
        <div className="flex flex-col">
  <div className={`overflow-x-auto sm:-mx-6 lg:-mx-8 ${niceScrollbarCls}`}>
    <div className={`inline-block min-w-full py-2 sm:px-6 lg:px-8`}>
      <div className="overflow-hidden"> 
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead>
                <tr>
                <th className={thCls} rowSpan={2}>No</th>
                <th className={thCls} rowSpan={2}>Title</th>
                <th className={thCls} colSpan="2">Status</th>
                <th className={thCls} rowSpan={2}>Action</th>
                </tr>
                <tr>
                    <th className={thCls}>Subtitle/Transcript</th>
                    <th className={thCls}>Media</th>
                </tr>
            </thead>
            <tbody>
            <QueueItem dmsetup={dmsetup} clearStatusBar={clearStatusBar} logStatusBar={logStatusBar} resetQueueItem={resetQueueItem} startQueueItem={startQueueItem} store={store} ref={queueItemRef} course={course} sections={tmpSections} tocs={tocs} />
            </tbody>
        </table>
        </div>
        </div>
        </div>
        {/* </div> */}
        </div>
    </div></>)
}

export default QueueTable
    