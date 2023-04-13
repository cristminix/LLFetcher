const onMessage = (callback) => {
	try{
		chrome.runtime.onMessage.addListener((evt, source) =>{
			callback(evt, source);  
		});
	}catch(e){
		console.log(e)
	}	

}
const MsgEvt = (name, data = null) => {
	return {name, data}
}
const sendMessage = (eventName, data = null, target='content', callback = f => f) => {
	const evt = MsgEvt(eventName, data)
    try{
		if(target === 'content'){
	    	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		        const tab = tabs[0];
		        chrome.tabs.sendMessage(tab.id, evt, callback)
		    })
	    }else{
	    	chrome.runtime.sendMessage(evt,callback);
	    }
    }catch(e){
    	console.log(e)
    }
    
    
}
const konsole = {
	log(...args){
		sendMessage('console.log', args)
	}
}
class Store {
	static getCourseInfo(){

	}
}

export default Store
export {
	onMessage,
	MsgEvt,
	sendMessage,
	konsole
}

