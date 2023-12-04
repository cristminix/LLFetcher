import { waitForElm } from "./content-fn"
import { onMessage, sendMessage } from "../global/fn"
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
    getOutputScriptEl(){
        return document.getElementById('output-script')
    }
    setInputScriptContent(is){
        this.getInputScriptEl().value = JSON.stringify(is)
    }
    executeScriptContent(is, callback){
        try{
            this.setInputScriptContent(is)
            this.getExecuteBtn().click()
            this.waitForScriptOutput(is.ocls, callback)
        }catch(e){
            // console.log(e)
        }
        
        
    }
    waitForScriptOutput(ocls, callback){
        waitForElm(`.${ocls}`).then((elm) => {
            const data = JSON.parse(elm.value)
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

    onCommand(command, param){
        const cmd = command.replace(/^cmd\./,'')
        const ocls = `ocls-${(new Date).getTime()}`
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