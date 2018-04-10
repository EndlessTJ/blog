import React, { Component } from 'react';
import logo from '../logo.svg';
import './header.css';

class Header extends Component {
  constructor() {
    super();
    this.state = { user: 'tianjin' };
  }
  render() {
    return (
      <header className="header">
        <img src={logo} className="header-logo" alt="logo" />
        <h1 className="header-title">Welcome to {this.state.user}</h1>
      </header>
    );
  }
}

export default Header;
