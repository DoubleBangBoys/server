import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import axios from 'axios';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
