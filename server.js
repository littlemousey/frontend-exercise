const express = require("express");
const http = require("http");
const cors = require("cors");
const data = require("./assets/items.json");

const app = express();

app.use(cors());

app.get("/", function(_req, res, _next) {
  res.json(data);
});

app.post("/", function(_req, res, _next) {
  res.json({ success: true });
});

const port = 3090;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on:", port);
