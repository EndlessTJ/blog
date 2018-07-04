import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import '../App.css';
import '../main.css';

// import component

import Main from '../components/Main';
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
            <Route exact path="/admin/main" component={Main} />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
