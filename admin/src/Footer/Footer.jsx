import React, { Component } from 'react';
import './Footer.css';
import logo from '../logo.svg';

class Footer extends Component {
  constructor() {
    super();
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => {
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      data: new Date()
    });
  }
  parseTime() {
    let year = this.state.date.getFullYear();
    let month =
      this.state.date.getMonth() + 1 > 9
        ? this.state.date.getMonth() + 1
        : '0' + (this.state.date.getMonth() + 1);
    let day =
      this.state.date.getDate() > 9
        ? this.state.date.getDate()
        : '0' + this.state.date.getDate();
    let hours =
      this.state.date.getHours() > 9
        ? this.state.date.getHours()
        : '0' + this.state.date.getHours();
    let min =
      this.state.date.getMinutes() > 9
        ? this.state.date.getMinutes()
        : '0' + this.state.date.getMinutes();
    let seconds =
      this.state.date.getSeconds() > 9
        ? this.state.date.getSeconds()
        : '0' + this.state.date.getSeconds();
    return `${year}年${month}月${day}日   ${hours}:${min}:${seconds}`;
  }
  render() {
    return (
      <div className="footer">
        <div className="footer-logo">
          <img src={logo} className="footer-logo-image" alt="logo" />
        </div>
        <div className="footer-message">
          <span className="footer-time">{this.parseTime()}</span>
          <span className="footer-other">
            tjidd专属版权 <b>©</b>️2018
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
