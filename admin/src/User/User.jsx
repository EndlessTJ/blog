import React, { Component } from 'react';
import './User.css';

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
          enctype="multipart/form-data"
        >
          <label>
            <span>用户名：</span>
            <input type="text" name="username" />
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
