import {Component} from "react"
import  {
	sendMessage
} from "./fn"
class BasicPageWithMessaging extends Component{
	async sendMessageAsync(msg, data){
		
		return new Promise((resolve, reject)=>{
			const commandListener = (evt, source) => {
				// console.log(evt)
				chrome.runtime.onMessage.removeListener(commandListener)
				resolve([evt, source])

			}
			try{
				chrome.runtime.onMessage.addListener(commandListener)

				sendMessage(msg, data)

			}catch(e){
				reject(e)
			}
				
		})
	}
	async getFromMessage(msg, data){
		const [evt, source] = await this.sendMessageAsync(msg, data)
		if(evt.name === msg){
			return evt.data
		}
		return null
	}
	onMessageCommand(evt, source){

		// if(evt.name === 'cmd.validCoursePageAuto'){
    	// 	this.setState({validCoursePage:evt.data})
		// }
	}
	commandListener = (evt, source) => {
		this.onMessageCommand(evt, source)
	}
	onMessage(){
		try{
			chrome.runtime.onMessage.removeListener(this.commandListener)
			chrome.runtime.onMessage.addListener(this.commandListener)
		}catch(e){
			console.log(e)
		}	
	
	}
	initMessaging(){
		this.onMessage()
	}
}

export default BasicPageWithMessaging