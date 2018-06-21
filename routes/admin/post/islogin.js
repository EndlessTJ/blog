const User = require('../../../model/User');
const hashObj = require('../hashPassword');

// http 请求处理
module.exports = function (req, res) {
	const content = {};
	content.section = 'islogin';
	content.filters = {};
	content.data = {
		user: {}
	};
	content.success = false;

	if (!req.session.user_id && req.signedCookies.userId) {
			const check_id = req.signedCookies.userId;
			console.log('checkid',check_id);
			User.findById(check_id).exec((err, user) => {
				if (err) {
					content.tips = 'cookie信息失效';
					content.code = 'COOKIE_ERROR';
					return res.json(content)
				}


				user.activeDate = Date.now();
				user.save();
				req.session.regenerate((err) => {
					if (err) {
						console.log(err);
						content.tips = '服务出错了';
						content.code = 'SESSION_ERROR';
					} else {
						req.session.user_id = user._id;
						content.success = true;
						content.data.user = user.adminMessage;
					}
					return res.json(content)
				})
			})

	} else if (req.session.user_id) {
		const check_id = req.session.user_id;

		User.findById(check_id).exec((err, user) => {
			if (err) {
				content.tips = 'cookie信息失效';
				content.code = 'COOKIE_ERROR';
			} else {
				user.activeDate = Date.now();
				user.save();
				content.success = true;
				content.data.user = user.adminMessage;
			}
			return res.json(content)
		})

	} else {

		content.tips = '用户未登录';
		content.code = 'USER_NOR_LOGIN';
		res.json(content)
	}
};

