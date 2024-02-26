import fr from "fetch-retry"
import { useEffect, useState } from "react"
import { devApiUrl } from "./fn"
import { TreeTable, TreeState } from "cp-react-tree-table"
import "./treeTable.css"
import { inputCls, niceScrollbarCls } from "../ux/cls"
import Button from "../../../components/shared/ux/Button"
import jQuery from "jquery"
import side_menu from "../../side_menu.json"
import Menu from "../../../global/models/Menu"
const mMenu = Menu.getInstance()
function genData() {
  return [
    { data: { name: "Company A", expenses: "60,000", employees: "5", contact: "Nicholas Watson" }, height: 32 },
    { data: { name: "Company B", expenses: "70,000", employees: "5", contact: "Dani Hopkinson" }, height: 32 },
    { data: { name: "Company C", expenses: "50,000", employees: "4", contact: "Jacob Ellery" }, height: 32 },
    { data: { name: "Company D", expenses: "230,000", employees: "9", contact: "Kate Stewart" }, height: 32 },
    { data: { name: "Company E", expenses: "310,000", employees: "8", contact: "Louise Fall" }, height: 32 },
    { data: { name: "Company F", expenses: "110,000", employees: "5", contact: "Owen Thompson" }, height: 32 },
    { data: { name: "Company G", expenses: "250,000", employees: "18", contact: "Fred Wilton" }, height: 32 },
    { data: { name: "Company H", expenses: "180,000", employees: "7", contact: "William Dallas" }, height: 32 },
    {
      data: { name: "Company I", expenses: "105,000", employees: "22", contact: "Makenzie Higgs" },
      children: [
        {
          data: { name: "Department 1", expenses: "75,000", employees: "18", contact: "Florence Carter" },
          children: [
            { data: { name: "Group alpha", expenses: "25,000", employees: "8", contact: "Doug Moss" } },
            { data: { name: "Group beta", expenses: "10,000", employees: "6", contact: "Camila Devonport" } },
            { data: { name: "Group gamma", expenses: "40,000", employees: "4", contact: "Violet Curtis" } },
          ],
        },
        { data: { name: "Department 2", expenses: "30,000", employees: "4", contact: "Selena Rycroft" }, height: 32 },
      ],
    },
    { data: { name: "Company J", expenses: "370,000", employees: "13", contact: "Ron Douglas" }, height: 32 },
    { data: { name: "Company K", expenses: "500,000", employees: "15", contact: "Michael Jacobs" }, height: 32 },
    { data: { name: "Company L", expenses: "230,000", employees: "10", contact: "Stephanie Egerton" }, height: 32 },
    { data: { name: "Company M", expenses: "90,000", employees: "25", contact: "Michael Buckley" }, height: 32 },
    { data: { name: "Company N", expenses: "370,000", employees: "13", contact: "Sabrina Rowlands" }, height: 32 },
    { data: { name: "Company O", expenses: "500,000", employees: "15", contact: "Lana Watt" }, height: 32 },
    { data: { name: "Company P", expenses: "230,000", employees: "10", contact: "Evelynn Calderwood" }, height: 32 },
    { data: { name: "Company Q", expenses: "90,000", employees: "25", contact: "Jade Morley" }, height: 32 },
  ]
}

