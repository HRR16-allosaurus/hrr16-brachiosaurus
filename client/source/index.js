import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './scripts/components/app.jsx';
import PromptBox from './scripts/components/prompt.jsx';
import WorkoutTable from './scripts/components/WorkoutTable.jsx';
import WorkoutTable2 from './scripts/components/WorkoutTable2.jsx';
import CreateWorkout from './scripts/components/CreateWorkout.jsx';
import StartWorkout from './scripts/components/start_workout/StartWorkout.jsx';
import Auth from './scripts/components/Auth.jsx';
import Account from './scripts/components/Account.jsx';
import Stripe from './scripts/components/PaymentForm.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
require('./styles/style.css');

injectTapEventPlugin();

// // This is the new component for the Workout. This will need to be modified to use React-Router
ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={CreateWorkout} />
      <Route path="/prompt" component={PromptBox} />
      <Route path="/workout1" component={WorkoutTable} />
      <Route path="/workout2" component={WorkoutTable2} />
      <Route path="/create" component={CreateWorkout} />
      <Route path="/workout" component={StartWorkout} />
      <Route path="/account" component={Account} />
      <Route path="/payments" component={Stripe} /> 
    </Route>
  </Router>
), document.getElementById('app'));
