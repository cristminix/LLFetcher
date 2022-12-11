const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const atob = require("atob");
var fs = require("fs");
var SourceMapConsumer = require("source-map").SourceMapConsumer;
var convert = require("convert-source-map");
// var kexec = require("child_process");
var path = require("path");
// var minimist = require("minimist");
require("colors");

const io = new Server(server,{
  cors: {
    origin: '*',
  }
});
const sockets = [];

function getSourceMapInfo(lineInfo){
  let file = lineInfo
  // try{
  //   file = lineInfo.replace(/^file\:\/\//, "");
  // }catch(e){
    
  // };
  
  let dist_dir = '../../chrome_extension/';
  
  file = `${dist_dir}/${file}`;
  
  let match,line,column;
  if (match = file.match(/^(.*?)(\:[0-9]+)(\:[0-9]+|$)/)) {
      file = match[1];
      line = parseInt(match[2].slice(1), 10);
      if (match[3]) column = parseInt(match[3].slice(1), 10);
  
      // console.log(file,line,column);
      // process.exit(0)
  }
  let source = fs.readFileSync(file).toString();
  let converter = convert.fromSource(source);
  // console.log(converter)
  // With link to file name
  // //# sourceMappingURL=filename.map
  // if (!converter) {
  //   converter = convert.fromMapFileSource(source, path.dirname(file));
  // }
  // With link to file name
  // //# sourceMappingURL=filename.map
  if (!converter) {
    // var content = fs.readFileSync(guessFile).toString();
    // converter = convert.fromMapFileSource(source, path.dirname(file));
    converter = convert.fromMapFileSource(source, function (filename) {
        return fs.readFileSync(path.resolve( path.dirname(file), filename), 'utf-8');
    });
  }

  // Just guess
  if (!converter) {
    var guessFile = file.replace(/\.js$/, "") + ".map";
    var mapSource = fs.readFileSync(guessFile).toString();
    converter = convert.fromJSON(mapSource);
  }

  if (!converter || !converter.sourcemap) {
    return null;
  }
  let smc = new SourceMapConsumer(converter.sourcemap);
  let origpos = smc.originalPositionFor({ line: line, column: column });
  let originalSource = null;
  // let preview;
  // try {

  //   originalSource = fs.readFileSync(`${origpos.source}`).toString();
  // } catch (err) {
  //   console.error("Failed to open original source file from", origpos.source, err.code);
  // }
  // if (originalSource) {
  //     preview = originalSource
  //         .split("\n")
  //         .map(function(line, i) {
  //             var linenum = i + 1;
  //             var out = linenum + ": " + line;
  //             if (linenum == origpos.line) out = out.red;
  //             return out;
  //         })
  //         .slice(origpos.line - 4, origpos.line + 4)
  //         .join("\n")
  //         ;
  // }


  return {
    // preview:preview,
    file: origpos.source.replace('../../src/',''),
    line: origpos.line,
    column: origpos.column
  }
}
function parseDebuggerData(data){
  if(typeof data.lineInfo == 'string'){
    const sourcemap= getSourceMapInfo(data.lineInfo);
    delete data.lineInfo;
    delete data.src;
    console.log(`${sourcemap.file}[${sourcemap.line}:${sourcemap.column}]`,data);
    data.sourcemap = sourcemap;
  }
  return data;
}
// const si = getSourceMapInfo('background.js:7299:32');
// console.log(si);
// process.exit(0);
app.use('/node_modules', express.static(__dirname + '/node_modules/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/log', (req, res) => {
  const data = JSON.parse(atob(req.query.data));
  io.sockets.emit('_message_to_debugger_',parseDebuggerData(data));
});

io.on("connection", (socket) => {
  socket.on("log", (data, callback) => {
    io.sockets.emit('_message_to_debugger_',parseDebuggerData(data));
  });
  // io.sockets.emit('_message_to_debugger_',`Welcome to log-server ${socket.id}`);
});

server.listen(2022, () => {
  console.log('listening on *:2022');
});