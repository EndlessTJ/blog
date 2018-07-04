import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import configureStore from './store/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

ReactDOM.render(
  <Router>
    <App store={store} />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
