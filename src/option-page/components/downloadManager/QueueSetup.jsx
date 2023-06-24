
const QueueSetup = ({alreadySetup, displaySetupUi, reconfigure = false}) => {
    return (<><div className="queue-setup">
        <div className="border rounded p-2">
            <h4 className="font-bold">Setup UI</h4>
        {
            alreadySetup ? reconfigure ? <>
                <span>Already setted up Reconfigure</span>
            </> : <>
                <span>Already setted up</span>
            </> : <>
                <span>Not Already setted up</span>
            </>
        }
        </div>
    </div></>)
}

export default QueueSetup
    