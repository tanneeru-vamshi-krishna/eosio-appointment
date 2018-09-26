import socket from './app'
const io = socket.socket

const users = []
io.on('connection', (socket) => {
    users.push(socket)
    console.log('a user connected');
    socket.on('chat', function (msg) {
        users.map((user, index) => {
            user.emit('chatMessage', msg)
        })
    });

    socket.on('disconnect', (socket) => {
        users.map((user, index) => {
            if (socket.id == user.id) {
                users.slice(index, 1)
            }
        })
        console.log('a user disconnected');
    });

    socket.on('message', (socket) => {
        users.map((user, index) => {
            if (socket.id == user.id) {
                users.slice(index, 1)
            }
        })
    });

});