import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppLocation from './AppLocation';

 it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<App />, div);
   ReactDOM.unmountComponentAtNode(div);
 });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<AppLocation />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
