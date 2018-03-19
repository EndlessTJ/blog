import React, { Component } from 'react';
import './User.css';
import Header from '../Header/header';

class User extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    //console.log(this.formData);
    var data = new FormData(this.formData);
    var headers = new Headers('Content-Type', 'application/json');
    fetch('/adduser', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({ username: 'tianjin' })
    }).then(() => {});
    e.preventDefault();
  }
  render() {
    return (
      <div className="login">
        <form onSubmit={this.handleSubmit} ref={el => (this.formData = el)}>
          <label>
            <span>用户名：</span>
            <input type="text" id="username" name="username" />
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
