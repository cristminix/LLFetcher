import QueueItemToolbar from "./QueueItemToolbar"
const QueueItem = ({sections, tocs}) => {
	const tdCls = "px-1 py-1 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"

    let number = 0
    return (<>
    {
            Object.keys(tocs).map((key, keyIndex)=>{
            return tocs[key].map((item,index)=>{
                number+=1
                return <>
                <tr key={index}>
                    <td className={tdCls}> {number}</td>
                    <td className={tdCls}> {item.title}</td>
                    <td className={tdCls}> <i className="fa fa-file-text-o"/> <span>12K</span></td>
                    <td className={tdCls}> <i className="fa fa-file-video-o"/> <span>12MB</span></td>
                    <td className={tdCls}> <QueueItemToolbar/></td>
                </tr>
            </>
            })
        })
    }</>)
}

export default QueueItem
    