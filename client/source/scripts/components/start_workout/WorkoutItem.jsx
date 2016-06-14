import React from 'react';
import Timer from './Timer.jsx';

export default class WorkoutItem extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      finished: false
    }
  }
  
  onModify() {
    this.state.editing = !this.state.editing;
    this.setState({
      editing: this.state.editing
    })
  }
  
  updateWorkoutItem(event) {
    event.preventDefault();
    const { workout_id, exercise, updateWorkout } = this.props;
    const oldExercise = exercise.nameOfWorkout;
    const newExercise = this.refs.exerciseName.value;
    const oldSet = exercise.setAndRep;
    const newSet = this.refs.setName.value;
    // console.log('updating', oldExercise, newExercise, oldSet, newSet);
    
    if(oldExercise !== newExercise || oldSet !== newSet) {
      updateWorkout(workout_id, exercise._id, newExercise, newSet);
    }
    this.setState({
      editing: false
    })
  }
  
  markDone() {
    const { exercise } = this.props;
    const id = exercise._id;
    $('#'+ id).css({
      "text-decoration": "line-through"
    });
  }
  
  renderExercise() {
    const { exercise } = this.props;
    if( !this.state.editing ) {
      return (
        <td>{exercise.nameOfWorkout}</td>
      );
    }
    return (
      <td>
        <input type="text" className="form-control" ref="exerciseName" defaultValue={exercise.nameOfWorkout} />
      </td>
    )
  }
  
  renderSets() {
    const { exercise } = this.props;
    if( !this.state.editing ) {
      return (
        <td>{exercise.setAndRep}</td>
      );
    }
    return (
      <td>
        <input type="text" className="form-control" ref="setName" defaultValue={exercise.setAndRep} />
      </td>      
    )
  }
  
  renderActions() {
    if( !this.state.editing ) {
      return (
        <td>
          <button className="btn btn-default" onClick={this.onModify.bind(this)}>Modify Exercise</button>
          <button className="btn btn-default">Remove Exercise</button>
          <button className="btn btn-success" onClick={this.markDone.bind(this)}>DONE!</button>
        </td>    
      )
    }
    return (
      <td>
        <button className="btn btn-default" onClick={this.updateWorkoutItem.bind(this)}>Add</button>
        <button className="btn btn-default" onClick={this.onModify.bind(this)}>Cancel</button>
      </td>    
    )
  }
  
  render() {
    const { exercise } = this.props;
    return (
      <tr id={exercise._id}>
        { this.renderExercise() }
        { this.renderSets() }
        { this.renderActions() }
      </tr>
    )
  }  
  
}