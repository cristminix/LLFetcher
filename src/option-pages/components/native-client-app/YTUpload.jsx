// import schema from "../../side_menu.json"

import { useEffect, useState } from "react"
import Pager from "../../../components/shared/Pager"
import Grid from "../../../components/shared/Grid"
import Button from "../../../components/shared/ux/Button"
import {formatBytes, sendMessage, slugify} from "../../../global/fn"
import UploadForm, {createUntitledUpload} from "./form/UploadForm"
import { apiUrl } from "./fn"

import jQuery from "jquery"

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
        setTimeout(()=>{
            jQuery('#hs-basic-modal-upload form input:first').focus()

        },1000)

    }
    const editForm = async(item,index)=>{
        console.log(item)
        
        setFormData(item)
        setShowForm(true)
        
        jQuery('#basic-modal-upload-clicker').trigger("click")
        setTimeout(()=>{
            jQuery('#hs-basic-modal-upload form input:first').focus()

        },1000)

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
  
    
    const gridOptions = {
		numberWidthCls : '1/8',
		actionWidthCls : '1/8',
		widthCls : ['1/5'],
		headers : [/*'ID',*/'Title','Description','Category','Tags','Thumbnail'/*,'Group ID','Created By','Create Date','Last Updated'*/],
		fields : [/*'id',*/'title','description','category', 'tags','thumbnail'/*,'groupId','createdBy','createDate','lastUpdated'*/],
		enableEdit : true,
		// editUrl : (item) =>{ return `/DBerences/tts-server/${item.key}`},
		// remoteUrl : (item) => `${config.getApiEndpoint()}/api/tts/DBerence?key=${item.key}`,
		callbackFields : {
			thumbnail : (field, value ,item) => {
                // console.log(item)
                // if(!item.callback_called){
                //     console.log('callbackFields called')
                //     item.callback_called = true
                    return <img className="w-full h-full" src={`http://localhost:7700/api/cms/yt-uploads/thumbnails/${value}`}/>
                    // return <ImgYtUpload pk={item.id}/>
                // }
				// 
			},
            description : (field, value, item, index) => {
				return <p className="w-[250px] line-clamp-6">{value}</p>
			} 
			// value : (field, value, item, index) => {
			// 	return editorFactory(item, index)
			// }
		},
        callbackHeaders:{
            title:(field,index, fields)=>{
                return "Upload"
            }
        },
		callbackActions : {
            edit : (item, index, options, linkCls, gridAction) => {
				return <>
                
                <Button loading={false} icon="fa fa-edit" caption="Edit" onClick={e => editForm(item, index)}/>
                <Button loading={false} icon="fa fa-trash" caption="Delete" onClick={e => deleteForm(item, index)}/>
                
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
        <div className="explorer-toolbar">
            <div className="flex gap-2">
                {/* <Button onClick={e=>exportMenu(e)} caption="Export json" icon="fa fa-file-text"/> */}
                {
                    !showForm?<Button onClick={e=>addForm()} icon="fa fa-plus" caption="Add Upload"/>:null
                }
                
            </div>
            
        </div>	
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
                            grid ? <Pager path="/native-client-app/yt-upload" 
                                 page={grid.page} 
                                 total_pages={grid.total_pages} 
                                 limit={grid.limit}
                                 onRefresh={e=>onRefresh()}/>:""
                        }
                          

                      </div>
                </div>
              </div>
        </div>		
        </div>		
    </div>) 
}

export default YTUpload