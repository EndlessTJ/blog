import React, { Component } from 'react';
import './User.css'

class User extends Component{
	constructor (props) {
		super(props);
		this.state = {username: ''};
		this.formData = {
			username: '',
			password: '',
		};
		//this.handleChange = this.handleChange.bind(this);
		//this.passwordChange = this.passwordChange.bind(this)
	}
	handleChange (event, type) {
		console.log(event.target.value)
		this.formData[type] = event.target.value;

		//this.setState({username: event.target.value});
		console.log(this.formData)
	}
	render () {
		return (
			<div className="login">
				<form >
					<label>
						<span>用户名：</span>
						<input type="text" id="username" value={this.formData.username} onChange={(e) =>this.handleChange(e, 'username')} />
						<span>数据：{this.formData.username}</span>
					</label>
					<label>
						<span>密码：</span>
						<input type="password" id="password" value={this.formData.password} onChange={(e) =>this.handleChange(e, 'password')} />
					</label>
					<button type="submit" id="btn_submit" className="button">提交</button>
				</form>
			</div>
		)
	}
}

export default User