const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const atob = require("atob");
const io = new Server(server,{
  cors: {
    origin: '*',
  }
});
const sockets = [];
app.use('/node_modules', express.static(__dirname + '/node_modules/'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/log', (req, res) => {
  const data = JSON.parse(atob(req.query.data));
  io.sockets.emit('_message_to_debugger_',data);
});

io.on("connection", (socket) => {
  socket.on("log", (data, callback) => {
    io.sockets.emit('_message_to_debugger_',data);
  });
  // io.sockets.emit('_message_to_debugger_',`Welcome to log-server ${socket.id}`);
});

server.listen(2022, () => {
  console.log('listening on *:2022');
});