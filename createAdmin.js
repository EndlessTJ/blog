
const User = require('./model/User');
	let date = Date.now();
	let adminData = [
		{username: "EndlessTJ", password: "tjblog1994", role: "admin", createDate: date, activeDate: date},
		{username: "EndlessDD", password: "ddblog1994", role: "admin",  createDate: date, activeDate: date}
	];
	adminData.forEach((data) => {
		//let users = new User(data);
		User.create(data,(err) => {
			if (err){
				console.log(err);
				return false
			}
			console.log('插入成功')
		});
	});

