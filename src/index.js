import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router-3';


import App from './components/App';

import './index.css';

const indexRender = (props) => {
  const id = Number(props.location.pathname.substr(1));
  return (
    <App id={id} />
  );
};

render(<Router history={browserHistory}>
  <Route path="/">
    <IndexRoute component={indexRender} />
    <Route path="/:id" component={indexRender} />
  </Route>
</Router>, document.getElementById('root'));

export default indexRender;
