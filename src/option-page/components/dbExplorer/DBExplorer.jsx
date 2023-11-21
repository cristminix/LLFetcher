

import React ,{useEffect,useState,useRef}from "react";
// import axios from "axios"
import { Link, useLoaderData } from 'react-router-dom';
import DBEditorBoolean from './db-editor/DBEditorBoolean'
import DBEditorInteger from './db-editor/DBEditorInteger'
import DBEditorObject from './db-editor/DBEditorObject'
import DBEditorString from './db-editor/DBEditorString'

import Pager from "../Pager"
// import AppConfig from "../../lib/AppConfig"
// import Helper from "../../lib/Helper"
// import Store from "./Store"
import Grid from "../Grid"
import {makeDelay} from "../../../components/fn"
import config from "./config.json"

// export async function loader({ params }) {
//   const page = parseInt(params.pageNumber) || 1;
//   return { page };
// }

let dontRunTwice = true
const delay = makeDelay(512)

const DBExplorer = ({store, table, page })=>{
	const [model, setModel] = useState(null)
	const [conf, setConf] = useState(null)
	const [errorMessage, setErrorMessage] = useState("")
	// const {page} = useLoaderData()
	// const store = new Store(config)
	const [projectList,setProjectList] = useState([]);
	const editorFactoryRefs = []
	
	const [grid,setGrid] = useState({
			records : [],
			limit : 5,
			page : 1,
			total_pages : 0,
			total_records : 0,
			order_by:'key',
			order_dir:'asc'
		});
 

	const updateList = async(pageNumber)=>{

		const newGridObj = Object.assign({},grid)
		pageNumber = pageNumber ?? 1
		newGridObj.page = pageNumber 
		newGridObj.limit = grid.limit ?? 5
		newGridObj.records = []

		setGrid(null)
		console.log(model)
		try {
			newGridObj.records = model[conf.listMethod]()
			setGrid(newGridObj)

			console.log(newGridObj)
		} catch (e) {
			console.error(e)
		}
		// const data = null //await store.getTtsDBerenceList(page_number, grid.limit, grid.order_by, grid.order_dir)
		// console.log('updateList')
		// if(data){
		// 	setGrid(data)
		// }
	}

	useEffect(()=>{
		if(model){
			const pageNumber = page ?? 1
			console.log(pageNumber)

			updateList(pageNumber)
		}else{
			setErrorMessage("No Model Set")
		}
			
	},[page, model])

	useEffect(()=>{
		if(table){
			setModel(null)
			setConf(null)
			const conf = config.tables[table]
			if(conf){
				const modelName = conf.model
				const modelSet = store.get(modelName)
				console.log(conf, modelName, modelSet)
				setConf(conf)
				setModel(modelSet)
			}else{
				setErrorMessage(`No config set for ${table} table`)
			}
			
			// updateList(1)
		}			
	},[table])
	// useEffect(()=>{
	// 	updateList(1)
	// },[])
	
	const onRefresh = async(e,setLoading)=>{
		setLoading(true)	
		await updateList(grid.page);
		setLoading(false)
	}
	const editorFactory = (editor,field, value, item, index,fieldIndex) => {
		if(!editorFactoryRefs[`${index}-${fieldIndex}-${field}`]){
			editorFactoryRefs[`${index}-${fieldIndex}-${field}`] = React.createRef(null)
		}
		const ref = editorFactoryRefs[`${index}-${fieldIndex}-${field}`]
		const components = {
			boolean : <DBEditorBoolean item={item} field={field} value={value} ref={ref}/>,
			string : <DBEditorString item={item} field={field} value={value} ref={ref}/>,
			object : <DBEditorObject item={item} field={field} value={value} ref={ref}/>,
			integer : <DBEditorInteger item={item} field={field} value={value} ref={ref}/>
		}
		// setEditorFactoryRefs(editorFactoryRefs)
		// const editor = item.editor || "string"
		const component = components[editor]
		return component
	}
 	const onCancelRow = async(item, index, options, linkCls, gridAction) => {
 		const editor = editorFactoryRefs[index].current
 		
 		 editor.setGridAction(gridAction)
 		 editor.cancelRow(true)
 	}
 	const onEditRow = async(item, index, options, linkCls, gridAction) => {
		options.fields.map((field, fieldIndex)=>{
			const editor = editorFactoryRefs[`${index}-${fieldIndex}-${field}`].current
			const editMode = editor.state.editMode
			// editor.setGridAction(gridAction)
			if(!editMode){
				editor.editRow()
				// console.log(editor)

			}else{
				editor.saveRow()

			}
		})
 		
 		// gridAction.setState({editMode: !editMode})
 	}
 	const getLinkButton = ()=>{
		return <button className={''} onClick={evt => onEditRow()}>
    		<i className="bi bi-pencil-square"></i> Ubah</button>
  }
	const gridOptions = {
		numberWidthCls : '',
		actionWidthCls : '',
		widthCls : ['3/8','5/8'],
		headers : ['Setting', 'Value'],
		fields : ['key','value'],
		enableEdit : true,
		// editUrl : (item) =>{ return `/DBerences/tts-server/${item.key}`},
		// remoteUrl : (item) => `${config.getApiEndpoint()}/api/tts/DBerence?key=${item.key}`,
		// callbackFields : {
		// 	key : (field, value ,item) => {
		// 		return item.desc.length == 0 ? Helper.titleCase(value) : item.desc
		// 	}, 
		// 	course : (field, value, item, index) => {
		// 		console.log(field, value, item, index)
		// 		return editorFactory(item, index)
		// 	}
		// },
		useAutoEditor: true,

		callbackActions : {
			edit : (item, index, options, linkCls, gridAction) => {
				return(<> <button className={linkCls} onClick={evt => onEditRow(item, index, options, linkCls, gridAction)}>
					            	<i className="bi bi-pencil-square"></i> {gridAction.state.editMode ? 'Save' : 'Edit'}
					               </button>
					               {gridAction.state.editMode ? (<>
					               	<button className={"ml-2 "+linkCls} onClick={evt => onCancelRow(item, index, options, linkCls, gridAction)}>
					            	<i className="bi bi-x-circle"></i> Cancel 
					               </button>
					               </>) : ''}</>)
	   
			}
		}
	}
	const containerCls = "border mb-2 rounded-xl shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700"
	if(model){
		gridOptions.headers = conf.headers
		gridOptions.fields = conf.fields
		gridOptions.editors = conf.editors
		gridOptions.editorFactory = editorFactory
		return(<div className={containerCls}>		
				<div className="flex flex-col">
	  				<div className="-m-1.5 overflow-x-auto">
	    				<div className="p-1.5 min-w-full inline-block align-middle">
	      					<div className="overflow-hidden">
	        					<Grid options={gridOptions} records={grid.records} page={grid.page} limit={grid.limit} />
	      					</div>
	      					<div className="pager-container mt-3">
	      						<Pager path="/DBerences/tts-server" 
	      							   page={grid.page} 
	      							   total_pages={grid.total_pages} 
	      							   limit={grid.limit}
	      							   onRefresh={onRefresh}/>

	      					</div>
	    				</div>
	  				</div>
				</div>		
			</div>)
	}else{
		return <>
		{errorMessage}
		
		</>
	}
				
}
export default DBExplorer
    