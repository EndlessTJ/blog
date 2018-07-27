const User = require('../../../model/User');



module.exports = function (req, res) {
	const content = {};
	content.section = 'users_list';
	content.data = {
		users: []
	};
	content.success = false;
	content.code = '';
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
};
