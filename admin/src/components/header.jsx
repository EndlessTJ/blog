import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../assets/images/logo.svg';
import '../assets/style/header.css';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header-title">Welcome to {this.props.nickname}</h1>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    nickname: state.user.nickname
  };
};

export default connect(mapStateToProps)(Header);
