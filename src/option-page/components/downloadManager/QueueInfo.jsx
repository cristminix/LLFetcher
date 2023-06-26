
const QueueInfo = ({store, queueStarted=false, currentIndex=-1, message="No message to display"}) => {
    return (<><div className="queue-info rounded border p-2">
        <h4 className="font-bold">Queue Info</h4>
        {currentIndex} | {message} | {queueStarted ? 'started' : 'not started'}
    </div></>)
}

export default QueueInfo
    