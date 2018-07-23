const User = require('../../../model/User');



module.exports = function (req, res) {

	const content = {};
	content.section = 'users_list';
	content.data = {
		users: []
	};
	content.success = false;
	content.code = '';
	User.find((err, data) => {
		if (err) {
			console.log(err);
			content.code = 'DATABASE_ERROR';
			return res.json(content)
		}
		content.data.users = data;
		content.success = true;
		content.code = 'FETCH_DATA';
		return res.json(content)
	})
};
