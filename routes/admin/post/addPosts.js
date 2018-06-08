const Post = require('../../../model/Post');



// http 请求处理
module.exports = function (req, res) {
		const content = {};
		content.section = 'addPost';
		//将请求数据取出单独储存，避免多次操作req（有大量数据），影响性能
		content.post = req.body;
		content.post.CreateDate = new Date();
		content.post.UpdateDate = new Date();

		Post.create(content.post, function (err, data) {
			if (err) {
				console.log('数据库出错:',err)
			} else {
				console.log('返回结果', data);
				res.json(content)
			}
		});

};

