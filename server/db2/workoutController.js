var db = require('./config.js');
var Workout = require('./workoutModel.js');
var mongoose = require('mongoose');


module.exports = {
  addWorkout: function(req, res) {
    var workout = req.body;
    // console.log('add requested', addWorkout);
    
    new Workout(workout).save(function(err, workout) {
      if(err) {
        res.status(500).send(err);
      } else {
        res.status(201).send('New Workout Added');
      }
    });
  },
  
  getWorkouts: function(req, res) {
    console.log('get requested');
    Workout.find({})
      .exec(function(err, workouts) {
        if(err) {
          console.log(err);
          res.sendStatus(400);
        } else {
          res.status(200).send(workouts);
        }
      })
  }
}