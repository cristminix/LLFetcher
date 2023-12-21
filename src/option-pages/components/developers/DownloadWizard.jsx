import { Component, createRef } from "react"
import mime2 from 'mime'
import { formatBytes, timeout } from "../../../global/fn"
import JsFileDownloader from 'js-file-downloader'
import ProgressBar from "../../../components/shared/ux/ProgressBar"



const getFileHeaders = async (url,toast=(a,b)=>{a,b}) => {
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
            // if(filename.length == 0){
            //     filename=filename[filename.length-2]

            // }
        }
    } catch (e) {
        console.error(e)
        filename = 'unknown'
        toast(`Couldn't receive filename using default ${filename}`)
    }

    
    
    let tryMethods = ["HEAD","GET"]
    let fetchHeadersOk = false
    let tryMethodIdx = 0
    // let tryMethodCount = 0
    let tryMethodMax = tryMethods.length
    let waitTimeout = 1000
    topLoop:while(tryMethodIdx < tryMethodMax){
        const method = tryMethods[tryMethodIdx]
        console.log(`try method ${method}`)
        let tryCount = 0
        let tryMax = 3
        while(status != 200 && tryCount < tryMax){
            if(tryCount > 0){
                if(status == 401 ){
                    break
                }
                toast(`Waiting for 5 second before next try`,"normal")
                await timeout(waitTimeout)
                waitTimeout += 1000
                toast(`Retry ${tryCount} of ${tryMax} because of http ${status} status code`,'error')
            }
            try {
                const response = await fetch(url, { method })
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
                  fetchHeadersOk = true
                //   console.log(`File size: ${fileSizeInBytes} bytes (${fileSizeInKb} KB)`)
                } else {
                //   console.error(`Failed to fetch file size. Status: ${response.status}`)
                }
            }catch (error) {
                // console.error('Error fetching file size:', error)
            }
            tryCount += 1
            

        }
        
        tryMethodIdx += 1

        if(fetchHeadersOk){
            break
        }
    }
    if(filename.length == 0){
        filename = 'unknown'
    }
    const ext = mime2.getExtension(mime)
    filename=`${filename}.${ext}`

    return {status,ok,mime,size,filename}
  }
class DownloadWizard extends Component{
    progressBarRef = null
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
        this.progressBarRef = createRef(null)
    }

    onDownloadPrgress(event){
        if (!event.lengthComputable) {
            return
        }
        var downloadingPercentage = Math.floor(event.loaded / event.total * 100)
        // console.log(downloadingPercentage)
        const message = `${formatBytes(event.loaded)} of ${formatBytes(event.total)}`
        if(this.progressBarRef.current){
            this.progressBarRef.current.setProgress(downloadingPercentage, message)
        }
        // what to do ...
    }
    async download(url,filename){
        const download = new JsFileDownloader({ 
            url,
            autoStart: false,
            process: e => this.onDownloadPrgress(e),
            filename
        })

        download.start().then(()=>{
        // success 
        })
        .catch((error)=>{
        // handle errors
            console.error(error)
        })
    }
    async loadUrl(url,outputFilename=null){
        if(this.progressBarRef.current){
            this.progressBarRef.current.setProgress(0)
        }
        const {toast} = this.props
        toast("Test Fetching","info")

        let stage = 1
        let getFileHeadersMsg = "Getting file headers"
        let message = `${getFileHeadersMsg}...`
        this.setState({stage,url,message})
        let {size,mime,status,ok,filename} = await getFileHeaders(url,(a,b)=>toast(a,b))
        // let getFileSizeOk = size > 0
        message = `${getFileHeadersMsg} ${ok? "Ok" : "Fails"}`
        if(ok){
            this.setState({size,statusCode:status,mime,message,filename})
            await timeout(256)
            const confirmMsg = `Would you like to download this file ${filename} ?`
            if(confirm(confirmMsg)){
                toast("Download starting","info")                
                await this.download(url,filename)

            }else{
                toast("Download canceled","info")
            }
        }else{
            toast(`Error getting file headers http ${status}`)
        }
        
    }
    render(){
        const {stage,filename,mime,size,url,statusCode,message} = this.state
        const thCls = "w-[120px] px-1 py-1 text-left text-xs font-medium text-gray-500 uppercase align-top"
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
                    <div className="flex">
                        <ProgressBar ref={this.progressBarRef} className="w-full" autoHide={true}/>
                    </div>
                </div>
                </>:null
            }
        </div>
        </>
    }
}

export default DownloadWizard