import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../SlideNav/Slidenav.css';

class SlideNav extends Component {
  render() {
    return (
      <nav className="slideNav-nav">
        <div className="slideNav-menu">
          <div className="slideNav-menu-item">
            <NavLink to="/admin/main/index" activeClassName="slideNav-active">
              首页
            </NavLink>
          </div>
          <div className="slideNav-menu-item">
            <NavLink
              to="/admin/main/postlist"
              activeClassName="slideNav-active"
            >
              文章列表
            </NavLink>
          </div>
          <div className="slideNav-menu-item">
            <NavLink
              to="/admin/main/postedit"
              activeClassName="slideNav-active"
            >
              添加文章
            </NavLink>
          </div>
          <div className="slideNav-menu-item">
            <NavLink to="/admin/main/comment" activeClassName="slideNav-active">
              评论管理
            </NavLink>
          </div>
          <div className="slideNav-menu-item">
            <NavLink to="/admin/main/label" activeClassName="slideNav-active">
              标签管理
            </NavLink>
          </div>
          <div className="slideNav-menu-item">
            <NavLink to="/admin/main/user" activeClassName="slideNav-active">
              添加用户
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default SlideNav;
