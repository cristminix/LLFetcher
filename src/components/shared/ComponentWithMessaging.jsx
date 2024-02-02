import {Component} from "react"
import  {
	sendMessage
} from "../../global/fn"

class ComponentWithMessaging extends Component{
	async sendMessageAsync(msg, data, target='content'){
		
		return new Promise((resolve, reject)=>{
			if(!chrome){
				reject( `running_in_dev_mode`)
			}
			if(!chrome.runtime){
				reject( `running_in_dev_mode`)
			}
			const commandListener = (evt, source) => {
				// console.log(evt)
				chrome.runtime.onMessage.removeListener(commandListener)
				resolve([evt, source])

			}
			try{
				chrome.runtime.onMessage.addListener(commandListener)

				sendMessage(msg, data, target)

			}catch(e){
				reject(e)
			}
				
		})
	}
	async getFromMessage(msg, data, target){
		const [evt, source] = await this.sendMessageAsync(msg, data, target)
		if(evt.name === msg){
			return evt.data
		}
		return null
	}
	async onMessageCommand(evt, source){

		// if(evt.name === 'cmd.validCoursePageAuto'){
    	// 	this.setState({validCoursePage:evt.data})
		// }
	}
	commandListener = (evt, source) => {
		this.onMessageCommand(evt, source)
	}
	onMessage(){
		if(!chrome){
			return
		}
		if(!chrome.runtime){
			return
		}
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

export default ComponentWithMessaging