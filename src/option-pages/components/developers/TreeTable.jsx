import fr from "fetch-retry"
import { useEffect, useState } from "react"
import { devApiUrl } from "./fn"
import { TreeTable, TreeState } from "cp-react-tree-table"
import "./treeTable.css"
import { inputCls, niceScrollbarCls } from "../ux/cls"
import Button from "../../../components/shared/ux/Button"
import jQuery from "jquery"
import side_menu from "../../side_menu.json"
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
class MyTreeTable extends TreeTable {
  constructor(props) {
    super(props)
  }
}
const TreeTableApp = ({ config, store }) => {
  const [treeValue, setTreeValue] = useState(TreeState.create(MOCK_DATA))
  const [treeMenuData, setTreeMenuData] = useState(TreeState.create([]))
  const [vH, setVh] = useState(260)

  const getSideMenuChildren = (topMenu) => {
    const { childItems } = topMenu
    const childKeys = Object.keys(childItems)
    const childrens = []
    const height = 32
    for (const key of childKeys) {
      const children = childItems[key]
      const { dev, slug, hidden, order, path, title, iconCls } = children
      const treeItem = {
        data: { dev, slug, hidden, order, path, title, iconCls },
        height,
      }
      childrens.push(treeItem)
    }
    return childrens
  }
  const convertSideMenuToTreeData = (sideMenu) => {
    const topKeys = Object.keys(sideMenu.links)
    const treeData = []
    const height = 32
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
        },
        height,
      }
      let childrens = null
      if (topMenu.hasChild) {
        childrens = getSideMenuChildren(topMenu)
        treeItem.children = childrens
      }
      treeData.push(treeItem)
    }
    return treeData
  }

  const main = () => {
    console.log(side_menu)
    const treeData = convertSideMenuToTreeData(side_menu)
    setTreeMenuData(TreeState.create(treeData))
    console.log(treeData)
  }

  const handleOnChange = (newValue) => {
    setTreeValue(newValue)
  }
  const handleOnChange2 = (newValue) => {
    setTreeMenuData(newValue)
  }
  const renderNameCell = (row) => {
    return <span>{row.data.name}</span>
  }
  const setAutoViewPortHeight = () => {
    config.getUiConfig().applyResizeEvent((rootSize, windowSize, $root) => {
      const { width, height } = windowSize
      if (height >= 260) {
        setVh(height)
      }
    }, "MyTreeTable")
  }
  useEffect(() => {
    setAutoViewPortHeight()
  }, [])

  useEffect(() => {
    console.log(treeMenuData)
    // setAutoViewPortHeight()
  }, [treeMenuData])

  const renderIndexCell = (row) => {
    // const paddingCls = `px-[${(row.metadata.depth + 1) * 15}px] `
    return (
      <div className={`${paddingCls[row.metadata.depth * 15]} ${row.metadata.hasChildren ? "with-children" : "without-children"}`}>
        {row.metadata.hasChildren ? (
          <button
            className="p-2"
            onClick={(e) => {
              console.log(row)
              row.toggleChildren()
            }}
          >
            <i className={`fa fa-${row.$state.isExpanded ? "minus" : "plus"}`} />
          </button>
        ) : (
          ""
        )}

        <span>{row.data.name}</span>
      </div>
    )
  }

  const renderEmployeesCell = (row) => {
    return <span className="employees-cell">{row.data.employees}</span>
  }

  const renderExpensesCell = (row) => {
    return <span className="expenses-cell">{row.data.expenses}</span>
  }

  const renderEditableCell = (row) => {
    return (
      <input
        className={inputCls}
        type="text"
        value={row.data.contact}
        onChange={(event) => {
          row.updateData({
            ...row.data,
            contact: event.target.value,
          })
        }}
      />
    )
  }
  useEffect((f) => {
    main()
  }, [])
  const containerCls = "border mb-2 rounded-xl shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700 min-h-screen"

  const showForm = false

  return (
    <div className={`menu-manager ${containerCls}`}>
      <div className="explorer-toolbar pb-2">
        <div className="flex gap-2">
          <Button onClick={(e) => exportMenu(e)} caption="Export json" icon="fa fa-file-text" />
          {!showForm ? <Button onClick={(e) => addMenuForm()} icon="fa fa-plus" caption="Add" /> : null}
        </div>
      </div>
      <div className="flex flex-col">
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
                            className="p-2"
                            onClick={(e) => {
                              console.log(row)
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
                  basis="250px"
                  grow="1"
                  renderCell={(row) => {
                    return <span className="path-cell font-mono">{row.data.path}</span>
                  }}
                  renderHeaderCell={() => <code>Path</code>}
                />
                <TreeTable.Column
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
                  renderCell={(row) => {
                    return <span className="path-cell">{row.data.hidden}</span>
                  }}
                  renderHeaderCell={() => <span>Hidden</span>}
                />
              </TreeTable>
            ) : (
              "No menu data"
            )}
          </div>
        </div>
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
