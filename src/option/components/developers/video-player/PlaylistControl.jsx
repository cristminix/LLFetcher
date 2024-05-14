import PlaylistMenu from "./PlaylistMenu"
const PlaylistControl=({store, config, data=null, onSelectItem})=>{
    return <>
        <div className="playlist-control mb-2 bg-gray-50 dark:bg-slate-800 p-2">
            {
                data? <PlaylistMenu data={data} onSelectMenu={(a,b)=>onSelectItem(a,b)}/>:null
            }
        </div>
    </>
}

export default PlaylistControl