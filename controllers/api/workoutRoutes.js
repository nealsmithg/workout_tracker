const express = require("express");
const db = require("../../models");

const app = express();

app.get("/", (req, res) => {
  db.Workout.find({})
    .then((dbWorkouts) => {
      console.log(dbWorkouts);
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = app;
