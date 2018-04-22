
import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <span>
        <div id="brandNameInTitle" className="brand">
          <a href="#">{this.props.brandName}</a>
        </div>
        <div id="productNameInTitle" className="Title">
          {this.props.titleName}
        </div>
      </span>
    );
  }
}

export default Title;
