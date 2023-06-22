import {useState} from "react"
const SelectFmt = ({queueStarted,fmt, updateSelectedFmt, fmtList}) =>{
	const optionItemCls = "flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" 
	const [selectedFmt, setSelectedFmt] = useState(fmt)
	const onSelect = (e,label) =>{
		console.log(label)
		setSelectedFmt(label)
		updateSelectedFmt(label)
		e.preventDefault()
		
	}
	return !queueStarted?(<div className="text-center">
		<label className="form-label">Set video quality : </label> 
	  		
	  <div className="hs-dropdown relative inline-flex [--placement:bottom-right]">
  <button id="hs-dropdown" type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
    {selectedFmt}
    <svg className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </button>

  <div className="hs-dropdown-menu w-72 transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown">
    
	{
		fmtList.map((fm,index)=>{
			return <a className={optionItemCls} key={index} onClick={e=>onSelect(e,fm)}>
			{fm}
		  </a>
		})
	}
  </div>
</div>
	<div className="form-helper">Available video format: {fmtList.join(', ')}</div>

	</div>):""
}

export default SelectFmt