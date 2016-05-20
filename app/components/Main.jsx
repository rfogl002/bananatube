import React from 'react';
import Timer from 'Timer';
import Nav from 'Nav';

var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className='row'>
        <div className='columns medium-6 large-4 small-centered'>
          <h1 className='page-title'>React Timer App</h1>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
