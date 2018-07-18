import React, { Component } from 'react';
import '../assets/style/Label.css';
import Button from './Buttons';
class Label extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TagName: ''
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.tagState.addTagsState) {
      this.setState({
        TagName: ''
      });
    }
  }

  render() {
    let timer = setTimeout(() => {
      this.props.toastHandle();
      clearTimeout(timer);
    }, 2000);
    return (
      <div className="label-container main-view">
        <div className="main-view-panel">
          <h1 className="main-view-title">添加标签</h1>
          <form
            className="label-form"
            onSubmit={e => {
              const url = `/admin/addtags`;
              const tag = {};
              tag.TagName = this.state.TagName;
              const postParam = {
                url: url,
                data: tag,
                requestType: 'ADD_TAGS'
              };
              this.props.handleSubmit(postParam);
              e.preventDefault();
            }}
          >
            <label className="form-label">
              <span className="form-input-label">标签名:</span>
              <input
                type="text"
                name="TagName"
                className="form-control form-input"
                placeholder="标签名"
                value={this.state.TagName}
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
          {this.props.tagState.addTagsState ? (
            <div className="toast">添加成功！</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Label;
