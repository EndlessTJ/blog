import React, { Component } from 'react';
import './welcome.css';
import { formatDate } from '../data-service/date';

class Welcome extends Component {
  render() {
    const user = this.props.location.state;
    console.log(user);
    return (
      <div className="welcome-container main-view">
        <h3 className="welcome-title">
          welcome to admin
          <span className="nickname">{user ? user.userData.nickname : ''}</span>
        </h3>
        <div className="welcome-website-message">
          <section className="welcome-page-view welcome-card">
            <h4>网站访问数据</h4>
            <p>网站访客：4553</p>
            <p>评论用户增加量：34</p>
          </section>
          <section className="welcome-recent-blog welcome-card">
            <h4>最近文章</h4>
            <ul>
              <li className="post-item">
                <a href="">text paper</a>
              </li>
              <li className="post-item">
                <a href="">blog test</a>
              </li>
              <li className="post-item">
                <a href="">hello world</a>
              </li>
            </ul>
          </section>
          <section className="welcome-recent-login welcome-card">
            <h4>最近登录时间</h4>
            {user ? (
              user.userData.activeDate.map((value, index) => (
                <p>{formatDate(value, 'text', true)}</p>
              ))
            ) : (
              <p>没有数据</p>
            )}
          </section>
        </div>
      </div>
    );
  }
}

export default Welcome;
