import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './Slidenav.css';

class ActiveLink extends Component {
  render() {
    const locations = {
      pathname: this.props.to,
      state: { user: this.props.user }
    };
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
            <Link to={locations}>{this.props.label}</Link>
          </div>
        )}
      />
    );
  }
}

class Slidenav extends Component {
  //jsx 已近react-router的作用
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="slideNav-nav">
        <div className="slideNav-menu">
          <ActiveLink
            to="/admin/main/postlist"
            user={this.props.user}
            label="文章列表"
          />
          <ActiveLink
            to="/admin/main/postedit"
            user={this.props.user}
            label="添加文章"
          />
          <ActiveLink
            to="/admin/main/comment"
            user={this.props.user}
            label="评论管理"
          />
          <ActiveLink
            to="/admin/main/label"
            user={this.props.user}
            label="标签管理"
          />
          <ActiveLink
            to="/admin/main/user"
            user={this.props.user}
            label="添加用户"
          />
        </div>
      </nav>
    );
  }
}

export default Slidenav;
