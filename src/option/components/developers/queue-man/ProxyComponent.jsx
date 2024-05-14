import { Component } from "react"

class ProxyComponent extends Component{
    queueManRef = null
    constructor(props){
        super(props)
        this.proxyCallback = props.proxyCallback
    }
    runProxyCallback(fn, args=[]){
        this.proxyCallback(args)
    }
    async triggerQueue(startOrStop){
        if(startOrStop){
            console.log('START QUEUE')
            await this.proxyCallback('startQueue')
        }else{
            console.log('STOP_QUEUE')
            await this.proxyCallback('stopQueue')

        }

    }
    render(){
        return null
    }
}

export default ProxyComponent