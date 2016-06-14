import axios from 'axios';

const helpers = {
  postData: (data, callback) => {
    // console.log(data)
    axios.post('/new_workout', data)
      .then(function (response) {
        // console.log(response);
        callback(response);
      })
      .catch(function (response) {
        console.log(response);
      });
  },
  
  getWorkout: (callback) => {
    // console.log('executing getWorkout');
    axios.get('/new_workout')
      .then( response => {
        callback(response);
      })
      .catch( response => {
        console.log(response);
      });
  },
  
  updateWorkout: (data, callback) => {
    console.log('helpers, updating database');
    
    axios.put('/new_workout', data)
      .then( resp => {
        callback(resp);
      })
      .catch( resp => {
        console.log(resp);
      })
  },
  
  exercises: ['Ab Crunches','Barbell Curl','Barbell Row','Barbell Squats','Bench Press','Cable Bicep Curl','Cable Crossovers','Cable Rope Pushdown','Cable Seated Low Row','Cable Straight Arm Pulldown','Close Grip Bench Press','Dumbbell Bicep Curl','Dumbbell Fly','Dumbbell Incline Press','Dumbbell Lateral Raise','Dumbbell Lunges','Dumbbell Shoulder Press','Dumbbell Shrugs','Dumbbell Tricep Extensions','Hanging Knee Raise','Hanging Knee Raises','Incline Reverse Crunch','Lying Skullcrusher','Machine Chest Fly','Machine Curl','Machine Lat Pulldown','Machine Leg Curl','Machine Leg Extension','Machine Leg Press','Machine Rear Raise','Machine Should Press','Military Pushups','One-Arm Dumbbell Row','Pull-ups','Rest Day','Seated Arnold Press','Seated Biking','Seated Cable Row','Seated Preacher Curl','Side Plank','Standing Barbell Curl','Standing Barbell Military Press','Standing Tricep Extension','Treadmill Running','Wide Grip Pullup','Wide Grip Pullups'],
  
  setsAndReps: [
    '3 sets of 6 reps',
    '3 sets of 8 reps',
    '3 sets of 10 reps',
    '3 sets of 12 reps',
    '3 sets of 15 reps',
    '4 sets of 6 reps',
    '4 sets of 8 reps',
    '4 sets of 10 reps',
    '4 sets of 12 reps',
    '4 sets of 15 reps', 
    '1 set until failure',
    '30 minutes',
    '45 minutes',
    '60 minutes'
  ]
}

export default helpers;
