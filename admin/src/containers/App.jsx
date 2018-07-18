import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import '../assets/style/App.css';
import '../assets/style/main.css';

// import component

import MainPage from '../containers/MainPage';
import LoginPage from '../containers/LoginPage';

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
            <Route exact path="/admin/login" component={LoginPage} />
            <Route path="/admin/main" component={MainPage} />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
