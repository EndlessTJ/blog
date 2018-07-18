const Tag = require('../../../model/Tag');



// http 请求处理
module.exports = function (req, res) {
	const content = {};
	const filter = {};
	content.section = 'addTags';
	content.data = {
		tag: {}
	};
	//将请求数据取出单独储存，避免多次操作req（有大量数据），影响性能
	content.tags = req.body;
	content.tags.CreateDate = new Date();
	content.success = false;
	content.code = '';
	filter.TagName = content.tags.TagName;
	if (!content.tags.TagName) {
		console.log('提示：','body没有数据');
		content.tips = '请正确填写标签名!';
		content.code = 'PARAMETER_ERROR';
		return res.json(content)
	}
	Tag.findOne(filter).exec(function (err, result) {
		if (err) {
			console.log('提示：','数据库查找错误');
			content.tips = '数据库出错了';
			content.code = 'DATABASE_ERROR';
			return res.json(content)
		}
		if (result) {
			console.log('提示：','标签也存在');
			content.tips = '标签已存在';
			content.code = 'REPEAT_TAG';
			return res.json(content)
		} else {
			Tag.create(content.tags, function (err, data) {
				if (err) {
					console.log('数据库出错:',err);
					content.tips = '数据库出错了';
					content.code = 'DATABASE_ERROR';
					return res.json(content);
				} else if (data) {
					content.success = true;
					content.code = 'FETCH_DATA';
					content.data.tag = data;
					res.json(content)
				} else {
					content.code = 'ERROR';
					res.json(content)
				}
			});
		}

	})


};

