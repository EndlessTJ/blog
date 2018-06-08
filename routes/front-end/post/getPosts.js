const Post = require('../../../model/Post');



module.exports = function (req, res) {

	const content = {};
	content.section = 'post_list';
	content.data = {
		post: []
	};
	content.success = false;
	content.code = '';
	Post.find((err, data) => {
		if (err) {
			console.log(err);
			content.code = 'DATABASE_ERROR';
			return res.json(content)
		}
		data.forEach((value, index) => {
			let brief = {};
			brief.title = value.title;
			brief.brief = value.content.slice(0,200) + '...';
			brief.date = value.UpdateDate;
			brief._id = value._id;
			brief.author = value.author;
			brief.toped = value.topped;
			brief.recommend = value.recommend;
			content.data.post.push(brief)
		});
		content.success = true;
		content.code = 'FETCH_DATA';
		return res.json(content)
	})
};
