import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Auth from './Auth.js'

class App extends React.Component {
  constructor() {
    super();
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    Auth.setupAjax();
    Auth.createLock();
    this.lock = Auth.getLock();
    this.setState({
      idToken: Auth.getIdToken()
    });
  }

  login() {
    var context = this;
    this.lock.show();
  }

  logout() {
    localStorage.removeItem('userToken');
    this.setState({idToken: null});
    history.pushState(null, null, '/');
  }

  //Shows a component or null based upon existence of localstorage token
  showOnAuthentication(component) {
    if(!this.state.idToken){
      return null;
    } else {
      return component;
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <LinkContainer to="/">
              <Navbar.Brand>Pocket Trainer</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/">
              <NavItem eventKey={1}>Home</NavItem>
            </LinkContainer>
            {this.showOnAuthentication(<LinkContainer to="/workout">
              <NavItem eventKey={3}>Workout!</NavItem>
            </LinkContainer>)}
            {this.showOnAuthentication(<LinkContainer to="/payments">
              <NavItem eventKey={2}>Payments</NavItem>
            </LinkContainer>)}
            {this.showOnAuthentication(<LinkContainer to="/prompt">
              <NavItem eventKey={3}>Pre-Made Workout</NavItem>
            </LinkContainer>)}
          </Nav>
          <Nav pullRight>
            { !this.state.idToken ? 
              (<NavItem eventKey={1} onSelect={this.login}>Login</NavItem>) :
              (<NavItem eventKey={1} onSelect={this.logout}>Logout</NavItem>)}
            { !this.state.idToken ? 
              (<NavItem eventKey={2} onSelect={this.login}>Signup</NavItem>) :
              (null)}
          </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
      </MuiThemeProvider>
    );
  };
};

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};

export default App;
