import React from 'react'
import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';

// 添加需要路由的组件
import Comment from './Comment/Comment'
import Label from './Label/Label'
import Postlist from './PostList/PostList'
import Postedit from './PostEdit/PostEdit'
import Slidenav from './SlideNav/Slidenav'

const MainLayout = () => (
	<div className="main-layout">
		<Slidenav/>
		<header>
			这里是路由的头部区域
		</header>
		<main>
			<Route path="comment" component={Comment}/>
			<Route path="label" component={Label}/>
			<Route path="postlist" component={Postlist}/>
			<Route path="postedit" component={Postedit}/>
		</main>
	</div>
);

export default MainLayout