import DB from "./DB"

class Message extends DB {
	table = 'message'
	fields = ["eventName", "data", "target", "callback"]

	get(eventName,target){
		return this.singleQuery({query:{eventName,target}})
	} 
	async set(eventName, data, target, callback = null){
        let message = this.get(eventName,target)
  
        if(!message){
            const id = 0
            message = {id,eventName,data,target,callback}
            message.id = this.db.insert(this.table,message)
            

        }else{
            this.db.update(this.table,{eventName,target},row=>{
            	row.data = data
            	row.callback = callback
            	return row
            })
            message.data = data
            message.callback = callback
        }
        await this.db.commit()
        return message
    }
}

export default Message