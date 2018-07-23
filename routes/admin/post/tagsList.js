const Tags = require('../../../model/Tag');



module.exports = function (req, res) {

	const content = {};
	content.section = 'tags_list';
	content.data = {
		tags: []
	};
	content.success = false;
	content.code = '';
	Tags.find((err, data) => {
		if (err) {
			console.log(err);
			content.code = 'DATABASE_ERROR';
			return res.json(content)
		}
		content.data.tags = data;
		content.success = true;
		content.code = 'FETCH_DATA';
		return res.json(content)
	})
};
