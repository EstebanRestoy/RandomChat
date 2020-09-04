const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const PORT = process.env.PORT || 5000;
const app = express();

const router = require("./router");
const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("New user is here !");

  socket.on("disconnect", () => {
    console.log("An user has left !");
  });
});
app.use(router);
server.listen(PORT, () => console.log(`Server launched on port : ${PORT}`));
