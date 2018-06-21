import React, { Component } from 'react';
import './welcome.css';

// import routing

class Welcome extends Component {
  render() {
    console.log(this.props.location.state);
    return (
      <div className="welcome-container">
        <h3>welcome to admin tianjin</h3>
        <div className="welcome-website-message">
          <section className="welcome-page-view">
            <h4>网站访问数据</h4>
            <p>网站访客：4553</p>
            <p>评论用户增加量：34</p>
          </section>
          <section className="welcome-recent-blog">
            <h4>最近文章</h4>
            <ul>
              <li>
                <a href="">text paper</a>
              </li>
              <li>
                <a href="">blog test</a>
              </li>
              <li>
                <a href="">hello world</a>
              </li>
            </ul>
          </section>
          <section classname="wecome-recent-login">
            <h4>最近登录时间</h4>
            <ul />
          </section>
        </div>
      </div>
    );
  }
}

export default Welcome;
