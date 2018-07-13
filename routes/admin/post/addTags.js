const Tag = require('../../../model/Tag');



// http 请求处理
module.exports = function (req, res) {
	const content = {};
	content.section = 'addTags';
	content.data = {
		tag: {}
	};
	//将请求数据取出单独储存，避免多次操作req（有大量数据），影响性能
	content.tags = req.body;
	content.tags.CreateDate = new Date();
	content.success = false;
	content.code = '';
	Tag.create(content.tags, function (err, data) {
		if (err) {
			content.code = 'DATABASE_ERROR';
			return res.json(content);
			console.log('数据库出错:',err)
		} else {
			content.success = true;
			content.code = 'FETCH_DATA';
			content.data.tag = data;
			res.json(content)
		}
	});

};

