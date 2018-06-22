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
    const userData = this.props.location.state
      ? this.props.location.state.userData
      : {};
    return (
      <div>
        <Header />
        <Router>
          <MainLayout user={userData} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Main;
