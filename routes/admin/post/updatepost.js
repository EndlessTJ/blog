const Post = require('../../../model/Post');



module.exports = function (req, res) {

	const content = {};
	content.section = 'post_list';
	content.data = {
		post: []
	};
	content.success = false;
	content.code = '';
	console.log(req.body)
	res.json(content)
};
