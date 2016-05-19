/*var React = require('react');
var ReactDOM = require('react-dom');*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import Main from 'Main';
import Timer from 'Timer';
import Countdown from 'Countdown';

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// Add app.css
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Timer} />
      <Route path='/countdown' component={Countdown} />
    </Route>
  </Router>,
  document.getElementById('app')
);
