import React, { useEffect, useState } from "react"
import DBEditorBoolean from "./db-editor/DBEditorBoolean"
import DBEditorInteger from "./db-editor/DBEditorInteger"
import DBEditorObject from "./db-editor/DBEditorObject"
import DBEditorString from "./db-editor/DBEditorString"

import Pager from "@/components/shared/Pager"
import Grid from "@/components/shared/Grid"
import { makeDelay } from "@/global/fn"
import config from "./config.json"

// export async function loader({ params }) {
//   const page = parseInt(params.pageNumber) || 1;
//   return { page };
// }

let dontRunTwice = true
const delay = makeDelay(256)

const DBExplorer = ({ store, table, page }) => {
  const [model, setModel] = useState(null)
  const [conf, setConf] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")
  // const {page} = useLoaderData()
  // const store = new Store(config)
  const [projectList, setProjectList] = useState([])
  const editorFactoryRefs = []

  const [grid, setGrid] = useState({
    records: [],
    limit: 5,
    page: 1,
    total_pages: 0,
    total_records: 0,
    order_by: "key",
    order_dir: "asc",
  })

  const updateList = async (pageNumber) => {
    let nGrid = {
      records: [],
    }
    setGrid((prevGrid) => {
      return {
        ...prevGrid,
        ...nGrid,
      }
    })
    delay(() => {
      nGrid = {
        records: model[conf.listMethod](),
      }
      setGrid((prevGrid) => {
        return {
          ...prevGrid,
          ...nGrid,
        }
      })
    })
  }

  useEffect(() => {
    if (model) {
      const pageNumber = page ?? 1
      console.log(pageNumber)

      updateList(pageNumber)
    } else {
      setErrorMessage("No Model Set")
    }
  }, [page, model])

  useEffect(() => {
    if (table) {
      setModel(null)
      setConf(null)
      const conf = config.tables[table]
      if (conf) {
        const modelName = conf.model
        const modelSet = store.get(modelName)
        console.log(conf, modelName, modelSet)
        setConf(conf)
        setModel(modelSet)
      } else {
        setErrorMessage(`No config set for ${table} table`)
      }

      // updateList(1)
      console.log(table)
    }
  }, [table])
  // useEffect(()=>{
  //  updateList(1)
  // },[])

  const onRefresh = async (e, setLoading) => {
    setLoading(true)
    await updateList(grid.page)
    setLoading(false)
  }
  const editorFactory = (editor, field, value, item, index, fieldIndex) => {
    if (!editorFactoryRefs[`${index}-${fieldIndex}-${field}`]) {
      editorFactoryRefs[`${index}-${fieldIndex}-${field}`] =
        React.createRef(null)
    }
    const ref = editorFactoryRefs[`${index}-${fieldIndex}-${field}`]
    const components = {
      boolean: (
        <DBEditorBoolean item={item} field={field} value={value} ref={ref} />
      ),
      string: (
        <DBEditorString item={item} field={field} value={value} ref={ref} />
      ),
      object: (
        <DBEditorObject item={item} field={field} value={value} ref={ref} />
      ),
      integer: (
        <DBEditorInteger item={item} field={field} value={value} ref={ref} />
      ),
    }
    // setEditorFactoryRefs(editorFactoryRefs)
    // const editor = item.editor || "string"
    const component = components[editor]
    return component
  }
  const onCancelRow = async (item, index, options, linkCls, gridAction) => {
    options.fields.map((field, fieldIndex) => {
      const editor =
        editorFactoryRefs[`${index}-${fieldIndex}-${field}`].current

      editor.cancelRow()
    })
    gridAction.setState({ editMode: false })
  }
  const onEditRow = async (item, index, options, linkCls, gridAction) => {
    options.fields.map((field, fieldIndex) => {
      const editor =
        editorFactoryRefs[`${index}-${fieldIndex}-${field}`].current
      const editMode = editor.state.editMode

      if (!editMode) {
        editor.editRow()
        // console.log(editor)
      } else {
        editor.saveRow()
      }
    })

    // editor.setGridAction(gridAction)
    const editMode = gridAction.state.editMode
    gridAction.setState({ editMode: !editMode })
  }
  const getLinkButton = () => {
    return (
      <button className={""} onClick={(evt) => onEditRow()}>
        <i className="bi bi-pencil-square"></i> Ubah
      </button>
    )
  }
  const gridOptions = {
    numberWidthCls: "",
    actionWidthCls: "",
    widthCls: ["3/8", "5/8"],
    headers: ["Setting", "Value"],
    fields: ["key", "value"],
    enableEdit: true,
    // editUrl : (item) =>{ return `/DBerences/tts-server/${item.key}`},
    // remoteUrl : (item) => `${config.getApiEndpoint()}/api/tts/DBerence?key=${item.key}`,
    callbackFields: {
      // value: (field, value ,item) => {
      //  return item.desc.length == 0 ? Helper.titleCase(value) : item.desc
      // },
      //  course : (field, value, item, index) => {
      //    console.log(field, value, item, index)
      //    return editorFactory(item, index)
      //  }
    },
    useAutoEditor: true,

    callbackActions: {
      edit: (item, index, options, linkCls, gridAction) => {
        return (
          <>
            {" "}
            <button
              className={linkCls}
              onClick={(evt) =>
                onEditRow(item, index, options, linkCls, gridAction)
              }
            >
              <i className="bi bi-pencil-square"></i>{" "}
              {gridAction.state.editMode ? "Save" : "Edit"}
            </button>
            {gridAction.state.editMode ? (
              <>
                <button
                  className={"ml-2 " + linkCls}
                  onClick={(evt) =>
                    onCancelRow(item, index, options, linkCls, gridAction)
                  }
                >
                  <i className="bi bi-x-circle"></i> Cancel
                </button>
              </>
            ) : (
              ""
            )}
          </>
        )
      },
    },
  }
  const containerCls =
    "border mb-2 rounded-xl shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700"
  if (model) {
    gridOptions.headers = conf.headers
    gridOptions.fields = conf.fields
    gridOptions.editors = conf.editors
    gridOptions.editorFactory = editorFactory
    return (
      <div
        className={containerCls}
        id={`db-table-explorer-${table}`}
        key={`db-table-explorer-${table}`}
      >
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="">
                <Grid
                  options={gridOptions}
                  records={grid.records}
                  page={grid.page}
                  limit={grid.limit}
                />
              </div>
            </div>
          </div>
          <div className="pager-container mt-3">
            <Pager
              path={`/database/${table}`}
              page={grid.page}
              total_pages={grid.total_pages}
              limit={grid.limit}
              onRefresh={onRefresh}
            />
          </div>
        </div>
      </div>
    )
  } else {
    return <>{errorMessage}</>
  }
}
export default DBExplorer
