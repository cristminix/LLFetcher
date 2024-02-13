
import {
    // requireModule,
    sendMessageToChrome,
    controllerPrefixMatch   
} from "./fn.js"

import ytuploadCtl from "./api/nm-routes/ytupload.js"
import userCtl from "./api/nm-routes/user.js"

const parseMessage = async(message,logger, ds)=>{
   
    let oMsg = null
    let output = 'n.a'
    try{
        oMsg = JSON.parse(message)


    }catch(e){
        logger.info(e)
    }
    if(oMsg){
        logger.info(oMsg)
        const {cmd,data} = oMsg
        if(controllerPrefixMatch(cmd,ytuploadCtl)){
            output = await ytuploadCtl.controller(cmd,data,ds,logger)
        }
        else if(controllerPrefixMatch(cmd,userCtl)){
            output = await userCtl.controller(cmd,data,ds,logger)
        }else if(cmd === 'ping'){
            output = 'pong'
        }else if(cmd === 'send_cookies'){
            output = 'cookies_sent'
        }else{
            output=`unknown command: ${cmd}`
        }
    }
    oMsg.output = output
    delete(oMsg.data)
    sendMessageToChrome(oMsg, logger)
}

export {
    parseMessage
}