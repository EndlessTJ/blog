import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const sotre = {};

ReactDOM.render(
  <Router>
    <App store={store} />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
