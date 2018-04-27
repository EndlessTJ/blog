import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './Slidenav.css';

class ActiveLink extends Component {
  render() {
    return (
      <Route
        path={this.props.to}
        children={({ match }) => (
          <div
            className={
              match
                ? 'slideNav-menu-item slideNav-active'
                : 'slideNav-menu-item'
            }
          >
            <Link to={this.props.to}>{this.props.label}</Link>
          </div>
        )}
      />
    );
  }
}

class Slidenav extends Component {
  //jsx 已近react-router的作用
  render() {
    return (
      <nav className="slideNav-nav">
        <div className="slideNav-menu">
          <ActiveLink to="/admin/main/postlist" label="文章列表" />
          <ActiveLink to="/admin/main/postedit" label="添加文章" />
          <ActiveLink to="/admin/main/comment" label="评论管理" />
          <ActiveLink to="/admin/main/label" label="标签管理" />
          <ActiveLink to="/admin/main/user" label="添加用户" />
        </div>
      </nav>
    );
  }
}

export default Slidenav;
