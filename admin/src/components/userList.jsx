import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../middleware';
import '../assets/style/UserList.css';

class UserList extends Component {
  render() {
    const userList = this.props.userList ? this.props.userList : [];
    return (
      <div className="userList-container main-view">
        <div className="userList-card main-view-panel">
          <h1 className="userList-title main-view-title">用户档案馆</h1>
          <div className="userList-content">
            <table>
              <thead className="list-header">
                <tr>
                  <th>
                    <b>用户名</b>
                  </th>
                  <th>
                    <b>昵称</b>
                  </th>
                  <th>
                    <b>角色</b>
                  </th>
                  <th>
                    <b>后台权限</b>
                  </th>
                  <th>
                    <b>删除权限</b>
                  </th>
                  <th>
                    <b>编辑权限</b>
                  </th>
                  <th>
                    <b>最近活跃</b>
                  </th>
                  <th>
                    <b>功能</b>
                  </th>
                </tr>
              </thead>
              <tbody>
                {userList.map((value, index) => (
                  <tr className="userList-content-item">
                    <td>
                      {' '}
                      <span className="username">{value.username}</span>
                    </td>
                    <td>
                      <span className="nickname">{value.nickname}</span>
                    </td>
                    <td>
                      <span className="role">{value.role}</span>
                    </td>
                    <td>
                      <span className="accessAdmin">
                        {value.accessAdmin ? '是' : '否'}
                      </span>
                    </td>
                    <td>
                      <span className="delPrivilege">
                        {value.delPrivilege ? '是' : '否'}
                      </span>
                    </td>
                    <td>
                      <span className="editPrivilege">
                        {value.editPrivilege ? '是' : '否'}
                      </span>
                    </td>
                    <td>
                      <span className="activeDate">
                        {formatDate(
                          value.activeDate[value.activeDate.length - 1],
                          'symbol',
                          false
                        )}
                      </span>
                    </td>
                    <td>
                      <div className="operation">
                        <Link
                          to={`/admin/main/user${value._id}`}
                          className="edit"
                        >
                          编辑
                        </Link>
                        <a className="ban-account">禁封</a>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;
