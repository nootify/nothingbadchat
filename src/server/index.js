require('dotenv').config({ path: '../../.env' });

const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST'],
    // credentials: true,
    // transports: ['websocket', 'polling'],
  },
  // allowEIO3: true,
});

io.on('connection', (socket) => {
  // ...
  io.emit('testEmit', socket.id, 'some data here');
});

io.on('disconnect', (socket) => {
  console.log(`Client with socket id ${socket.id} disconnected`);
});

const port = process.env.SERVER_PORT;
console.log(`Listening on port ${port}`);
httpServer.listen(port);
