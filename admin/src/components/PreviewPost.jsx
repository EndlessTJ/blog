import React, { Component } from 'react';
import { formatDate } from '../data-service/date';
import '../preview/PreviewPost.css';

class PreviewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postId: this.props.match.params.postId,
      data: {}
    };
  }
  componentDidMount() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let Init = {
      method: 'POST',
      credentials: 'include',
      headers: headers,
      mode: 'cors'
    };
    let url = `/getarticle/${this.state.postId}`;
    fetch(url, Init)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('有一些错误');
        }
      })
      .then(result => {
        if (result.success) {
          this.setState({
            data: result.data.article
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const article = this.state.data;
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
