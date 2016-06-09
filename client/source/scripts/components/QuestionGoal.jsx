import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios';
import { Link } from 'react-router';

const styleButton = {
  margin: 12,
};


class QuestionGoal extends React.Component {

  handleClickMuscle() {
    this.props.answer.goal = 'Build Muscle';
    this.checkAnswers();
    console.log(this.props.answer);
  }

  handleClickFat() {
    this.props.answer.goal = 'Lose Fat';
    this.checkAnswers();
  }

  checkAnswers() {
    const gender = this.props.answer.gender;
    const goal = this.props.answer.goal;
    const result =  gender === 'Male' && goal === 'Build Muscle' ? 'Send the Hard Workout' :
                    gender === 'Male' && goal === 'Lose Fat' ? 'Send the Normal Workout' :
                    gender === 'Female' && goal === 'Build Muscle' ? 'Send the Easy workout' :
                    'Send the Fat Loss Workout';
    if (result === 'Send the Hard Workout') {
      axios.get('/api/workouts/hard').then(response => console.log(response));
    } else if (result === 'Send the Normal Workout') {
      axios.get('/api/workouts/normal').then(response => console.log(response));
    } else if (result === 'Send the Easy workout') {
      axios.get('/api/workouts/easy').then(response => console.log(response));
    } else if (result === 'Send the Fat Loss Workout') {
      axios.get('/api/workouts/weightloss').then(response => console.log(response));
    }
  }

  render() {
    return (
      <div>
        <h2>What is your goal?</h2>
        <Link to="/workout1">
          <RaisedButton
            onClick={this.handleClickMuscle.bind(this)}
            label="Build Muscle" primary style={styleButton}
          />
        </Link>
        <Link to="/workout2">
          <RaisedButton
            onClick={this.handleClickFat.bind(this)}
            label="Lose Fat" secondary style={styleButton}
          />
        </Link>
      </div>
    );
  }
}

export default QuestionGoal;
