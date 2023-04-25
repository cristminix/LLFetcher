import {useState, useEffect} from "react"

// import DB from "../models/DB"
// const mDb = await DB.getInstance()
const SettingPage = ({store}) => {
    const mDb = store.get('DB')
    const [loading,setLoading] = useState(false)
    const onClearStorage = async()=>{
        setLoading(true)
        await mDb.drop()
        await mDb.initDB()
        setLoading(false)
    }
	return(<>
    <div className="text-center py-10">
    <button onClick={e=>onClearStorage()} className="btn btn-sm btn-danger"><i className={loading?"fa fa-spin fa-spinner":"fa fa-database"}></i> Clear Storage</button>
    </div></>)
}

export default SettingPage