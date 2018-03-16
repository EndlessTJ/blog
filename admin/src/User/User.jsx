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
	}
	handleChange (event, type) {
		this.formData[type] = event.target.value;
	}
	handleSubmit(e){
		console.log(this.formData);
		let data = new FormData();
		data.append("username", this.formData.username);
		data.append("password", this.formData.password);
		fetch('/adduser',{
			method: 'post',
			headers: {
				"Content-Type": "application/x-www-form-urlencoded\""
			},
			body: data
		}).then((res) => {
			if (res.ok){
				alert("提交成功")
			}
		}).then((e) => {
			console.log(e)
		});
		e.preventDefault()
	}
	render () {
		return (
			<div className="login">
				<form onSubmit={(e) => this.handleSubmit(e)}>
					<label>
						<span>用户名：</span>
						<input type="text" id="username"  onChange={(e) =>this.handleChange(e, 'username')} />
					</label>
					<label>
						<span>密码：</span>
						<input type="password" id="password"  onChange={(e) =>this.handleChange(e, 'password')} />
					</label>
					<button type="submit" id="btn_submit" className="button">提交</button>
				</form>
			</div>
		)
	}
}

export default User