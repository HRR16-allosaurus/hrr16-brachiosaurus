import React from 'react';
import WorkoutList from './WorkoutList.jsx';
import WorkoutSet from './WorkoutSet.jsx';
import Timer from './Timer.jsx';
import helpers from './../../helpers/helpers.js';
import _ from 'underscore';

export default class StartWorkout extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      workouts: [],
      selectedWorkout: null,
      finishWorkout: false
      // timer: 
    }
  }
  
  componentDidMount() {
    // console.log('called');
    helpers.getWorkout( (response) => {
      // console.log(response.data);
      this.setState({
        workouts: response.data
      });
    });
  }
  
  renderWorkouts() {
    // console.log(this.state.selectedWorkout)
    if(!this.state.selectedWorkout) {
      return;
    } else {
      return (
        <WorkoutSet 
          workout={this.state.selectedWorkout}
          updateWorkout={this.updateWorkout.bind(this)}
        />
      )
    }
  }
  
  changeWorkout(workout_id) {
    const workout = _.find(this.state.workouts, workout => workout._id === workout_id);
    this.setState({
      selectedWorkout: workout
    });
  }
  
  updateWorkout(workout_id, exercise_id, newExercise, newSetAndRep) {
    // console.log('updating', workout_id, exercise_id, newExercise, newSetAndRep);
    const reqBody = {
      workout_id,
      exercise_id,
      newExercise,
      newSetAndRep
    };
    helpers.updateWorkout(reqBody, (resp) => {
      // console.log(resp);
      this.setState({
        selectedWorkout: resp.data
      })
      helpers.getWorkout( (resp) => {
        this.setState({
          workouts: resp.data,
        });
      });
    })   
  }
  
  countFinishedExercise() {
      
  }
  
  render() {
    // console.log('hello, start working out');
    
    return (
      <div className='container'
        style={
          {
            margin: "auto",
            padding: "20px",
            position: "relative"
          }
        }
      >
        <WorkoutList 
          workouts={this.state.workouts}
          changeWorkout={this.changeWorkout.bind(this)}
          countFinishedExercise={this.countFinishedExercise.bind(this)}
        />
        <Timer />
        
        {this.renderWorkouts()}

      </div>
      
    )
  }

}
