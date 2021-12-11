const app = require("express").Router();
const { Workout } = require("../models");
const db = require("../models");

app.get("/workouts", (req, res) => {
  db.Workout.find({})
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.get("/workouts/range", (req, res) => {
  db.Workout.find({})
    .sort({ day: -1 })
    .limit(7)
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.put("/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(req.params.id, req.body)
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/workouts", (req, res) => {
  db.Workout.create({ req })
    .then((dbWorkouts) => {
      res.json(dbWorkouts);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = app;
