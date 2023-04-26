import DownloadQueue,{sendMessage, onMessage} from "./src/background/DownloadQueue"




const main = async() =>{
    const queue = new DownloadQueue()
    await queue.init()

	onMessage(async(evt,source)=>{
        const data = evt.data
        console.log(data)

        if(evt.name.match(/^sw\./)){
            switch(evt.name){
                case 'sw.queue.process':
                    {
                        const {course, fmt} = data

                        queue.setup(course,fmt, true)
                    }
                    
                break
                case 'sw.queue.started':
                    sendMessage('sw.queue.started', queue.started)
                break
                case 'sw.queue.reset':
                    // downloadQueue.main(evt.data)
                    {
                        const {fmt,flag} = data
                        if(!flag){
                            queue.resetQueue()
                            queue.setFmt(fmt)
                            await queue.init(true)
                        }else{
                            queue.started = false
                        }
                        sendMessage('sw.queue.reset', {fmt,flag})

                    }
                    
                break
                case 'sw.queue.course':
                    // downloadQueue.main(evt.data)
                    sendMessage('sw.queue.course', queue.course)
                break  
                case 'sw.queue.fmt':
                    // downloadQueue.main(evt.data)
                    sendMessage('sw.queue.course', queue.fmt)

                break  

            }

        }
	})
}
 main() 