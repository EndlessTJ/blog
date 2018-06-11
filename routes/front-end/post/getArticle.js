const Post = require('../../../model/Post');

module.exports = function (req, res) {
	const id = req.params.id;
	const content = {};
	content.section = 'article';
	content.data = {
		article: {}
	};
	content.success = false;
	content.code = '';
	Post.findById(id).exec((err, data) => {
		if (err) {
			console.log(err);
			content.code = 'DATABASE_ERROR';
			return res.json(content)
		}
		let article = {};
		article.title = data.title;
		article.publishData = data.UpdateDate;
		article._id = data._id;
		article.author = data.author;
		article.content = data.content;
		article.prevArticle = '正在开发中';
		article.nextArticle = '正在开发中';
		article.prevLink = '正在开发中';
		article.nextLink = '正在开发中';
		article.tags = ['开发中','开发中'];
		content.data.article = article;
		content.success = true;
		content.code = 'FETCH_DATA';
		return res.json(content)
	});
};