import React, { Component } from 'react';
import './PostEdit.css';

// import components
import Button from '../Buttons/Buttons';

class Postedit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {
        title: '',
        author: '',
        content: '',
        label: '',
        topped: false,
        recommend: false
      }
    };
  }
  /*
  *
  *数据处理函数
  *
  */
  handleTitle() {}
  handleAuthor() {}
  handleContent() {}
  handleLable() {}
  render() {
    return (
      <div className="postedit-container">
        <div className="postedit-edit-card">
          <h1 className="postedit-title">文章编辑部</h1>
          <form className="postedit-form">
            <div className="postedit-form-body">
              <label className="form-label">
                <span className="form-input-label">文章标题:</span>
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="文章标题"
                />
              </label>
              <label className="form-label">
                <span className="form-input-label">作者:</span>
                <input
                  type="text"
                  className="form-control form-input"
                  placeholder="请输入作者"
                />
              </label>
              <label className="form-label">
                <span className="form-textarea-label">文章内容:</span>
                <textarea className="form-control form-textarea" />
              </label>
              <label className="form-label">
                <span className="form-input-label">选择标签:</span>
                <select name="" className="form-control form-select">
                  <option value="">javascript</option>
                  <option value="">前端</option>
                  <option value="">nodejs</option>
                  <option value="">Python</option>
                  <option value="">机器学习</option>
                </select>
              </label>
              <label className="form-label">
                <span className="form-input-label">是否顶置:</span>
                <input type="checkbox" className="form-control form-radio" />
              </label>
              <label className="from-label">
                <span className="form-input-label">是否推荐:</span>
                <input type="checkbox" className="form-control form-radio" />
              </label>
              <div className="postEdit-button-rows">
                <Button buttonClass="buttons-primary" text="发布文章" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Postedit;
