import {createRef} from "react"
function calculateSpeed(loaded,startTime,endTime) {
    //Time taken in seconds
    let timeDuration = (endTime - startTime) / 1000;
    //total bots
    let loadedBits = loaded;
    let speedInBps = (loadedBits / timeDuration).toFixed(2);
    // let speedInKbps = (speedInBps / 1024).toFixed(2);
    // let speedInMbps = (speedInKbps / 1024).toFixed(2);
  
    // bitOutput.innerHTML += `${speedInBps}`;
    // kboutput.innerHTML += `${speedInKbps}`;
    // mboutput.innerHTML += `${speedInMbps}`;

    return speedInBps
}
function formatBytes(bytes) {
    if (bytes === 0) {
      return '0 Bytes';
    }
  
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const formattedValue = parseFloat((bytes / Math.pow(1024, i)).toFixed(2));
  
    return `${formattedValue} ${sizes[i]}`;
  }
async function fetchDownload(url, outputFilename, mime, progressCallback, index) {
    return new Promise((resolve, reject)=>{
        let contentType
        fetch(url)
        .then(response => {

            const contentEncoding = response.headers.get('content-encoding')
            let contentLength = response.headers.get(contentEncoding ? 'x-file-size' : 'content-length')
            contentType = response.headers.get('content-type') || mime
            if (contentLength === null) {
                contentLength = 0
                // throw Error('Response size header unavailable');
            }

            const total = parseInt(contentLength, 10);
            let loaded = 0;
            return new Response(
                new ReadableStream({
                    start(controller) {
                        let lastReadDate = new Date

                        const reader = response.body.getReader();

                        read();
                        
                        function read() {
                            reader.read().then(({done, value}) => {
                                if (done) {
                                    controller.close();
                                    return;
                                }
                                loaded += value.byteLength;
                                const lastLoaded = value.byteLength
                                progressCallback({loaded, total, index, lastReadDate, lastLoaded})
                                lastReadDate = new Date
                                controller.enqueue(value);
                                read();
                            }).catch(error => {
                                console.error(error);
                                controller.error(error)
                            })
                        }
                    }
                })
            );
        })
        .then(response => response.blob())
        .then(blob => {
            // let blobUrl = URL.createObjectURL(blob)
            resolve(blob)
            // player.style.display = 'block';
            // player.type = contentType;
            // player.src = vid;
            // elProgress.innerHTML += "<br /> Press play!";
        })
        .catch(error => {
            reject(error)
            console.error(error)
        })
    })
    
}



const DLQueueManager = ({downloads}) => {
    console.log(downloads)
    const thCls = "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
	const tdCls = "px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200"
	const refs = []
    const downloadItem = async(dl, index)=>{
        console.log(dl)
        // return
        try{
            
            const mime = 'text/plain'
            const blob = await fetchDownload(dl.url, dl.filename, mime, onDlItemProgress, index)
          
            const anchor = document.createElement('a')
            const objectURL = window.URL.createObjectURL(blob)
            anchor.download = dl.filename
            anchor.href = objectURL
            anchor.click()
            
        }catch(e){
            console.error(e)
        }
    }
    const onDlItemProgress = ({loaded, total, index, lastReadDate, lastLoaded}) => {
        const percentageView = Math.round(loaded / total * 100) + '%'
        console.log(formatBytes(loaded),percentageView)
        console.log(`lastLoaded:${lastLoaded}`)
        console.log(`lastReadDate:${lastReadDate}`)
        const speed = formatBytes(calculateSpeed(lastLoaded,lastReadDate,new Date))
        console.log(`speed:${speed}`)
        refs[index].current.value = `${formatBytes(loaded)}/${speed}ps`
    }
    
    return (<><div className="dlqueuemanager">
        <div className="state-tbl flex flex-col mx-auto w-full">
		
		<table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
			<thead>
				<tr>
					<th scope="col" className={thCls}>Filename</th><th className={thCls}>Status</th> <th className={thCls}>Action</th>
				
				</tr>
			</thead>
			<tbody>
                {
                    downloads.map((dl,index)=>{
                        refs[index] = createRef(null)
                        return <tr key={index}>
                            <td className={tdCls}>{dl.filename}</td>
                            <td className={tdCls}>{dl.status}<input type="text" ref={refs[index]}/></td>
                            <td className={tdCls}><button onClick={e=>downloadItem(dl, index)}><i className="fa fa-download"/></button></td>
                        </tr>
                    })
                }
				
            </tbody>
        </table>        
        </div>
    </div>
    </>)
}

export default DLQueueManager
    