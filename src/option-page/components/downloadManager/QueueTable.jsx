import QueueItem from "./QueueItem"
const QueueTable = ({}) => {
    return (<><div className="queue-table">
        <table>
            <thead>
                <tr>
                <th>No</th>
                </tr>
            </thead>
            <tbody>
            <QueueItem/>
            </tbody>
        </table>
        
    </div></>)
}

export default QueueTable
    