const express = require("express");
const app = express();
const cors = require("cors");

// test script
require("./test/test");
// test script

const authRoutes = require("./routes/authRoutes");
const componentLibraryRoutes = require("./routes/componentLibrary");

const { logger } = require("./middlewares/logger");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middel ware
app.use(logger);

app.get("/testing", (req, res) => {
  // res.send("working");
  console.log(Math.round());
});

app.use("/api", authRoutes);
app.use("/api", componentLibraryRoutes);

// if no route match
app.use((req, res, next) => {
  res.send("502 page not found  ");
});

module.exports = app;
