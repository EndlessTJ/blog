import React, { Component } from 'react';
import './User.css';
import Header from '../Header/header';

class User extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    var data = new FormData(this.formData);
    var init = {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      body: data
    };
    fetch('/adduser', init).then(() => {});
    e.preventDefault();
  }
  render() {
    return (
      <div className="login">
        <form
          onSubmit={this.handleSubmit}
          ref={el => (this.formData = el)}
          enctype="application/x-www-form-urlencoded"
        >
          <label>
            <span>用户名：</span>
            <input
              type="text"
              id="username"
              ref={el => (this.formData = el)}
              name="username"
            />
          </label>
          <label>
            <span>密码：</span>
            <input type="password" id="password" name="password" />
          </label>
          <button type="submit" id="btn_submit" className="button">
            提交
          </button>
        </form>
      </div>
    );
  }
}

export default User;
