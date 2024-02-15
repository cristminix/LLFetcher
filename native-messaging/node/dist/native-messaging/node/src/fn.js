

function sendMessageToChrome(output, logger) {
    let outputMessage = JSON.stringify(output)
    const buf = Buffer.alloc(4) // 32 bits.
    try{
        buf.writeInt32LE(outputMessage.length, 0) // Use writeInt32BE if you're running on a big-endian architecture.

        process.stdout.write(buf)
        process.stdout.write(outputMessage)
    }catch(e){
        logger.error(e.toString)
    }
    
    logger.info('Mengirim pesan di stdout: '
        + buf + outputMessage)
}
const controllerPrefixMatch = (cmd,ctrl) =>{
    const regex = new RegExp(`^${ctrl.prefix}`)
    return regex.test(cmd)
}

export{
    sendMessageToChrome,
    controllerPrefixMatch   
}