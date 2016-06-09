import React from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
}
  from 'material-ui/Table';

export default class WorkoutTable extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      fixedHeader: true,
      stripedRows: false,
      showRowHover: false,
      selectable: false,
      multiSelectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true,
      showCheckboxes: false,
      height: '400px',
      tableData: [
        {
          day: 'Monday',
          exercise1: 'Treadmill / 30 minutes',
          exercise2: 'Barbell Bench Press / 3 sets of 10 reps',
          exercise3: 'Dumbbell Fly / 4 sets of 12 reps',
          exercise4: 'Machine Chest Press / 3 sets of 12 reps',
          exercise5: 'Treadmill / 45 minutes',
        },
        {
          day: 'Tuesday',
          exercise1: 'Treadmill / 30 minutes',
          exercise2: 'Machine Lat Pulldown / 4 sets of 10 reps',
          exercise3: 'Dumbbell One Arm Row / 4 sets of 8 reps',
          exercise4: 'Machine Row / 3 sets of 10 reps',
          exercise5: 'Rowing Machine / 30 minutes',
        },
        {
          day: 'Wednesday',
          exercise1: 'Treadmill / 30 minutes',
          exercise2: 'Barbell Squat / 4 sets of 10 reps',
          exercise3: 'Dumbbell Lunge / 4 sets of 12 reps',
          exercise4: 'Machine Leg Press / 4 sets of 15 reps',
          exercise5: 'Seated Biking / 30 minutes',
        },
        {
          day: 'Thursday',
          exercise1: 'Treadmill / 30 minutes',
          exercise2: 'Seated Dumbbell Shoulder Press / 4 sets of 8 reps',
          exercise3: 'Dumbbell Lateral Raise / 4 sets of 10 reps',
          exercise4: 'Machine Shoulder Press / 4 sets of 12 reps',
          exercise5: 'Treadmill / 60 minutes',
        },
        {
          day: 'Friday',
          exercise1: 'Treadmill / 30 minutes',
          exercise2: 'Barbell Curl / 4 sets of 10 reps',
          exercise3: 'Dumbbell Hammer Curl / 4 sets of 12 reps',
          exercise4: 'Barbell Skullcrusher / 4 sets of 10 reps',
          exercise5: 'Cable Rope Pushdown / 4 sets of 12 reps',
        },
        {
          day: 'Saturday',
          exercise1: 'Treadmill / 60 minutes',
          exercise2: 'Seated Biking / 30 minutes',
        },
        {
          day: 'Sunday',
          exercise1: 'Rest',
        },
      ],
    };
  }

  handleToggle(event, toggled) {
    this.setState({
      [event.target.name]: toggled,
    });
  }

  handleChange(event) {
    this.setState({ height: event.target.value });
  }

  componentWillMount() {
    axios.get('/api/workouts/weightloss')
      .then(function (response) {
        console.log(response);
      });
  }

  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          selectable={this.state.selectable}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn
                colSpan="6" tooltip="Super Header"
                style={{ textAlign: 'center' }}
              >
                Weekly Workout Routine
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn tooltip="Day">Day</TableHeaderColumn>
              <TableHeaderColumn tooltip="Exercise">Exercise 1</TableHeaderColumn>
              <TableHeaderColumn tooltip="Exercise">Exercise 2</TableHeaderColumn>
              <TableHeaderColumn tooltip="Exercise">Exercise 3</TableHeaderColumn>
              <TableHeaderColumn tooltip="Exercise">Exercise 4</TableHeaderColumn>
              <TableHeaderColumn tooltip="Exercise">Exercise 5</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={this.state.showCheckboxes}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {this.state.tableData.map((row, index) => (
              <TableRow key={index} selected={row.selected}>
                <TableRowColumn>{row.day}</TableRowColumn>
                <TableRowColumn>{row.exercise1}</TableRowColumn>
                <TableRowColumn>{row.exercise2}</TableRowColumn>
                <TableRowColumn>{row.exercise3}</TableRowColumn>
                <TableRowColumn>{row.exercise4}</TableRowColumn>
                <TableRowColumn>{row.exercise5}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}
