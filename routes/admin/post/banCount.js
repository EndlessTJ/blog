const User = require('../../../model/User');



module.exports = function (req, res) {
	const content = {};
	content.section = 'ban_count';
	content.data = {
		user: {}
	};
	content.success = false;
	content.code = '';
	if (req.params.userid) {
		const userId = req.params.userid;
		User.findByIdAndUpdate(userId, {isDisabled: true}, {new: true}).exec((err, data) => {
			if (err) {
				console.log('提示：','数据库查找错误');
				content.tips = '数据库出错了';
				content.code = 'DATABASE_ERROR';
				return res.json(content)
			}
			content.success = true;
			content.code = 'BAN_COUNT';
			content.data.user = data.adminMessage;
			res.json(content)

		})
	} else {
		console.log('提示：','没有id参数');
		content.tips = '请选择一个用户!';
		content.code = 'PARAMETER_ERROR';
		return res.json(content)
	}
};
