
import Button from "../../../components/shared/ux/Button"
import DropdownMenu from "../../../components/shared/ux/DropdownMenu"

const QueueItemToolbar = ({course,clearStatusBar,logStatusBar,startQueueItem,loading,dlStatus,finished, interupted, vIndex,toc,resetQueueItem}) => {
    const [dlcaptionStatus, dlvideoStatus] = dlStatus
    const dlStatusResult = parseInt(dlcaptionStatus) + parseInt(dlvideoStatus)
    const icon =  dlStatusResult == 0 ? 'download' : dlStatusResult != 4 ? 'refresh' : 'check' 
    let disabled = dlStatusResult == 0 ? false :
                //    dlStatusResult == 2 ? true :
                   dlStatusResult == 4 ? true : false
    
    const ddToolbarData = [{
        text: 'Go to Fetch test mode',
        value: 'fetch',
        icon: 'fa fa-globe'
    }]
    const onSelectToolbarItem = (item,course_,toc_) => {
        // console.log(item,toc_)
        if(item=='fetch'){
            const tocPath = `${course_.slug}/${toc_.slug}`
            document.location.hash = `/developer/fetch-api?tocPath=${tocPath}&courseId=${course_.id}&tocId=${toc_.id}`
            console.log(tocPath)
        }
    }
    return (<><div className="queue-item-toolbar flex gap-2 items-center">
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
            
         <Button className={"dark:hover:text-red-600"} onMouseOut={e=>clearStatusBar()} onMouseOver={e=>logStatusBar('QueueItemToolbar.resetQueueItem',`Reset ${toc.title}`)}  onClick={e=>resetQueueItem(vIndex)} caption={''} disabled={false} loading={loading} icon={`fa fa-trash`}/> 

        </>
    }
    <DropdownMenu data={ddToolbarData} onSelect={e=>onSelectToolbarItem(e,course,toc)} btnClassName="py-[7px] px-0 pr-2"/>
    </div></>)
}

export default QueueItemToolbar
