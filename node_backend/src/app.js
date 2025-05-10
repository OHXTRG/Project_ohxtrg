const express = require("express");
const app = express();

const authRoutes = require("./routes/authRoutes");
const componentLibraryRoutes = require("./routes/componentLibrary");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/testing", (req, res) => {
  res.send("working");
});

app.use("/api", authRoutes);
app.use("/api", componentLibraryRoutes);

module.exports = app;
