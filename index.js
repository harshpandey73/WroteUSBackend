const express = require('express');
const { createServer } = require('node:http');
const {Server} = require('socket.io');
const cors = require('cors');
const app = express();
const server = createServer(app);

app.use(cors({origin: 'http://localhost:3000'}))

const io = new Server(server, {
    cors: 'http://localhost:5000'
})

io.on("connection", (socket)=>{
    console.log("Server connected");
})
app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

server.listen(5000, () => {
  console.log('server running at http://localhost:5000');
});