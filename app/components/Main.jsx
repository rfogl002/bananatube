import React from 'react';
import Nav from 'app/components/Nav';

var Main = React.createClass({

  render: function() {
    return (

    <div>
      <Nav />
      <div className="row">
        <div className="small-centered columns medium-8 large-8"></div>
          <h1>Main component</h1>
          {this.props.children}
      </div>
    </div>

    );
  }

});

module.exports = Main;
