import schema from "../../side_menu.json"

import { useEffect, useState } from "react"
import Pager from "../../../components/shared/Pager"
import Grid from "../../../components/shared/Grid"
import Button from "../../../components/shared/ux/Button"
import { formatBytes, slugify } from "../../../global/fn"
import CheckBox from "../../../components/shared/ux/CheckBox"
import { devApiUrl } from "./fn"
// import ModalForm from "./menu-manager/ModalForm"
import jQuery from "jquery"
const inputCls =
  "py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
// console.log(import.meta.env)
import { crc32 } from "crc"
import { niceScrollbarCls } from "../ux/cls"
const createUntitledMenu = () => {
  const idx = crc32(new Date().getTime().toString()).toString(16)
  const title = `Untitled-${idx}`
  const slug = slugify(title)
  const path = `/${slug}`
  const iconCls = "fa fa-cog"
  const parent = null
  const hidden = true
  const dev = true
  const order = 0
  const hasChild = false

  return { title, slug, parent, path, iconCls, hidden, dev, order, hasChild }
}
const MenuForm = ({ data = null, className, hideForm }) => {
  const [title, setTitle] = useState("")
  const [iconCls, setIconCls] = useState("")
  const [path, setPath] = useState("")
  const [order, setOrder] = useState("")
  const [hidden, setHidden] = useState(false)
  const [parent, setParent] = useState(null)
  const [slug, setSlug] = useState("")
  const [dev, setDev] = useState(false)
  const [hasChild, setHasChild] = useState(false)
  const onEdit = (f) => f
  const saveForm = async (f) => {
    let formData = { title, iconCls, path, order, hidden, hasChild, dev, parent, slug }
    // if(formData.dev !== true){
    //     formData.dev = false
    // }
    // console.log(formData)
    // return
    const options = {
      method: "POST", // or 'PUT', 'DELETE', etc.
      headers: {
        "Content-Type": "application/json", // Specify the content type if sending JSON data
        // Add any other headers if needed
      },
      body: JSON.stringify(formData), // Convert data to JSON string if sending JSON data
    }
    // console.log(formData)
    // Make the fetch request
    fetch(devApiUrl("menu/update"), options)
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data
        console.log("Response:", data)
        // hideForm()
        jQuery("#basic-modal-menu-closer").click()
      })
      .catch((error) => {
        // Handle errors
        console.error("Error:", error)
      })
  }

  useEffect(() => {
    if (data) {
      console.log(data)
      const { title, slug, parent, path, iconCls, hidden, dev, order, hasChild } = data
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
  }, [data])

  useEffect(() => {
    HSOverlay.autoInit()
    return () => {
      try {
        document.querySelector("div[data-hs-overlay-backdrop-template]").remove()
      } catch (e) {
        console.error(e)
      }
    }
  }, [])
  return (
    <>
      <button
        id="basic-modal-menu-clicker"
        type="button"
        className="hidden py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        data-hs-overlay="#hs-basic-modal-menu"
      >
        Open modal
      </button>

      <div
        id="hs-basic-modal-menu"
        className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden w-full h-full fixed top-0 start-0 z-[60] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none"
      >
        <div className="hs-overlay-open:opacity-100 hs-overlay-open:duration-500 opacity-0 transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
              <h3 className="font-bold text-gray-800 dark:text-white">{title}</h3>
              <button
                type="button"
                id="basic-modal-menu-closer"
                onClick={(e) => hideForm(e)}
                className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-basic-modal-menu"
              >
                <span className="sr-only">Close</span>
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">
              <form className={"className"}>
                <div className="flex  items-center p-2 px-2">
                  <div className="w-[70px]">
                    <label className="font-bold">Title</label>
                  </div>
                  <div className="flex-grow">
                    <input tabIndex={1} className={inputCls} value={title} onChange={(e) => setTitle(e.target.value)} />
                  </div>
                </div>
                <div className="flex  items-center p-2 px-2">
                  <div className="w-[70px]">
                    <label className="font-bold">Slug</label>
                  </div>
                  <div className="flex-grow">
                    <input tabIndex={2} className={inputCls} value={slug} onChange={(e) => setSlug(e.target.value)} />
                  </div>
                </div>
                <div className="flex  items-center p-2 px-2">
                  <div className="w-[70px]">
                    <label className="font-bold">Path</label>
                  </div>
                  <div className="flex-grow">
                    <input tabIndex={3} className={inputCls} value={path} onChange={(e) => setPath(e.target.value)} />
                  </div>
                </div>

                <div className="flex  items-center p-2 px-2">
                  <div className="w-[70px]">
                    <label className="font-bold">Parent</label>
                  </div>
                  <div className="flex-grow">
                    <input tabIndex={4} className={inputCls} value={parent} onChange={(e) => setParent(e.target.value)} />
                  </div>
                </div>
                <div className="flex  items-center p-2 px-2">
                  <div className="w-[70px]">
                    <label className="font-bold">Order</label>
                  </div>
                  <div className="w-[140px]">
                    <input tabIndex={5} type="number" className={`${inputCls}`} value={order} onChange={(e) => setOrder(e.target.value)} />
                  </div>
                </div>
                <div className="flex  items-center p-2 px-2">
                  <div className="w-[70px]">
                    <label className="font-bold">Icon Cls</label>
                  </div>
                  <div className="flex-grow">
                    <input tabIndex={6} className={inputCls} value={iconCls} onChange={(e) => setIconCls(e.target.value)} />
                  </div>
                </div>
                <div className="flex items-center p-2 px-2">
                  <div>
                    <CheckBox tabIndex={7} label="" checked={hidden} onChange={(checked) => setHidden(checked)} />
                  </div>
                  <div className="w-[70px]">
                    <label className="font-bold">Hidden </label>
                  </div>
                </div>
                <div className="flex items-center p-2 px-2">
                  <div>
                    <CheckBox tabIndex={8} label="" checked={dev} onChange={(checked) => setDev(checked)} />
                  </div>
                  <div className="w-[140px]">
                    <label className="font-bold">Dev Mode</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
              <button
                tabIndex={9}
                onClick={(e) => hideForm(e)}
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-basic-modal-menu"
              >
                Close
              </button>
              <button
                tabIndex={10}
                onClick={(e) => saveForm(e)}
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const MenuManager = ({ store, config }) => {
  const [grid, setGrid] = useState({
    records: [],
    limit: 5,
    page: 1,
    total_pages: 0,
    total_records: 0,
    order_by: "key",
    order_dir: "asc",
  })
  const [formData, setFormData] = useState(null)
  const [showForm, setShowForm] = useState(false)
  const onRefresh = (f) => onReinit()
  const onReinit = async (item, index) => {
    // if(confirm(`The ${item.table} table is going droped, are you sure want to reinit ?`)){
    updateList()
    config.getUiConfig().reloadSidebar()
    // }

    console.log(item)
  }
  const addMenuForm = async (item, index) => {
    let parent = null
    if (item) {
      parent = item.slug
    }
    const defaultMenu = createUntitledMenu()
    defaultMenu.parent = parent
    setFormData(defaultMenu)
    setShowForm(true)

    jQuery("#basic-modal-menu-clicker").click()
    setTimeout(() => {
      jQuery("#hs-basic-modal-menu form input:first").focus()
    }, 1000)
  }
  const editMenuForm = async (item, index) => {
    console.log(item)
    if (typeof item.hidden == "undefined") {
      item.hidden = false
    }
    if (typeof item.dev == "undefined") {
      item.dev = false
    }
    setFormData(item)
    setShowForm(true)
    jQuery("#basic-modal-menu-clicker").click()
    setTimeout(() => {
      jQuery("#hs-basic-modal-menu form input:first").focus()
    }, 1000)
  }
  const deleteMenuForm = async (item, index) => {
    // console.log(item)
    if (confirm(`Are you sure want to delete this menu "${item.title}"`)) {
      if (typeof item.hidden == "undefined") {
        item.hidden = false
      }
      if (typeof item.dev == "undefined") {
        item.dev = false
      }
      const formData = item
      const options = {
        method: "POST", // or 'PUT', 'DELETE', etc.
        headers: {
          "Content-Type": "application/json", // Specify the content type if sending JSON data
          // Add any other headers if needed
        },
        body: JSON.stringify(formData), // Convert data to JSON string if sending JSON data
      }
      // console.log(formData)
      // Make the fetch request
      fetch(devApiUrl("menu/update?delete=true"), options)
        .then((response) => response.json())
        .then((data) => {
          // Handle the response data
          console.log("Response:", data)
          // hideForm()
        })
        .catch((error) => {
          // Handle errors
          console.error("Error:", error)
        })
    }
  }
  const gridOptions = {
    numberWidthCls: "1/8",
    actionWidthCls: "1/8",
    widthCls: ["1/5"],
    headers: ["Title", "Path", "Icon", "Hidden"],
    fields: ["title", "path", "iconCls", "hidden"],
    enableEdit: true,
    // editUrl : (item) =>{ return `/DBerences/tts-server/${item.key}`},
    // remoteUrl : (item) => `${config.getApiEndpoint()}/api/tts/DBerence?key=${item.key}`,
    callbackFields: {
      title: (field, value, item) => {
        // console.log(item)
        return (
          <p className={`ml-${item.level * 2}`}>
            {item.hasChild ? "+" : " "} {value}
          </p>
        )
      },
      // value : (field, value, item, index) => {
      // 	return editorFactory(item, index)
      // }
      iconCls: (field, value, item, index) => {
        return <i className={value}></i>
      },
    },

    callbackActions: {
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
      edit: (item, index, options, linkCls, gridAction) => {
        return (
          <>
            {item.level == 0 ? <Button loading={false} icon="fa fa-plus" caption="Add Child" onClick={(e) => addMenuForm(item, index)} /> : null}
            <Button loading={false} icon="fa fa-edit" caption="Edit" onClick={(e) => editMenuForm(item, index)} />
            {!item.hasChild ? <Button loading={false} icon="fa fa-trash" caption="Delete" onClick={(e) => deleteMenuForm(item, index)} /> : null}
          </>
        )
      },
    },
  }

  const getMenuChilds = (slug) => {
    return schema.links[slug].childItems
  }
  const updateList = async () => {
    const newGrid = Object.assign({}, grid)
    setGrid(null)
    const records = []
    const slugKeys = Object.keys(schema.links)
    let id = 1
    for (const slug of slugKeys) {
      let { title, path, iconCls, hidden, hasChild, order } = schema.links[slug]
      const record = { title, path, iconCls, hidden, hasChild }
      record.id = id
      record.slug = slug
      record.level = 0
      record.order = order
      const childItems = schema.links[slug].childItems
      records.push(record)

      if (typeof childItems === "object") {
        const cslugKeys = Object.keys(childItems)
        for (const cslug of cslugKeys) {
          const crecord = childItems[cslug]
          crecord.slug = cslug
          crecord.level = 1
          crecord.parent = slug
          // crecord.dev
          // console.log(crecord)
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
  useEffect(() => {
    updateList()
  }, [])

  const exportMenu = async () => {
    let anchor = document.createElement("a")

    const filename = "side_menu.json"
    let results = { records: {} }

    store.availables.map((model) => {
      results.records[model] = {}
      try {
        store
          .get(model)
          .getAll()
          .map((rec) => {
            results.records[model][rec.id] = rec
          })
      } catch (e) {
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
  return (
    <div>
      <MenuForm data={formData} className={containerCls} hideForm={(e) => setShowForm(false)} />

      <div className="module-info mb-2">
        <div className="flex  mb-2">
          <div className="align-top relative w-[70px]">
            <i className="bi bi-list-ul block absolute -mt-[18px]" style={{ fontSize: "480%" }}></i>
          </div>
          <div className="">
            <h1 className="text-xl font-semibold">Client Side Menu Manager</h1>
            <p className="text-sm">Manage the sidebar menu of the application</p>
          </div>
        </div>
        <p className="text-sm">
          Modify <code>side_menu.json</code> file Backend using development <code>devApiUrl</code> triggered by <code>npm run dev</code>
        </p>
      </div>
      <div className={`menu-manager ${containerCls}`}>
        <div className="explorer-toolbar">
          <div className="flex gap-2">
            <Button onClick={(e) => exportMenu(e)} caption="Export json" icon="fa fa-file-text" />
            {!showForm ? <Button onClick={(e) => addMenuForm()} icon="fa fa-plus" caption="Add" /> : null}
          </div>
        </div>
        <div className="flex flex-col">
          <div className={`-m-1.5 overflow-x-auto ${niceScrollbarCls}`}>
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="">{grid ? <Grid options={gridOptions} records={grid.records} page={grid.page} limit={grid.limit} /> : ""}</div>
            </div>
          </div>
          <div className="pager-container mt-3">
            {grid ? <Pager path="/database" page={grid.page} total_pages={grid.total_pages} limit={grid.limit} onRefresh={onRefresh} /> : ""}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuManager
