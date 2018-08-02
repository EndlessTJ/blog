const User = require('../../../model/User');
const hashObj = require('../hashPassword');

/*
* hash 函数
* */
function passwordHashSlat(userPassword) {
	const slat = hashObj.getRandomString(16);
	return hashObj.sha512(userPassword, slat);
}

// http 请求处理
module.exports = function (req, res) {
	const content = {};
	const filter = {};
	content.section = 'addUsers';
	content.data = {
		user: {}
	};
	content.success = false;
	content.code = '';
	//将请求数据取出单独储存，避免多次操作req（有大量数据），影响性能
	if (!Object.keys(req.body).length) {
		console.log('提示：','body没有数据');
		content.tips = '请正确填写相关信息!';
		content.code = 'PARAMETER_ERROR';
		return res.json(content)
	}
	content.user = req.body;
	content.user.createDate = new Date();
	content.user.activeDate = new Date();
	if (content.user.password !== '********') {
		let hashObject = passwordHashSlat(content.user.password);
		content.user.password = hashObject.passwordHash;
		content.user.salt = hashObject.salt;
	} else if(content.user.password === '********') {
		delete content.user.password
	}
	if (req.params.userid) {
		User.findByIdAndUpdate(req.params.userid, content.user).exec((err, data) => {
			if (err) {
				console.log('提示：','数据库查找错误');
				content.tips = '数据库出错了';
				content.code = 'DATABASE_ERROR';
				return res.json(content)
			}
			content.success = true;
			content.code = 'UPDATE_USER_SUCCESS';
			content.data.user = data;
			res.json(content)

		})
	} else {
		filter.username = content.user.username;
		User.findOne(filter).exec(function (err, result) {
			if (err) {
				console.log('提示：','数据库查找错误');
				content.tips = '数据库出错了';
				content.code = 'DATABASE_ERROR';
				return res.json(content)
			}
			if (result) {
				console.log('提示：','用户已存在');
				content.tips = '用户已存在';
				content.code = 'REPEAT_USER';
				return res.json(content)
			} else {
				User.create(content.user, function (err, data) {
					if (err) {
						console.log('数据库出错:',err);
						content.tips = '数据库出错了';
						content.code = 'DATABASE_ERROR';
						return res.json(content);
					} else if (data) {
						content.success = true;
						content.code = 'ADD_USER_SUCCESS';
						content.data.user = data;
						res.json(content)
					} else {
						content.code = 'ERROR';
						res.json(content)
					}
				});
			}
		})
	}
};

