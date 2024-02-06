#!/usr/local/bin/node
import path from "path"
import express from 'express'
import http from 'http'
import os from 'os'

import bunyan from 'bunyan-sfdx-no-dtrace'
import RequestLogger from 'bunyan-request-logger'
import base64 from 'base-64'
import { DS } from "./api/data-source/index.js"


function isBase64(str) {
    const base64Regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;
    return base64Regex.test(str);
  }
  

const logPath = os.tmpdir() + '/llfetcher-native.log'
const loggerConfig = {
    name: 'llfetcher-native',
    streams: [{
        type: 'rotating-file',
        path: logPath,
        count: 7,
        period: '1d' // Others: 1h, 1w, 1m, 1y. See https://github.com/trentm/node-bunyan#stream-type-rotating-file
    }],
    level: 'debug'
    // format: ':method :url :status-code'
}

const LOG = bunyan.createLogger(loggerConfig)
const HTTP_LOG = RequestLogger(loggerConfig).requestLogger()

const app = express()
const datasource = new DS(LOG)
let ds = null
app.use(HTTP_LOG)

app.get('/:eventName', function(request, response) {

    const delay = request.query.delay
    // On an HTTP request, write stuff to stdout to communicate with Chrome.
    const outputMessage = JSON.stringify(request.params.eventName)
    const buf = Buffer.allocUnsafe(4) // 32 bits.

    buf.writeInt32LE(outputMessage.length, 0) // Use writeInt32BE if you're running on a big-endian architecture.

    function sendMessageToChrome() {
        process.stdout.write(buf)
        process.stdout.write(outputMessage)
        LOG.info('Mengirim pesan di stdout: '
            + buf + outputMessage)
    }

    if (delay) {
        LOG.info('Menunda selama', delay, 'milidetik')
        setTimeout(sendMessageToChrome, delay)
    } else {
        sendMessageToChrome()
    }


    // Return a response immediately
    response.send(outputMessage)
})
LOG.info('Memulai pendengar StayFresh.')
LOG.info('Mendengarkan HTTP/1.1 di port 7700')
LOG.info('Berbicara dengan ekstensi Chrome pada stdin/stdout')

process.stdin.on('readable', async() => {
    // Read input as UTF-8 strings. Note the first 4 bytes contain the
    // message length, so we have to re-cast them into a raw Buffer and then
    // read as an unsigned 32-bit integer.
    process.stdin.setEncoding('utf8')
    var chunk = process.stdin.read(4) // Read the first 4 bytes to get length
    var length = Buffer.from(chunk).readUInt32LE(0) // Convert to integer

    // TODO: What if we don't have all the data yet?
    let message = process.stdin.read(length)
    // while (chunk !== null) {
    //     message += chunk
    //     chunk - process.stdin.read()
    // }
    // if(isBase64(message)){
    //     message = base64.decode(message)
    // }
    try{
        const seed = (new Date()).getTime()
        const moduleImport = await import(/* @vite-ignore */  `./dynamic-module.mjs?rand=${seed}`)
        const {parseMessage} = moduleImport
        parseMessage(message,LOG, datasource) 
    }catch(e){
        // console.error(e)
        LOG.error(e.toString())
    }
    
    LOG.info('Menerima pesan sepanjang '
        + length + ' bytes pada stdin: ' + message)
})

process.stdin.on('end', function() {
    // Note: "close" is not guaranteed to fire. The "end" event will.
    LOG.info('Mendapatkan peristiwa "end" pada stdin. Keluar.'
    )
    process.exit(0) // Exit successfully.
})

process.on('exit', function(code) {
    console.log('Proses keluar dengan kode'
        , code)
    LOG.info('Proses keluar dengan kode'
        , code)
})

process.on('uncaughtException', function(error) {
    console.error('Process got uncaughtException', error)
})

ds = datasource.initialize()
if(ds){
    ds.then(f=>{
        LOG.info('Database connected')
    }).catch(e=>{
        LOG.error('Database not connected')
    })
}else{
    LOG.error('Failed to initialize sqlite database')
}

http.createServer(app).listen(7700)
