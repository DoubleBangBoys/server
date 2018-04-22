import React, { Component } from 'react';

class CustomerReviews extends Component {
    render() { 
        return ( 
            <div id="customerReviews">
                    {/* create a function that creates dynamic Classnames for astar */}
                <div id="averageCustomerReviewImage" className={`icon-star astar-${this.props.starIcon} amazon-icon`} 
                    aria-label={this.props.averageStars} title={`${this.props.averageStars} out of 5 stars`}> 
                </div>
                <div id="iconDropDownHover" className="dropDown amazon-icon"> </div>
                 {/* <div className="ifItemPrimeImage"></div> */}
                <span id="totalReviews" className="fivepxLeft">
                    <a href="#">{this.props.totalStars} customer reviews</a>
                                 {/* Stretch Link to all reviews and a link with all reviews */}
               </span>
            </div>
         )
    }
}
 
export default CustomerReviews;
