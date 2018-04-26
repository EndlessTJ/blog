import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

// import component

import Main from './Main/Main';
import Login from './Login/Login';
import Privateroute from './PrivateRoute/PrivateRoute';
//
class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className="app-container">
            <Route exact path="/admin/login" component={Login} />
            <Route exact path="/admin/main" component={Main} />
            <Route exact path="/admin" component={Privateroute} />
            {/*<Privateroute path="/admin/main" component={Main} />*/}
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
