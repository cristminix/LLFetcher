import { useEffect, useState } from "react"
import Breadcrumb from "./Breadcrumb"
import { cls0, cls1, cls2, cls3, cls4, cls5, cls6, cls7, cls8, cls9 } from "../../../components/shared/ux/cls"
const SidebarToggle = ({ store, config }) => {
  const [hideSidebar, setHideSidebar] = useState(true)
  useEffect(() => {
    config.getUiConfig().applyHiddenSidebarStatus(
      setHideSidebar,
      (status) => {
        console.log("setHideSidebar", status)
        setHideSidebar(status)
      },
      "sidebar-toggle"
    )
  }, [])

  const toggleSidebar = (f) => {
    const status = config.getUiConfig().getHiddenSidebarStatus()
    config.getUiConfig().setHiddenSidebarStatus(!status)
  }
  const sidebarTgCls = !hideSidebar ? `${cls1} lg:hidden` : `${cls1}`
  return (
    <>
      {/*<!-- Sidebar Toggle -->*/}
      <div className={`sidebar-toggle ${sidebarTgCls}`}>
        <div className={cls2}>
          {/*<!-- Navigation Toggle -->*/}
          <button
            /*onClick={e=>{toggleSidebar(e)}}*/ type="button"
            data-hs-overlay="#application-sidebar"
            aria-controls="application-sidebar"
            aria-label="Toggle navigation"
            className={cls3}
          >
            <span className={cls4}> Toggle Navigation </span>
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16" className={cls5}>
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              >
                {" "}
              </path>
            </svg>
          </button>
          {/*<!-- End Navigation Toggle -->*/}

          <Breadcrumb />
        </div>
      </div>
      {/*<!-- End Sidebar Toggle -->*/}
    </>
  )
}

export default SidebarToggle
