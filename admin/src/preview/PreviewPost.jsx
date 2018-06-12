import React, { Component } from 'react';
import './PreviewPost.css';

class PreviewPost extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        这里是pro
        {this.props}
      </div>
    );
  }
}

export default PreviewPost;
