import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './scripts/components/app.jsx';
import PromptBox from './scripts/components/prompt.jsx';
import WorkoutTable from './scripts/components/WorkoutTable.jsx';
import WorkoutTable2 from './scripts/components/WorkoutTable2.jsx';
import CreateWorkout from './scripts/components/CreateWorkout.jsx';
import StartWorkout from './scripts/components/start_workout/StartWorkout.jsx';
import Home from './scripts/components/Home.jsx';
import Auth from './scripts/components/Auth.js';
import Account from './scripts/components/Account.jsx';
import Stripe from './scripts/components/PaymentForm.jsx';
import injectTapEventPlugin from 'react-tap-event-plugin';
require('./styles/style.css');

injectTapEventPlugin();

function requireAuth(nextState, replace) {
  if (!localStorage.getItem('userToken')) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
};

// // This is the new component for the Workout. This will need to be modified to use React-Router
ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={Home} />
      <Route path="/prompt" component={PromptBox}  onEnter={requireAuth}/>
      <Route path="/workout1" component={WorkoutTable} onEnter={requireAuth}/>
      <Route path="/workout2" component={WorkoutTable2} onEnter={requireAuth}/>
      <Route path="/create" component={CreateWorkout} onEnter={requireAuth}/>
      <Route path="/workout" component={StartWorkout} onEnter={requireAuth}/>
      <Route path="/payments" component={Stripe} onEnter={requireAuth}/> 
    </Route>
  </Router>
), document.getElementById('app'));
