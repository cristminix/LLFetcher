const apiUrl = (path,qs=null) => {
    let dst = path
    if(Array.isArray(path)){
        dst = path.join('/')
    }
    if(qs){
        let querStrings = []
        Object.keys(qs).map((k)=>{
            let v = qs[k]
            querStrings.push(`${k}=${v}`)
        })
        if(querStrings.length>0){
            dst += `?${querStrings.join('&')}`
        }
    }
    return `http://localhost:7700/api/cms/${dst}`
}
import Queue from "../developers/queue-man/Queue"
class MessageQueue {
    queue = null
    running = false
   constructor(){
    this.queue = new Queue()
   }
   
   run(){
    if(!this.running){
        this.running = true
        this.runDelayed()
    }
   }

   async sendMessageAsync(eventName, data, target, callback){
    return new Promise((resolve, reject) => {
        try{
            // console.log(eventName, data, target)
            sendMessage(eventName, data, target, response=>{
                if(typeof callback == 'function'){
                    callback(response)
                }
                resolve(response)
            })
        }catch(e){
            resolve(e)
        }
        

    })
   }
   async runDelayed(){
    const emptyQueue = this.queue.isEmpty()
    console.log(emptyQueue)
    while(!emptyQueue){
        const message = this.queue.dequeue()
        const {eventName, data, target, callback} = message
        await this.sendMessageAsync(eventName, data, target, callback)
    }
    this.running = false
   }
   enqueue(queue){
    this.queue.enqueue(queue)
    
   }
   sendMessage(eventName, data, target, callback) {
        const messageId = (new Date).getTime().toString()

        const queue = {messageId, eventName, data, target, callback}
        this.enqueue(queue)
        this.run()
    }
}
const messageQueue = new MessageQueue()
export {
    apiUrl
}