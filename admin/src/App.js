import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import './App.css';

// import component

import Main from './Main/Main';
import Login from './Login/Login';
import Privateroute from './PrivateRoute/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="app-container">
            <Route exact path="/" render={() => <Redirect to="/main" />} />
            <Route exact path="/login" component={Login} />
            <Privateroute path="/main" component={Main} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
