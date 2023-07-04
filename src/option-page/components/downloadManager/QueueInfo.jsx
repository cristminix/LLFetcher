import {useEffect} from "react"
const QueueInfo = ({clearStatusBar, logStatusBar,selectedFmt, store,queueFinished, queueStarted=false, currentIndex=-1, message="No message to display"}) => {
    useEffect(()=>{
        logStatusBar('default',message)
    },[message])
    return '' 
    // (<><div className="queue-info rounded border p-2 my-2">
    //     {/*<h4 className="font-bold">Queue Info</h4>*/}
    //     {
    //         !queueFinished ? currentIndex : "Finished"
    //     }  {message} {`Selected Format ${selectedFmt}`}  {queueStarted ? 'Queue is running' : (!queueFinished ? 'Queue is not runing':'')}
    // </div></>)
}

export default QueueInfo
    