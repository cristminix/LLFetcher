// import schema from "../../side_menu.json"

import { useEffect, useState } from "react"
import Pager from "../../../components/shared/Pager"
import Grid from "../../../components/shared/Grid"
import Button from "../../../components/shared/ux/Button"
import {formatBytes, sendMessage, slugify} from "../../../global/fn"
import UploadForm, {createUntitledUpload} from "./form/UploadForm"
import { apiUrl } from "./fn"

import jQuery from "jquery"
import { niceScrollbarCls } from "../ux/cls"

const YTUpload = ({store,config,pageNumber}) => {
    const [grid,setGrid] = useState({
        records : [],
        limit : 5,
        page : 1,
        total_pages : 0,
        total_records : 0,
        order_by:'id',
        order_dir:'asc'
    })
    const [formData,setFormData]=useState(null)
    const [showForm,setShowForm]=useState(false)
    
    const onRefresh = f =>  updateList()

    const addForm = async(item,index)=>{
        let parent = null
        if(item){
            parent = item.slug
        }
        const defaultMenu = createUntitledUpload()
        defaultMenu.parent = parent
        setFormData(defaultMenu)
        setShowForm(true)

        jQuery('#basic-modal-upload-clicker').trigger("click")
        // setTimeout(()=>{
        //     jQuery('#hs-basic-modal-upload form input:first').focus()

        // },1000)

    }
    const editForm = async(item,index)=>{
        console.log(item)
        
        setFormData(item)
        setShowForm(true)
        
        jQuery('#basic-modal-upload-clicker').trigger("click")
        // setTimeout(()=>{
        //     jQuery('#hs-basic-modal-upload form input:first').focus()

        // },1000)

    }
    const deleteForm = async(item,index)=>{
        // console.log(item)
        if(confirm(`Are you sure want to delete this upload "${item.title}"`)){
            const url = apiUrl(['yt-upload/delete',item.id])
            const response = await fetch(url,{method:'POST'}).then(r=>r.json())
            console.log({response})
            updateList()
        }

    }
    const goToTT = (item)=>{
        document.location.hash=`/native-client-app/yt-upload-tt/${item.id}`
    }
    
    const gridOptions = {
		numberWidthCls : 'w-[10px]',
		actionWidthCls : 'w-[50px]',
		widthCls : [''],
		headers : [/*'ID',*/'Title'/*,'Description','Category','Tags','Thumbnail','Group ID','Created By','Create Date','Last Updated'*/],
		fields : [/*'id',*/'title'/*,'description','category', 'tags','thumbnail','groupId','createdBy','createDate','lastUpdated'*/],
		enableEdit : true,
		// editUrl : (item) =>{ return `/DBerences/tts-server/${item.key}`},
		// remoteUrl : (item) => `${config.getApiEndpoint()}/api/tts/DBerence?key=${item.key}`,
		callbackFields : {
			thumbnail : (field, value ,item) => {
                // console.log(item)
                // if(!item.callback_called){
                //     console.log('callbackFields called')
                //     item.callback_called = true
                    return <img className="w-full h-full" src={`${apiUrl(['yt-uploads','thumbnails',value])}`}/>
                    // return <ImgYtUpload pk={item.id}/>
                // }
				// 
			},
            description : (field, value, item, index) => {
				return <p className="w-[250px] line-clamp-6">{value}</p>
			}, 
			// value : (field, value, item, index) => {
			// 	return editorFactory(item, index)
			// }
            title : (field, value, item, index) => {
                const thumbnailUrl = `${apiUrl(['yt-uploads','thumbnails',item.thumbnail])}`
				return <>
                    <div className="flex text-left gap-2">
                        <div className="w-1/4"><img src={thumbnailUrl}/></div>
                        <div className="w-3/4">
                            <h1 className="mb-2">{item.title}</h1>
                            <p className="font-normal line-clamp-4" title={item.description}>{item.description}</p>
                        </div>
                    </div>
                </>
			}
		},
        callbackHeaders:{
            title:(field,index, fields)=>{
                return "Upload"
            }
        },
		callbackActions : {
            edit : (item, index, options, linkCls, gridAction) => {
				return <>
                
                <Button title="T&T" loading={false} icon="bi bi-collection" caption={`${item.ttCount}`} onClick={e => goToTT(item, index)}/>
                <Button title="Edit" loading={false} icon="fa fa-edit" caption="" onClick={e => editForm(item, index)}/>
                {
                item.ttCount==0?<Button title="Delete" disabled={item.ttCount>0} loading={false} icon="fa fa-trash" caption="" onClick={e => deleteForm(item, index)}/>:null
                }
                
            </>
	   
			}
		}
	}
    
    const updateList = async () => {
        console.log('updateList called')
        const page = parseInt(pageNumber) || 1
     
        const {limit, order_by,order_dir} = grid
        const url = apiUrl('yt-uploads',{limit,page, order_by,order_dir})
        const response = await fetch(url).then(r=>r.json())
        const nGrid = response
        setGrid(prevGrid => {
            return {
                ...prevGrid,
                ...nGrid
            }
        }) 
    }
    useEffect(()=>{
        // if(pageNumber){
            updateList()
        // }        
    },[pageNumber])
    
	const containerCls = "border mb-2 rounded-xl shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700"
	return(<div className="min-h-screen">
        <UploadForm updateList={e=>updateList()} data={formData} className={containerCls} hideForm={e=>setShowForm(false)}/>

        {
            // showForm?<MenuForm data={formData} className={containerCls} hideForm={e=>setShowForm(false)}/>:null
        }
        
        <div  className={`user-manager ${containerCls}`}>
        <div className="grid-toolbar pb-4">
            <div className="flex justify-end gap-2">
                {/* <Button onClick={e=>exportMenu(e)} caption="Export json" icon="fa fa-file-text"/> */}
                {
                    !showForm?<Button onClick={e=>addForm()} icon="fa fa-plus" caption=""/>:null
                }
                
            </div>
            
        </div>	
        <div className="flex flex-col ">
              <div className={`-m-1.5 overflow-x-auto ${niceScrollbarCls}`}>
                <div className="p-1.5 ">
                      <div className="">
                        {
                            grid ?<Grid options={gridOptions} records={grid.records} page={grid.page} limit={grid.limit} />:""
                        }
                        
                      </div>
                      
                </div>
              </div>
              <div className="pager-container mt-3">
                        {
                            grid ? <Pager path="/native-client-app/yt-upload" 
                                 page={grid.page} 
                                 total_pages={grid.total_pages} 
                                 limit={grid.limit}
                                 onRefresh={e=>onRefresh()}/>:""
                        }
                          

                      </div>
        </div>		
        </div>		
    </div>) 
}

export default YTUpload