import schema from "./schema.json"
import Grid from "../Grid"
import { useEffect, useState } from "react";
import Pager from "../Pager"
import Button from "../Button";
const DBTableManager = ({store}) => {
    const [grid,setGrid] = useState({
        records : [],
        limit : 5,
        page : 1,
        total_pages : 0,
        total_records : 0,
        order_by:'key',
        order_dir:'asc'
    });
    const [reinitLoading, setReinitLoading] = useState([])
    const onRefresh = f => f
    const onReinit = async (item, index) => {
        
        if(confirm(`The ${item.table} table is going droped, are you sure want to reinit ?`)){
            console.log(`Reinitit ${item.table} table`)

            let reinitLoadingState = Object.assign([], reinitLoading)
            reinitLoadingState[index] = true
            setReinitLoading(reinitLoadingState)

            const model = store.get(item.table)
            if(model){
                await model.dropTable()
            }
            // setTimeout(()=>{
                reinitLoadingState = Object.assign([], reinitLoading)
                reinitLoadingState[index] = false
                setReinitLoading(reinitLoadingState)
            // },2000)
        }
        

        

        console.log(item)
    }
    const gridOptions = {
		numberWidthCls : '',
		actionWidthCls : '',
		widthCls : ['1/4','3/4'],
		headers : ['Table'],
		fields : ['table'],
		enableEdit : true,
		editUrl : (item) =>{ return `/DBerences/tts-server/${item.key}`},
		remoteUrl : (item) => `${config.getApiEndpoint()}/api/tts/DBerence?key=${item.key}`,
		callbackFieldsXX : {
			key : (field, value ,item) => {
				return item.desc.length == 0 ? Helper.titleCase(value) : item.desc
			}, 
			value : (field, value, item, index) => {
				return editorFactory(item, index)
			}
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
                <Button loading={reinitLoading[index]} icon="fa fa-cog" caption="Reinit/Truncate" onClick={e => onReinit(item, index)}/>
                </>
	   
			}
		}
	}
    const updateList = () => {
        const newGrid = Object.assign({}, grid)
        setGrid(null)
        setReinitLoading([])
        const records = schema.availables.map(table => {
            return {
                table
            }
        })
        const reinitLoadingState = schema.availables.map(table => false)
        setReinitLoading(reinitLoadingState)

        newGrid.records = records
        setGrid(newGrid)
    }
    useEffect(()=>{
        updateList()        
    },[])

    const exportDb = async()=>{
        let anchor = document.createElement('a')

        const filename = "db.json"
        let results = {records:{}}
        
        store.availables.map(model=>{
            results.records[model] = {}
            store.get(model).getAll().map(rec=>{
                results.records[model][rec.id]=rec 
            })
        })
        let buffer = JSON.stringify(results)
        const objectURL = window.URL.createObjectURL(new Blob([buffer]))
        
        anchor.download = filename
        anchor.href = objectURL
        anchor.click()
        // console.log(store.availables)
    }
	const containerCls = "db-table-manager border mb-2 rounded-xl shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700"
	return(<div className={containerCls}>
        <div className="explorer-toolbar">
            <div className="button-group">
                <Button onClick={e=>exportDb(e)} caption="export" icon="fa fa-file-text"/>
            </div>
        </div>		
        <div className="flex flex-col">
              <div className="-m-1.5 overflow-x-auto">
                <div className="p-1.5 min-w-full inline-block align-middle">
                      <div className="overflow-hidden">
                        <Grid options={gridOptions} records={grid.records} page={grid.page} limit={grid.limit} />
                      </div>
                      <div className="pager-container mt-3">
                          <Pager path="/database" 
                                 page={grid.page} 
                                 total_pages={grid.total_pages} 
                                 limit={grid.limit}
                                 onRefresh={onRefresh}/>

                      </div>
                </div>
              </div>
        </div>		
    </div>) 
}

export default DBTableManager