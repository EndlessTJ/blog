import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../middleware';
import '../assets/style/UserList.css';

class UserList extends Component {
  render() {
    const postList = this.props.posts ? this.props.posts : [];
    return (
      <div className="userList-container main-view">
        <div className="userList-card main-view-panel">
          <h1 className="userList-title main-view-title">博客档案馆</h1>
          <div className="userList-content">
            {postList.map((value, index) => (
              <section className="userList-content-item" />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default UserList;
