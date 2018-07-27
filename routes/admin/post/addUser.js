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
	//将请求数据取出单独储存，避免多次操作req（有大量数据），影响性能
	content.user = req.body;
	content.user.createDate = new Date();
	content.user.activeDate = new Date();
	content.user.password = passwordHashSlat(content.user.password).passwordHash;
	content.user.salt = passwordHashSlat(content.user.password).salt;
	content.success = false;
	content.code = '';
	filter.username = content.user.username;
	if (!content.user.username) {
		console.log('提示：','body没有数据');
		content.tips = '请正确填写相关信息!';
		content.code = 'PARAMETER_ERROR';
		return res.json(content)
	}
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
					content.data.tag = data;
					res.json(content)
				} else {
					content.code = 'ERROR';
					res.json(content)
				}
			});
		}
	})
};

