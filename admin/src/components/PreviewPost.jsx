import React, { Component } from 'react';
import { formatDate } from '../middleware';
import '../preview/PreviewPost.css';

class PreviewPost extends Component {
  render() {
    const article = this.props.article ? this.props.article : {};
    return (
      <div className="preview-article main-view">
        <div className="preview-article-inner">
          <h2 className="preview-article-title">{article.title}</h2>
          <div className="preview-article-mate">
            <span className="calendar" />
            {formatDate(article.publishData, 'symbol', false)}
          </div>
          <article className="preview-article-content">
            {article.content}
          </article>
        </div>
      </div>
    );
  }
}

export default PreviewPost;
