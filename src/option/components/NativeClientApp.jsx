import { useLoaderData } from "react-router-dom"
import NativeClient from "./native-client-app/NativeClient"
import UserManagement from "./native-client-app/UserManagement"
import YTUpload from "./native-client-app/YTUpload"
import YTUploadTT from "./native-client-app/YTUploadTT"

export async function loader({ params }) {
  const { module, fk, pageNumber } = params
  return { module, pageNumber, fk }
}

const NativeClientApp = ({ store, config }) => {
  const { module, pageNumber, fk } = useLoaderData()

  if (module == "native-client") {
    return <NativeClient store={store} config={config} />
  } else if (module == "user-management") {
    return <UserManagement store={store} config={config} pageNumber={pageNumber} />
  } else if (module == "yt-upload") {
    return <YTUpload store={store} config={config} pageNumber={pageNumber} />
  } else if (module == "yt-upload-tt") {
    return <YTUploadTT store={store} config={config} pageNumber={pageNumber} uploadId={fk} />
  } else return <div className="native-client-app">{module}</div>
}

export default NativeClientApp
