
import Button from "../Button"
const QueueItemToolbar = ({loading,dlStatus,finished, interupted}) => {
    const [dlcaptionStatus, dlvideoStatus] = dlStatus
    const dlStatusResult = parseInt(dlcaptionStatus) + parseInt(dlvideoStatus)
    const icon =  dlStatusResult == 0 ? 'download' : dlStatusResult != 4 ? 'refresh' : 'check' 
    let disabled = dlStatusResult == 0 ? false :
                   dlStatusResult == 2 ? true :
                   dlStatusResult == 4 ? true : false
    return (<><div className="queue-item-toolbar">
    {
        !finished ? <>
        {

            interupted ? <>
                <Button caption={dlStatusResult} disabled={disabled} loading={loading} icon={`fa fa-refresh`}/>
                
            </>:<>
        <Button caption={dlStatusResult} disabled={disabled} loading={loading} icon={`fa fa-${icon}`}/>

            </>
        }
            
        </>:<>
            Complete
        </>
    }
    </div></>)
}

export default QueueItemToolbar
    