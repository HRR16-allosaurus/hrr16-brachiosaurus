import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { grey600 } from 'material-ui/styles/colors';
import {Tabs, Tab} from 'material-ui/Tabs';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';
import helpers from './../helpers/helpers.js';
import { Link } from 'react-router';

const styles = {
  paper: {
    height: '80%',
    width: '90%',
    padding: 20,
    margin: 'auto',
    marginTop: 20,
    textAlign: 'left',
    display: 'block',
    color: grey600,
  },
  button: {
    margin: 8
  },
  autocomplete: {
    height: '40px',
    width: '25%',
    marginRight: 5,
  },
  blocks: {
    width: '50%',
    padding: '20px',
    marginBottom: '20px'
  }

};

class CreateWorkout extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  addWorkout() {
    var that = this;
    const session = {
      name: this.refs.name.getValue(),
      workouts: [1, 2, 3].reduce(function(a, c) {
        var workout = {
          nameOfWorkout: that.refs['exercise' + c].getValue(),
          setAndRep: that.refs['sets' + c].getValue()
        }
        a.push(workout);
        return a;
      }, [])
    };
    helpers.postData(session, function(response) {
      console.log('posted');
    })
    this.setState({
      value: ''
    })
  }
  
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <Paper style={styles.paper} zDepth={2}>
        <TextField
          id="text-field-controlled"
          floatingLabelText="Name of Workout"
          value={this.state.value}
          ref="name"
        />
        
        {[1, 2, 3].map( (key) => (
          <Paper style={styles.blocks} key={key}>
            <AutoComplete
              floatingLabelText={"Exercise " + key}
              filter={AutoComplete.caseInsensitiveFilter}
              dataSource={helpers.exercises}
              maxSearchResults={5}
              style={styles.autocomplete}
              ref={"exercise" + key}
            />
            <br />
            <AutoComplete
              floatingLabelText="Sets and Reps"
              filter={AutoComplete.noFilter}
              openOnFocus={true}
              dataSource={helpers.setsAndReps}
              style={styles.autocomplete}
              ref={"sets" + key}
            />
          </Paper>
        ))}
        <Link to="/workout">
          <RaisedButton label="Create" style={styles.button} onClick={ this.addWorkout.bind(this) }/>
        </Link>
      </Paper>
      </MuiThemeProvider>
    )
  }
  
};

export default CreateWorkout;