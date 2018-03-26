import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Slidenav.css';

class Slidenav extends Component {
  //jsx 已近react-router的作用
  render() {
    return (
      <nav className="nav">
        <div className="menu">
          <Link className="menu-item" to="/main/user">
            权限管理
          </Link>
          <Link className="menu-item" to="/main/postlist">
            文章列表
          </Link>
          <Link className="menu-item" to="/main/postedit">
            添加文章
          </Link>
          <Link className="menu-item" to="/main/comment">
            评论管理
          </Link>
          <Link className="menu-item" to="/main/label">
            标签管理
          </Link>
          <Link className="menu-item" to="/main/user">
            添加用户
          </Link>
        </div>
      </nav>
    );
  }
}

export default Slidenav;
