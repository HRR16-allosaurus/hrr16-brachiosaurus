import React from 'react';
import NavLink from './NavLink.js';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavDropdown from 'react-bootstrap/lib/N'

class App extends React.Component {
  render() {
    return (
      <div>
        <ul role="nav">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/create">Create Workout</NavLink></li>
          <li><NavLink to="/account">Account</NavLink></li>
        </ul>
        {this.props.children}
      </div>
      );
  }
}

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};
export default App;
