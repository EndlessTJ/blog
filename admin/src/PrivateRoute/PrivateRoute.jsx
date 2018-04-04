import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import './PrivateRoute.css';
import Main from '../Main/Main';
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
    let self = this;
    headers.append('Content-Type', 'application/json');
    let Init = {
      method: 'POST',
      credentials: 'include',
      headers: headers,
      mode: 'cors'
    };
    this.auth = fetch('/islogin', Init)
      .then(response => {
        return response.json();
      })
      .then(result => {
        if (!result.success) {
          self.props.history.push('/login');
        } else {
          console.log('state改变了');
          self.setState({
            isAuth: true
          });
        }
      });
  }
  render() {
    //const Main = this.props.component;
    console.log(this.auth);
    console.log(this.state.isAuth);
    if (this.state.isAuth) {
      return (
        <Router>
          <div>
            {/*<Route
              path={this.props.path}
              render={prop => {
			          return <Main {...prop} />
		          }}
            />*/}
            <Route path="/main" component={Main} />
          </div>
        </Router>
      );
    } else {
      return <div>正在加载。。。。</div>;
    }
  }
}

export default withRouter(Privateroute);
