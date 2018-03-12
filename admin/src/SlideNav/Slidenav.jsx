import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Slidenav.css'

class Slidenav extends Component{
	constructor() {
		super()
	}
	//jsx 已近react-router的作用
	render() {
		return (

			<nav className="nav">
				<Router>
				<div className="menu">
					<Link className="menu-item" to="/user">权限管理</Link>
					<Link className="menu-item" to="/postlist">文章列表</Link>
					<Link className="menu-item" to="/postedit">添加文章</Link>
					<Link className="menu-item" to="/comment">评论管理</Link>
					<Link className="menu-item" to="/label">标签管理</Link>

				</div>
			</Router>
			</nav>

		)
	}
}

export default Slidenav