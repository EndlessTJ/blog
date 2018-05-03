import React, { Component } from 'react';
import './PostList.css';

//import component
import Button from '../Buttons/Buttons';

class Postlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          author: 'TJ',
          createDate: '2018-08-08',
          editDate: ['2018-09-09', '2019-03-03'],
          title: ' angular vs react',
          digest: 'it is a article about fonts frameworks!',
          article:
            'it is a article about fonts frameworks!it is a article about fonts frameworks!it is a article about fonts frameworks!it is a article about fonts frameworks!it is a article about fonts frameworks!',
          like: 5,
          comment: 6
        },
        {
          author: 'TJ',
          createDate: '2018-08-08',
          editDate: ['2018-09-09', '2019-03-03'],
          title: ' angular vs react',
          digest: 'it is a article about fonts frameworks!',
          article:
            'it is a article about fonts frameworks!it is a article about fonts frameworks!it is a article about fonts frameworks!it is a article about fonts frameworks!it is a article about fonts frameworks!',
          like: 5,
          comment: 6
        },
        {
          author: 'TJ',
          createDate: '2018-08-08',
          editDate: ['2018-09-09', '2019-03-03'],
          title: ' angular vs react',
          digest: 'it is a article about fonts frameworks!',
          article:
            'it is a article about fonts frameworks!it is a article about fonts frameworks!it is a article about fonts frameworks!it is a article about fonts frameworks!it is a article about fonts frameworks!',
          like: 5,
          comment: 6
        }
      ]
    };
  }
  render() {
    return (
      <div className="postList-container">
        <div className="postList-card">
          <h1 className="postList-title">博客档案馆</h1>
          <div className="postList-content">
            {this.state.data.map((value, index) => (
              <section className="postList-content-item">
                <h2 className="postList-sub-title">{value.title}</h2>
                <div className="postList-message">
                  <span className="postList-message-item">
                    作者：<b>{value.author}</b>
                  </span>
                  <span className="postList-message-item">
                    喜欢：<b>{value.like}</b>
                  </span>
                  <span className="postList-message-item">
                    评论：<b>{value.comment}</b>
                  </span>
                  <span className="postList-message-item">
                    创建时间：<b>{value.createDate}</b>
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
