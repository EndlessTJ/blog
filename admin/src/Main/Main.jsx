import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Main.css';

// import component

import Footer from '../Footer/Footer';
import Header from '../Header/header';
// import routing
import MainLayout from '../routing';

class Main extends Component {
  componentWillMount() {
    console.log('main组件即将加载');
  }
  render() {
    console.log('main组件已经加载');
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
