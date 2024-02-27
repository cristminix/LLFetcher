import { cls14, cls15, cls16, cls22, cls23, cls24, cls25, cls17, cls18, cls19, cls20, cls27 } from "../../../../components/shared/ux/cls"
import { useLocation, NavLink } from "react-router-dom"

const MenuItem = ({ hasChild, title, path, icon, name, childrens, index, onSelectMenu, parentPath = null }) => {
  const activeTabCls = "flex items-center gap-x-3.5 py-2 px-2.5 bg-gray-100 text-sm text-slate-700 rounded-md dark:bg-gray-900 dark:text-white"
  const activeMenuCls = "bg-gray-100 text-sm text-slate-700 rounded-md dark:bg-gray-900 dark:text-white"
  const inactiveTabCls = cls24 + " text-left hover:bg-gray-100  hover:bg-gray-100 dark:hover:bg-gray-700"
  const linkCls = /* ({ isActive, isPending }) => isActive ? activeTabCls :  */ inactiveTabCls
  const { pathname } = useLocation()

  return (
    <>
      {hasChild ? (
        <>
          <li id={`${name}-accordion`} className={`${cls17} `} key={name}>
            <button type="button" className={`${cls18} ${pathname.match(path) ? activeMenuCls : ""}`}>
              <i className={icon}></i>
              {title}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cls19}
              >
                {" "}
                <path d="m18 15-6-6-6 6"> </path>{" "}
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={cls20}
              >
                {" "}
                <path d="m6 9 6 6 6-6"> </path>{" "}
              </svg>
            </button>
            <div id={`${name}-accordion-sub`} className={`${cls25}`}>
              <ul className={cls22}>
                {Object.keys(childrens).map((key, tindex) => {
                  const item_ = childrens[key]
                  const childrens_ = item_.childItems || {}
                  // console.log(item_)
                  if (item_.hidden) {
                    return null
                  }
                  return (
                    <MenuItem
                      onSelectMenu={(a, b) => onSelectMenu(a, b)}
                      key={key}
                      parentPath={path}
                      childrens={childrens_}
                      name={key}
                      index={index}
                      hasChild={item_.hasChild}
                      title={item_.title}
                      path={item_.path}
                      icon={item_.iconCls}
                    />
                  )
                })}
              </ul>
            </div>
          </li>
        </>
      ) : (
        <>
          <li key={name}>
            <button to={path} className={linkCls} onClick={(e) => onSelectMenu(parentPath, path)}>
              <i className={icon}></i>
              {title}
            </button>{" "}
          </li>
        </>
      )}
    </>
  )
}
const PlaylistMenu = ({ data, store, config, onSelectMenu }) => {
  return (
    <>
      <ul className={cls14}>
        {Object.keys(data).map((key, index) => {
          const item = data[key]
          let childrens = item.childItems || {}
          // console.log(item)
          if (item.hidden) {
            return null
          }
          // const useModel = item.useModel || false
          // if(useModel){
          //     childrens = getChildrenByModel(item)
          //     item.hasChild = Object.keys(childrens).length > 0
          // }
          return (
            <MenuItem
              onSelectMenu={(a, b) => onSelectMenu(a, b)}
              key={index}
              childrens={childrens}
              name={key}
              index={index}
              hasChild={item.hasChild}
              title={item.title}
              path={item.path}
              icon={item.iconCls}
            />
          )
        })}
      </ul>
    </>
  )
}

export default PlaylistMenu
