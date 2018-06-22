import React, { Component } from 'react';
import './Label.css';
import Button from '../Buttons/Buttons';
class Label extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="label-container main-view">
        <div className="main-view-panel">
          <h1 className="main-view-title">添加标签</h1>
          <form className="label-form">
            <label className="form-label">
              <span className="form-input-label">标签名:</span>
              <input
                type="text"
                name="TagName"
                className="form-control form-input"
                placeholder="标签名"
                value={this.state.tags}
                onChange={this.handleInputChange}
              />
            </label>
            <div className="label-button-rows">
              <Button
                buttonClass="buttons-primary"
                buttonType="submit"
                text="添加标签"
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Label;
