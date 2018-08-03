const Tags = require('../../../model/Tag');



module.exports = function (req, res) {
	const content = {};
	content.section = 'tags_list';
	content.data = {
		tags: [],
		delTag: {}
	};
	content.success = false;
	content.code = '';
	if (req.params.tagsid){
		const tags_id = req.params.tagsid;
		Tags.findByIdAndDelete(tags_id).exec((err, data) => {
			if (err) {
				console.log(err);
				content.code = 'DATABASE_ERROR';
				return res.json(content)
			}
			content.data.delTag = data.tagMessage;
			content.success = true;
			content.code = 'FETCH_DATA';
			return res.json(content)
		})
	} else {
		Tags.find().populate({
			path: 'user',
			select: '_id username'
		}).exec((err, data) => {
			if (err) {
				console.log(err);
				content.code = 'DATABASE_ERROR';
				return res.json(content)
			}
			data.forEach((value) => {
				content.data.tags.push(value.tagMessage)
			});
			content.success = true;
			content.code = 'FETCH_DATA';
			return res.json(content)
		})
	}
};
