
import Button from "../Button"

const QueueItemToolbar = ({clearStatusBar,logStatusBar,startQueueItem,loading,dlStatus,finished, interupted, vIndex,toc}) => {
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
                <Button  onMouseOut={e=>clearStatusBar()} onMouseOver={e=>logStatusBar('QueueItemToolbar.startQueue',`Resume ${toc.title}`)} onClick={e=>startQueueItem(vIndex)} caption={''} disabled={disabled} loading={loading} icon={`fa fa-refresh`}/>
                
            </>:<>
        <Button onMouseOut={e=>clearStatusBar()} onMouseOver={e=>logStatusBar('QueueItemToolbar.startQueue',`Download ${toc.title}`)}  onClick={e=>startQueueItem(vIndex)} caption={''} disabled={disabled} loading={loading} icon={`fa fa-${icon}`}/>

            </>
        }
            
        </>:<>
            Complete
        {/* <Button onMouseOut={e=>clearStatusBar()} onMouseOver={e=>logStatusBar('QueueItemToolbar.resetQueueItemmmm',`Reset ${toc.title}`)}  onClick={e=>startQueueItem(vIndex)} caption={''} disabled={disabled} loading={loading} icon={`fa fa-trash`}/> */}

        </>
    }
    </div></>)
}

export default QueueItemToolbar
