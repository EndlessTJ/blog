import React, { Component } from 'react';

class User extends Component{
	constructor (props) {
		super(props);
		this.state = {username: ''};
		/*this.formData = {
			username: '',
			password: '',
		};*/
		this.handleChange = this.handleChange.bind(this);
		//this.passwordChange = this.passwordChange.bind(this)
	}
	handleChange (event) {
		//this.formData[type] = event.target.value;
		this.setState({username: event.target.value});
		console.log(event)
	}
	render () {
		return (
			<div className="login">
				<form >
					<label>
						<span>用户名：</span>
						<input type="text" id="username" value={this.state.username} onChange={this.handleChange} />
						<span>数据：{this.state.username}</span>
					</label>
					<label>
						<span>密码：</span>
						<input type="text" id="password" value={this.formData.password}  />
					</label>
					<button type="submit" id="btn_submit" className="button">提交</button>
				</form>
			</div>
		)
	}
}

export default User