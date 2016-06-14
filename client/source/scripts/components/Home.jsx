import React from 'react';
import Auth from './Auth.js';
import { Link } from 'react-router';
import App from './app.jsx';

class Home extends React.Component {
  render(){
    return (
      <div className="container">
      <div className="jumbotron">
        <h1>Pocket Trainer</h1>
        <p className="lead">Signup to see all that Pocket Trainer has to offer!</p>
      </div>
      </div>)
  };
};

export default Home;