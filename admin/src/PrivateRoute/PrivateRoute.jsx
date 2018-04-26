import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
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
    console.log('check auth');
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
          self.props.history.push('/admin/main');
          /*self.setState({
            isAuth: true
          });*/
        }
      });
  }
  render() {
    return <div>加载中。。。。</div>;
    /*const Main = this.props.component;
    console.log('加载次数');
    if (this.state.isAuth){
	    return (
        <Route
          path={this.props.path}
          render={prop => {
				    return <Main auth={this.state.isAuth} {...prop} />;
			    }}
        />
	    );
    } else {
      return <div>加载中。。。</div>
    }*/
  }
}

export default withRouter(Privateroute);
