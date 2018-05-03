const Post = require('../../../model/Post');



// http 请求处理
module.exports = function (req, res) {
		const content = {};
		const filters = {};
		content.section = 'addPost';
		//将请求数据取出单独储存，避免多次操作req（有大量数据），影响性能
		content.filters = {
			user: req.body
    };
    console.log(content)
    res.json(content)
};

