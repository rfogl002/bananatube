import React from 'react';
import Timer from 'Timer';
import Nav from 'Nav';

var Main = (props) => {
  return (
    <div>
      <Nav />
      <div className='row'>
        <div className='columns small-10 medium-10 large-10 small-centered'>
          <h1 className='page-title'>React Boilerplate App</h1>
          <p>Main.jsx rendered!</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
