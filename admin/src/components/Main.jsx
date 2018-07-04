import React, { Component } from 'react';
import '../Main/Main.css';

// import component

import Footer from '../Footer/Footer';
import Header from '../Header/header';
// import routing

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />

        <Footer />
      </div>
    );
  }
}

export default Main;
