import { waitForElm } from "./content-fn"
import { onMessage, sendMessage } from "../global/fn"

import crc from "crc"
class ContentScript {
    constructor(){
        this.initController()
    }

    initController(){
        onMessage((evt, source) => {
            switch(evt.name){
                case 'cmd.getCourseInfo':
                    this.onCommand(evt.name)
                break
                case 'cmd.addCourseLegacy':
                    this.onCommand(evt.name, evt.data)
                break
                case 'cmd.getCourseSections':
                    this.onCommand(evt.name, evt.data)
                break
                case 'cmd.getCourseToc':
                    this.onCommand(evt.name, evt.data)
                break
                case 'cmd.getCookie':
                    this.onCommand(evt.name, evt.data)
                break
                case 'cmd.isLogin':
                    this.onCommand(evt.name, evt.data)
                break
                case 'cmd.validCoursePage':
                case 'cmd.validCoursePageAuto':
                    this.onCommand(evt.name)
                break

                case 'console.log':
                    evt.data.map(item => console.log(item))
                break
                
                default:
                    this.onCommand(evt.name, evt.data)
                break
            }
            // console.log(evt, source);
        })

        this.waitForCheckerElm()
    }

    getExecuteBtn(){
        return document.getElementById('exec-button')
    }
    getInputScriptEl(){
        return document.getElementById('input-script')
    }
    getInputScriptCaller(){
        return document.getElementById('input-script-caller')
    }
    setInputScriptCaller(caller){
        return this.getInputScriptCaller().value = caller
    }
    getOutputScriptEl(){
        return document.getElementById('output-script')
    }
    setOutputScriptContent(value){
        this.getOutputScriptEl().value = value
    }
    setInputScriptContent(is){
        this.getInputScriptEl().value = JSON.stringify(is)
    }
    createRandCls(){
		const dtStr = (new Date).getTime().toString()
		return `os-${crc.crc32(dtStr).toString(16)}`
	}
    executeScriptContent(is, callback, caller='popup'){
        try{
            if(!is.ocls){
                is.ocls = this.createRandCls()
            }
            this.setInputScriptCaller(caller)
            this.setInputScriptContent(is)
            this.getExecuteBtn().click()
            this.waitForScriptOutput(is.ocls, callback, caller)
        }catch(e){
            console.error(e)
        }
    }
    async executeTopScript(cmd, param){
        return new Promise((resolve, reject)=>{
            const is = {
                ocls : this.createRandCls(),
                cmd,
                param
            }
            const caller = 'content'
            try{
              
                this.setInputScriptCaller(caller)
                this.setInputScriptContent(is)
                this.getExecuteBtn().click()
                this.waitForScriptOutput(is.ocls, (result)=>{
                    resolve(result)
                }, caller)
            }catch(e){
                console.error(e)
                reject(e)
            }   
        })
    }
    // callContentFn(is, callback, caller){
    //     try{
    //         this.setInputScriptContent(is)
    //         this.getExecuteBtn().click()
    //         this.waitForScriptOutput(is.ocls, callback, caller)
    //     }catch(e){
    //         // console.log(e)
    //     }
    // }
    waitForScriptOutput(ocls, callback, caller= 'popup'){
        waitForElm(`.${ocls}`).then((elm) => {
            const data = JSON.parse(elm.value)
            // if(elm.value.length/1024 > 1000){
            //     setTimeout(()=>{
            //         this.setOutputScriptContent(`{cleared:'to save memory'}`)
            //     },5000)
            // }
            callback(data)
        });
    }
    /*onGetCourseInfo(){
        const ocls = `ocls-${(new Date).getTime()}`
        const is = {
            cmd : 'getCourseInfo',
            ocls
        }
        
        this.executeScriptContent(is, data => {
            // console.log(data)
            sendMessage(`cmd.${is.cmd}`, data)
        })

    }*/
    waitForCheckerElm(){
        waitForElm('.course-checker-last').then(el => {
            // console.log(el)
            
            if(el){
                el.setAttribute('class','_blank')
                setTimeout(()=>{
                    this.onCommand('cmd.validCoursePageAuto')
                    this.waitForCheckerElm()

                },3000)
    
            }
        })
    }
    createRandCls(){
		const dtStr = (new Date).getTime().toString()
		return `os-${crc.crc32(dtStr).toString(16)}`
	}
    onCommand(command, param){
        const cmd = command.replace(/^cmd\./,'')
        const ocls = this.createRandCls()
        const is = {
            cmd, 
            ocls,
            param
        }
        this.executeScriptContent(is, data => {
            // console.log(data)
            sendMessage(`${command}`, data,'popup')
        })
    }

    
}

export default ContentScript