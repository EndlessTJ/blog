import React, { Component } from 'react';
import '../assets/style/User.css';
import Button from './Buttons';
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      nickname: '',
      role: 'user',
      delPrivilege: false,
      editPrivilege: false,
      accessAdmin: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (
      Object.keys(nextProps.editUser).length &&
      nextProps.match.params.userId
    ) {
      this.setState({
        username: nextProps.editUser.username,
        password: '********',
        nickname: nextProps.editUser.nickname,
        role: nextProps.editUser.role,
        delPrivilege: nextProps.editUser.delPrivilege,
        editPrivilege: nextProps.editUser.editPrivilege,
        accessAdmin: nextProps.editUser.accessAdmin
      });
    }
    if (nextProps.addState) {
      this.setState({
        username: '',
        password: '',
        nickname: '',
        role: '',
        delPrivilege: false,
        editPrivilege: false,
        accessAdmin: false
      });
    }
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render() {
    let timer = setTimeout(() => {
      this.props.toastHandle();
      clearTimeout(timer);
    }, 2000);
    return (
      <div className="user-container main-view">
        <div className="main-view-panel">
          <h1 className="main-view-title">添加账号</h1>
          <form
            className="user-form"
            onSubmit={e => {
              const user = {};
              user.username = this.state.username;
              user.password = this.state.password;
              user.nickname = this.state.nickname;
              user.role = this.state.role;
              user.delPrivilege = this.state.delPrivilege;
              user.editPrivilege = this.state.editPrivilege;
              user.accessAdmin = this.state.accessAdmin;
              const postParam = {
                url: '/admin/users',
                requestType: 'ADD_USERS',
                data: user
              };
              this.props.handleSubmit(postParam);
              e.preventDefault();
            }}
          >
            <label className="form-label">
              <span className="form-input-label">用户名:</span>
              <input
                type="text"
                autocomplete="new-password"
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
                autocomplete="new-password"
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
                autocomplete="new-password"
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
          {this.props.addState ? <div className="toast">添加成功！</div> : null}
        </div>
      </div>
    );
  }
}

export default User;
