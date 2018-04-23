import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';


ReactDOM.render(<App 
  productId="22" />, document.getElementById('root'));
registerServiceWorker();
