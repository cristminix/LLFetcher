import { useEffect, useRef } from "react"
import jQuery from "jquery"
import { slugify } from "../../../global/fn"
import { HSSelect } from "preline"
 const AdvancedSelect = ({data,captionSuffix="",label="",selected="",onSelect}) => {
    const styles = {  }
    const cls0 = "cls-0 relative  w-full"
		const cls1 = "cls-1 hidden" + ` ${slugify(label)}`
		const cls2 = "cls-2 absolute top-1/2 end-3 -translate-y-1/2"
		const cls3 = "cls-3 flex-shrink-0 w-3.5 h-3.5 text-gray-500 dark:text-gray-500"

    // const selectRef = useRef(null)
    const onSelectChange = selected => {
      onSelect(selected)
    }

    useEffect(()=>{
      HSSelect.autoInit();
      // setTimeout(() => {
          
          // HSSelect.getInstance(`dd_${slugify(label)}`).open()
          setTimeout(() => {
            // HSSelect.autoInit();
            HSSelect.getInstance(`#dd_${slugify(label)}`).on('change', onSelectChange)
        }, 512)
      // }, 512)
  },[data])
    return <>
    {/*<!-- Select -->*/} 
 <div className={cls0}   > 
   <select id={`dd_${slugify(label)}`} defaultValue={selected} 
   data-hs-select='{
      "placeholder": "Select option...",
      "toggleTag": "<button type=\"button\" ></button>",
      "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600",
      "dropdownClasses": "advanced-select mt-2 z-50 w-full max-h-[200px] p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto dark:bg-slate-900 dark:border-gray-700",
      "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-200 dark:focus:bg-slate-800",
      "optionTemplate": "<div class=\"advanced-select-option flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500\" xmlns=\"http:.w3.org/2000/svg\" width=  \"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>"
    }' 
    
    className={cls1}> 
     <option defaultValue=""> {label} </option> 
     {
		data.map((item,index)=>{
      let value = item
      let caption = `${item}${captionSuffix}`

      if(typeof item == "object" && item !== null){
        value = item.value
        caption = `${item.text}${captionSuffix}`
      }
      
     return <option  value={value} key={index} onClick={e=>console.log(e)}> {caption} </option>
		})
	}
   </select> 

   <div className={cls2}> 
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={cls3}> <path d="m7 15 5 5 5-5"> </path> <path d="m7 9 5-5 5 5"> </path> </svg> 
   </div> 
 </div> 
 {/*<!-- End Select -->*/}
    </>
 }   

 export default  AdvancedSelect
    