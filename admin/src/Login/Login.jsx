import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

// import routing

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="login-main">
        <div className="login-panel">
          <form>
            <div className="login-form-body">
              <label className="login-label-container">
                <input
                  type="text"
                  className="login-input login-username form-control"
                  placeholder="用户名"
                />
                <span className="login-bottom-line" />
              </label>
              <label className="login-label-container">
                <input
                  type="text"
                  className="login-input login-password form-control"
                  placeholder="密码"
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

export default Login;
