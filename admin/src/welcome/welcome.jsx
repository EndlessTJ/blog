import React, { Component } from 'react';
import './welcome.css';

// import routing

class Welcome extends Component {
  render() {
    console.log(this.props.location.state);
    return (
      <div>
        <h3>welcome to admin tianjin</h3>
      </div>
    );
  }
}

export default Welcome;
