import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

// import component

import Footer from './Footer/Footer';
import Header from './Header/header';
// import routing
import MainLayout from './routing'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Router>
          <MainLayout/>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
