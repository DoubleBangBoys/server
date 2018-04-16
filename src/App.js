import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';


/**
 * research react router. Until then use this test
 * @param 
 */


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ''
    }
  }

  componentWillMount(){
    this.serverRequest = axios.get(`http://localhost:4000/products/1`).then((res)=> 
      this.setState({
        data: res.data
      })
    ).catch((err) => {
      console.log(err)
    })
 }
   render() { 
    return (      
    
    <div className="App">
    {console.log(this.state.data[0], 'yo')}
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <p className="App-intro">yo  
    </p>
  </div> )
  }
}
 
export default App;