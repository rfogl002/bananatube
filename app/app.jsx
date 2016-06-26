/*var React = require('react');
var ReactDOM = require('react-dom');*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';

// Load foundation

$(document).foundation();

// Add app.css
require('style!css!sass!ApplicationStyles');

ReactDOM.render(
  <p>React Boilerplate 3 Project</p>,
  document.getElementById('app')
);
