import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import axios from 'axios';



// axios.get()
// const client = new ApolloClient({
//   uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
// });



// client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
