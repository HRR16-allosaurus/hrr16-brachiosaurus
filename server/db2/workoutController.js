var db = require('./config.js');
var Workout = require('./workoutModel.js');
var mongoose = require('mongoose');
var _ = require('underscore');


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
  },
  
  updateWorkout: function(req, res) {
    // console.log('backend update being called', req.body)
    var exerciseId = req.body.exercise_id;
    var newExercise = req.body.newExercise;
    var newSet = req.body.newSetAndRep;
    
    Workout.findById(req.body.workout_id, function(err, workout) {
      if(err) {
        console.log(err);
        return;
      }
      var exercise = workout.workouts.id(exerciseId);
      // console.log('@@@@@@@@@@@', exercise);
      exercise.nameOfWorkout = newExercise;
      exercise.setAndRep = newSet;
      // console.log('updated exercise', exercise);
      exercise.save(function(err) {
        if(err) {
          console.log(err);
        }
        res.send(workout);
      })
    })
    
  }
}



















