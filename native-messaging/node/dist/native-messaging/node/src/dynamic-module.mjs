import base64 from 'base-64'
// import {middleware as ytUploadMiddleware} from './api/nm-routes/yt_upload.js'
// import YtUploadRouter from './api/routes/yt-upload'

function unquoteString(str) {
    // Check if the string starts and ends with a quote character
    if ((str.startsWith('"') && str.endsWith('"')) || (str.startsWith("'") && str.endsWith("'"))) {
      // Remove the quotes
      return str.slice(2, -2)
    }
    
    // If the string is not quoted, return it as is
    return str
  }
function bin2String(array) {
  var result = "";
  for (var i = 0; i < array.length; i++) {
    result += String.fromCharCode(parseInt(array[i], 2));
  }
  return result;
}  
function string2Bin(str) {
  var result = [];
  for (var i = 0; i < str.length; i++) {
    result.push(str.charCodeAt(i).toString(2));
  }
  return result;
}
const parseMessage = async(message,LOG, ds)=>{
      
    // try{
    //     const logMsg = await datasource.initialize()
    //     LOG.info(logMsg?'ds ok':'ds failed')

    // }catch(e){
    //     LOG.info(e.toString())
    // }
    // let unquotedMessage = unquoteString(message)
    // let rawMessage = base64.decode(unquteMessage)
    let messageObj = null
    let message2 = message//.replace(/\s/g,'').replace('\"','[').replace('\"',']')
    LOG.info(message2)
    LOG.info("unquotedMessage")
    try{
        const arrObj = JSON.parse(message2)
        const binStr = bin2String(arrObj)
        messageObj = JSON.parse(binStr)

    }catch(e){
        LOG.info(e)
        return null
    }
    // LOG.info(unquteMessage)
    LOG.info(messageObj)
    // LOG.info(messageObj[0])
    // LOG.info("Hello World Changed 333")
    // LOG.info(rawMessage)
    
    function sendMessageToChrome(output) {
        let outputMessage = JSON.stringify(output)
        // outputMessage = JSON.stringify(string2Bin(outputMessage))
        const buf = Buffer.alloc(4) // 32 bits.
        try{
            buf.writeInt32LE(outputMessage.length, 0) // Use writeInt32BE if you're running on a big-endian architecture.

            process.stdout.write(buf)
            process.stdout.write(outputMessage)
        }catch(e){
            LOG.error(e.toString)
        }
        
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
        case 'api.cms.ytupload.delete':
            try{    
                // router = new YtUploadRouter(datasource, true)
                const {pk} = messageObj.data
                const mYtUpload = ds.factory('MYtUpload', true)
                results = await mYtUpload.delete(pk)
                messageObj.output = results
                output = messageObj
            }catch(e){
                messageObj.output = e.toString()
            }
            break 
        case 'api.cms.ytupload.create':
            
            try{    
                const {title,description,video,category,tags,thumbnail} = messageObj.data
                const mYtUpload = ds.factory('MYtUpload', true)
                results = await mYtUpload.create(title,description,video,category,tags,thumbnail)
                messageObj.output = results
                output = messageObj
            }catch(e){
                messageObj.output = e.toString()
            }
        break
        case 'api.cms.ytupload.get':
            
            try{    
                const {pk} = messageObj.data
                const mYtUpload = ds.factory('MYtUpload', true)
                results = await mYtUpload.getByPk(pk)
                messageObj.output = results
                output = messageObj
            }catch(e){
                messageObj.output = e.toString()
            }
        break        
        case 'api.cms.ytupload.update':
            try{
                const {pk, title, description,video,category,tags,thumbnail} = messageObj.data
                let updatedData = {}
                if(title){
                    updatedData.title = title
                }
                if(description){
                    updatedData.description = description
                }
                if(video){
                    updatedData.video = title
                }
                if(category){
                    updatedData.category = category
                }
                if(tags){
                    updatedData.tags = tags
                }
                if(thumbnail){
                    updatedData.thumbnail = thumbnail
                }
                const mYtUpload = ds.factory('MYtUpload', true)
                
                const  ytupload = await mYtUpload.update(pk,updatedData)
                messageObj.output = ytupload
                output = messageObj
            }catch(e){
                messageObj.output = e.toString()
                output = messageObj

            }
        break
        case 'api.cms.ytupload.list':
            try{    
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