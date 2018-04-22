import React, { Component } from 'react';
import axios from 'axios';


import Title from './Title';
import CustomerReviews from './customerReviews';
import PriceBox from './PriceBox.js';
import Stock from './Stock';
import ItemDescription from './ItemDescription';

class App extends Component {
  constructor(props) {
    super(props);
    //sample Data
    this.state = {
      data: [{
        "Brand Name": "Oxygen",
        "Description 1": "Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
        "Description 2": "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
        "Description 3": "Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
        "Description 4": "In hac habitasse platea dictumst. Etiam faucibus cursus urna.",
        "Description 5": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
        "Inventory Amount": 0, 
        "Is Customer Prime Member?": false,
        // currently Prime Member does nothing. All shows as Prime
        "Price": 355,
        "ProductKey": 1,
        "Review Total": 1,
        "Shipping Price": 0,
        "Title": "Pannewitz's Sedge",
        "Total 1*": 1,
        "Total 2*": null,
        "Total 3*": null,
        "Total 4*": null,
        "Total 5*": null,
        "Total Review Stars": 1
      }]
    }
    
  }

  componentWillMount(){
    this.serverRequest = axios.get(`http://localhost:4000/products/75`).then((res)=> 
      this.setState({
        data: res.data
      })
    ).catch((err) => {
      console.log(err)
    })
  }

  
  /**
   *  Renders average star based on review total/total review stars and floors it.
   */
    
  averageStars = () => {
    function round(number, precision) {
      var shift = function (number, precision, reverseShift) {
        if (reverseShift) {
          precision = -precision;
        }  
        var numArray = ("" + number).split("e");
        return +(numArray[0] + "e" + (numArray[1] ? (+numArray[1] + precision) : precision));
      };
      return shift(Math.round(shift(number, precision, false)), precision, true);
    }
    
    let rounded = round(this.state.data[0]["Total Review Stars"] / this.state.data[0]["Review Total"], 1).toString()
    if(rounded.length === 1){
      rounded += ".0"
    }
    return rounded
  }

  /**
   *     renders starIcon based on elements.
   *     Stretch goal:  Make it so that it is possible to switch between high res and low res depending on device/res
   */
  renderStarIcon = () => {
    let rounded = parseInt(this.averageStars());
    if(rounded < .5 && rounded > 0){
      return "05"
    }
    if(rounded > .5 && rounded <= 1.2){
      return "10"
    }
    if(rounded > 1.3 && rounded <= 1.7){
      return "15"
    }
    if(rounded > 1.8 && rounded < 2.2){
      return "20"
    }
    if(rounded > 2.2 && rounded <= 2.7){
      return "25"
    }
    if(rounded > 2.7 && rounded <= 3.2){
      return "30"
    }
    if(rounded > 3.2 && rounded <= 3.7){
      return "35"
    }
    if(rounded > 3.7 && rounded <= 4.2){
      return "40"
    }
    if(rounded > 4.2 && rounded <= 4.7){
      return "45"
    }
    if(rounded > 4.7) {
      return "50"
    }
    return "00"
  }

  /**
   * Renders Price on load from integer to string 
   */
  renderedPrice = () => {
    let cents = this.state.data[0]["Price"].toString().slice(-2)
    if(cents.length === 1){
      cents = "0" + cents
    }
    let dollars = this.state.data[0]["Price"].toString().slice(0, -2) || 0 
    let newPrice = `$${dollars}.${cents}`
    return newPrice
  }

  /**
   * Renders remaining Inventory
   */
  renderedTotalInventory = () => {
    if (this.state.data[0]["Inventory Amount"] > 15){
      return  (<div id="inStock" className="colorGreen size-medium"> In Stock.
                </div>
            )
    }
    if (this.state.data[0]["Inventory Amount"] < 15 && this.state.data[0]["Inventory Amount"] > 0){
      return  (<div id="inStockQuantityCount" className="colorRed size-medium"> Only {this.state.data[0]["Inventory Amount"]} left in stock (more on the way).
                </div>
            )
    }
    if (this.state.data[0]["Inventory Amount"] === 0){
      return  (<div id="notInStock" className="colorRed size-medium"> Currently Unavailable
                </div>
            )
    }
  }

  /**~~~~~~~~~~~~~~~~~~~~~~~~~~ THIS IS THE UNDER CONSTRUCTION CATS GARBAGE CODE AWAITS
   * 
   *      /\_/\              /\_/\               /\_/\    
   *    =( °w° )=          =(ˆ ڡ ˆ)=            (っ˘ڡ˘ς) 
   *      )   (  //          )   (  //       \\  )   (   
   *     (__ __)//          (__ __)//         \\(__ __) 
   * 
   * ~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!!!!!!!!!! DO MORE WORK HERE 
   */

  //  Refactor Description into Array. Do it in Database Query after MVP

  getArraysAndRender = () => {
    let array = [];
    for(var i = 1; i < 6; i++){
      array.push(this.state.data[0][`Description ${i}`])
    }
    return array;
  }
  
  render() { 
    return (      
    <div className="App">

      <div id="flexBox" className="feature">
      
        <Title brandName={this.state.data[0]["Brand Name"]}
              titleName={this.state.data[0].Title}
        />
        <CustomerReviews starIcon={this.renderStarIcon()}
                         averageStars={this.averageStars()}
                         totalStars={this.state.data[0]["Total Review Stars"]}/>

        <PriceBox stringPrice={this.renderedPrice()}/>
        <Stock renderInventory={this.renderedTotalInventory()} />
        <ItemDescription array={this.getArraysAndRender()} />

        <div id="Compare With Similar Items">
          <a href="#">Compare with similar items</a>
        </div>
      </div>
  </div> )
  }
}
 
export default App;