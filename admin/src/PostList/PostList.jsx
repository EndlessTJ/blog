import React, { Component } from 'react';
import './PostList.css';

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
        <h1>博客档案馆</h1>
        <div className="postList-content">
          {this.state.data.map((value, index) => (
            <section className="postList-content-item">
              <h2>{value.title}</h2>
              <div className="postList-message">
                <span>
                  作者：<b>{value.author}</b>
                </span>
                <span>
                  喜欢：<b>{value.like}</b>
                </span>
                <span>
                  评论：<b>{value.comment}</b>
                </span>
                <span>
                  创建时间：<b>{value.createDate}</b>
                </span>
              </div>
            </section>
          ))}
        </div>
      </div>
    );
  }
}

export default Postlist;
