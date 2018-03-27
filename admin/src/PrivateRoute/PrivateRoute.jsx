import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './PrivateRoute.css';

// import component

class Privateroute extends Component {
  constructor(props) {
    super(props);
    this.isAuth =
      document.cookie.slice(document.cookie.indexOf('=') + 1) === 'true';
  }
  render() {
    const Main = this.props.component;
    return (
      <Route
        path={this.props.path}
        render={prop =>
          this.isAuth ? (
            <Main {...prop} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: prop.location }
              }}
            />
          )
        }
      />
    );
  }
}

export default Privateroute;
