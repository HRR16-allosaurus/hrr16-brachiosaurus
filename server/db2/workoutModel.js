var mongoose = require('mongoose');

var workoutSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  workouts: [{
    nameOfWorkout: String,
    setAndRep: String
  }]
});

var Contact = mongoose.model('Workout', workoutSchema);
module.exports = Contact;


