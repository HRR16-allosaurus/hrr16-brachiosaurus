import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WorkoutTable2 from './WorkoutTable2.jsx';

class Workout2 extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <WorkoutTable2 />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Workout2;
