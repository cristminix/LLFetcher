import QueueItem from "./QueueItem"
const QueueTable = ({clearStatusBar, logStatusBar,startQueueItem,store, course, sections, tocs, queueItemRef,resetQueueItem}) => {
    const thCls = "px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase"
	
    return (<><div className="queue-table border rounded-xl shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700">
        <div className="state-tbl flex flex-col mx-auto w-full">
        
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
            <QueueItem clearStatusBar={clearStatusBar} logStatusBar={logStatusBar} resetQueueItem={resetQueueItem} startQueueItem={startQueueItem} store={store} ref={queueItemRef} course={course} sections={sections} tocs={tocs} />
            </tbody>
        </table>
        </div>
    </div></>)
}

export default QueueTable
    