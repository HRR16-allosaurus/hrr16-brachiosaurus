import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import App from './scripts/components/app.jsx';
import PromptBox from './scripts/components/prompt.jsx';
import Workout from './scripts/components/Workout1.jsx';
import Workout2 from './scripts/components/Workout2.jsx';
require('./styles/style.css');

// // This is the new component for the Workout. This will need to be modified to use React-Router
ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App}>
      <Route path="/" component={PromptBox} />
      <Route path="workout1" component={Workout} />
      <Route path="workout2" component={Workout2} />
    </Route>
  </Router>
), document.getElementById('app'));
