import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Login.css';
// import routing

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      activeDate: null
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  handleSubmit(e) {
    //document.cookie = 'isAuth = true';
    this.setState(
      {
        activeDate: new Date()
      },
      () => {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let Init = {
          method: 'POST',
          credentials: 'include',
          headers: headers,
          mode: 'cors',
          body: JSON.stringify(this.state)
        };
        fetch('/login', Init)
          .then(response => {
            return response.json();
          })
          .then(result => {
            if (result.success) {
              this.props.history.push('/main');
            }
            console.log(result);
          });
      }
    );
    e.preventDefault();
  }
  handleUsername(e) {
    let regex = /^[a-zA-z]\w{4,15}$/g;
    this.usernameReg = regex.test(e.target.value);
    this.setState({
      username: e.target.value
    });
  }
  handlePassword(e) {
    let regex = /^([a-z]|[0-9]\w){6,12}$/g;
    this.passwordReg = regex.test(e.target.value);
    this.setState({
      password: e.target.value
    });
  }
  render() {
    return (
      <div className="login-main">
        <div className="login-panel">
          <form onSubmit={this.handleSubmit}>
            <div className="login-form-body">
              <label className="login-label-container">
                <input
                  type="text"
                  className={
                    this.usernameReg
                      ? 'login-input login-username form-control login-input-valid'
                      : 'login-input login-username form-control'
                  }
                  placeholder="用户名"
                  value={this.state.username}
                  onChange={this.handleUsername}
                  maxLength=" 16"
                />
                <span className="login-bottom-line " />
              </label>
              <label className="login-label-container">
                <input
                  type="password"
                  className={
                    this.passwordReg
                      ? 'login-input login-password form-control login-input-valid'
                      : 'login-input login-password form-control'
                  }
                  placeholder="密码"
                  value={this.state.password}
                  onChange={this.handlePassword}
                  maxLength="12"
                />
                <span className="login-bottom-line" />
              </label>
              <p>
                忘记密码？<Link className="login-forget" to="/postedit">
                  戳一戳
                </Link>
              </p>
            </div>
            <div className="login-form-footer">
              <button type="submit" className="login-submit">
                登录
              </button>
            </div>
          </form>
        </div>
        <footer className="login-footer login-copyright">
          <p className="login-footer-item">POWER BY TIANJIN</p>
          <p className="login-footer-item">© 2018 TJ. 保留所有权利 </p>
        </footer>
      </div>
    );
  }
}

export default withRouter(Login);
