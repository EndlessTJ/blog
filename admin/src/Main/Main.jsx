import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './Main.css';
import '../main.css';

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
    return (
      <div className="App">
        <Header />
        <Router>
          <MainLayout user={this.props.location.state.userData} />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default Main;
