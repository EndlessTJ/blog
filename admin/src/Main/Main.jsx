import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Main.css';

// import component

import Footer from '../Footer/Footer';
import Header from '../Header/header';
// import routing
import MainLayout from '../routing';

class Main extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <MainLayout />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Main;
