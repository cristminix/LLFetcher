import schema from "../../side_menu.json"

import { useEffect, useState } from "react"
import Pager from "../../../components/shared/Pager"
import Grid from "../../../components/shared/Grid"
import Button from "../../../components/shared/ux/Button"
import {formatBytes, sendMessage, slugify} from "../../../global/fn"
// import CheckBox from "../../../components/shared/ux/CheckBox"
// import { devApiUrl } from "../developers/fn"
import jQuery from "jquery"
const inputCls= "py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
import { crc32 } from "crc"

const NativeClient = ({store,config}) => {
    const [grid,setGrid] = useState({
        records : [],
        limit : 5,
        page : 1,
        total_pages : 0,
        total_records : 0,
        order_by:'key',
        order_dir:'asc'
    })
    const [formData,setFormData]=useState(null)
    const [showForm,setShowForm]=useState(false)
    
    const onRefresh = f => f
   
    const runCmd = async (item, idx) => {
        console.log(item, idx)
        // const data = item.data
        let data = {idx,...item.data}
        const dataKeys = Object.keys(data)
        for(const key of dataKeys){
            const idata = data[key]
            if(typeof idata ==='function'){
                let result = 'none' 
                try{
                    result = await idata()
            
                }catch{
                    result = false
                }    
                console.log(result)
                data[key] = result
            }
        }
        
        setGrid(prevGrid => {
            return {
               ...prevGrid,
                records : prevGrid.records.map((n_record,n_index) =>
                    n_index === idx ? { ...n_record, status:1, output : '' } : n_record
                )
            }
        })
        sendMessage(`nm.${item.cmd}`, data,'background',response=>{
            console.log({response})
            setGrid(prevGrid => {
                return {
                   ...prevGrid,
                    records : prevGrid.records.map((n_record,n_index) =>
                        n_index === idx ? { ...n_record, status:2, output : response } : n_record
                    )
                }
            })

        })
    }
    const gridOptions = {
		numberWidthCls : '1/8',
		actionWidthCls : '1/8',
		widthCls : ['1/5'],
		headers : ['Cmd','Desc','Param','Output','Status'],
		fields : ['cmd','desc','param','output', 'status'],
		enableEdit : true,
		// editUrl : (item) =>{ return `/DBerences/tts-server/${item.key}`},
		// remoteUrl : (item) => `${config.getApiEndpoint()}/api/tts/DBerence?key=${item.key}`,
		callbackFields : {
			title : (field, value ,item) => {
                // console.log(item)
				return <p className={`ml-${item.level*2}`}>{item.hasChild?'+':' '} {value}</p>
			}, 
			// value : (field, value, item, index) => {
			// 	return editorFactory(item, index)
			// }
		},

		callbackActions : {
            edit : (item, index, options, linkCls, gridAction) => {
				return <>
                
                <Button loading={false} icon="fa fa-play" caption="Run" onClick={e => runCmd(item, index)}/>
                
            </>
	   
			}
		}
	}
    
    const updateList = async () => {
        
        const records = [{
            cmd : 'ping',
            desc :'Ping Module',
            data : {},
            output:'',
            status:0
        },
        {
            cmd : 'send_cookies',
            desc :'Send Cookie Module',
            data : {
                cookie: async()=>{
                    return  jQuery.ajax({url:'https://www.linkedin.com/learning/',xhrFields: { withCredentials: true },
                    crossDomain: true,success:(data,textStatus, xhr)=>{
                        console.log(data,textStatus, xhr)
                    }})
                    // .then(async(response) => {
                    //     return [response, await response.text()]
                    // })
                    // .then(response=>{
                    //     // const [response,text] = data
                    //     const cookieHeaders = response.headers.get('Content-Type')
                    //     return cookieHeaders
                    // })
                    // .catch(error => console.error('Error:', error))

                }
            },
            output:'',
            status:0
        }
    ]
        
        setGrid(prevGrid => {
            return {
               ...prevGrid,
                records
            }
        })
    }
    useEffect(()=>{
        updateList()        
    },[])
    
	const containerCls = "border mb-2 rounded-xl shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700"
	return(<div className="min-h-screen">
        {
            // showForm?<MenuForm data={formData} className={containerCls} hideForm={e=>setShowForm(false)}/>:null
        }
        
        <div  className={`native-client ${containerCls}`}>
      	
        <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                      <div className="overflow-hidden">
                        {
                            grid ?<Grid options={gridOptions} records={grid.records} page={grid.page} limit={grid.limit} />:""
                        }
                        
                      </div>
                      <div className="pager-container mt-3">
                        {
                            grid ? <Pager path="/database" 
                                 page={grid.page} 
                                 total_pages={grid.total_pages} 
                                 limit={grid.limit}
                                 onRefresh={onRefresh}/>:""
                        }
                          

                      </div>
                </div>
              </div>
        </div>		
        </div>		
    </div>) 
}

export default NativeClient