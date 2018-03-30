
	// const User = require('./model/User');
	const hashObject = require('./routes/hashPassword');


/*
* hash 函数
* */
	function passwordHashSlat(userPassword) {
		const slat = hashObject.getRandomString(16);
		return hashObject.sha512(userPassword, '45c67dffd422fe8c');
	}
	const ps1 = passwordHashSlat('TJblog1994');
	const ps2 = passwordHashSlat('DDblog1994');
	let date = Date.now();
	// 插入数据
	let adminData = [
		{username: "EndlessTJ", password: ps1.passwordHash, salt: ps1.salt, role: "admin", createDate: date, activeDate: date},
		{username: "EndlessDD", password: ps2.passwordHash, salt: ps2.salt,role: "admin",  createDate: date, activeDate: date}
	];

	/*
	* 循环插入数据库
	* */

	adminData.forEach((data) => {
		User.create(data,(err) => {
			if (err){
				console.log(err);
				return false
			}
			console.log('插入成功')
		});
		//console.log(data)
	});
