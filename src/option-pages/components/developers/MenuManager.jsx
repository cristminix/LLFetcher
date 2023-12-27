import schema from "../../side_menu.json"

import { useEffect, useState } from "react"
import Pager from "../../../components/shared/Pager"
import Grid from "../../../components/shared/Grid"
import Button from "../../../components/shared/ux/Button"
import {formatBytes, slugify} from "../../../global/fn"
import CheckBox from "../../../components/shared/ux/CheckBox"
import { devApiUrl } from "./fn"
const inputCls= "py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
// console.log(import.meta.env)
import { crc32 } from "crc"
const createUntitledMenu = ()=>{
    const idx = crc32((new Date).getTime().toString()).toString(16)
    const title = `Untitled-${idx}`
    const slug = slugify(title)
    const path = `/${slug}`
    const iconCls = 'fa fa-cog'
    const parent = null
    const hidden= true
    const dev = true
    const order=0
    const hasChild = false

    return {title,slug,parent,path,iconCls,hidden,dev,order,hasChild}
}
const MenuForm = ({data=null, className,hideForm})=>{
    const [title,setTitle] = useState('')
    const [iconCls,setIconCls] = useState('')
    const [path,setPath] = useState('')
    const [order,setOrder] = useState('')
    const [hidden,setHidden] = useState(false)
    const [parent,setParent] = useState(null)
    const [slug,setSlug] = useState('')
    const [dev,setDev] = useState(false)
    const [hasChild,setHasChild] = useState(false)
    const onEdit = f=> f
    const saveForm = async(f) => {
        const formData = {title, iconCls, path, order, hidden, hasChild, dev, parent, slug}
        const options = {
            method: 'POST', // or 'PUT', 'DELETE', etc.
            headers: {
              'Content-Type': 'application/json', // Specify the content type if sending JSON data
              // Add any other headers if needed
            },
            body: JSON.stringify(formData) // Convert data to JSON string if sending JSON data
          
        }
        // console.log(formData)
        // Make the fetch request
        fetch(devApiUrl('menu/update'), options).then(response => response.json())
        .then(data => {
            // Handle the response data
            console.log('Response:', data);
            hideForm()
        })
        .catch(error => {
        // Handle errors
        console.error('Error:', error);
        })
    }

    useEffect(()=>{
        if(data){
            console.log(data)
            const {title,slug,parent,path,iconCls,hidden,dev,order,hasChild} =data
            setTitle(title)
            setSlug(slug)
            setParent(parent)
            setDev(dev)
            setPath(path)
            setIconCls(iconCls)
            setHidden(hidden)
            setHasChild(hasChild)
            setOrder(order)
        }
    },[data])
    return <>
    <form className={className}>
    <div className="flex  items-center p-2 px-2">
        <div className="w-[150px]">
            <label className="font-bold">Title</label>
        </div>
        <div className="flex-grow">
            <input className={inputCls} defaultValue={title} onChange={e=>setTitle(e.target.value)}/>
        </div>
    </div>
    <div className="flex  items-center p-2 px-2">
        <div className="w-[150px]">
            <label className="font-bold">Slug</label>
        </div>
        <div className="flex-grow">
            <input className={inputCls} defaultValue={slug} onChange={e=>setSlug(e.target.value)}/>
        </div>
    </div>
    <div className="flex  items-center p-2 px-2">
        <div className="w-[150px]">
            <label className="font-bold">Path</label>
        </div>
        <div className="flex-grow">
            <input className={inputCls} defaultValue={path} onChange={e=>setPath(e.target.value)}/>
        </div>
    </div>
    <div className="flex  items-center p-2 px-2">
        <div className="w-[150px]">
            <label className="font-bold">Icon Cls</label>
        </div>
        <div className="flex-grow">
            <input className={inputCls} defaultValue={iconCls} onChange={e=>setIconCls(e.target.value)}/>
        </div>
    </div>
    <div className="flex  items-center p-2 px-2">
        <div className="w-[150px]">
            <label className="font-bold">Order</label>
        </div>
        <div className="flex-grow">
            <input className={inputCls} defaultValue={order} onChange={e=>setOrder(e.target.value)}/>
        </div>
    </div>
    <div className="flex  items-center p-2 px-2">
        <div className="w-[150px]">
            <label className="font-bold">Parent</label>
        </div>
        <div className="flex-grow">
            <input className={inputCls} defaultValue={parent} onChange={e=>setParent(e.target.value)}/>
        </div>
    </div>
          
    <div className="flex items-center p-2 px-2">
        <div className="w-[150px]">
            <label className="font-bold">Hidden {hidden?'Y':'N'}</label>
        </div>
        <div>
            <CheckBox label="" checked={hidden} onChange={checked=>setHidden(checked)}/>
        </div>
    </div>
    <div className="flex items-center p-2 px-2">
        <div className="w-[150px]">
            <label className="font-bold">Development Mode</label>
        </div>
        <div>
            <CheckBox label="" checked={dev} onChange={checked=>setDev(checked)}/>
        </div>
    </div>
            <div className="flex p-2 gap-2">
          
                <Button disabled={false} icon="fa fa-save" onClick={e=> saveForm(e)} caption="Save"/>
                <Button disabled={false} icon="fa fa-times" onClick={e=> hideForm(e)} caption="Cancel"/>
            </div>
    </form>
    </>
}

