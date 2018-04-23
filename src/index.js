import React from 'react';
import ReactDOM from 'react-dom';
// import ApolloClient from 'apollo-boost';
// import gql from 'graphql-tag';
// import axios from 'axios';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';


ReactDOM.render(<App 
  productId="22" />, document.getElementById('root'));
registerServiceWorker();
