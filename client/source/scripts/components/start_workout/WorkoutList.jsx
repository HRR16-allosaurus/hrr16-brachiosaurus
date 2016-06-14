import React from 'react';

export default class WorkoutList extends React.Component {
  
  onWorkoutChange(workout_id) {
    console.log('changed');
    const { changeWorkout } = this.props;
    if(workout_id !== 'null') {
      changeWorkout(workout_id);
    }
  }
  
  render() {
    
    const { workouts } = this.props;
    // console.log('workouts', this.props.workouts);
    return (
      <div style={
        {
          display: "inline-block", 
          width: "25%",
          marginRight: "20px"
        }
      }>
        <form>
          <select 
            className="form-control"
            style={{width: "100%"}}
            ref="workoutSelect" 
            onChange={() => {this.onWorkoutChange(this.refs.workoutSelect.value)}}
          >
            <option value="null"></option>
            {workouts.map( workout => (
              <option value={workout._id} key={workout._id}>{workout.name}</option>
            ))}
          </select>
        </form>  
      </div>
    )
    
    
    
  }
  

}