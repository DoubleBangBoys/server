import React, { Component } from 'react';

class ItemDescription extends Component {
  render() {
    return (
      <div id="ItemDescription">
        <ul>
          {this.props.array.map(param => <li>{param}</li>)}
        </ul>
      </div>
    );
  }
}

export default ItemDescription;

