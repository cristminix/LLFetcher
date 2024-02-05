import base64 from 'base-64'
function unquoteString(str) {
    // Check if the string starts and ends with a quote character
    if ((str.startsWith('"') && str.endsWith('"')) || (str.startsWith("'") && str.endsWith("'"))) {
      // Remove the quotes
      return str.slice(1, -1)
    }
    
    // If the string is not quoted, return it as is
    return str
  }
const parseMessage = (message,LOG)=>{
    let unquteMessage = unquoteString(message)
    let rawMessage = base64.decode(unquteMessage)
    let messageObj = JSON.parse(rawMessage)
    LOG.info(unquteMessage)
    LOG.info(messageObj)
    LOG.info("Hello World Changed 333")
    LOG.info(rawMessage)
    
    function sendMessageToChrome(output) {
        const outputMessage = JSON.stringify(output)
        const buf = new Buffer(4) // 32 bits.
        buf.writeInt32LE(outputMessage.length, 0) // Use writeInt32BE if you're running on a big-endian architecture.

        process.stdout.write(buf)
        process.stdout.write(outputMessage)
        LOG.info('Mengirim pesan di stdout: '
            + buf + outputMessage)
    }
    let output = null
    switch(messageObj.cmd){
        case 'reload':
            break
        case 'custom':
            break
        case 'ping':
            messageObj.output = 'PONG'
            output = messageObj
            break
    }
    sendMessageToChrome(output)

}

export {
    parseMessage
}