const express = require("express");
const app = require("./app");
const http = require("http");
const io = require("socket.io");
const mongoDb = require("./db/connect_mongodb");
const server = http.createServer(app);
const environment = process.env.NODE_ENV;
console.log(environment, "environment");
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "..", `.env.${environment}`),
});

io(server);

const start = async () => {
  try {
    console.log(process.env.DB_URL_LIVE, "db url***********");
    mongoDb(process.env.DB_URL_LIVE);
    console.log("db connected");
    server.listen(process.env.PORT, () =>
      console.log("server is listening to port 8000")
    );
  } catch (error) {
    console.log("error while connection" + error.message);
  }
};

start();
