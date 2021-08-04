const express = require('express');
const expressApp = express();
const io = require('socket.io')(3000, {
    //cors enables coomunicated between ports 3000 and 8080
    cors: {
        origin: ['http://localhost:3000'],
    },
});
//enables special admin page/dash. will be useful for testing
const { instrument } = require('@Socket.io/admin-ui');
const server = http.createServer()
server.listen(8080);

//users who are logged in
let usernames = {};

//static list of chatrooms
const rooms = ['room1', 'room2', 'room3'];

io.sockets.on('connections', socket => {
    console.log(socket.id)
})