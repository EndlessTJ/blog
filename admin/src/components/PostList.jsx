import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../middleware';
import '../assets/style/PostList.css';

class Postlist extends Component {
  constructor(props) {
    super(props);
    this.deletePost = this.deletePost.bind(this);
  }
  deletePost(postId, event) {
    console.log('删除', postId, event);
  }
  render() {
    const postList = this.props.posts ? this.props.posts : [];
    return (
      <div className="postList-container main-view">
        <div className="postList-card main-view-panel">
          <h1 className="postList-title main-view-title">博客档案馆</h1>
          <div className="postList-content">
            {postList.map((value, index) => (
              <section className="postList-content-item">
                <h2 className="postList-sub-title">{value.title}</h2>
                <div className="postList-message">
                  <span className="postList-message-item">
                    作者：<b>{value.author}</b>
                  </span>
                  <span className="postList-message-item">
                    喜欢：<b>开发中</b>
                  </span>
                  <span className="postList-message-item">
                    评论：<b>开发中</b>
                  </span>
                  <span className="postList-message-item">
                    创建时间：<b>{formatDate(value.date, 'symbol', false)}</b>
                  </span>
                </div>
                <div className="postList-button-rows">
                  <Link
                    to={`/admin/main/previewpost/${value._id}`}
                    className="button buttons-default"
                  >
                    查看
                  </Link>
                  <Link
                    to={`/admin/main/editpost/${value._id}`}
                    className="button buttons-primary"
                  >
                    编辑
                  </Link>
                  <button
                    onClick={e => this.deletePost(value._id, e)}
                    className="button buttons-warning"
                  >
                    删除
                  </button>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Postlist;
