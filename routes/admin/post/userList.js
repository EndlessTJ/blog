const User = require('../../../model/User');



module.exports = function (req, res) {
	const content = {};
	content.section = 'users_list';
	content.data = {
		users: [],
		user: {}
	};
	content.success = false;
	content.code = '';
	if (req.params.userid) {
		const userId = req.params.userid
		User.findById(userId).exec((err, data) => {
			if (err) {
				console.log(err);
				content.code = 'DATABASE_ERROR';
				return res.json(content)
			}
			content.data.user = data.adminMessage;
			content.success = true;
			content.code = 'FETCH_DATA';
			return res.json(content)
		})
	} else {
		User.find().exec((err, data) => {
			if (err) {
				console.log(err);
				content.code = 'DATABASE_ERROR';
				return res.json(content)
			}
			data.forEach((value) => {
				content.data.users.push(value.adminMessage)
			});
			content.success = true;
			content.code = 'FETCH_DATA';
			return res.json(content)
		})
	}
};
