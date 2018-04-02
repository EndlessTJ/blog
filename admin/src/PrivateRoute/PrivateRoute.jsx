import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './PrivateRoute.css';

// import component

class Privateroute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false
    };
  }
  componentDidMount() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let Init = {
      method: 'POST',
      credentials: 'include',
      headers: headers,
      mode: 'cors'
    };
    fetch('/islogin', Init)
      .then(response => {
        return response.json();
      })
      .then(result => {
        if (result.success) {
          this.setState({
            isAuth: true
          });
        }
      });
  }
  render() {
    const Main = this.props.component;
    console.log(this.state.isAuth);
    return (
      <Route
        path={this.props.path}
        render={prop => {
          console.log('编译完成');
          return this.state.isAuth ? (
            <Main {...prop} />
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: prop.location }
              }}
            />
          );
        }}
      />
    );
  }
}

export default Privateroute;
