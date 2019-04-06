import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Events from './components/Events'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import PartnerRequests from './components/PartnerRequests'

const routing=(
    <Router>
    <div>
    <Route path="/" component={App} />
      <Route path="/Events" component={Events} />
      <Route path="/PartnerRequests" component={PartnerRequests}/>    
      
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
