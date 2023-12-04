import {useEffect, useState} from "react"
import {v4} from "uuid"

const DropdownSelect = ({data=[], className="", onSelect = f => f, selected="", onMouseOver=f=>f,onMouseOut=f=>f,captionSuffix=""}) => {
    const optionItemCls = "cursor-pointer flex items-center gap-x-3.5 py-2 px-2 rounded-md text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300" 
	  const [selectedItem, setSelectedItem] = useState(selected)
    const [selectedItemCaption, setSelectedItemCaption] = useState(selected)
    const onSelectItem = (e,value,caption) =>{
		console.log(value)
		setSelectedItem(value)
    setSelectedItemCaption(caption)
		onSelect(value)
		e.preventDefault()
		
	}
    const uid = v4()
    useEffect(()=>{
      console.log(data,selected)
      try{
        if(typeof data[0] == "object"){
          const selectedItemCaption = data.filter(d=>d.value==selected)[0].text
          setSelectedItemCaption(selectedItemCaption)
        }
      }catch(e){
        console.log(e)
      }
      
    },[selected])
    return <>
        <div className={"hs-dropdown relative inline-flex [--placement:bottom-left] "+className}>
  <button onMouseOut={e=>onMouseOut(e)} onMouseOver={e=>onMouseOver(e)} id={`hs-dropdown-${uid}`} type="button" className="hs-dropdown-toggle py-1 px-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
    {selectedItemCaption}
    <svg className="hs-dropdown-open:rotate-180 w-2.5 h-2.5 text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  </button>

  <div className="hs-dropdown-menu  transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden z-10 bg-white shadow-md rounded-lg p-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby={`hs-dropdown-${uid}`}>
    
	{
		data.map((item,index)=>{
      let value = item
      let caption = `${item}${captionSuffix}`

      if(typeof item == "object" && item !== null){
        value = item.value
        caption = `${item.text}${captionSuffix}`
      }
			return <a className={optionItemCls} key={index} onClick={e=>onSelectItem(e,value,caption)}>
			{caption}
		  </a>
		})
	}
  </div>
</div>
    </>
}

export default DropdownSelect