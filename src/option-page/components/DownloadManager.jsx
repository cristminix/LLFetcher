export async function loader({ params }) {
    const { slug } = params
    return { slug }
  }

const DownloadManager = ({}) => {
    return (<><div className="download-manager">
        Hello Download Manager
    </div></>)
}

export default DownloadManager
    