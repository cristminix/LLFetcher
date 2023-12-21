import { Component } from "react"
import mime2 from 'mime'
import { formatBytes } from "../../../global/fn"
const getFileHeaders = async (url) => {
    let size = -1
    let status = 0
    let ok = false
    let mime = ''
    let filename=''
    
    try{
        filename = url.split('?')
        if(filename.length > 0){
            filename = filename[0]
            filename = filename.split('/')
            filename=filename[filename.length-1]
        }
    } catch (e) {

    }
    
    try {
      const response = await fetch(url, { method: 'HEAD' })
      status = response.status 
      ok = response.ok
      if (response.ok) {
        // Get the Content-Length header from the response
        const contentLength = response.headers.get('Content-Length')
        mime = response.headers.get('Content-Type')
  
        // Parse the content length as an integer
        const fileSizeInBytes = parseInt(contentLength, 10)
        size = fileSizeInBytes
        // Convert bytes to kilobytes (optional)
        const fileSizeInKb = fileSizeInBytes / 1024
  
        console.log(`File size: ${fileSizeInBytes} bytes (${fileSizeInKb} KB)`)
      } else {
        console.error(`Failed to fetch file size. Status: ${response.status}`)
      }
    } catch (error) {
      console.error('Error fetching file size:', error)
    }
    const ext = mime2.getExtension(mime)
    filename=`${filename}.${ext}`

    return {status,ok,mime,size,filename}
  }
class DownloadWizard extends Component{
    constructor(props){
        super(props)
        this.state = {
            stage : 1,
            filename : 'n.a',
            mime : 'n.a',
            size : 'n.a',
            message:'n.a',
            statusCode: 'n.a',
            url: 'n.a',
        }
    }
    async loadUrl(url){
        let stage = 1
        let getFileHeadersMsg = "Getting file headers"
        let message = `${getFileHeadersMsg}...`
        this.setState({stage,url,message})
        let {size,mime,status,ok,filename} = await getFileHeaders(url)
        // let getFileSizeOk = size > 0
        message = `${getFileHeadersMsg} ${ok? "Ok" : "Fails"}`

        this.setState({size,statusCode:status,mime,message,filename})
    }
    render(){
        const {stage,filename,mime,size,url,statusCode,message} = this.state
        const thCls = "w-[80px] px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase align-top"
        const {className}=this.props
        return <><div className={`border rounded-xl shadow-sm p-6 dark:bg-gray-800 dark:border-gray-700 ${className}`} >
            {
                stage === 1 ? <>
                <div className="flex p-2 flex-col">
                    <div className="flex">
                        <span className={`${thCls}`}>Url</span><span><p title={url} className="w-[500px] text-elipsis overflow-hidden ...">{url}</p></span>
                    </div>
                    <div className="flex">
                        <span className={`${thCls}`}>Status</span><span>{message}</span>
                    </div>
                    <div className="flex">
                        <span className={`${thCls}`}>Status Code</span><span>{statusCode}</span>
                    </div>

                    <div className="flex">
                        <span className={`${thCls}`}>Filename</span><span>{filename}</span>
                    </div>
                    <div className="flex">
                        <span className={`${thCls}`}>Type</span><span>{mime}</span>
                    </div>
                    <div className="flex">
                        <span className={`${thCls}`}>Size</span><span>{formatBytes(size)}</span>
                    </div>
                </div>
                </>:null
            }
        </div>
        </>
    }
}

export default DownloadWizard