import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Main.css';

// import component

import Footer from '../Footer/Footer';
import Header from '../Header/header';
// import routing
import MainLayout from '../routing';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    const userData = this.props.location.state
      ? this.props.location.state.userData
      : {};
    const nickname = userData.nickname ? userData.nickname : '';
    return (
      <div>
        <Header nickname={nickname} />
        <Router>
          <MainLayout user={userData} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Main;
