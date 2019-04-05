import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppLocation from './AppLocation';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<AppLocation />, document.getElementById('root'));


serviceWorker.unregister();
