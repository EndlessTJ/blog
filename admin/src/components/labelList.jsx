import React, { Component } from 'react';
import { formatDate } from '../middleware';
import '../assets/style/tagsList.css';

class TagsList extends Component {
  render() {
    const tagList = this.props.tags ? this.props.tags : [];
    return (
      <div className="tagsList-container main-view">
        <div className="tagsList-card main-view-panel">
          <h1 className="tagsList-title main-view-title">标签档案馆</h1>
          <div className="tagList-content">
            <table>
              <thead className="list-header">
                <tr>
                  <th>
                    <b>标签名</b>
                  </th>
                  <th>
                    <b>添加人</b>
                  </th>
                  <th>
                    <b>添加时间</b>
                  </th>
                  <th>
                    <b>功能</b>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tagList.map((value, index) => (
                  <tr className="userList-content-item">
                    <td>
                      {' '}
                      <span className="tag-name">{value.TagName}</span>
                    </td>
                    <td>
                      <span className="username">{value.user.username}</span>
                    </td>
                    <td>
                      <span className="time">
                        {formatDate(value.createDate, 'symbol', false)}
                      </span>
                    </td>
                    <td>
                      <div className="operation taglist-operation">
                        <a
                          className="delete"
                          onClick={() => this.props.deleteTag(value._id)}
                        >
                          删除
                        </a>
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

export default TagsList;
