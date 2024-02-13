import { Component } from "react"
import { crc32 } from "crc"
import {HSDropdown} from "preline"
/***
 * props :
 * label : string
 * data : string['text_and_value'],object{text,value}[]
 * */
class DropdownMenu extends Component{
    constructor(props){
        super(props)
        this.state = {
            // label : props.label,
            // data : [],
            // labelIcon: "fa fa-list",
            // itemIcon: "fa fa-arrow-right",
        }
    }
    onSelectItem(e,value,caption){
        const {onSelect} = this.props
		onSelect(value,caption)
		e.preventDefault()
		
	}
    componentWillReceiveProps(){
        setTimeout(() => {
            console.log(`HSDropdown.autoInit() called`)
            try{
                HSDropdown.autoInit()

            }catch(e){
                console.log(e)
            }
        }, 1000)
    }
    componentDidMount(){
        setTimeout(() => {
            console.log(`HSDropdown.autoInit() called`)
            try{
                HSDropdown.autoInit()

            }catch(e){
                console.log(e)
            }
        }, 1000)
    }
    render(){
        const ddId = crc32((new Date).getTime().toString()).toString(16)
        const {label,data,labelIcon,itemIcon,captionSuffix="",className,btnClassName} = this.props
        const optionItemCls = "cursor-pointer flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:bg-gray-700"
        return <>
        <div className={className+" hs-dropdown relative inline-flex  "}>
  <button id={`hs-dropdown-${ddId}`} type="button" className={` ${btnClassName} hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600`}>
    {labelIcon?<i className={labelIcon}/>:null}
    {label}
    <svg className="hs-dropdown-open:rotate-180 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
  </button>

  <div className={"hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-[15rem] bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full z-10"} aria-labelledby={`hs-dropdown-${ddId}`}>
  {
		data.map((item,index)=>{
            let value = item
            let icon = itemIcon
            let caption = `${item}${captionSuffix}`

            if(typeof item == "object" && item !== null){
                value = item.value
                caption = `${item.text}${captionSuffix}`
                if(typeof item.icon == "string"){
                    icon = item.icon
                }
            }
			return <a className={optionItemCls} key={index} onClick={e=>this.onSelectItem(e,value,caption)} >
			<i className={icon}></i>{caption}
		  </a>
		})
	}
    
  </div>
</div>
        </>
    }
}

export default DropdownMenu