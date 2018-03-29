const User = require('../../model/User');
const crypto = require('crypto');

module.exports = function (req, res) {
		const content = {};
		const filters = {};
		content.section = 'login';
		content.filters = {
			user: req.body
		};
		content.data = {
			user: {}
		};
		if (!content.filters.user){
			console.log('提示：','body没有数据！');
			content.tips = '参数错误!';
			content.code = 'PARAMETER_ERROR';
			return res.json(content)
		}
		filters.username = content.filters.user.username;
		User.findOne(filters).exec(function (err,user) {
			if (err) {
				console.log('提示：','数据库查找错误！');
				content.tips = '数据库出错了!';
				content.code = 'DATABASE_ERROR';
				return res.json(content)
			}
			if (user) {
				if (user.password === content.filters.user.password) {
					content.success = true;
					content.data.user = user.adminMessage;
					console.log('验证通过');
					return res.json(content)
				} else {
					console.log('提示：','密码错误！');
					content.tips = '密码错误!';
					content.code = 'PASSWORD_ERROR';
					return res.json(content)
				}
			} else {
				console.log('提示：','未找到用户！');
				content.tips = '账户不存在!';
				content.code = 'ACCOUNT_NO_EXIST';
				return res.json(content)
			}

		})
};

