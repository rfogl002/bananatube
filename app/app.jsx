/*var React = require('react');
var ReactDOM = require('react-dom');*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import Main from 'app/components/Main';
import Home from 'app/components/Home';
import Favorites from 'app/components/Favorites';
import Nav from 'app/components/Nav';

// Load foundation

$(document).foundation();

// Add app.css
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path='/favorites' component={Favorites} />
    </Route>
  </Router>,
  document.getElementById('app')
);
