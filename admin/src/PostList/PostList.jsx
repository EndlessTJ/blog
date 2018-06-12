import React, { Component } from 'react';
import './PostList.css';

//import component
import Button from '../Buttons/Buttons';

class Postlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
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
    fetch('/getPost', Init)
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
            data: result.data.post
          });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const postList = this.state.data;
    const formatDate = function(date) {
      let new_date = new Date(date);
      let year = new_date.getFullYear();
      let month = new_date.getMonth() + 1;
      let day = new_date.getDate();
      return `${year}-${month}-${day}`;
    };
    return (
      <div className="postList-container">
        <div className="postList-card">
          <h1 className="postList-title">博客档案馆</h1>
          <div className="postList-content">
            {postList.map((value, index) => (
              <section className="postList-content-item">
                <h2 className="postList-sub-title">{value.title}</h2>
                <div className="postList-message">
                  <span className="postList-message-item">
                    作者：<b>{value.author}</b>
                  </span>
                  <span className="postList-message-item">
                    喜欢：<b>开发中。。</b>
                  </span>
                  <span className="postList-message-item">
                    评论：<b>开发中。。</b>
                  </span>
                  <span className="postList-message-item">
                    创建时间：<b>{formatDate(value.date)}</b>
                  </span>
                </div>
                <div className="postList-button-rows">
                  <Button buttonClass="buttons-default" text="查看" />
                  <Button buttonClass="buttons-primary" text="编辑" />
                  <Button buttonClass="buttons-warning" text="删除" />
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
