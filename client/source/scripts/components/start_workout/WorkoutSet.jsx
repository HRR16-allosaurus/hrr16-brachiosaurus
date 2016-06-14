import React from 'react';
import WorkoutItem from './WorkoutItem.jsx'

export default class WorkoutSet extends React.Component {
  
  // constructor() {
  //   super(props);
  //   this.state({
      
  //   })
  // }
  
  render() {
    
    const { workout, updateWorkout } = this.props;
    console.log(this.props.workout);
    return (
      <table 
        className="table" 
        style={
          { width: '80%',
            // marginLeft: '20px'
          }
        }
      >
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Sets and Reps</th>
          </tr>
        </thead>
        
        <tbody>
          {workout.workouts.map( exercise => (
            <WorkoutItem 
              key={exercise._id}
              workout_id={workout._id}
              exercise={exercise}
              updateWorkout={updateWorkout}
            />
          ))}
        </tbody>
      </table>
    )
  }  
  
}