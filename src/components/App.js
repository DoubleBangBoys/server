import React, { Component } from 'react';
import axios from 'axios';


import Title from './Title';
import CustomerReviews from './customerReviews';
import PriceBox from './PriceBox';
import Stock from './Stock';
import ItemDescription from './ItemDescription';

class App extends Component {
  constructor(props) {
    super(props);

    //  sample Data
    this.state = {
      data: [{
        'Brand Name': 'Oxygen',
        'Description 1': 'Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.',
        'Description 2': 'Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.',
        'Description 3': 'Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.',
        'Description 4': 'In hac habitasse platea dictumst. Etiam faucibus cursus urna.',
        'Description 5': 'Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.',
        'Inventory Amount': 0,
        'Is Customer Prime Member?': false,
        // currently Prime Member does nothing. All shows as Prime
        Price: 355,
        ProductKey: 1,
        'Review Total': 6,
        'Shipping Price': 0,
        Title: "Pannewitz's Sedge",
        'Total 1*': 1,
        'Total 2*': 0,
        'Total 3*': null,
        'Total 4*': null,
        'Total 5*': 1,
        'Total Review Stars': 6,
      }],
    };
  }

  componentWillMount() {
    this.serverRequest = axios.get(`http://localhost:4000/products/${this.props.id}`).then((res) => {
      this.setState({
        data: res.data,
      });
    }).catch((err) => {
      throw err;
    });
  }


  getArraysAndRender() {
    const array = [];
    for (let i = 1; i < 6; i += 1) {
      array.push(this.state.data[0][`Description ${i}`]);
    }
    return array;
  }

  /**
   *  Renders average star based on review total/total review stars and floors it.
   */

  averageStars() {
    const round = (number, precision) => {
      const shift = (num, precis, reverseShift) => {
        if (reverseShift) {
          precis = -precis;
        }
        const numArray = (`${num}`).split('e');
        return +(`${numArray[0]}e${numArray[1] ? (+numArray[1] + precision) : precision}`);
      };
      return shift(Math.round(shift(number, precision, false)), precision, true);
    };
    const rounded = round(this.state.data[0]['Total Review Stars'] / (this.state.data[0]['Review Total'] * 5), 1).toString();
    return rounded;
  }

  /**
   *     renders starIcon based on elements.
   *     Stretch goal:  Make it so that it is possible to switch between
   *     high res and low res depending on device/res
   */
  renderStarIcon() {
    const rounded = parseInt(this.averageStars(), 10);
    const rendering = (rounded / 2).toString();
    if (rendering === 0) {
      return '00';
    }
    return rendering;
  }

  /**
   * Renders Price on load from integer to string
   */
  renderedPrice() {
    let cents = this.state.data[0].Price.toString().slice(-2);
    if (cents.length === 1) {
      cents = `0${cents}`;
    }

    const dollars = this.state.data[0].Price.toString().slice(0, -2) || 0;
    const newPrice = `$${dollars}.${cents}`;
    return newPrice;
  }

  /**
   * Renders remaining Inventory
   */
  renderedTotalInventory() {
    if (this.state.data[0]['Inventory Amount'] > 15) {
      return (<div id="inStock" className="colorGreen size-medium"> In Stock. </div>);
    }
    if (this.state.data[0]['Inventory Amount'] < 15 && this.state.data[0]['Inventory Amount'] > 0) {
      return (<div id="inStockQuantityCount" className="colorRed size-medium"> Only {this.state.data[0]['Inventory Amount']} left in stock (more on the way). </div>);
    }
    if (this.state.data[0]['Inventory Amount'] === 0) {
      return (<div id="notInStock" className="colorRed size-medium"> Currently Unavailable </div>);
    }
    return 'lol';
  }

  /** ~~~~~~~~~~~~~~~~~~~~~~~~~~ THIS IS THE UNDER CONSTRUCTION CATS GARBAGE CODE AWAITS
   *
   *      /\_/\              /\_/\               /\_/\
   *    =( °w° )=          =(ˆ ڡ ˆ)=            (っ˘ڡ˘ς)
   *      )   (  //          )   (  //       \\  )   (
   *     (__ __)//          (__ __)//         \\(__ __)
   *
   * ~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!!!!!!!!!! DO MORE WORK HERE
   */

  //  Refactor Description into Array. Do it in Database Query after MVP

  render() {
    return (
      <div className="App">
        <div id="flexBox" className="feature">
          <Title
            brandName={this.state.data[0]['Brand Name']}
            titleName={this.state.data[0].Title}
          />
          <CustomerReviews
            starIcon={this.renderStarIcon()}
            averageStars={this.averageStars()}
            totalStars={this.state.data[0]['Total Review Stars']}
          />

          <PriceBox stringPrice={this.renderedPrice()} />
          <Stock renderInventory={this.renderedTotalInventory()} />
          <ItemDescription array={this.getArraysAndRender()} />

          <div id="Compare With Similar Items">
            <a href="#">Compare with similar items</a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
