
const QueueInfo = ({store,queueFinished, queueStarted=false, currentIndex=-1, message="No message to display"}) => {
    return (<><div className="queue-info rounded border p-2 my-2">
        {/*<h4 className="font-bold">Queue Info</h4>*/}
        {
            !queueFinished ? currentIndex : "Finished"
        }  {message}  {queueStarted ? 'Queue is running' : (!queueFinished ? 'Queue is not runing':'')}
    </div></>)
}

export default QueueInfo
    