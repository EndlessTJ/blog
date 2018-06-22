import React, { Component } from 'react';
import './User.css';
import Button from '../Buttons/Buttons';
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      nickname: '',
      role: '',
      delPrivilege: false,
      editPrivilege: false,
      accessAdmin: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleSubmit(e) {}

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <div className="user-container main-view">
        <div className="main-view-panel">
          <h1 className="main-view-title">添加账号</h1>
          <form className="user-form">
            <label className="form-label">
              <span className="form-input-label">用户名:</span>
              <input
                type="text"
                name="username"
                className="form-control form-input"
                placeholder="用户名"
                value={this.state.username}
                onChange={this.handleInputChange}
              />
            </label>
            <label className="form-label">
              <span className="form-input-label">昵称:</span>
              <input
                type="text"
                name="nickname"
                className="form-control form-input"
                placeholder="昵称"
                value={this.state.nickname}
                onChange={this.handleInputChange}
              />
            </label>
            <label className="form-label">
              <span className="form-input-label">密码:</span>
              <input
                type="password"
                name="password"
                className="form-control form-input"
                placeholder="密码"
                value={this.state.password}
                onChange={this.handleInputChange}
              />
            </label>
            <label className="form-label">
              <span className="form-input-label">角色:</span>
              <select
                name="role"
                className="form-control form-select"
                onChange={this.handleInputChange}
                value={this.state.role}
              >
                <option value="user">user</option>
                <option value="admin">admin</option>
                <option value="author">author</option>
              </select>
            </label>
            <label className="form-label">
              <span className="form-input-label">删除权限:</span>
              <input
                name="delPrivilege"
                type="checkbox"
                className="form-control form-radio"
                onChange={this.handleInputChange}
                checked={this.state.delPrivilege}
              />
            </label>
            <label className="form-label">
              <span className="form-input-label">编辑权限:</span>
              <input
                name="editPrivilege"
                type="checkbox"
                className="form-control form-radio"
                onChange={this.handleInputChange}
                checked={this.state.editPrivilege}
              />
            </label>
            <label className="form-label">
              <span className="form-input-label">进入后台:</span>
              <input
                name="accessAdmin"
                type="checkbox"
                className="form-control form-radio"
                onChange={this.handleInputChange}
                checked={this.state.accessAdmin}
              />
            </label>
            <div className="user-button-rows">
              <Button
                buttonClass="buttons-primary"
                buttonType="submit"
                text="添加账号"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default User;
