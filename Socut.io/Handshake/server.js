const express = require('express');
const app = express();

const server = app.listen(8000, () =>
    console.log('The server is all fired up on port 8000')
);

const io = require('socket.io')(server, { cors: true });

io.on("connection",socket => {
    console.log(socket.id)
})

io.on("connection", socket => {
    socket.on("event_from_client", data => {
        socket.broadcast.emit("send_data_to_all_other_clients",data)
    })
})