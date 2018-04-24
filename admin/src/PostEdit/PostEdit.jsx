import React, { Component } from 'react';
import './PostEdit.css';

class Postedit extends Component {
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
                  <option value="">标签1</option>
                  <option value="">标签2</option>
                  <option value="">标签3</option>
                  <option value="">标签4</option>
                  <option value="">标签5</option>
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
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Postedit;
