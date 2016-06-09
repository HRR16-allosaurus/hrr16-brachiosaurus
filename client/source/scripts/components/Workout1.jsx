import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WorkoutTable from './WorkoutTable.jsx';

class Workout extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <WorkoutTable />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Workout;
