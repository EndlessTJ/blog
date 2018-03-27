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

const MainLayout = () => (
  <div>
    <Slidenav />
    <Route exact path="/main" component={Welcome} />
    <Route path="/main/comment" component={Comment} />
    <Route path="/main/label" component={Label} />
    <Route path="/main/postlist" component={Postlist} />
    <Route path="/main/postedit" component={Postedit} />
    <Route path="/main/user" component={User} />
  </div>
);

export default MainLayout;
