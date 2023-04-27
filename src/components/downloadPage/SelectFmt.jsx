const SelectFmt = ({queueStarted,fmt, updateSelectedFmt, fmtList}) =>{
	
	return !queueStarted?(<div className="text-center">
		<label className="form-label">Set video quality : </label> 
	  		<select className="form-control" 
	  onChange={e=>updateSelectedFmt(e)} style={{width:'120px',display:"inline"}} defaultValue={fmt}>
		<option value="">--Choose--</option>
		{
			fmtList.map((fm,index)=>{
				return(<option value={fm} key={index}>{fm}</option>)
			})
		}
	  </select>
	<div className="form-helper">Available video format: {fmtList.join(', ')}</div>

	</div>):""
}

export default SelectFmt