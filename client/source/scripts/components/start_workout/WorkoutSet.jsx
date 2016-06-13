import React from 'react';

export default class WorkoutSet extends React.Component {
  
  render() {
    
    const { workout } = this.props;
    console.log(this.props.workout);
    return (
      <table 
        className="table" 
        style={{ width: '50%' }}
      >
        <thead>
          <tr>
            <th>Exercise</th>
            <th>Sets and Reps</th>
          </tr>
        </thead>
        
        <tbody>
          {workout.workouts.map( exercise => (
            <tr key={exercise._id}>
              <td>{exercise.nameOfWorkout}</td>
              <td>{exercise.setAndRep}</td>
              <td>
                <button>Modify</button>
                <button>Remove</button>
              </td>            
            </tr>
          ))}

        </tbody>
      </table>
    )
  }  
  
}