const MOCK_DATA = genData()
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
  const [treeValue, setTreeValue] = useState(TreeState.create(MOCK_DATA))
  const [treeMenuData, setTreeMenuData] = useState(TreeState.create([]))
  const [vH, setVh] = useState(260)
  const [lastRow, setLastRow] = useState(null)
  const getSideMenuChildren = async (topMenu, record) => {
    const { childItems } = topMenu
    const childKeys = Object.keys(childItems)
    const childrens = []
    const height = 50
    for (const key of childKeys) {
      const children = childItems[key]

      const { dev, hidden, order, path, title, iconCls } = children
      const treeItem = {
        data: { dev: dev ? true : false, slug: key, hidden: hidden ? true : false, order: parseInt(order), path, title, iconCls },
        height,
      }
      treeItem.data.parent = record.id
      treeItem.data.level = 1
      console.log(treeItem.data)
      await mMenu.insertOrUpdate(treeItem.data, "slug")
      childrens.push(treeItem)
    }
    return childrens
  }
  const convertSideMenuToTreeData = async (sideMenu) => {
    const topKeys = Object.keys(sideMenu.links)
    const treeData = []
    const height = 50
    for (const key of topKeys) {
      const topMenu = sideMenu.links[key]
      const slug = key
      const {
        // slug,
        childIconCls,
        childRoutePath,
        dev,
        displayField,
        hasChild,
        hidden,
        iconCls,
        model,
        modelListMethod,
        order,
        path,
        slugField,
        title,
        useModel,
      } = topMenu

      const treeItem = {
        data: {
          slug,
          childIconCls,
          childRoutePath,
          dev: dev ? true : false,
          displayField,
          hasChild: hasChild ? true : false,
          hidden: hidden ? true : false,
          iconCls,
          model,
          modelListMethod,
          order,
          path,
          slugField,
          title,
          useModel: useModel ? true : false,
        },
        height,
      }
      let childrens = null
      const record = await mMenu.insertOrUpdate(treeItem.data, "slug")

      if (topMenu.hasChild) {
        childrens = await getSideMenuChildren(topMenu, record)
        treeItem.children = childrens
      }
      treeData.push(treeItem)
      // insert or update
      console.log(record)
    }
    return treeData
  }

  const arrayToTreeData = (array) => {
    const treeData = []
    const height = 50
    for (const item of array) {
      const treeItem = {
        data: item,
        height,
      }
      treeData.push(treeItem)
    }
    return treeData
  }
  const main = async () => {
    await updateList()
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
    // setBlockMainContent(true)
    const maxRow = 100
    const lists = await mMenu.getList(-1, maxRow)
    const menus = arrayToTreeData(lists.records)
    for (const menu of menus) {
      const subLists = await mMenu.getList(menu.data.id, maxRow)
      const childMenus = arrayToTreeData(subLists.records)
      menu.children = childMenus
    }
    const treeMenuData = TreeState.create(menus)
    setTreeMenuData(treeMenuData)
    // setBlockMainContent(false)

    setTimeout(() => {
      if (lastRow) {
        const { slug } = lastRow
        const $toggleBtn = jQuery(`button.${slug}`)
        $toggleBtn.trigger("click")
      }
    }, 256)
    // TreeState.expandAll(treeMenuData)
    // const rowModel = treeValue.findRowModel(lastRow.model)
    // console.log(rowModel)
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
        <div className="flex gap-2">
          <Button onClick={(e) => exportMenu(e)} caption="Export json" icon="fa fa-file-text" />
          {!showForm ? <Button onClick={(e) => addMenuForm()} icon="fa fa-plus" caption="Add" /> : null}
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
      {/* 
      <div className="flex flex-col">
        <div className={`-m-1.5 overflow-x-auto ${niceScrollbarCls}`}>
          <div className="p-1.5 min-w-full inline-block align-middle">
            <h4 className="font-bold">TreeTable</h4>
            <MyTreeTable config={config} value={treeValue} height={vH} onChange={handleOnChange}>
              <TreeTable.Column basis="180px" grow="0" renderCell={renderIndexCell} renderHeaderCell={() => <span>Name</span>} />
              <TreeTable.Column renderCell={renderEditableCell} renderHeaderCell={() => <span>Contact person</span>} />
              <TreeTable.Column renderCell={renderEmployeesCell} renderHeaderCell={() => <span className="t-right">Employees</span>} />
              <TreeTable.Column renderCell={renderExpensesCell} renderHeaderCell={() => <span className="t-right">Expenses ($)</span>} />
            </MyTreeTable>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default TreeTableApp
