import React, { Component } from 'react';
import '../assets/style/PostEdit.css';
import '../assets/style/markdown.css';

// import components
import Button from './Buttons';

class Postedit extends Component {
  constructor(props) {
    super(props);
    this.conRef = React.createRef();
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
      recommend: false,
      mdPreview: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addMarkDown = this.addMarkDown.bind(this);
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
  addMarkDown(e, type) {
    const startPosition = this.conRef.current.selectionStart;
    const endPosition = this.conRef.current.selectionEnd;
    const postValue = this.state.content;
    const valueLength = postValue.length;
    if (startPosition === endPosition) {
      let beforeValue = postValue.slice(0, startPosition);
      let laterValue = postValue.slice(endPosition, valueLength);
      if (type === 'title') {
        this.setState({
          content: `${beforeValue}\n## 输入标题\n${laterValue}`
        });
      } else if (type === 'bold') {
        this.setState({
          content: `${beforeValue}**加粗的内容**${laterValue}`
        });
      } else if (type === 'quote') {
        this.setState({
          content: `${beforeValue}\n> ${laterValue}`
        });
      } else if (type === 'code') {
        this.setState({
          content: `${beforeValue}\n\`\`\`\n添加代码\`\`\`\n ${laterValue}`
        });
      } else if (type === 'link') {
        this.setState({
          content: `${beforeValue}[链接描述](链接地址)${laterValue}`
        });
      }
    } else {
      let beforeValue = postValue.slice(0, startPosition);
      let centerValue = postValue.slice(startPosition, endPosition);
      let laterValue = postValue.slice(endPosition, valueLength);
      if (type === 'title') {
        this.setState({
          content: `${beforeValue}\n## ${centerValue}\n${laterValue}`
        });
      } else if (type === 'bold') {
        this.setState({
          content: `${beforeValue}**${centerValue}**${laterValue}`
        });
      } else if (type === 'quote') {
        this.setState({
          content: `${beforeValue}\n> ${centerValue}\n${laterValue}`
        });
      } else if (type === 'code') {
        this.setState({
          content: `${beforeValue}\n\`\`\`\n${centerValue}\n\`\`\`\n ${laterValue}`
        });
      } else if (type === 'link') {
        this.setState({
          content: `${beforeValue}[${centerValue}](链接地址)${laterValue}`
        });
      }
    }
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
                <span className="form-input-label">文章作者:</span>
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
                <span className="form-input-label">文章状态:</span>
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
              <div className="label-rows">
                <label className="form-label checkbox">
                  <span className="form-input-label">是否顶置:</span>
                  <input
                    name="topped"
                    type="checkbox"
                    className="form-control form-radio"
                    onChange={this.handleInputChange}
                    checked={this.state.topped}
                  />
                </label>
                <label className="form-label checkbox">
                  <span className="form-input-label">是否推荐:</span>
                  <input
                    name="recommend"
                    type="checkbox"
                    className="form-control form-radio"
                    onChange={this.handleInputChange}
                    checked={this.state.recommend}
                  />
                </label>
              </div>
              <label className="form-label">
                <div className="post-wrapper">
                  <header className="toolbar">
                    <span
                      className="md-icon float-left"
                      onClick={e => this.addMarkDown(e, 'title')}
                      title="标题"
                    >
                      <span className="icon icon-header" />
                      <b>标题</b>
                    </span>
                    <span
                      className="md-icon float-left"
                      onClick={e => this.addMarkDown(e, 'bold')}
                      title="加粗"
                    >
                      <i className="icon icon-bold" />
                      <b>加粗</b>
                    </span>
                    <span
                      className="md-icon float-left"
                      onClick={e => this.addMarkDown(e, 'quote')}
                      title="引用"
                    >
                      <i className="icon icon-quote" />
                      <b>引用</b>
                    </span>
                    <span
                      className="md-icon float-left"
                      onClick={e => this.addMarkDown(e, 'code')}
                      title="代码"
                    >
                      <i className="icon icon-code" />
                      <b>代码</b>
                    </span>
                    <span
                      className="md-icon float-left"
                      onClick={e => this.addMarkDown(e, 'link')}
                      title="链接"
                    >
                      <i className="icon icon-link" />
                      <b>链接</b>
                    </span>
                    <span
                      className="md-icon float-left"
                      onClick={e => this.addMarkDown(e, 'image')}
                      title="图片"
                    >
                      <i className="icon icon-image" />
                      <b>图片</b>
                    </span>
                    <span
                      className="md-icon float-left"
                      onClick={e => this.addMarkDown(e, 'video')}
                      title="视频"
                    >
                      <i className="icon icon-video" />
                      <b>视频</b>
                    </span>
                    <span
                      className="md-icon float-right"
                      title="预览"
                      onClick={e => {
                        let mdParams = {
                          url: '/mdrender',
                          data: { mdData: this.state.content },
                          requestType: 'MD_RENDER'
                        };
                        this.props.renderMarkDown(mdParams);
                        this.setState({
                          mdPreview: !this.state.mdPreview
                        });
                        e.preventDefault();
                      }}
                    >
                      <i className="icon icon-md" />
                      <b>预览</b>
                    </span>
                  </header>
                  <div className="content-input">
                    {this.state.mdPreview ? (
                      <article
                        className="markdown-body"
                        id="preview"
                        dangerouslySetInnerHTML={{ __html: this.props.html }}
                      />
                    ) : (
                      <textarea
                        name="content"
                        className="form-control form-textarea"
                        onChange={this.handleInputChange}
                        value={this.state.content}
                        ref={this.conRef}
                      />
                    )}
                  </div>
                </div>
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
