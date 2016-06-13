import React from 'react';
import Auth from './Auth.js';
import CreateWorkout from './CreateWorkout.jsx';

class Account extends React.Component {
  render(){
    if(Auth.getIdToken()){
      return <h1>Account</h1>;
    } else {
      return <CreateWorkout />
    }
  };
};

export default Account;