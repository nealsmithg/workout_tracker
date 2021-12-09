const path = require("path");
const express = require("express");
const logger = require("morgan");
const routes = require("./controllers");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

const db = require("./models");

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout");

app.use(routes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
