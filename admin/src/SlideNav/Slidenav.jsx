import React, { Component } from 'react';
import './Slidenav.css'

class Slidenav extends Component{
	constructor() {
		super()
	}
	render() {
		return (
			<nav className="nav">
				<div className="menu">
					<a className="menu-item" href="">权限管理</a>
					<a className="menu-item" href="">文章列表</a>
					<a className="menu-item" href="">添加文章</a>
					<a className="menu-item" href="">评论管理</a>
					<a className="menu-item" href="">标签管理</a>
				</div>
			</nav>
		)
	}
}

export default Slidenav