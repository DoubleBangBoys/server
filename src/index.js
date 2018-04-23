import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, Link } from 'react-router-3';


import './index.css';

// console.log(Router);

ReactDOM.render(<App 
  productkey="22" />, document.getElementById('root'));
registerServiceWorker();
