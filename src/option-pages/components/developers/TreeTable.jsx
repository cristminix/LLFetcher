import fr from "fetch-retry"
import { useEffect, useRef, useState } from "react"
import { devApiUrl } from "./fn"
import { TreeTable, TreeState } from "cp-react-tree-table"
import "./treeTable.css"
import { inputCls, niceScrollbarCls } from "../ux/cls"
import Button from "../../../components/shared/ux/Button"
import jQuery from "jquery"
import side_menu from "../../side_menu.json"
import Menu from "../../../global/models/Menu"
import { getInputFileContent } from "../../../global/fn"
const mMenu = Menu.getInstance()

const paddingCls = {
  15: "pl-[15px] ",
  30: "pl-[30px] ",
  45: "pl-[45px] ",
}

const TreeTableAppState = ({ lastRow = null }) => {
  return (
    <div className="absolute top-0 start-1/2 -translate-x-1/2">
      <div className="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700" role="alert">
        <div className="p-2 sm:p-4">
          <span>lastRow:{JSON.stringify(lastRow)}</span>
        </div>
      </div>
    </div>
  )
}
const TreeTableApp = ({ config, store }) => {
  const [blockMainContent, setBlockMainContent] = useState(false)

  const [treeMenuData, setTreeMenuData] = useState(TreeState.create([]))
  const [vH, setVh] = useState(260)
  const [lastRow, setLastRow] = useState(null)

  const main = async () => {
    await updateList()
  }
  const exportMenu = async (e) => {
    const menus = await mMenu.getMenuList(100)
    const filename = `menu-${new Date().getTime()}.json`
    let buffer = JSON.stringify(menus, null, 2)
    let objectURL = null
    let anchor = document.createElement("a")

    objectURL = window.URL.createObjectURL(new Blob([buffer]))
    anchor.download = filename

    anchor.href = objectURL
    anchor.click()
    console.log(menus)
  }
  const inputFileImportRef = useRef(null)
  const importMenu = async (e) => {
    setBlockMainContent(true)
    const file = inputFileImportRef.current.files[0]
    const content = await getInputFileContent(file)
    const menus = JSON.parse(content)
    for (const menu of menus) {
      delete menu.id
      console.log(menu)
      const record = await mMenu.insertOrUpdate(menu, "slug")
      for (const child of menu.children) {
        delete child.id
        child.parent = record.id
        const childRecord = await mMenu.insertOrUpdate(child, "slug")
        console.log(childRecord)
      }
    }
    // console.log(menus)
    await updateList()
    config.getUiConfig().reloadSidebar()
    setBlockMainContent(false)
  }
  const addMenuForm = async (item) => {
    console.log(item)
  }
  const editMenuForm = async (item) => {
    console.log(item)
  }
  const deleteMenuForm = async (item) => {
    console.log(item)
  }
  const moveUp = async (row) => {
    // console.log(item)
    // setBlockMainContent(true)
    const ok = await mMenu.moveUp(row.data.id)
    if (ok) {
      updateList()
    }
    // setBlockMainContent(false)
  }
  const moveDown = async (row) => {
    // setBlockMainContent(true)
    const ok = await mMenu.moveDown(row.data.id)
    if (ok) {
      updateList()
    }
    // setBlockMainContent(false)
  }
  const updateList = async () => {
    const menus = await mMenu.getMenuList(100, true)
    const treeMenuData = TreeState.create(menus)
    setTreeMenuData(treeMenuData)

    setTimeout(() => {
      if (lastRow) {
        const { slug } = lastRow
        const $toggleBtn = jQuery(`button.${slug}`)
        $toggleBtn.trigger("click")
      }
    }, 256)
  }

  const handleOnChange2 = (newValue) => {
    console.log(newValue)
    setTreeMenuData(newValue)
  }

  const setAutoViewPortHeight = () => {
    config.getUiConfig().applyResizeEvent((rootSize, windowSize, $root) => {
      const { height } = windowSize
      if (height >= 260) {
        setVh(height)
      }
    }, "MyTreeTable")
  }
  useEffect(() => {
    setAutoViewPortHeight()
    return () => {
      config.getUiConfig().unsetResizeEvent("MyTreeTable")
    }
  }, [])

  useEffect((f) => {
    main()
  }, [])
  const containerCls = "border mb-2 rounded-xl shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700 min-h-screen"

  const showForm = false

  return (
    <div className={`menu-manager ${containerCls}`}>
      {/* <TreeTableAppState lastRow={lastRow} /> */}
      <div className="explorer-toolbar pb-2">
        <div className="flex gap-2 justify-between">
          <div className="flex gap-2">
            <input type="file" ref={inputFileImportRef} className="hidden" onChange={(e) => importMenu(e)} />
            <Button
              onClick={(e) => {
                inputFileImportRef.current.value = ""
                inputFileImportRef.current.click()
              }}
              caption="Import json"
              icon="fa fa-file-text"
            />
            <Button onClick={(e) => exportMenu(e)} caption="Export json" icon="fa fa-file-text" />
          </div>
          {!showForm ? <Button onClick={(e) => addMenuForm()} icon="fa fa-plus" caption="" /> : null}
        </div>
      </div>

      <div className="flex flex-col relative min-h-screen">
        {blockMainContent ? (
          <>
            <div className="absolute top-0 start-0 w-full h-full bg-white/[.5] rounded-lg dark:bg-gray-800/[.4]"></div>

            <div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div
                className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
                role="status"
                aria-label="loading"
              >
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </>
        ) : (
          <div className={`-m-1.5 overflow-x-auto ${niceScrollbarCls}`}>
            <div className="p-1.5 min-w-full inline-block align-middle">
              {treeMenuData.hasData ? (
                <TreeTable config={config} value={treeMenuData} height={vH} onChange={handleOnChange2}>
                  <TreeTable.Column
                    basis="180px"
                    grow="0"
                    renderCell={(row) => {
                      return (
                        <div className={`${paddingCls[row.metadata.depth * 15]} ${row.metadata.hasChildren ? "with-children" : "without-children"}`}>
                          {row.metadata.hasChildren ? (
                            <button
                              className={`p-2 ${row.data.slug}`}
                              onClick={(e) => {
                                console.log(row)
                                setLastRow({ expanded: !row.$state.isExpanded, level: row.data.level, pk: row.data.id, slug: row.data.slug })
                                row.toggleChildren()
                              }}
                            >
                              <i className={`fa fa-${row.$state.isExpanded ? "minus" : "plus"}`} />
                            </button>
                          ) : (
                            ""
                          )}

                          <span>{row.data.title}</span>
                        </div>
                      )
                    }}
                    renderHeaderCell={() => <span>Title</span>}
                  />
                  <TreeTable.Column
                    basis="128px"
                    grow="1"
                    renderCell={(row) => {
                      return <span className="path-cell font-mono">{row.data.path}</span>
                    }}
                    renderHeaderCell={() => <code>Path</code>}
                  />
                  <TreeTable.Column
                    basis="80px"
                    grow="0"
                    renderCell={(row) => {
                      return (
                        <span className="path-iconCls font-mono p-2">
                          <i className={`${row.data.iconCls}`} />
                        </span>
                      )
                    }}
                    renderHeaderCell={() => <span>Icon</span>}
                  />
                  <TreeTable.Column
                    basis="80px"
                    grow="0"
                    renderCell={(row) => {
                      return <span className="path-cell">{row.data.hidden ? "true" : "false"}</span>
                    }}
                    renderHeaderCell={() => <span>Hidden</span>}
                  />
                  <TreeTable.Column
                    renderCell={(row) => {
                      return (
                        <div className="flex gap-2">
                          <Button loading={false} icon="fa fa-chevron-up" title="Move Up" caption="" onClick={(e) => moveUp(row)} />
                          <Button loading={false} icon="fa fa-chevron-down" title="Move Down" caption="" onClick={(e) => moveDown(row)} />

                          {row.data.hasChild ? (
                            <Button loading={false} icon="fa fa-plus" caption="" title="Add Child" onClick={(e) => addMenuForm(row)} />
                          ) : null}
                          <Button loading={false} icon="fa fa-edit" title="Edit" caption="" onClick={(e) => editMenuForm(row)} />
                          {!row.metadata.hasChildren ? (
                            <Button loading={false} icon="fa fa-trash" title="Delete?" caption="" onClick={(e) => deleteMenuForm(row)} />
                          ) : null}
                        </div>
                      )
                    }}
                    renderHeaderCell={() => <span>Action</span>}
                  />
                </TreeTable>
              ) : (
                "No menu data"
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default TreeTableApp
