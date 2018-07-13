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
		article.prevArticle = '正在开发中';
		article.nextArticle = '正在开发中';
		article.prevLink = '正在开发中';
		article.nextLink = '正在开发中';
		let newArticle = Object.assign(article, data.postMessage);
		content.data.article = newArticle;
		content.success = true;
		content.code = 'FETCH_DATA';
		return res.json(content)
	});
};