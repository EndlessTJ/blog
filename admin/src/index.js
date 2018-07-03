import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers';
import './index.css';
import App from './containers/App';
import { BrowserRouter as Router } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(rootReducer);

ReactDOM.render(
  <Router>
    <App store={store} />
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
