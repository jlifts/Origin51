import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router } from 'react-router-dom';
//Changed to HashRouter for gh-pages

ReactDOM.render(
  <Router basename='/Origin51'>
    <App />
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
