import React, { Component } from 'react';
import '../welcome/welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div className="welcome-container main-view">
        <h3 className="welcome-title">
          welcome to admin
          <span className="nickname">{this.props.nickname}</span>
        </h3>
        <div className="welcome-website-message">
          <section className="welcome-page-view welcome-card">
            <h4>网站访问数据</h4>
            <p>网站访客：{this.props.pageView}</p>
            <p>用户增加量：{this.props.userRise}</p>
          </section>
          <section className="welcome-recent-blog welcome-card">
            <h4>最近文章</h4>
            <ul>
              {this.props.posts ? (
                this.props.posts.map(value => (
                  <li className="post-item">
                    <a href="">{value.title}</a>
                  </li>
                ))
              ) : (
                <p>没有数据</p>
              )}
            </ul>
          </section>
          <section className="welcome-recent-login welcome-card">
            <h4>最近登录时间</h4>
            {this.props.activeDate ? (
              this.props.activeDate.map((value, index) => <p>{value}</p>)
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
