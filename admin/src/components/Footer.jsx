import React, { Component } from 'react';
import { formatDate } from '../middleware/index';
import '../assets/style/Footer.css';
import logo from '../assets/images/logo.svg';

class Footer extends Component {
  constructor() {
    super();
    this.state = { date: new Date() };
  }
  render() {
    return (
      <div className="footer">
        <div className="footer-logo">
          <img src={logo} className="footer-logo-image" alt="logo" />
        </div>
        <div className="footer-message">
          <span className="footer-time">
            {formatDate(this.state.date, 'text', false)}
          </span>
          <span className="footer-other">
            tjidd专属版权 <b>©</b>️2018
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