const MenuManager = ({store,config}) => {
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
    const onRefresh = f => onReinit()
    const onReinit = async (item, index) => {
        
        // if(confirm(`The ${item.table} table is going droped, are you sure want to reinit ?`)){
            updateList()
            config.getUiConfig().reloadSidebar()
        // }
        

        

        console.log(item)
    }
    const addMenuForm = async(item,index)=>{
        let parent = null
        if(item){
            parent = item.slug
        }
        const defaultMenu = createUntitledMenu()
        defaultMenu.parent = parent
        setFormData(defaultMenu)
        setShowForm(true)

    }
    const editMenuForm = async(item,index)=>{
        console.log(item)
        if(typeof item.hidden == "undefined"){
            item.hidden = false
        }
        if(typeof item.dev == "undefined"){
            item.dev = false
        }
        setFormData(item)
        setShowForm(true)

    }
    const deleteMenuForm = async(item,index)=>{
        // console.log(item)
        if(confirm(`Are you sure want to delete this menu "${item.title}"`)){
            if(typeof item.hidden == "undefined"){
                item.hidden = false
            }
            if(typeof item.dev == "undefined"){
                item.dev = false
            }
            const formData = item
            const options = {
                method: 'POST', // or 'PUT', 'DELETE', etc.
                headers: {
                'Content-Type': 'application/json', // Specify the content type if sending JSON data
                // Add any other headers if needed
                },
                body: JSON.stringify(formData) // Convert data to JSON string if sending JSON data
            
            }
            // console.log(formData)
            // Make the fetch request
            fetch(devApiUrl('menu/update?delete=true'), options).then(response => response.json())
            .then(data => {
                // Handle the response data
                console.log('Response:', data);
                // hideForm()
            })
            .catch(error => {
            // Handle errors
            console.error('Error:', error);
            })
        }

    }
    const gridOptions = {
		numberWidthCls : '1/8',
		actionWidthCls : '1/8',
		widthCls : ['1/5'],
		headers : ['Title','Path','Icon Cls','Hidden'],
		fields : ['title','path','iconCls','hidden'],
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
			// edit : (item, index, options, linkCls, gridAction) => {
			// 	return(<> <button className={linkCls} onClick={evt => onEditRow(item, index, options, linkCls, gridAction)}>
			// 		            	<i className="bi bi-pencil-square"></i> {gridAction.state.editMode ? 'Save' : 'Reinit'}
			// 		               </button>
			// 		               {gridAction.state.editMode ? (<>
			// 		               	<button className={"ml-2 "+linkCls} onClick={evt => onCancelRow(item, index, options, linkCls, gridAction)}>
			// 		            	<i className="bi bi-x-circle"></i> Cancel 
			// 		               </button>
			// 		               </>) : ''}</>)
	   
			// }
            edit : (item, index, options, linkCls, gridAction) => {
				return <>
                {
                    item.level==0?<Button loading={false} icon="fa fa-plus" caption="Add Child" onClick={e => addMenuForm(item, index)}/>:null
                }
                <Button loading={false} icon="fa fa-edit" caption="Edit" onClick={e => editMenuForm(item, index)}/>
                {
                    !item.hasChild?
                <Button loading={false} icon="fa fa-trash" caption="Delete" onClick={e => deleteMenuForm(item, index)}/>:null
            }
            </>
	   
			}
		}
	}
    
    const getMenuChilds=(slug)=>{
        return schema.links[slug].childItems
    }
    const updateList = async () => {
        const newGrid = Object.assign({}, grid)
        setGrid(null)
        const records = []
        const slugKeys= Object.keys(schema.links)
        let id = 1
        for(const slug of slugKeys){
            let {title,path,iconCls,hidden,hasChild,order} = schema.links[slug]
            const record = {title,path,iconCls,hidden,hasChild}
            record.id = id
            record.slug = slug
            record.level= 0
            record.order = order
            const childItems = schema.links[slug].childItems 
            records.push(record)

            if(typeof childItems === 'object'){
                const cslugKeys = Object.keys(childItems)
                for(const cslug of cslugKeys){
                    
                    const crecord = childItems[cslug]
                    crecord.slug = cslug
                    crecord.level = 1
                    crecord.parent = slug
                    records.push(crecord)
                }
            }
            id += 1
        }
        // const reinitLoadingState = schema.availables.map(table => false)
        // setReinitLoading(reinitLoadingState)

        newGrid.records = records
        setGrid(newGrid)
        // updateStorageSize()
    }
    useEffect(()=>{
        updateList()        
    },[])

    const exportMenu = async()=>{
        let anchor = document.createElement('a')

        const filename = "side_menu.json"
        let results = {records:{}}
        
        store.availables.map(model=>{
            results.records[model] = {}
            try{
                store.get(model).getAll().map(rec=>{
                    results.records[model][rec.id]=rec 
                })
            }catch(e){
                console.error(e)
            }
            
        })
        let buffer = JSON.stringify(results)
        const objectURL = window.URL.createObjectURL(new Blob([buffer]))
        
        anchor.download = filename
        anchor.href = objectURL
        anchor.click()
        // console.log(store.availables)
    }
	const containerCls = "border mb-2 rounded-xl shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700"
	return(<div>
        {
            showForm?<MenuForm data={formData} className={containerCls} hideForm={e=>setShowForm(false)}/>:null
        }
        
        <div  className={`menu-manager ${containerCls}`}>
        <div className="explorer-toolbar">
            <div className="flex gap-2">
                <Button onClick={e=>exportMenu(e)} caption="Export json" icon="fa fa-file-text"/>
                {
                    !showForm?<Button onClick={e=>addMenuForm()} icon="fa fa-plus" caption="Add"/>:null
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

export default MenuManager