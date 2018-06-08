const Post = require('../../../model/Post');

module.exports = function (req, res) {
	const content = {};
	content.section = 'article';
	content.data = {};
	content.success = false;
	content.code = ''
	console.log(req.params.id)
	res.json(content)
};