import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './PrivateRoute.css';

// import component

class Privateroute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuth: false,
      userData: {}
    };
  }
  componentDidMount() {
    let headers = new Headers();
    let self = this;
    headers.append('Content-Type', 'application/json');
    let Init = {
      method: 'POST',
      credentials: 'include',
      headers: headers,
      mode: 'cors'
    };
    fetch('/admin/islogin', Init)
      .then(response => {
        return response.json();
      })
      .then(result => {
        if (!result.success) {
          self.props.history.push('/admin/login');
        } else {
          self.setState({
            isAuth: true,
            userData: result.data
          });
        }
      });
  }
  render() {
    const Main = this.props.component;
    return (
      <Route
        path={this.props.path}
        render={prop => {
          return <Main userData={this.state} {...prop} />;
        }}
      />
    );
  }
}

export default withRouter(Privateroute);
