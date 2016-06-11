import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavLink from './NavLink.js'
import Nav from './header.jsx';

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <ul role="nav">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/create">Create Workout</NavLink></li>
          <li><NavLink to="/account">Account</NavLink></li>
        </ul>
        {this.props.children}
      </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};
export default App;
