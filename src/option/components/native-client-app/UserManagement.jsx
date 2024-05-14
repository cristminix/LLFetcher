// import schema from "../../side_menu.json"

import { useEffect, useState } from "react"
import Pager from "@/components/shared/Pager"
import Grid from "@/components/shared/Grid"
import Button from "@/components/shared/ux/Button"
import { sendMessage } from "@/global/fn/chrome"

const UserManagement = ({ store, config, pageNumber }) => {
  const [grid, setGrid] = useState({
    records: [],
    limit: 5,
    page: 1,
    total_pages: 0,
    total_records: 0,
    order_by: "id",
    order_dir: "asc",
  })
  const [formData, setFormData] = useState(null)
  const [showForm, setShowForm] = useState(false)

  const onRefresh = (f) => updateList()

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

  const runCmd = async (item, idx) => {
    console.log(item, idx)
    setGrid((prevGrid) => {
      return {
        ...prevGrid,
        records: prevGrid.records.map((n_record, n_index) =>
          n_index === idx ? { ...n_record, status: 1, output: "" } : n_record
        ),
      }
    })
    sendMessage(`nm.${item.cmd}`, { idx }, "background", (response) => {
      console.log({ response })
      setGrid((prevGrid) => {
        return {
          ...prevGrid,
          records: prevGrid.records.map((n_record, n_index) =>
            n_index === idx
              ? { ...n_record, status: 2, output: response }
              : n_record
          ),
        }
      })
    })
  }

  const gridOptions = {
    numberWidthCls: "1/8",
    actionWidthCls: "1/8",
    widthCls: ["1/5"],
    headers: [
      /*'ID',*/ "Display Name",
      "Username",
      "Email",
      "First Name",
      "Last Name",
      "Passwd",
      "Avatar Url" /*,'Group ID','Created By','Create Date','Last Updated'*/,
    ],
    fields: [
      /*'id',*/ "displayName",
      "username",
      "email",
      "firstName",
      "lastName",
      "passwd",
      "avatarUrl" /*,'groupId','createdBy','createDate','lastUpdated'*/,
    ],
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
    },

    callbackActions: {
      edit: (item, index, options, linkCls, gridAction) => {
        return (
          <>
            <Button
              loading={false}
              icon="fa fa-edit"
              caption="Edit"
              onClick={(e) => editMenuForm(item, index)}
            />
          </>
        )
      },
    },
  }

  const updateList = async () => {
    const page = parseInt(pageNumber) || 1
    /*const nGrid  = await fetch(`http://localhost:7001/api/cms/users`).then(r=>r.json())
        
        setGrid(prevGrid => {
            return {
               ...prevGrid,
               ...nGrid
            }
        })
        */
    const { limit, order_by, order_dir } = grid
    sendMessage(
      `nm.api.cms.users`,
      { limit, page, order_by, order_dir },
      "background",
      (response) => {
        // console.log({response})
        if (response.output) {
          const nGrid = response.output
          setGrid((prevGrid) => {
            return {
              ...prevGrid,
              ...nGrid,
            }
          })
        }
        /*
            setGrid(prevGrid => {
                return {
                   ...prevGrid,
                    records : prevGrid.records.map((n_record,n_index) =>
                        n_index === idx ? { ...n_record, status:2, output : response } : n_record
                    )
                }
            })
            */
      }
    )
  }
  useEffect(() => {
    updateList()
  }, [pageNumber])

  const containerCls =
    "border mb-2 rounded-xl shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700"
  return (
    <div className="min-h-screen">
      {/* <MenuForm data={formData} className={containerCls} hideForm={e=>setShowForm(false)}/> */}

      {
        // showForm?<MenuForm data={formData} className={containerCls} hideForm={e=>setShowForm(false)}/>:null
      }

      <div className={`user-manager ${containerCls}`}>
        <div className="explorer-toolbar">
          <div className="flex gap-2">
            {/* <Button onClick={e=>exportMenu(e)} caption="Export json" icon="fa fa-file-text"/> */}
            {!showForm ? (
              <Button
                onClick={(e) => addMenuForm()}
                icon="fa fa-plus"
                caption="Add User"
              />
            ) : null}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                {grid ? (
                  <Grid
                    options={gridOptions}
                    records={grid.records}
                    page={grid.page}
                    limit={grid.limit}
                  />
                ) : (
                  ""
                )}
              </div>
              <div className="pager-container mt-3">
                {grid ? (
                  <Pager
                    path="/native-client-app/user-management"
                    page={grid.page}
                    total_pages={grid.total_pages}
                    limit={grid.limit}
                    onRefresh={(e) => onRefresh()}
                  />
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserManagement
