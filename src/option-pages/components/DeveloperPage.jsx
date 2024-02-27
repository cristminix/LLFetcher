import { useLoaderData } from "react-router-dom"
import VideoPlayer from "./developers/VideoPlayer"
import MenuManager from "./developers/MenuManager"
export async function loader({ params }) {
  const { table, page } = params
  return { table, page }
}

const DeveloperPage = ({ store, config }) => {
  const { table, page } = useLoaderData()

  let viewMode = table ? "explorer" : "manager"
  if (table == "table-manager") {
    viewMode = "manager"
  }

  if (page == "menu-manager") {
    return <MenuManager store={store} config={config} />
  }
  if (page == "video-player") {
    return <VideoPlayer store={store} config={config} />
  }

  return (
    <div className="developer-page">
      {
        // viewMode === 'explorer' ? <DBExplorer store={store} table={table} page={page}/> : ''
      }
      {page}
    </div>
  )
}

export default DeveloperPage
