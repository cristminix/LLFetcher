import QueueInfo from "./QueueInfo"
import QueueTable from "./QueueTable"

const ERROR_NOT_SETUP_QUEUE = "You must run setup queue first"

const QueueMan = ({store, alreadySetup}) => {
    return (<><div className="queueman">
        
        <div className="queue-man-container border rounded p-2">
            <h4 className="font-bold">Queue Manager UI</h4>
            {
                alreadySetup ? <>
                    <QueueInfo/>
                    <QueueTable/>
                </> : ERROR_NOT_SETUP_QUEUE
            }
            
        </div>
    </div></>)
}

export default QueueMan
    