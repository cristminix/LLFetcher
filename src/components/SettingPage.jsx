import {useState, useEffect} from "react"
import LogBar from "./LogBar"

// import DB from "../models/DB"
// const mDb = await DB.getInstance()
const SettingPage = ({store, pageNavigationRef}) => {
    const mDb = store.get('DB')
    const [loading,setLoading] = useState(false)
    const [logBarData, setLogBarData] = useState({message:'',mode:0})
    const onClearStorage = async()=>{
        setLogBarData({
            message : 'Cleaning storage ...',
            mode : 0
        })
        setLoading(true)
        await mDb.drop()
        await mDb.initDB()
        const pageNav = pageNavigationRef.current
        pageNav.enableDownload(false)
        pageNav.disableCourse()
        setLoading(false)
        setLogBarData({
            message : 'Storage is clean',
            mode : 0
        })
    }
	return(<>
    <div className="text-center" style={{margin:'1em'}}>
        <div className="btn-group" style={{marginBottom:'4px'}}>
            <button onClick={e=>onClearStorage()} className="btn btn-sm btn-danger"><i className={loading?"fa fa-spin fa-spinner":"fa fa-database"}></i> Clear Storage</button>
            
        </div>
        <div>
            <a href={chrome.runtime.getURL('options.html')} target="_blank">Open Setting Page</a>
            <a href={chrome.runtime.getURL('second_options.html')} target="_blank">Open 2nd Setting Page</a>
        </div>
        <LogBar data={ logBarData}/>
    </div></>)
}

export default SettingPage