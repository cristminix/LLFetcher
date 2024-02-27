import { cls0, cls1, cls2, cls3, cls4, cls5, cls6, cls7, cls8, cls9 } from "../../../components/shared/ux/cls"
import { useLocation } from "react-router-dom"
const BreadcrumbItem = ({ title, slug }) => {
  return (
    <>
      <div className="flex items-center">
        {title}{" "}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls8}>
          <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {" "}
          </path>
        </svg>{" "}
        {slug}
      </div>
    </>
  )
}
const Breadcrumb = ({}) => {
  const location = useLocation()
  const { hash, pathname, search } = location
  const getRouteDisplayPath = (f) => {
    let paths = pathname.split("/").filter((item) => item !== "")
    const [com, slug] = paths
    let title = ""
    if (com == "manager") {
      title = <BreadcrumbItem title={"Download Manager"} slug={slug} />
    } else {
      title = pathname
    }
    return title
  }
  return (
    <>
      {/*<!-- Breadcrumb -->*/}
      <ol aria-label="Breadcrumb" className={cls6}>
        <li className={cls7}>
          LLFetcher
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={cls8}>
            <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {" "}
            </path>
          </svg>
        </li>
        <li aria-current="page" className={cls9}>
          {getRouteDisplayPath()}
        </li>
      </ol>
      {/*<!-- End Breadcrumb -->*/}{" "}
    </>
  )
}

export default Breadcrumb
