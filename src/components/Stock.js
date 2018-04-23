import React, { Component } from 'react';

class Stock extends Component {
  render() {
    return (
      <div id="Stock">
        {this.props.renderInventory}
      </div>
    );
  }
}

/* Stretch: If Prime Render <b>Want It Day, ...? </b> Order within 20 hrs 3 mins */

export default Stock;
