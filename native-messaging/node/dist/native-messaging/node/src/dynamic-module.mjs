import base64 from 'base-64'
// import {middleware as ytUploadMiddleware} from './api/nm-routes/yt_upload.js'
// import YtUploadRouter from './api/routes/yt-upload'

function unquoteString(str) {
    // Check if the string starts and ends with a quote character
    if ((str.startsWith('"') && str.endsWith('"')) || (str.startsWith("'") && str.endsWith("'"))) {
      // Remove the quotes
      return str.slice(1, -1)
    }
    
    // If the string is not quoted, return it as is
    return str
  }
const parseMessage = async(message,LOG, ds)=>{
      
    // try{
    //     const logMsg = await datasource.initialize()
    //     LOG.info(logMsg?'ds ok':'ds failed')

    // }catch(e){
    //     LOG.info(e.toString())
    // }
    let unquteMessage = unquoteString(message)
    let rawMessage = base64.decode(unquteMessage)
    let messageObj = JSON.parse(rawMessage)
    // LOG.info(unquteMessage)
    // LOG.info(messageObj)
    // LOG.info("Hello World Changed 333")
    // LOG.info(rawMessage)
    
    function sendMessageToChrome(output) {
        const outputMessage = JSON.stringify(output)
        const buf = Buffer.alloc(4) // 32 bits.
        buf.writeInt32LE(outputMessage.length, 0) // Use writeInt32BE if you're running on a big-endian architecture.

        process.stdout.write(buf)
        process.stdout.write(outputMessage)
        LOG.info('Mengirim pesan di stdout: '
            + buf + outputMessage)
    }
    let output = null
    let results = null

    switch(messageObj.cmd){
        case 'reload':
            break
        case 'ping':
            messageObj.output = 'PONG'
            output = messageObj
            break
        case 'api.cms.users':
            try{
                const {page,limit,order_by,order_dir} = messageObj.data
                const mUser = ds.factory('MUser', true)
                results = await mUser.getList(page,limit,order_by,order_dir)
                // res.send(results)
                messageObj.output = results
            }catch(e){
                messageObj.output = e.toString()
            }
            output = messageObj

            
            break
        case 'api.cms.ytupload.list':
            try{    
                // router = new YtUploadRouter(datasource, true)
                const {page,limit,order_by,order_dir} = messageObj.data
                const mYtUpload = ds.factory('MYtUpload', true)
                results = await mYtUpload.getList(page,limit,order_by,order_dir)
                messageObj.output = results
                output = messageObj
            }catch(e){
                messageObj.output = e.toString()
            }
            break
    }
    // if(messageObj.cmd.match(/api\.cms\.yt_upload/)){
    //     messageObj.output = ytUploadMiddleware(messageObj, ds)       
    // }
    sendMessageToChrome(output)

}

export {
    parseMessage
}