const User = require('../../../model/User');
const hashObj = require('../hashPassword');


/*
* hash用户密码验证数据库密码
* */
const passwordCompare = function (userpassword, salt, hashpassword) {
	const checkResult = hashObj.sha512(userpassword, salt);
	return (checkResult.passwordHash === hashpassword)
};


// http 请求处理
module.exports = function (req, res) {
		const content = {};
		const filters = {};
		content.section = 'login';
		//将请求数据取出单独储存，避免多次操作req（有大量数据），影响性能
		content.filters = {
			user: req.body
		};
		content.data = {
			user: {}
		};
		if (!content.filters.user){
			console.log('提示：','body没有数据');
			content.tips = '参数错误!';
			content.code = 'PARAMETER_ERROR';
			return res.json(content)
		}
		filters.username = content.filters.user.username;
		User.findOne(filters).exec(function (err,user) {
			if (err) {
				console.log('提示：','数据库查找错误');
				content.tips = '数据库出错了';
				content.code = 'DATABASE_ERROR';
				return res.json(content)
			}
			if (user) {
				if (passwordCompare(content.filters.user.password, user.salt, user.password)) {
					req.session.regenerate((err) => {
						if (err) {
							console.log(err);
							content.tips = '服务出错了';
							content.code = 'SESSION_ERROR';
							return res.json(content)
						}
						content.success = true;
						content.data.user = user.adminMessage;
						user.activeDate = content.filters.user.activeDate;
						user.save();
						req.session.user_id = user._id;
						res.cookie('userId', user._id, {
							signed: true,
							httpOnly: true,
							maxAge: 7200000,
							//secure: true
						});
						console.log('验证通过');

						return res.json(content)
					})
				} else {
					console.log('提示：','密码错误');
					content.tips = '密码错误';
					content.code = 'PASSWORD_ERROR';
					return res.json(content)
				}
			} else {
				console.log('提示：','未找到用户');
				content.tips = '账户不存在';
				content.code = 'ACCOUNT_NO_EXIST';
				return res.json(content)
			}

		})
};

