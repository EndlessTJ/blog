import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import './App.css';
import './main.css';

// import component

import Main from './Main/Main';
import Login from './Login/Login';
import Privateroute from './PrivateRoute/PrivateRoute';
//
class App extends Component {
  static propTypes = {
    store: PropTypes.object.isRequired
  };
  render() {
    return (
      <Provider store={this.props.store}>
        <div className="App">
          <div className="app-container">
            <Route
              exact
              path="/admin"
              render={() => <Redirect to="/admin/main" />}
            />
            <Route exact path="/admin/login" component={Login} />
            <Privateroute path="/admin/main" component={Main} />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
