import React, { Component } from 'react';

class PriceBox extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return (
        <div id="PriceBox" className="priceBox">
            {/* Flex that contains elements*/}
            <div id="Price Column 1" className="colorGray col1">
            Price: 
            </div>
            <div id="Price Column 2-4" className="col24">
                <div className="colorRed size-medium">
                    {this.props.stringPrice} <span className={`ifItemPrimeImage amazon-icon`}></span>
                </div>
                <a href="#">FREE Shipping</a> on orders over $25—or get<b> FREE Two-Day Shipping</b> with <a href="#">Amazon Prime</a>
                {/* Stretch: Make a function that Renders a Price Block + Prime Image (if Prime) */}
            </div>
        </div>
          )
    }
}
 
export default PriceBox;