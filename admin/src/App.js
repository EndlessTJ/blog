import React, { Component } from 'react';
import './App.css';

// import component

import Footer from './Footer/Footer';
import Header from './Header/header';
import Slidenav from './SlideNav/Slidenav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Slidenav/>
        <p className="App-intro">
          To get started, edit <code>src/App.js </code> and save to reload.
        </p>
        <Footer/>
      </div>
    );
  }
}

export default App;
