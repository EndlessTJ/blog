import React, { Component } from 'react';
import './PostEdit.css';

// import components
import Button from '../Buttons/Buttons';

class Postedit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      content: '',
      label: '',
      topped: false,
      recommend: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  /*
  *
  *数据处理函数
  *
  */
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e) {
    const post = {};
    post.title = this.state.title;
    post.author = this.state.author;
    post.content = this.state.content;
    post.label = this.state.label;
    post.topped = this.state.topped;
    post.recommend = this.state.recommend;
    console.log('触发');
    // 请求后台
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let Init = {
      method: 'POST',
      credentials: 'include',
      headers: headers,
      mode: 'cors',
      body: JSON.stringify(this.state)
    };
    fetch('/admin/addpost', Init)
      .then(response => {
        return response.json();
      })
      .then(result => {
        if (result.success) {
          console.log('结果', result);
        }
      });
    e.preventDefault();
  }
  render() {
    return (
      <div className="postedit-container">
        <div className="postedit-edit-card">
          <h1 className="postedit-title">文章编辑部</h1>
          <form className="postedit-form" onSubmit={this.handleSubmit}>
            <div className="postedit-form-body">
              <label className="form-label">
                <span className="form-input-label">文章标题:</span>
                <input
                  type="text"
                  name="title"
                  className="form-control form-input"
                  placeholder="文章标题"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                />
              </label>
              <label className="form-label">
                <span className="form-input-label">作者:</span>
                <input
                  name="author"
                  type="text"
                  className="form-control form-input"
                  placeholder="请输入作者"
                  onChange={this.handleInputChange}
                  value={this.state.author}
                />
              </label>
              <label className="form-label">
                <span className="form-textarea-label">文章内容:</span>
                <textarea
                  name="content"
                  className="form-control form-textarea"
                  onChange={this.handleInputChange}
                  value={this.state.content}
                />
              </label>
              <label className="form-label">
                <span className="form-input-label">选择标签:</span>
                <select
                  name="label"
                  className="form-control form-select"
                  onChange={this.handleInputChange}
                  value={this.state.label}
                >
                  <option value="javascript">javascript</option>
                  <option value="前端">前端</option>
                  <option value="nodejs">nodejs</option>
                  <option value="Python">Python</option>
                  <option value="机器学习">机器学习</option>
                </select>
              </label>
              <label className="form-label">
                <span className="form-input-label">是否顶置:</span>
                <input
                  name="topped"
                  type="checkbox"
                  className="form-control form-radio"
                  onChange={this.handleInputChange}
                  checked={this.state.topped}
                />
              </label>
              <label className="from-label">
                <span className="form-input-label">是否推荐:</span>
                <input
                  name="recommend"
                  type="checkbox"
                  className="form-control form-radio"
                  onChange={this.handleInputChange}
                  checked={this.state.recommend}
                />
              </label>
              <div className="postEdit-button-rows">
                <Button
                  buttonClass="buttons-primary"
                  buttonType="submit"
                  text="发布文章"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Postedit;
