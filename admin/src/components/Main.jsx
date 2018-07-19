import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import '../assets/style/Maincomponent.css';

// import component

import Footer from './Footer';
import Header from './header';
import SlideNav from './Slidenav';
import Welcome from '../containers/WelcomePage';
import Comment from '../containers/CommentPage';
import Label from '../containers/LabelPage';
import PostList from '../containers/PostListPage';
import PostEdit from '../containers/PostEditPage';
import PreviewPost from '../containers/PreviewPostPage';
import User from '../containers/UserPage';
import Dialog from './dialog';
// import routing

class Main extends Component {
  constructor(props) {
    super(props);
  }
  dialogHandle(flag = false) {
    if (flag) {
      this.parentProps(); // 这里的this，指的是子组件dialog的props
    }
  }
  render() {
    return (
      <div>
        {this.props.requestState || this.props.firstAccess ? (
          <div>加载中....</div>
        ) : this.props.loginState ? (
          <div>
            <Header />
            <div className="main-container">
              {!this.props.exceptState.success ? (
                <Dialog
                  exceptState={this.props.exceptState}
                  parentProps={this.props.tipsHandle}
                  callback={this.dialogHandle}
                />
              ) : null}
              <SlideNav />
              <Route path="/admin/main/index" component={Welcome} />
              <Route path="/admin/main/comment" component={Comment} />
              <Route path="/admin/main/label" component={Label} />
              <Route path="/admin/main/postlist" component={PostList} />
              <Route path="/admin/main/postedit" component={PostEdit} />
              <Route path="/admin/main/user" component={User} />
              <Route
                path="/admin/main/previewpost/:postId"
                component={PreviewPost}
              />
              <Route path="/admin/main/editpost/:postId" component={PostEdit} />
            </div>
            <Footer />
          </div>
        ) : (
          <Redirect to="/admin/login" />
        )}
      </div>
    );
  }
}

export default Main;
