import React from 'react';
import WorkoutList from './WorkoutList.jsx';
import WorkoutSet from './WorkoutSet.jsx';
import helpers from './../../helpers/helpers.js';
import _ from 'underscore';

export default class StartWorkout extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      workouts: [],
      selectedWorkout: null
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
    console.log(this.state.selectedWorkout)
    if(!this.state.selectedWorkout) {
      return;
    } else {
      return (
        <WorkoutSet 
          workout={this.state.selectedWorkout}
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
  
  render() {
    console.log('hello, start working out');
    
    return (
      <div>
        <WorkoutList 
          workouts={this.state.workouts}
          changeWorkout={this.changeWorkout.bind(this)}
        />
        
        {this.renderWorkouts()}

      </div>
      
    )
  }

}