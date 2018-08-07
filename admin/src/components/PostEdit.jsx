import React, { Component } from 'react';
import '../assets/style/PostEdit.css';

// import components
import Button from './Buttons';

class Postedit extends Component {
  constructor(props) {
    super(props);
    const postId = this.props.match.params.postId
      ? this.props.match.params.postId
      : '';
    this.state = {
      postId: postId,
      title: '',
      author: '',
      content: '',
      postState: '',
      label: '',
      topped: false,
      recommend: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  /**
   * 数据处理函数
   * @param event
   */
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  render() {
    return (
      <div className="postedit-container main-view">
        <div className="postedit-edit-card main-view-panel">
          <h1 className="postedit-title main-view-title">文章编辑</h1>
          <form
            className="postedit-form"
            onSubmit={e => {
              const url = this.state.postId
                ? `/updatepost/${this.state.postId}`
                : `/admin/addpost`;
              const post = {};
              post.title = this.state.title;
              post.author = this.state.author;
              post.content = this.state.content;
              post.label = this.state.label;
              post.postState = this.state.postState;
              post.topped = this.state.topped;
              post.recommend = this.state.recommend;
              const postParam = {
                url: url,
                data: post,
                requestType: 'ADD_POSTS'
              };
              this.props.handleSubmit(postParam);
              e.preventDefault();
            }}
          >
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
                <span className="form-input-label">状态:</span>
                <select
                  name="label"
                  className="form-control form-select"
                  onChange={this.handleInputChange}
                  value={this.state.postState}
                >
                  <option selected value="draft">
                    草稿
                  </option>
                  <option value="published">发布</option>
                </select>
              </label>
              <label className="form-label">
                <span className="form-input-label">选择标签:</span>
                <select
                  name="label"
                  className="form-control form-select"
                  onChange={this.handleInputChange}
                  value={this.state.label}
                >
                  <option selected value="javascript">
                    javascript
                  </option>
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
              <div className="postedit-button-rows">
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
