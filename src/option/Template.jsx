import { useState, useEffect, useRef } from "react"
import Sidebar from "./components/ux/Sidebar"
import SidebarToggle from "./components/ux/SidebarToggle"
import Content from "./components/ux/Content"
import DialogContent from "@/components/shared/ux/DialogContent"

import { cls0 } from "@/components/shared/ux/cls"
const Template = ({ store, config }) => {
  const [hideSidebar, setHideSidebar] = useState(false)
  const dialogContentRef = useRef(null)
  useEffect(() => {
    config.getUiConfig().applyHiddenSidebarStatus(
      setHideSidebar,
      (status) => {
        console.log(status)
        setHideSidebar(status)
      },
      "template"
    )
    window.dialogContentRef = dialogContentRef
  }, [])
  return (
    <>
      <div className={cls0}>
        {/*<!-- ========== MAIN CONTENT ========== -->*/}
        <DialogContent ref={dialogContentRef} />

        <SidebarToggle store={store} config={config} />
        <Sidebar store={store} config={config} />
        <Content store={store} config={config} />

        {/*<!-- ========== END MAIN CONTENT ========== -->*/}
      </div>
    </>
  )
}

export default Template
