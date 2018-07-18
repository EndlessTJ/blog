import React, { Component } from 'react';
import '../assets/style/Buttons.css';

class Buttons extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="buttons">
        <button
          type={this.props.buttonType || 'button'}
          className={`buttons-btn ${this.props.buttonClass}`}
        >
          {/*<span className="buttons-cover-layer">
							<div className="buttons-cover-layer-animate"></div>
						</span>*/}
          <div className="buttons-btn-inner">
            <span className="buttons-btn-text">{this.props.text}</span>
          </div>
        </button>
      </div>
    );
  }
}

export default Buttons;
