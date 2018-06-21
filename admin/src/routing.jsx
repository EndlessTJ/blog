import React from 'react';
import { Route } from 'react-router-dom';

// 添加需要路由的组件
import Comment from './Comment/Comment';
import Label from './Label/Label';
import Postlist from './PostList/PostList';
import Postedit from './PostEdit/PostEdit';
import Slidenav from './SlideNav/Slidenav';
import User from './User/User';
import Welcome from './welcome/welcome';
import PreviewPost from './preview/PreviewPost';

const MainLayout = props => (
  <div className="main-container">
    <Slidenav user={props.user} />
    <Route exact path="/admin/main" component={Welcome} />
    <Route path="/admin/main/comment" component={Comment} />
    <Route path="/admin/main/label" component={Label} />
    <Route path="/admin/main/postlist" component={Postlist} />
    <Route path="/admin/main/postedit" component={Postedit} />
    <Route path="/admin/main/user" component={User} />
    <Route path="/admin/main/previewpost/:postId" component={PreviewPost} />
    <Route path="/admin/main/editpost/:postId" component={Postedit} />
  </div>
);

export default MainLayout;
